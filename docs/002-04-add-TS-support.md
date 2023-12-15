# Code with JavaScript program with TypeScript

Especially for front-end framework. NestJs (the back-end framework) support TS originally.  

## add TypeScript to your project module  

pnpm 的install和add作用不同，请自行查阅文档加深理解。
`pnpm install typescript`
`pnpm add typescript`
主要的文件就是这个文件
to generate `tsconfig.json`, run the command below  
`tsc --init`

<!-- introducing tsconfig.json -->

大多数框架都有对于TypeScript的type support，所以可以安装对应的support，比如react
`pnpm add -D @types/react`
`-D` means to add this module for 'Development', not for 'Production'

After you finish coding `.ts` files, you have to compile them to `.js` files. Otherwise, your program will crush since it does not work properly with ts.  

可以直接用`tsc`来对project进行compile，但是更一般的做法，还是在`package.json`中修改`script`来使用更一般的命令，比如

```json
"script":{
    "build": "tsc",
    "start": "node dist/app.js"
}
```

## babel (optional)

Another way to compile TS to JS, we need a compiler, here I choose babel.
