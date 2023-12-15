# 替换默认的http服务器为fastify以增加响应速度

`pnpm add fastify @nestjs/platform-fastify`
`pnpm remove @nestjs/platform-express @types/express`  

配置完成之后要修改一下`main.ts`的`bootstrap()`

```typescript
async fucntion bootstrap(){
    // utilize fastify driver
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(),{
        // enable CORS
        cors: true,
        // limit logger output 
        logger: ['error', 'warn'],
    });
    
    // global prefix
    app.setGlobalPrefix('api');

    // log after start 
    await app.listen(3100, () =>{
        console.log('api: http://localhost:3100')
    })
}

```