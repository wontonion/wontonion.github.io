# 使用swc作为ts编译器

传统的`tsc`也不是不能用，`swc`更快一点，而且基本out-of-box

`pnpm add @swc/cli @swc/core -D`

然后修改一下`nest-cli.json`

``` json
{
    "$schema": "https://json.schemastore.org/nest-cli",
    "collection": "@nestjs/schematics",
    "sourceRoot": "src",
    "compilerOptions": {
        "deleteOutDir": true,
        "builder": "swc",
        "typeCheck": true
    }
}
```