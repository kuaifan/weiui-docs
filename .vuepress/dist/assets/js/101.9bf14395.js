(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{322:function(t,e,v){"use strict";v.r(e);var _=v(2),r=Object(_.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"手势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手势","aria-hidden":"true"}},[t._v("#")]),t._v(" 手势 "),v("Badge",{attrs:{type:"warning",text:"该功能属于实验性功能"}})],1),t._v(" "),v("p",[t._v("weiui 封装了原生的触摸事件以提供手势系统。使用手势类似于在 weiui 中使用事件，只需在节点上监听手势即可。")]),t._v(" "),v("h2",{attrs:{id:"手势类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手势类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 手势类型")]),t._v(" "),v("p",[t._v("目前，仅支持以下四种手势类型：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("touch: 当触摸到一个点，移动或从触摸面移开时触发 "),v("code",[t._v("touch")]),t._v(" 手势。触摸手势很精准，它会返回所有详细的事件信息。所以，监听 "),v("code",[t._v("touch")]),t._v(" 手势可能很慢，即使只移动一丁点也需要处理大量事件。有三种类型的 "),v("code",[t._v("touch")]),t._v(" 手势：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("type")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("touchstart")])]),t._v(" "),v("td",[t._v("将在触摸到触摸面上时触发")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("touchmove")])]),t._v(" "),v("td",[t._v("将在触摸点在触摸面移动时被触发")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("touchend")])]),t._v(" "),v("td",[t._v("将在从触摸面离开时被触发")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("stopPropagation")]),t._v(" "),v("Badge",{attrs:{type:"info",text:"v0.18+"}})],1),t._v(" "),v("td",[t._v("每个 touch 事件都会被传递过来, 可控制 touch 事件是否冒泡（返回 true）或者停止（返回 false）；用于解决事件冲突或者自定义手势")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1rGU6n7voK1RjSZFNXXcxMVXa-251-282.gif",alt:""}})]),t._v(" "),v("p",[v("a",{attrs:{href:"http://dotwe.org/vue/3f03a4f64fd7e04db82bd42b555346a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("试一下"),v("OutboundLink")],1)])])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Pan："),v("code",[t._v("pan")]),t._v(" 手势也会返回触摸点在触摸面的移动信息，有点类似于 "),v("code",[t._v("touch")]),t._v(" 手势。但是 "),v("code",[t._v("pan")]),t._v(" 手势只会采样收集部分事件信息因此比 "),v("code",[t._v("touch")]),t._v(" 事件要快得多，当然精准性差于 "),v("code",[t._v("touch")]),t._v("。"),v("code",[t._v("pan")]),t._v(" 也有三种类型的手势，这些手势的意义与 "),v("code",[t._v("touch")]),t._v("s 完全一样：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("type")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("panstart")])]),t._v(" "),v("td",[t._v("pan 开始")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("panmove")])]),t._v(" "),v("td",[t._v("pan 移动事件")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("panend")])]),t._v(" "),v("td",[t._v("pan 结束事件")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("horizontalpan")]),t._v(" "),v("Badge",{attrs:{type:"info",text:"v0.10+"}})],1),t._v(" "),v("td",[t._v("手势的 "),v("code",[t._v("start/move/end")]),t._v(" 状态保存在 "),v("code",[t._v("state")]),t._v(" 特性中。目前该手势在 Android 下会与 click 事件冲突")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("verticalpan")]),t._v(" "),v("Badge",{attrs:{type:"info",text:"v0.10+"}})],1),t._v(" "),v("td",[t._v("手势的 "),v("code",[t._v("start/move/end")]),t._v(" 状态保存在 "),v("code",[t._v("state")]),t._v(" 特性中。目前该手势在 Android 下会与 click 事件冲突")])])])])]),t._v(" "),v("li",[v("p",[t._v("Swipe: "),v("code",[t._v("swipe")]),t._v(" 将会在用户在屏幕上滑动时触发，一次连续的滑动只会触发一次 "),v("code",[t._v("swipe")]),t._v(" 手势。")]),t._v(" "),v("p",[v("a",{attrs:{href:"http://dotwe.org/vue/2693655847d890fe96160cc7a955040b",target:"_blank",rel:"noopener noreferrer"}},[t._v("试一下"),v("OutboundLink")],1)])]),t._v(" "),v("li",[v("p",[t._v("LongPress: "),v("code",[t._v("LongPress")]),t._v("将会在触摸点连续保持 500 ms 以上时触发")]),t._v(" "),v("p",[v("a",{attrs:{href:"http://dotwe.org/vue/a077a3cff49b1098f38349fd70f92de9",target:"_blank",rel:"noopener noreferrer"}},[t._v("试一下"),v("OutboundLink")],1)])])]),t._v(" "),v("p",[v("code",[t._v("touch")]),t._v(" 和 "),v("code",[t._v("pan")]),t._v(" 非常接近，它们的特点可以总结成这样：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("type")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("Touch")])]),t._v(" "),v("td",[t._v("完整信息，精准、很慢")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("Pan")])]),t._v(" "),v("td",[t._v("抽样信息，很快，不够精准")])])])]),t._v(" "),v("p",[t._v("开发者可以根据自己的情况选择合适的手势。")]),t._v(" "),v("h2",{attrs:{id:"属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),v("p",[t._v("以下属性可以在手势的回调中使用：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("direction")]),t._v(": 仅在 "),v("code",[t._v("swipe")]),t._v(" 手势中存在，返回滑动方向，返回值可能为 "),v("code",[t._v("up")]),t._v(", "),v("code",[t._v("left")]),t._v(", "),v("code",[t._v("bottom")]),t._v(", "),v("code",[t._v("right")])])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("changedTouches")]),t._v(": 一个数组，包含了当前手势的触摸点的运动轨迹")])]),t._v(" "),v("h3",{attrs:{id:"changedtouches"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#changedtouches","aria-hidden":"true"}},[t._v("#")]),t._v(" changedTouches")]),t._v(" "),v("p",[v("code",[t._v("changedTouches")]),t._v(" 是一个数组，其子元素中包含以下属性：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("key")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("identifier")])]),t._v(" "),v("td",[t._v("触摸点的唯一标识符")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pageX")])]),t._v(" "),v("td",[t._v("触摸点相对于文档左侧边缘的 X 轴坐标")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pageY")])]),t._v(" "),v("td",[t._v("触摸点相对于文档顶部边缘的 Y 轴坐标")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("screenX")])]),t._v(" "),v("td",[t._v("触摸点相对于屏幕左侧边缘的 X 轴坐标")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("screenY")])]),t._v(" "),v("td",[t._v("触摸点相对于屏幕顶部边缘的 Y 轴坐标")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("force")])]),t._v(" "),v("td",[t._v("屏幕收到的按压力度，值的范围为 0~1")])])])]),t._v(" "),v("div",{staticClass:"warning custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("force 属性目前在支持 forceTouch iOS 设备才支持, iPhone 6s 及更新的 iOS 设备")])]),t._v(" "),v("h2",{attrs:{id:"约束"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#约束","aria-hidden":"true"}},[t._v("#")]),t._v(" 约束")]),t._v(" "),v("p",[t._v("目前，由于会触发大量事件冲突，weiui Android 还不支持在滚动类型的元素上监听手势，例如 "),v("code",[t._v("scroller")]),t._v(", "),v("code",[t._v("list")]),t._v(" 和 "),v("code",[t._v("webview")]),t._v(" 这三个组件。")]),t._v(" "),v("h2",{attrs:{id:"demo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://dotwe.org/vue/3f03a4f64fd7e04db82bd42b555346a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Touch"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"http://dotwe.org/vue/2693655847d890fe96160cc7a955040b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swipe"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"http://dotwe.org/vue/a077a3cff49b1098f38349fd70f92de9",target:"_blank",rel:"noopener noreferrer"}},[t._v("LongPress"),v("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=r.exports}}]);