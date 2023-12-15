# module 属性

https://docs.nestjs.com/modules#shared-modules

每个module默认都是shared moudle，只要在自己的`xxx.modules.ts`，把自己expots, 再在调用的module里面imports就可以了。

## module re-export

A module可以在B module里面同时imports和exports，这样其他module在导入B module时也可以使用A module的东西。
测试用例

## global module 全局模块  

添加`@Global()`到`@Module()`上可以使这个module变得全局可用。但这个`@Global()`只能用一次。

## dynamic module 动态模块

