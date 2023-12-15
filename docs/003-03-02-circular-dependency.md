# 使用`fowardRef()`解决循环依赖问题
先创建两个服务
`nest g pr modules/example/services/fifth.service --no-spec --flat`
`nest g pr modules/example/services/sixth.service --no-spec --flat`

然后实现一下
// src/modules/example/services/fifth.service.ts

@Injectable()
export class FifthService {
    constructor(
        @Inject(forwardRef(() => SixthService))
        protected sixth: WrapperType<SixthService>,
    ) {}

    circular() {
        return `循环依赖1${this.sixth.circular()}`;
    }
}

// src/modules/example/services/sixth.service.ts
@Injectable()
export class SixthService {
    constructor(
        @Inject(forwardRef(() => FifthService))
        protected fifth: WrapperType<FifthService>,
    ) {}

    circular() {
        return `循环依赖2`;
    }
}

也可以在module之间这么用，但是不建议这么用
```javascript
@Module({
    imports: [forwardRef(()=>CatsModule)]
})
export class CommonModule {}
```
