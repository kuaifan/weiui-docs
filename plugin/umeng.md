# 友盟模块

- 这里主要说的是友盟的推送模块，统计模块已包含在里面无需另外配置。

> 首次使用请执行

```bash
weiui plugin add umeng
```

> 需要加载的模块

```js
const umeng = weex.requireModule('umeng');
```

## 参数配置

请查阅[配置相关](../guide/config.html)

## 获取token 

> `umeng.getToken` 获取友盟token

```js
/**
* @返回 {"status":"success", "msg":"", "token":"友盟token"}
 */
let variable = umeng.getToken()
``` 

## 点击通知事件

> `umeng.setNotificationClickHandler` 自定义通知打开动作（点击通知事件）

```js
/**
 * @param callback  回调事件
 */
umeng.setNotificationClickHandler(callback(result))
```

#### callback 回调`result`说明

```js
{
　　"status":"click",         //为 “click” 时就是点击通知的动作了
　　 
　　"display_type":"notification",
　　"msg_id":"uurztln152223767161010",
　　"body":{
　　　　"after_open":"go_app",
　　　　"play_lights":"false",
　　　　"ticker":"测试标题1",
　　　　"play_vibrate":"false",
　　　　"text":"测试描述22222",
　　　　"title":"测试标题1",
　　　　"play_sound":"true"
　　},
　　"random_min":0,
}
```

#### 简单示例

```js
umeng.setNotificationClickHandler(function(result) {
    //......
});
```

