(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{333:function(e,a,t){"use strict";t.r(a);var s=t(2),n=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建项目")]),e._v(" "),t("blockquote",[t("p",[e._v("执行此节之前，请确保"),t("code",[e._v("必须的环境")]),e._v("全都安装完成。")])]),e._v(" "),t("h2",{attrs:{id:"生成开发模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成开发模板","aria-hidden":"true"}},[e._v("#")]),e._v(" 生成开发模板")]),e._v(" "),t("p",[e._v("使用 weiui-cli 的 create 命令来创建模版工程：（"),t("code",[e._v("projectName")]),e._v("为你要创建的项目名称）")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("weiui create projectName\n")])])]),t("p",[e._v("脚手架会自动从 github 上拉取最新的 "),t("a",{attrs:{href:"https://github.com/kuaifan/weiui-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("weiui-template 开发模板"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("然后进入开发目录，执行 "),t("code",[e._v("npm install")]),e._v(" 加载"),t("code",[e._v("node_modules")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" projectName\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])])]),t("h2",{attrs:{id:"ios-运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-运行项目","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS 运行项目")]),e._v(" "),t("p",[e._v("确保您已经安装完成 "),t("router-link",{attrs:{to:"/guide/env.html"}},[e._v("iOS 所需环境")]),e._v("。")],1),e._v(" "),t("p",[t("code",[e._v("cd")]),e._v("到iOS工程目录"),t("code",[e._v("platforms/ios/WeexWeiui")]),e._v(" 执行"),t("code",[e._v("pod install")]),e._v("命令来拉取iOS工程的依赖")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("pod "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),t("p",[e._v("首次执行时间会稍长，命令执行完毕后找到当前目录下 "),t("code",[e._v("WeexWeiui.xcworkspace")]),e._v(" 文件，双击即可唤起XCode打开 iOS 工程；")]),e._v(" "),t("p",[e._v("然后在XCode选择相应的模拟器（比如iPhone xs），点击"),t("code",[e._v("▶")]),e._v("按钮来运行项目。")]),e._v(" "),t("h2",{attrs:{id:"android-运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-运行项目","aria-hidden":"true"}},[e._v("#")]),e._v(" Android 运行项目")]),e._v(" "),t("p",[e._v("确保您已经安装完成 "),t("router-link",{attrs:{to:"/guide/env.html"}},[e._v("Android 所需环境")]),e._v("。")],1),e._v(" "),t("p",[e._v("1.打开"),t("code",[e._v("AndroidStudio")]),e._v("软件然后"),t("code",[e._v("Open")]),e._v("Android工程目录"),t("code",[e._v("platforms/android/WeexWeiui")]),e._v("。\n2.待项目构建完成，点击 AndroidStudio 上方工具栏的 "),t("code",[e._v("Run")]),e._v("，即可运行项目。")]),e._v(" "),t("blockquote",[t("p",[e._v("第一次打开 AndroidStuido 时，由于本地环境未配置好，AndroidStuido 会提示错误，按照 IDE 提示，点击 "),t("code",[e._v("sync")]),e._v(" 同步一下，大部分环境问题都可以解决。")])]),e._v(" "),t("p",[e._v("注：")]),e._v(" "),t("ul",[t("li",[e._v("可能您第一次构建的时间太长您也可以尝试"),t("a",{attrs:{href:"https://www.jianshu.com/p/ba8189146a6b",target:"_blank",rel:"noopener noreferrer"}},[e._v("解决 Android Studio 第一次导入项目太慢"),t("OutboundLink")],1),e._v("。实在不行就请耐心等待 Android Studio 自己构建完成吧")])]),e._v(" "),t("h2",{attrs:{id:"模板目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板目录结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 模板目录结构")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("├── config                  // webpack相关配置\n├── demo                    // 演示文件\n├── dist                    // 静态资源生成目录\n├── node_modules            // 依赖\n├── platforms               // 平台基础代码\n│   ├── android\n│   └── ios\n├── plugins                 // 平台插件程序\n├── src                     // 开发路径\n├── statics                 // 静态资源\n├── web                     // vue访问目录\n├── weiui.config.js         // 客户端相关配置\n└── package.json            // "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" 项目及依赖说明\n")])])]),t("p",[e._v("首次打开我们已经为您内置了由一些 "),t("code",[e._v("demo")]),e._v("，您可以看到相关的页面，下面在开发之前还需要进行一些相关的配置和调试的学习。")])])},[],!1,null,null,null);a.default=n.exports}}]);