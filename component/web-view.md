# web-view

> `<web-view>` 是一个网页容器。

## 子组件

无

## 示例代码

```vue
<template>
    <div class="app">

        <web-view ref="reflectName" class="webview"> </web-view>

    </div>
</template>

<style>
    .app {
        width: 750px;
        flex: 1;
    }

    .webview {
        flex: 1;
    }
</style>

<script>
    export default {
        mounted() {
            this.$refs.reflectName.setUrl('http://weiui.cc');
        }
    };
</script>
```


## 配置参数 `weiui`
>说明：ui自定义；数据格式：对象数据。

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| url |`String`  | 网页地址           | -       |
| content |`String`  | 网页内容           | -       |
| progressbarVisibility |`Boolean`  | 是否显示进度条           | true       |
| scrollEnabled |`Boolean`  | 是否可以滚动           | true       |
| enableApi |`Boolean`  | 开启weiui等原生交互模块，详见：注①           | true       |
| userAgent |`String`  | 自定义浏览器userAgent（保留原有的UA）           | -       |
| customUserAgent |`String`  | 完全自定义浏览器userAgent（去除原有的UA）           | -       |

> 例如：

```vue
<grid
    ref="reflectName"
    :weiui="{
        url: 'http://weiui.cc'
    }"></grid>
```

> 注①：

JS支持调用的原生模块如下：

```js
//综合模块
let weiui = requireModuleJs("weiui");

//路由模块
let navigator = requireModuleJs("navigator");

//导航标题栏模块
let navigationBar = requireModuleJs("navigationBar");

//城市选择器
let citypicker = requireModuleJs("citypicker");

//图片选择模块
let picture = requireModuleJs("picture");

//支付模块
let pay = requireModuleJs("pay");

//浏览器调用方法
let webview = requireModuleJs("webview");
```

例如：

```js
let weiui = requireModuleJs("weiui");
weiui.adDialog("http://..../xxx.png", function(res) {
    weiui.toast("状态：" + res.status);
});
```

- `weiui`：综合模块，如：[weiui.adDialog](../module/adDialog.html)
- `navigator`：[路由模块](../module/navigator.html)
- `navigationBar`：[导航标题栏模块](../navigationBar.html)
- `citypicker`：[城市选择器](../plugin/citypicker.html)
- `picture`：[图片选择模块](../plugin/picture.html)
- `pay`：[支付模块](../plugin/pay.html)
- `webview`：[浏览器调用方法](../component/web-view.html#浏览器调用方法)

#### JS调用原生API示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>demo</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <style type="text/css">
        .scan {
            font-size: 14px;
            margin: 32px;
            text-align: center;
        }
    </style>
    <script type="text/javascript">
        function openScan() {
            let weiui = requireModuleJs("weiui");
            weiui.openScaner(null, function(res) {
                switch (res.status) {
                    case "success":
                        weiui.toast("识别成功：" + res.text);
                        break;

                    case "failed":
                        weiui.toast("识别失败");
                        break;
                }
            });
        }
    </script>
</head>
<body>
    <div class="scan" onclick="openScan()">打开扫一扫</div>
</body>
</html>
```

## 事件回调 `callback`

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }

/**
 * 状态发生改变
 * 返回参数：data = {
                    status:'success',       //状态，注②
                    
                    title: '网页标题',       //仅【status=title】存在
                    url: 'http://....',     //仅【status=url】存在
                    
                    errCode: '',            //仅【status=error】存在
                    errMsg: '',             //仅【status=error】存在
                    errUrl: '',             //仅【status=error】存在
                }
 */
@stateChanged = function(data) { ... }

/**
 * 网页高度发生改变
 * 返回参数：data = {
                    height:100,             //变化的高度
                }
 */
@heightChanged = function(data) { ... }
```

> 注②：

- `start`开始加载
- `success`加载完毕
- `error`加载错误
- `title`标题发生改变
- `url`网页地址发生改变

## 调用方法 `methods`

```js
/**
 * 设置浏览器内容
 * 参数一：详细内容
 */
this.$refs.reflectName.setContent(string);

/**
 * 设置浏览器地址
 * 参数一：地址，如果：http://weiui.cc
 */
this.$refs.reflectName.setUrl(url);

/**
* 是否可以后退
* 
* 回调 result: true|false
 */
this.$refs.reflectName.canGoBack(callback(result));

/**
* 后退并返回是否后退成功
* 
* 回调 result: true|false
 */
this.$refs.reflectName.goBack(callback(result));

/**
* 是否可以前进
* 
* 回调 result: true|false
 */
this.$refs.reflectName.canGoForward(callback(result));

/**
* 前进并返回是否前进成功
* 
* 回调 result: true|false
 */
this.$refs.reflectName.goForward(callback(result));

/**
 * 设置是否显示进度条
 * 参数一：true|false
 */
this.$refs.reflectName.setProgressbarVisibility(true);

/**
 * 设置是否可以滚动
 * 参数一：true|false
 */
this.$refs.reflectName.setScrollEnabled(true);

```

## 浏览器内js调用原生api方法

```js
let webview = requireModuleJs("webview");

/**
 * 设置浏览器内容
 * 参数一：详细内容
 */
webview.setContent(string);

/**
 * 设置浏览器地址
 * 参数一：地址，如果：http://weiui.cc
 */
webview.setUrl(url);

/**
* 是否可以后退
* 
* 回调 result: true|false
 */
webview.canGoBack(callback(result));

/**
* 后退并返回是否后退成功
* 
* 回调 result: true|false
 */
webview.goBack(callback(result));

/**
* 是否可以前进
* 
* 回调 result: true|false
 */
webview.canGoForward(callback(result));

/**
* 前进并返回是否前进成功
* 
* 回调 result: true|false
 */
webview.goForward(callback(result));

/**
 * 设置是否显示进度条
 * 参数一：true|false
 */
webview.setProgressbarVisibility(true);

/**
 * 设置是否可以滚动
 * 参数一：true|false
 */
webview.setScrollEnabled(true);

```