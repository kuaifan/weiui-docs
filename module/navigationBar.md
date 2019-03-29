# 导航标题栏

注：此模块与组件[navbar](../component/navbar.html)无关联。

> 需要加载的模块

```js
const navigationBar = weex.requireModule('navigationBar');
```

## navigationBar.setTitle

* 设置页面标题

```js
/**
 * @param params    详细参数
 * @param callback  点击标题回调事件，result回调内容为params传入参数
 */
navigationBar.setTitle({params}, callback(result))
```

> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| title | `String` | √ | 标题 | - |
| titleColor | `String` | - | 标题字体颜色 | #232323 |
| titleSize | `Float` | - | 标题字体大小 | 32.0 |
| subtitle | `String` | - | 副标题 | - |
| subtitleColor | `String` | - | 副标题字体颜色 | #232323 |
| subtitleSize | `Float` | - | 副标题字体大小 | 24.0 |
| backgroundColor | `String` | - | 标题栏背景颜色 | #3EB4FF |


## navigationBar.setLeftItem

* 设置标题栏左边按钮

```js
/**
 * @param params    详细参数
 * @param callback  点击按钮回调事件，result回调内容为params传入参数
 */
navigationBar.setLeftItem({params}, callback(result))
```

> params 参数说明

| 属性名 | 类型 | 必须 | 描述 | 默认值 |
| --- | --- | :-: | --- | --- |
| title | `String` | - | 按钮名称 | - |
| titleColor | `String` | - | 按钮字体颜色 | #232323 |
| titleSize | `Float` | - | 按钮字体大小 | 28.0 |
| icon | `String` | - | 图标，注① | - |
| iconColor | `String` | - | 图标字体颜色 | #232323 |
| iconSize | `Float` | - | 图标字体大小（图标大小） | 28.0 |

> 注①：

- 支持字体图标，如：`md-add`、`ios-cube`，更多图标代码详见<a href="../assets/icon/index.html" target="_blank">weiui所有图标</a>。
- 支持远程图片地址，如：`https://weiui.app/app/demo.png`，此时不支持`iconColor`参数。

> 简单示例

```js
const navigationBar = weex.requireModule('navigationBar');
//示例①: 纯文字
navigationBar.setLeftItem({
    title: '按钮1',
}, function(result) {
    //......
});

//示例②: 图标+文字
navigationBar.setLeftItem({
    icon: 'tb-back',
    title: '返回',
}, function(result) {
    //......
});

//示例③: 多个按钮模式
weiui.openPage([{
    icon: 'tb-back',
    title: '返回',
}, {
   title: '按钮2',
}], function(result) {
    //......
});
```

## navigationBar.setRightItem

* 设置标题栏右边按钮，调用参数同见`navigationBar.setLeftItem`。

## navigationBar.show

* 手动显示标题栏，使用`navigationBar.setTitle`方法时自动显示标题栏。

## navigationBar.hide

* 手动隐藏标题栏。

