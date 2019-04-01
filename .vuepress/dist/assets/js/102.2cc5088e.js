(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{375:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"modal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modal","aria-hidden":"true"}},[t._v("#")]),t._v(" modal")]),t._v(" "),s("p",[s("code",[t._v("modal")]),t._v(" 模块提供了以下展示消息框的 API："),s("code",[t._v("toast")]),t._v("、"),s("code",[t._v("alert")]),t._v("、"),s("code",[t._v("confirm")]),t._v(" 和 "),s("code",[t._v("prompt")]),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h2",{attrs:{id:"toast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toast","aria-hidden":"true"}},[t._v("#")]),t._v(" toast")]),t._v(" "),s("p",[s("code",[t._v("toast()")]),t._v(" 会在一个小浮层里展示关于某个操作的简单反馈。例如，在邮件发送前离开邮件编辑界面，可以触发一个“草稿已保存”的 toast，告知用户以后可以继续编辑。toast 会在显示一段时间之后自动消失。")]),t._v(" "),s("h4",{attrs:{id:"toast-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toast-options","aria-hidden":"true"}},[t._v("#")]),t._v(" toast(options)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@options")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("message")])]),t._v(", string, 展示的内容.")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("duration")])]),t._v(", number, 持续时间（以秒为单位）")])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("Android: 如果时间长度大于3s，将使用一个被称为"),s("strong",[t._v("LONG")]),t._v("的系统变量，否则使用"),s("strong",[t._v("SHORT")]),t._v("这个系统变量")]),t._v(" "),s("li",[t._v("iOS: 持续的时间与duration相同")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is a toast'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"alert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alert","aria-hidden":"true"}},[t._v("#")]),t._v(" alert")]),t._v(" "),s("p",[t._v("警告框经常用于确保用户可以得到某些信息。当警告框出现后，用户需要点击确定按钮才能继续进行操作。")]),t._v(" "),s("h4",{attrs:{id:"alert-options-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alert-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" alert(options, callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@options")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("message")])]),t._v(", string，警告框内显示的文字信息")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("okTitle")])]),t._v(", string，确认按钮上显示的文字信息")])])]),t._v(" "),s("li",[s("strong",[t._v("@callback")]),t._v(", function，用户操作完成后的回调")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is a alert'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  okTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'确认'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alert callback'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"confirm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#confirm","aria-hidden":"true"}},[t._v("#")]),t._v(" confirm")]),t._v(" "),s("p",[t._v("确认框用于使用户可以验证或者接受某些信息。当确认框出现后，用户需要点击确定或者取消按钮才能继续进行操作。")]),t._v(" "),s("h4",{attrs:{id:"confirm-options-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#confirm-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" confirm(options, callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@options")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("message")])]),t._v(", string，警告框内显示的文字信息")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("okTitle")])]),t._v(", string，确认按钮上显示的文字信息")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("cancelTitle")])]),t._v(", string，取消按钮上显示的文字信息")])])]),t._v(" "),s("li",[s("strong",[t._v("@callback")]),t._v(", function，用户操作完成后的回调，参数是按下按钮上的文字信息\n"),s("ul",[s("li",[s("strong",[s("code",[t._v("result")])]),t._v(", string, 用户按下的按钮文字信息")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Do you confirm ?'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'confirm callback'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"prompt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prompt","aria-hidden":"true"}},[t._v("#")]),t._v(" prompt")]),t._v(" "),s("p",[t._v("提示框经常用于提示用户在进入页面前输入某个值。当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操作。")]),t._v(" "),s("h4",{attrs:{id:"prompt-options-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prompt-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" prompt(options, callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@options")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("message")])]),t._v(", string，警告框内显示的文字信息")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("okTitle")])]),t._v(", string，确认按钮上显示的文字信息")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("cancelTitle")])]),t._v(", string，取消按钮上显示的文字信息")])])]),t._v(" "),s("li",[s("strong",[t._v("@callback")]),t._v(", function，用户操作完成后的回调"),s("ul",[s("li",[s("code",[t._v("res.result")]),t._v("：用户按下的按钮上的文字信息")]),s("li",[s("code",[t._v("res.data")]),t._v("：用户输入的文字信息")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prompt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is a prompt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prompt callback'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/a7dddfb24edb72be947fc4eec3803f1d",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=r.exports}}]);