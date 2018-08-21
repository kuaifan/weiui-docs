# 城市选择器

> 需要加载的模块

```js
const weiui_citypicker = weex.requireModule('weiui_citypicker');
```

## 示例代码

```vue
<template>
    <div class="app">

        <text class="button" @click="citypicker">选择城市</text>
        <text>{{province}} {{city}} {{area}}</text>

    </div>
</template>

<style>
    .app {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .button {
        text-align: center;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
        color: #ffffff;
        background-color: #00B4FF;
    }
</style>

<script>
    const weiui_citypicker = weex.requireModule('weiui_citypicker');

    export default {
        data() {
            return {
                province: '浙江省',
                city: '杭州',
                area: '市辖区'
            }
        },
        methods: {
            citypicker() {
                weiui_citypicker.select({
                    province: this.province,
                    city: this.city,
                    area: this.area
                }, (result) => {
                    this.province = result.province;
                    this.city = result.city;
                    this.area = result.area;
                });
            }
        }
    };
</script>
```
## 预览效果

![](media/ezgif-4-82378e086c.png)

