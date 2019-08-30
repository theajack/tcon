# tcon-loader
### 基于 try catch 捕获所有异常的移动端调试工具的 webpack-loader

----

### 1 使用
tcon-loader 会将您指定的需要调试的js代码中的适当语句使用try catch包裹，
如果没有使用tcon-loader，则无法监听到 uncatch error，只能劫持 console方法和window.onerror 事件

安装tcon-loader
```
tnpm install @tencent/tcon-loader --save-dev
```
在您项目地webpack配置中加入 loader:'@tencent/tcon-loader'
```
...
{
	test: /\.js$/,
	loader: '@tencent/tcon-loader',
	include: [
		path.resolve(__dirname, '您的需要调试的开发目录，一般为src')
	],
	exclude: /node_modules/
}
...
```
注：
1.若是某些文件您不希望使用loader处理，请在js文件顶部加上 ```/* tcon-disable */```
2.请指定include目录，并指定 exclude: /node_modules/ 否则构建时间可能会很长
3.如有使用babel-loader，建议在babel-loader之前加上 tcon-loader
4.建议只在开发和测试环境使用，在打包发布生产环境时，建议移除 tcon-loader，以为这回生成很多的try catch语句，可能会引起性能损耗

### 2 配置参数
使用 options 参数可以为tcon-loader指定一些自定义配置，以满足不同的性能和精度需求。

```
...
{
	test: /\.js$/,
	loader: '@tencent/tcon-loader',
	options:{
		Return:false,
		Declaration:false,
		traverse:false
	}
	include: [
		path.resolve(__dirname, '您的需要调试的开发目录，一般为src')
	],
	exclude: /node_modules/
}
...
```

其中配置参数信息如下：

| 属性        | 类型   |  默认值  |  描述  |
| :----:   | :----:  | :----:  |  :----:  |
| traverse |Boolean|true|当匹配到某个语句并用try catch包裹之后，是否继续对AST继续向下遍历|
| Expression |Boolean|true|是否匹配 表达式 语句|
| Return |Boolean|false|是否匹配 return 语句|
| Throw |Boolean|false|是否匹配 throw 语句|
| Declaration |Boolean|false|是否匹配 变量声明语句 语句|
| context |Boolean|false|try catch接获异常之后是否打印上下文环境|
| trace |Boolean|false|使用console.trace()打印调用栈|

----
[TCon仓库](https://git.code.oa.com/tackchen/tcon)
[完整版本README](http://tnpm.oa.com/package/@tencent/tcon)