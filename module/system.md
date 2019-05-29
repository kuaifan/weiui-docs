# 系统信息

> 需要加载的模块

```js
const weiui = app.requireModule('weiui');
```

## weiui.getStatusBarHeight

> 获取状态栏高度（屏幕像素）

```js
/**
 * @return int
 */
let variable = weiui.getStatusBarHeight()
```

## weiui.getStatusBarHeightPx

> 获取状态栏高度（px单位）

```js
/**
 * @return int
 */
let variable = weiui.getStatusBarHeightPx()
```

## weiui.getNavigationBarHeight

> 获取虚拟键盘高度（屏幕像素）

```js
/**
 * @return int
 */
let variable = weiui.getNavigationBarHeight()
```

## weiui.getNavigationBarHeightPx

> 获取虚拟键盘高度（px单位）

```js
/**
 * @return int
 */
let variable = weiui.getNavigationBarHeightPx()
```

## weiui.getVersion 

> 获取weiui版本号

```js
/**
 * @return int
 */
let variable = weiui.getVersion()
```

## weiui.getVersionName

> 获取weiui版本号名称

```js
/**
 * @return String
 */
let variable = weiui.getVersionName()
```

## weiui.getLocalVersion

> 获取本地软件版本号

```js
/**
 * @return int
 */
let variable = weiui.getLocalVersion()
```

## weiui.getLocalVersionName

> 获取本地软件版本号名称

```js
/**
 * @return String
 */
let variable = weiui.getLocalVersionName()
```

## weiui.compareVersion

> 比较版本号的大小,前者大则返回一个正数,后者大返回一个负数,相等则返回0

```js
/**
 * @param version1      比较的版本1
 * @param version2      比较的版本2
 * 
 * @return int
 */
let variable = weiui.compareVersion(version1, version2)
```

## weiui.getImei

> 获取手机的IMEI（注：Android返回IMEI，iOS返回IFA）

```js
/**
 * @return String
 */
let variable = weiui.getImei()
```

## weiui.getIfa

> 获取手机的IFA（注：Android返回IMEI，iOS返回IFA）

```js
/**
 * @return String
 */
let variable = weiui.getIfa()
```

## weiui.getSDKVersionCode

> 获取设备系统版本号

```js
/**
* @返回 Number
 */
let variable = weiui.getSDKVersionCode()
```

## weiui.getSDKVersionName

> 获取设备系统版本名称

```js
/**
* @返回 String
 */
let variable = weiui.getSDKVersionName()
```

## weiui.isIPhoneXType

> 判断是否iPhone X系列。（含：X(max)、XS(max)、XR(max)）

```js
/**
* @返回 Boolean
 */
let variable = weiui.isIPhoneXType()
```


