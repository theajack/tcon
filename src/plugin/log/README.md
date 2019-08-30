# tcon-log
### 基于 try catch 捕获所有异常的移动端调试工具的 log 插件

----

1.安装tcon主模块
```
tnpm install @tencent/tcon
```

2.安装tcon-log插件
```
tnpm install @tencent/tcon-log
```

3.使用

```
import tcon from '@tencent/tcon';
//import tcon 主模块之后会生成一个 window.TCon 对象，这主要是提供给通过script标签引入方式使用的，这里可以忽略
import '@tencent/tcon-log';

tcon.init(); // 默认开启tcon调试

tcon.init(true); 
// 表示将根据url参数决定是否开启调试，如果参数中有tcon=1或true，则开启调试
// 开启一次以后 浏览器会记录下状态，除非 使用url参数tcon=0，否则会一直存在
```

----
[TCon仓库](https://git.code.oa.com/tackchen/tcon)
[完整版本README](http://tnpm.oa.com/package/@tencent/tcon)