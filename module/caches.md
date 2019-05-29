# 缓存管理

> 需要加载的模块

```js
const weiui = app.requireModule('weiui');
```

## weiui.getCacheSizeDir

> 获取内部缓存目录大小

```js
/**
 * @param callback  回调事件
 */
weiui.getCacheSizeDir(callback(result))
```

> callback 回调`result`说明

```js
{
    size: 1012  //缓存大小，单位：字节B
}
```

## weiui.clearCacheDir

> 清空内部缓存目录

```js
/**
 * @param callback  回调事件
 */
weiui.clearCacheDir(callback(result))
```

> callback 回调`result`说明

```js
{
    success: 12,    //成功清除多少个
    error: 0,       //清除失败多少个
}
```

## weiui.getCacheSizeFiles

> 获取内部文件目录大小

```js
/**
 * @param callback  回调事件
 */
weiui.getCacheSizeFiles(callback(result))
```

> callback 回调`result`说明

```js
{
    size: 1012  //缓存大小，单位：字节B
}
```

## weiui.clearCacheFiles 

> 清空内部文件目录

```js
/**
 * @param callback  回调事件
 */
weiui.clearCacheFiles(callback(result))
```

> callback 回调`result`说明

```js
{
    success: 12,    //成功清除多少个
    error: 0,       //清除失败多少个
}
```
## weiui.getCacheSizeDbs

> 获取内部数据库目录大小

```js
/**
 * @param callback  回调事件
 */
weiui.getCacheSizeDbs(callback(result))
```

> callback 回调`result`说明

```js
{
    size: 1012  //缓存大小，单位：字节B
}
```

## weiui.clearCacheDbs

> 清空内部数据库目录

```js
/**
 * @param callback  回调事件
 */
weiui.clearCacheDbs(callback(result))
```

> callback 回调`result`说明

```js
{
    success: 12,    //成功清除多少个
    error: 0,       //清除失败多少个
}
```


