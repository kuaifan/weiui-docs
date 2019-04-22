# 在 weiui 中使用 Vue.js

[[toc]]

> 如果没有特别指示，文章中的 "Vue.js" 或者 "Vue" 都指的是 v2 版本的 Vue。

## 只含有运行时的构建版本

如果你熟悉 Vue.js，你应该知道 Vue.js 有两种构建版本: [**运行时 + 编译器** 与 **只包含运行时**](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)。它们之间的区别在于编译器是否需要能够在运行时编译 `template` 选项。由于运行时构建版本比完整版本的构建版本轻约 30%（Vue 官方估算），为了更好的性能和更小的代码体积，weiui 集成的是运行时版本的 Vue。

具体来说，差异如下：

+ 定义组件时不支持 [`template`](https://cn.vuejs.org/v2/api/#template) 选项。
+ 不支持使用 [`x-templates`](https://cn.vuejs.org/v2/guide/components.html#X-Templates)。
+ 不支持使用 [`Vue.compile`](https://cn.vuejs.org/v2/api/#Vue-compile)。

## 平台的差异

Vue.js 最初是为 Web 平台设计的。虽然可以基于weiui开发原生应用程序，但是仍然存在许多[weiui 与 Web 平台的差异](./difference.html)。

与 Web 平台的主要差异是: 执行环境、DOM、样式和事件。

### 执行环境

weiui 主要用于编写多页的应用程序，每个页面都对应了原生开发中的 *View* 或者 *Activity*，并且保持自己的上下文。即使 weiui 的所有页面都使用的都是同一个 Javascript 引擎的实例(virtual machine)，每个页面是执行环境也是互相隔离的（基于 Sandbox 技术）。

具体来讲，每个页面的 Vue 变量都是不同的实例，即使是写在 Vue 上的“全局”配置（`Vue.config.xxx`）也只会影响 weiui 上的单个页面。

### DOM

因为在 Android 和 iOS 上没有 DOM（Document Object Model），如果你要手动操作和生成 DOM 元素的话可能会遇到一些兼容性问题。在你使用现代前端框架的情况下，操作数据与组件而不是生成的元素是一个比较好的做法。

一些与 DOM 相关的特性，比如 `v-html`，`vm.$el`，`template` 选项，在不同的平台上可能无法获得相同的反应。

准确来说，[`vm.$el`](https://cn.vuejs.org/v2/api/#vm-el)属性类型在web环境下是`HTMLElement`，但是在移动端并没有这个类型。实际上，它是一个由 *weiui 文档对象模型* 定义的特殊数据结构。

### 样式

样式表和 CSS 规则是由 weiui js 框架和原生渲染引擎管理的。要实现完整的 CSS 对象模型（CSSOM：CSS Object Model）并支持所有的 CSS 规则是非常困难的，而且没有这个必要。

出现性能考虑，**weiui 目前只支持单个类选择器，并且只支持 CSS 规则的子集**。详情请参阅 *[通用样式](../weex/styles/common-styles.html)* 与 *[文本样式](../weex/styles/text-styles.html)*。

在 weiui 里， 每一个 Vue 组件的样式都是 *[scoped](https://vue-loader.vuejs.org/zh-cn/features/scoped-css.html)*。

### 事件

目前在 weiui 里不支持事件冒泡和捕获，因此 weiui 原生组件不支持[事件修饰符](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)，例如`.prevent`，` .capture`，`.stop`，` .self` 。

此外，[按键修饰符](https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6)以及[系统修饰键](https://cn.vuejs.org/v2/guide/events.html#%E7%B3%BB%E7%BB%9F%E4%BF%AE%E9%A5%B0%E9%94%AE) 例如 `.enter`，`.tab`，`.ctrl`，`.shift` 在移动端基本没有意义，在 weiui 中也不支持。

## 支持的功能

### 全局配置

> Vue “全局”配置只会影响 weiui 上的单一页面，配置不会在不同的 weiui 页面之间共享。

| Vue 全局配置 | 是否支持 | 说明 |
| -------------- | --------- | ----- |
| [Vue.config.silent](https://cn.vuejs.org/v2/api/#silent)                               | <b class="tag-yes">支持</b> | - |
| [Vue.config.optionMergeStrategies](https://cn.vuejs.org/v2/api/#optionMergeStrategies) | <b class="tag-yes">支持</b> | - |
| [Vue.config.devtools](https://cn.vuejs.org/v2/api/#devtools)                           | <b class="tag-no">不支持</b>   | - |
| [Vue.config.errorHandler](https://cn.vuejs.org/v2/api/#errorHandler)                   | <b class="tag-yes">支持</b> | - |
| [Vue.config.warnHandler](https://cn.vuejs.org/v2/api/#warnHandler)                     | <b class="tag-yes">支持</b> | - |
| [Vue.config.ignoredElements](https://cn.vuejs.org/v2/api/#ignoredElements)             | <b class="tag-yes">支持</b> | 不推荐 |
| [Vue.config.keyCodes](https://cn.vuejs.org/v2/api/#keyCodes)                           | <b class="tag-no">不支持</b>   | - |
| [Vue.config.performance](https://cn.vuejs.org/v2/api/#performance)                     | <b class="tag-no">不支持</b>   | - |
| [Vue.config.productionTip](https://cn.vuejs.org/v2/api/#productionTip)                 | <b class="tag-yes">支持</b> | - |

### 全局 API

| Vue 全局 API | 是否支持 | 说明 |
| -------------- | --------- | ----- |
| [Vue.extend](https://cn.vuejs.org/v2/api/#Vue-extend)       | <b class="tag-yes">支持</b> | - |
| [Vue.nextTick](https://cn.vuejs.org/v2/api/#Vue-nextTick)   | <b class="tag-yes">支持</b> | - |
| [Vue.set](https://cn.vuejs.org/v2/api/#Vue-set)             | <b class="tag-yes">支持</b> | - |
| [Vue.delete](https://cn.vuejs.org/v2/api/#Vue-delete)       | <b class="tag-yes">支持</b> | - |
| [Vue.directive](https://cn.vuejs.org/v2/api/#Vue-directive) | <b class="tag-yes">支持</b> | - |
| [Vue.filter](https://cn.vuejs.org/v2/api/#Vue-filter)       | <b class="tag-yes">支持</b> | - |
| [Vue.component](https://cn.vuejs.org/v2/api/#Vue-component) | <b class="tag-yes">支持</b> | - |
| [Vue.use](https://cn.vuejs.org/v2/api/#Vue-use)             | <b class="tag-yes">支持</b> | - |
| [Vue.mixin](https://cn.vuejs.org/v2/api/#Vue-mixin)         | <b class="tag-yes">支持</b> | - |
| [Vue.version](https://cn.vuejs.org/v2/api/#Vue-version)     | <b class="tag-yes">支持</b> | - |
| [Vue.compile](https://cn.vuejs.org/v2/api/#Vue-compile)     | <b class="tag-no">不支持</b>   | weiui 用的是 [只包含运行时构建](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6) |

### 选项

| Vue 选项 | 是否支持 | 说明 |
| ---------- | --------- | ----- |
| [data](https://cn.vuejs.org/v2/api/#data)                     | <b class="tag-yes">支持</b> | - |
| [props](https://cn.vuejs.org/v2/api/#props)                   | <b class="tag-yes">支持</b> | - |
| [propsData](https://cn.vuejs.org/v2/api/#propsData)           | <b class="tag-yes">支持</b> | - |
| [computed](https://cn.vuejs.org/v2/api/#computed)             | <b class="tag-yes">支持</b> | - |
| [methods](https://cn.vuejs.org/v2/api/#methods)               | <b class="tag-yes">支持</b> | - |
| [watch](https://cn.vuejs.org/v2/api/#watch)                   | <b class="tag-yes">支持</b> | - |
| [el](https://cn.vuejs.org/v2/api/#el)                         | <b class="tag-yes">支持</b> | - |
| [template](https://cn.vuejs.org/v2/api/#template)             | <b class="tag-no">不支持</b>   | weiui 用的是 [只包含运行时构建](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6) |
| [render](https://cn.vuejs.org/v2/api/#render)                 | <b class="tag-yes">支持</b> | 不推荐|
| [renderError](https://cn.vuejs.org/v2/api/#renderError)       | <b class="tag-yes">支持</b> | - |
| [directives](https://cn.vuejs.org/v2/api/#directives)         | <b class="tag-yes">支持</b> | - |
| [filters](https://cn.vuejs.org/v2/api/#filters)               | <b class="tag-yes">支持</b> | - |
| [components](https://cn.vuejs.org/v2/api/#components)         | <b class="tag-yes">支持</b> | - |
| [parent](https://cn.vuejs.org/v2/api/#parent)                 | <b class="tag-yes">支持</b> | 不推荐 |
| [mixins](https://cn.vuejs.org/v2/api/#mixins)                 | <b class="tag-yes">支持</b> | - |
| [extends](https://cn.vuejs.org/v2/api/#extends)               | <b class="tag-yes">支持</b> | - |
| [provide/inject](https://cn.vuejs.org/v2/api/#provide-inject) | <b class="tag-yes">支持</b> | 不推荐 |
| [name](https://cn.vuejs.org/v2/api/#name)                     | <b class="tag-yes">支持</b> | - |
| [delimiters](https://cn.vuejs.org/v2/api/#delimiters)         | <b class="tag-yes">支持</b> | 不推荐 |
| [functional](https://cn.vuejs.org/v2/api/#functional)         | <b class="tag-yes">支持</b> | - |
| [model](https://cn.vuejs.org/v2/api/#model)                   | <b class="tag-yes">支持</b> | - |
| [inheritAttrs](https://cn.vuejs.org/v2/api/#inheritAttrs)     | <b class="tag-yes">支持</b> | - |
| [comments](https://cn.vuejs.org/v2/api/#comments)             | <b class="tag-no">不支持</b>   | - |

### 生命周期钩子

Vue 组件的实例生命周期钩子将在特定的阶段发出，详情请参考 Vue 组件的[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)。

| Vue 生命周期钩子 | 是否支持 | 说明 |
| ------------------ | --------- | ----- |
| [beforeCreate](https://cn.vuejs.org/v2/api/#beforeCreate)   | <b class="tag-yes">支持</b> | - |
| [created](https://cn.vuejs.org/v2/api/#created)             | <b class="tag-yes">支持</b> | - |
| [beforeMount](https://cn.vuejs.org/v2/api/#beforeMount)     | <b class="tag-yes">支持</b> | - |
| [mounted](https://cn.vuejs.org/v2/api/#mounted)             | <b class="tag-yes">支持</b> | 详见下文解释 |
| [beforeUpdate](https://cn.vuejs.org/v2/api/#beforeUpdate)   | <b class="tag-yes">支持</b> | - |
| [updated](https://cn.vuejs.org/v2/api/#updated)             | <b class="tag-yes">支持</b> | - |
| [activated](https://cn.vuejs.org/v2/api/#activated)         | <b class="tag-no">不支持</b>   | 不支持`<keep-alive>` |
| [deactivated](https://cn.vuejs.org/v2/api/#deactivated)     | <b class="tag-no">不支持</b>   | 不支持`<keep-alive>` |
| [beforeDestroy](https://cn.vuejs.org/v2/api/#beforeDestroy) | <b class="tag-yes">支持</b> | - |
| [destroyed](https://cn.vuejs.org/v2/api/#destroyed)         | <b class="tag-yes">支持</b> | - |
| [errorCaptured](https://cn.vuejs.org/v2/api/#errorCaptured) | <b class="tag-yes">支持</b> | - |

::: tip
具体详见[生命周期](./lifecycle.html)篇。
:::

### 实例属性

| Vue 实例属性 | 是否支持 | 说明 |
| --------------------- | --------- | ----- |
| [vm.$data](https://cn.vuejs.org/v2/api/#vm-data)               | <b class="tag-yes">支持</b> | - |
| [vm.$props](https://cn.vuejs.org/v2/api/#vm-props)             | <b class="tag-yes">支持</b> | - |
| [vm.$el](https://cn.vuejs.org/v2/api/#vm-el)                   | <b class="tag-yes">支持</b> | - |
| [vm.$options](https://cn.vuejs.org/v2/api/#vm-options)         | <b class="tag-yes">支持</b> | - |
| [vm.$parent](https://cn.vuejs.org/v2/api/#vm-parent)           | <b class="tag-yes">支持</b> | - |
| [vm.$root](https://cn.vuejs.org/v2/api/#vm-root)               | <b class="tag-yes">支持</b> | - |
| [vm.$children](https://cn.vuejs.org/v2/api/#vm-children)       | <b class="tag-yes">支持</b> | - |
| [vm.$slots](https://cn.vuejs.org/v2/api/#vm-slots)             | <b class="tag-yes">支持</b> | - |
| [vm.$scopedSlots](https://cn.vuejs.org/v2/api/#vm-scopedSlots) | <b class="tag-yes">支持</b> | - |
| [vm.$refs](https://cn.vuejs.org/v2/api/#vm-refs)               | <b class="tag-yes">支持</b> | - |
| [vm.$isServer](https://cn.vuejs.org/v2/api/#vm-isServer)       | <b class="tag-yes">支持</b> | 永远是`false`|
| [vm.$attrs](https://cn.vuejs.org/v2/api/#vm-attrs)             | <b class="tag-yes">支持</b> | - |
| [vm.$listeners](https://cn.vuejs.org/v2/api/#vm-listeners)     | <b class="tag-yes">支持</b> | - |

### 实例方法

| Vue 实例方法 | 是否支持 | 说明 |
| ------------------- | --------- | ----- |
| [vm.$watch()](https://cn.vuejs.org/v2/api/#vm-watch)             | <b class="tag-yes">支持</b> | - |
| [vm.$set()](https://cn.vuejs.org/v2/api/#vm-set)                 | <b class="tag-yes">支持</b> | - |
| [vm.$delete()](https://cn.vuejs.org/v2/api/#vm-delete)           | <b class="tag-yes">支持</b> | - |
| [vm.$on()](https://cn.vuejs.org/v2/api/#vm-on)                   | <b class="tag-yes">支持</b> | - |
| [vm.$once()](https://cn.vuejs.org/v2/api/#vm-once)               | <b class="tag-yes">支持</b> | - |
| [vm.$off()](https://cn.vuejs.org/v2/api/#vm-off)                 | <b class="tag-yes">支持</b> | - |
| [vm.$emit()](https://cn.vuejs.org/v2/api/#vm-emit)               | <b class="tag-yes">支持</b> | - |
| [vm.$mount()](https://cn.vuejs.org/v2/api/#vm-mount)             | <b class="tag-no">不支持</b>   | - |
| [vm.$forceUpdate()](https://cn.vuejs.org/v2/api/#vm-forceUpdate) | <b class="tag-yes">支持</b> | - |
| [vm.$nextTick()](https://cn.vuejs.org/v2/api/#vm-nextTick)       | <b class="tag-yes">支持</b> | - |
| [vm.$destroy()](https://cn.vuejs.org/v2/api/#vm-destroy)         | <b class="tag-yes">支持</b> | - |

### 模板指令

| Vue 指令 | 是否支持 | 说明 |
| ------------- | --------- | ----- |
| [v-text](https://cn.vuejs.org/v2/api/#v-text)       | <b class="tag-yes">支持</b> | - |
| [v-html](https://cn.vuejs.org/v2/api/#v-html)       | <b class="tag-no">不支持</b>   | - |
| [v-show](https://cn.vuejs.org/v2/api/#v-show)       | <b class="tag-no">不支持</b>   | 不支持 `display: none;` |
| [v-if](https://cn.vuejs.org/v2/api/#v-if)           | <b class="tag-yes">支持</b> | - |
| [v-else](https://cn.vuejs.org/v2/api/#v-else)       | <b class="tag-yes">支持</b> | - |
| [v-else-if](https://cn.vuejs.org/v2/api/#v-else-if) | <b class="tag-yes">支持</b> | - |
| [v-for](https://cn.vuejs.org/v2/api/#v-for)         | <b class="tag-yes">支持</b> | - |
| [v-on](https://cn.vuejs.org/v2/api/#v-on)           | <b class="tag-yes">支持</b> | 不支持[事件修饰符](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6) |
| [v-bind](https://cn.vuejs.org/v2/api/#v-bind)       | <b class="tag-yes">支持</b> | - |
| [v-model](https://cn.vuejs.org/v2/api/#v-model)     | <b class="tag-yes">支持</b> | - |
| [v-pre](https://cn.vuejs.org/v2/api/#v-pre)         | <b class="tag-yes">支持</b> | - |
| [v-cloak](https://cn.vuejs.org/v2/api/#v-cloak)     | <b class="tag-no">不支持</b> | 只支持单类名选择器 |
| [v-once](https://cn.vuejs.org/v2/api/#v-once)       | <b class="tag-yes">支持</b> | - |

### 特殊属性

| Vue 特殊属性 | 是否支持 | 说明 |
| --------------------- | --------- | ----- |
| [key](https://cn.vuejs.org/v2/api/#key)               | <b class="tag-yes">支持</b> | - |
| [ref](https://cn.vuejs.org/v2/api/#ref)               | <b class="tag-yes">支持</b> | - |
| [slot](https://cn.vuejs.org/v2/api/#slot)             | <b class="tag-yes">支持</b> | - |
| [slot-scope](https://cn.vuejs.org/v2/api/#slot-scope) | <b class="tag-yes">支持</b> | - |
| [scope](https://cn.vuejs.org/v2/api/#scope)           | <b class="tag-yes">支持</b> | 不推荐 |
| [is](https://cn.vuejs.org/v2/api/#is)                 | <b class="tag-yes">支持</b> | - |

### 内置组件

| Vue 内置组件 | 是否支持 | 说明 |
| ---------------------- | --------- | ----- |
| [component](https://cn.vuejs.org/v2/api/#component)               | <b class="tag-yes">支持</b> | - |
| [transition](https://cn.vuejs.org/v2/api/#transition)             | <b class="tag-no">不支持</b>   | 在移动端 *enter* 与 *leave* 的概念可能有点不同， 并且 weiui 不支持`display: none;` |
| [transition-group](https://cn.vuejs.org/v2/api/#transition-group) | <b class="tag-no">不支持</b>   | 跟 *transition* 一样 |
| [keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)             | <b class="tag-no">不支持</b>   | 移动端的原生组件不能被前端缓存 |
| [slot](https://cn.vuejs.org/v2/api/#slot)                         | <b class="tag-yes">支持</b> | - |