# 数据储存

> 需要加载的模块

```js
const weiui = weex.requireModule('weiui');
```

## weiui.setCachesString

> 保存数据信息

```js
/**
 * @param key       数据键名
 * @param value     数据值
 * @param expired   有效时间（单位：秒），0：不限制有效时间
 */
weiui.setCachesString(key, value, expired)
```

## weiui.getCachesString

> 获取数据信息

```js
/**
 * @param key           数据键名
 * @param defaultVal    无数据时返回值
 * 
 * @return String
 */
let variable = weiui.getCachesString(key, defaultVal)
```

## weiui.setVariate

> 设置全局变量

```js
/**
 * @param key       数据键名
 * @param value     数据值
 */
weiui.setVariate(key, value)
```

## weiui.getVariate

> 获取全局变量

```js
/**
 * @param key           数据键名
 * @param defaultVal    无数据时返回值
 * 
 * @return String
 */
let variable = weiui.getVariate(key, defaultVal)
```

