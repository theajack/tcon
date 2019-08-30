编辑器优化：
    1.撤销 重做
    2.字母键盘, 优化输入框和选择面板 切换闪动问题
    3.最近使用列表 localstorage记录
    4.上下翻执行历史 localstorage记录

log 优化：
    console.table
    console.time
    console.timeEnd
    log 分类显示 [✓ 19/8/17]
    设置 是否展示copy
    objectViewer 优化:
        添加 __proto__
        解决复杂结构循环导致的性能和死循环的可能，设想：设置一个最大遍历深度 [✓ 19/8/19]
        打印多个变量显示优化 [✓ 19/8/19]
    json 展开的view左右可滑动

tcon-loader 优化
    赋值语句 var a=x [✓ 19/8/19]
    return 语句 return a.x.x() [✓ 19/8/19]
    throw 语句 throw new Error(111) [✓ 19/8/19]
    增加配置参数 是否深度遍历 选择启用转换何种类型的语句 [✓ 19/8/19]


键盘 [✓ 19/8/23]
长按输入 [✓ 19/8/23]
删除 [✓ 19/8/23]
键盘输入 [✓ 19/8/23]
切换主题 [✓ 19/8/23]

tab 的反面
长按输入会导致按钮一致active的bug 是由于手机端长按会触发选择
输入框滑动之后再点击光标位置会不对
渲染代码加颜色

上色比较麻烦的两个bug
1.字符串不包含字符串本身 比如 ''+'' 会被全部匹配 [done 19/8/27]
2.macth 共享一个字符 比如 var var var 中间的 var 不会被匹配 []


自动 publish 有问题
版本 和 npm tnpm包名自动化注入
