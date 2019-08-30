# TCon
### 基于 try catch 捕获所有异常的移动端调试工具
这是TCon及关联项目源码和调试环境项目

----
#### 1. 目录结构
#### 2. 运行调试
#### 3. 打包构建
----
# 1.目录结构

```
- dist 【构建发布目录】
- - - - pulgin 【构建完成的插件目录】
- loader 【tcon-loader 源码目录】
- npm 【npm目录】
- public 【webpack-dev-server 运行目录】
- src 【tcon与插件源码、运行调试代码的目录】
- - - - plugin 【插件目录】
- - - - tcon 【tcon源码】
- - - - main.js 【webpack 入口文件】
- tnpm 【tnpm目录】
```

# 2.运行调试

```npm start```: 启动 webpack-dev-server 运行调试

# 3.打包构建

```npm build:log```: 打包log插件，log插件会被打包到 dist/plugin 目录下

```npm build:plugin```: 打包所有插件

```npm build:code```: 打包tconCode.js，这是对js语句改造的库，也就是增加try catch

```npm build:all```: 打包所有源码

```npm build:npm```: 发布到npm和tnpm目录下

