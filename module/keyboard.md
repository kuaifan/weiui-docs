# 键盘功能

> 需要加载的模块

```js
const weiui = app.requireModule('weiui');
```

## weiui.keyboardHide

> 动态隐藏软键盘

```js
weiui.keyboardHide()
```

## weiui.keyboardStatus

> 判断软键盘是否可见

```js
/**
* @参数一      固定值
* 
* @返回 true|false
 */
let variable = weiui.keyboardStatus()
```