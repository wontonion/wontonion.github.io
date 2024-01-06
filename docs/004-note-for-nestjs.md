# chapter 4

 Active Record and Data Mapper

两种模式是什么，有什么区别
`https://typeorm.io/active-record-data-mapper#what-is-the-active-record-pattern`

## 混用两种patterns

why？

how？  

如何混用两种patterns？
也就是技能用Active Record，也能用Data Mapper

原理：

1. 设置自定义decorator
2. 把自定义的decorator添加到repository头上
3. 给module中添加一个forRepository()，用于生成repository。如果没有自定义decorator，就返回原始的decorator；如果有自定义decorator，就进行返回自定义的repository

code:  

1. 设置自定义decorator（如何创建自定义decorator）
1.1.  先设置一个常量用于标识自定义repository

```typescript
// src/modules/database/constants.ts
export const CUSTOM_REPOSITORY_METADATA = 'CUSTOM_REPOSITORY_METADATA';
```  

1.2 然后自定义一个decorator用于创建自定义repository

```typescript
// src/modules/database/decorators/repository.decorator.ts
export const CustomRepository = <T>(entity: ObjectType<T>): ClassDecorator =>
SetMetadata(CUSTOM_REPOSITORY_METADATA, entity);

// src/modules/database/decorators/index.ts
export * from './repository.decorator';
```  

2. 把自定义的decorator添加到repository头上，这样就已经创建好了自定义的repository(自定义decorator的使用方法)
其实只是extends一下加个decorator

```typescript
// src/modules/content/repositories/post.repository.ts
@CustomRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
    buildBaseQB() {
        return this.createQueryBuilder('post');
    }
}

// src/modules/content/repositories/index.ts
export * from './post.repository';
```

1. 给module中添加一个forRepository()，用于生成repository。
其实最重要的是这一步，如果没有这步，

```typescript
// src/modules/database/database.module.ts

@Module({})
export class DatabaseModule {
    ...
    static forRepository<T extends Type<any>>(
        repositories: T[],
        dataSourceName?: string,
    ): DynamicModule {
        const providers: Provider[] = [];

        for (const Repo of repositories) {
            const entity = Reflect.getMetadata(CUSTOM_REPOSITORY_METADATA, Repo);

            if (!entity) {
                continue;
            }

            providers.push({
                inject: [getDataSourceToken(dataSourceName)],
                provide: Repo,
                useFactory: (dataSource: DataSource): InstanceType<typeof Repo> => {
                    const base = dataSource.getRepository<ObjectType<any>>(entity);
                    return new Repo(base.target, base.manager, base.queryRunner);
                },
            });
        }

        return {
            exports: providers,
            module: DatabaseModule,
            providers,
        };
    }
}
```

        
        
什么时候混用这两种patterns？

- 是所有时候都用吗？

一般的数据端操作流程：

1. entity
2. repository
3. subscriber (if needed)
4. DTO  and validation
5. provider and service
6. controller
7. register above things in business logic
8. import Appmoudle

防注入和subscriber
其实subscriber也是相当于一种provider，和AOP是同一个思路


分页查询器





# chapter 5 

# chapter 6

@JoinTable和@JoinColumn