# 路由

> 需要加载的模块

```js
const navigator = weex.requireModule('navigator');
```

## navigator.push

* 载入（打开）新`Weex Js页面` 或 载入（打开）新`Web页面`

* 此模块与`weiui.openPage`一致，只是调用名称不同，方便与weex官网一致。

```js
/**
 * @param params    详细参数
 * @param callback  回调事件
 */
navigator.push({params}, callback(result))
```

> params 参数说明、callback 回调说明

详细使用说明见[weiui.openPage](/module/newPage?id=weiuiopenpage)。



## navigator.pop

* 弹出（关闭）页面

* 此模块与`weiui.closePage`基本一致，多了回调功能。

```js
/**
 * @param params    详细参数
 * @param callback  回调事件
 */
navigator.pop({params}, callback(result))
```

> params 参数说明

详细使用说明见[weiui.closePage](/module/newPage?id=weiuiclosepage)

> callback 回调说明

回调与`navigator.push`的回调一致。

