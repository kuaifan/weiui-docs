// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=120)}({0:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function o(t){return Array.isArray(t)?t:Array.from(t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s={isNullOrUndefined:function(t){return void 0===t||null===t},isFunction:function(t){return!s.isNullOrUndefined(t)&&"function"==typeof t},isObject:function(t){return!s.isNullOrUndefined(t)&&"object"===(void 0===t?"undefined":l(t))},likeArray:function(t){return!s.isNullOrUndefined(t)&&"number"==typeof t.length},isJson:function(t){return s.isObject(t)&&!s.likeArray(t)},getObject:function(t,e){var n=t;if(0===s.count(t)||0===s.count(e))return"";var i=e.replace(/,/g,"|").replace(/\./g,"|").split("|");return s.each(i,function(t,e){n=void 0===n[e]?"":n[e]}),n},each:function(t,e){var n=void 0,i=void 0;if(s.likeArray(t)){if("number"==typeof t.length)for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(t.hasOwnProperty(i)&&!1===e.call(t[i],i,t[i]))return t;return t},last:function(t){var e=!1;return"object"===(void 0===t?"undefined":l(t))&&t.length>0&&(e=t[t.length-1]),e},delLast:function(t){var e=[];return"object"===(void 0===t?"undefined":l(t))&&t.length>0&&s.each(t,function(n,i){n<t.length-1&&e.push(i)}),e},strExists:function(t,e){return t+="",e+="",-1!==t.indexOf(e)},leftExists:function(t,e){return t+="",e+="",t.substring(0,e.length)===e},rightExists:function(t,e){return t+="",e+="",t.substring(t.length-e.length)===e},getMiddle:function(t,e,n){return t+="",s.ishave(e)&&s.strExists(t,e)&&(t=t.substring(t.indexOf(e)+e.length)),s.ishave(n)&&s.strExists(t,n)&&(t=t.substring(0,t.indexOf(n))),t},subString:function(t,e,n){return t+="",s.ishave(n)||(n=t.length),t.substring(e,n)},randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",n=e.length,i="",r=0;r<t;r++)i+=e.charAt(Math.floor(Math.random()*n));return i},ishave:function(t){return!(null===t||"null"===t||void 0===t||"undefined"===t||!t)},zeroFill:function(t,e,n){if(t+="",t.length>=e)return t;for(var i="",r=0;r<e;r++)i+="0";return n||void 0===n?(i+""+t).substr(-1*e):(t+""+i).substr(0,e)},formatDate:function(t,e){if(""===t&&(t="Y-m-d H:i:s"),void 0===e)e=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(e))e*=1e3;else if(/^(-)?\d{1,13}$/.test(e))e*=1e3;else if(/^(-)?\d{1,14}$/.test(e))e*=100;else if(/^(-)?\d{1,15}$/.test(e))e*=10;else{if(!/^(-)?\d{1,16}$/.test(e))return e;e*=1}var n=new Date(e);return parseInt(n.getFullYear())+""=="NaN"?e:(t=t.replace(/Y/g,n.getFullYear()),t=t.replace(/m/g,s.zeroFill(n.getMonth()+1,2)),t=t.replace(/d/g,s.zeroFill(n.getDate(),2)),t=t.replace(/H/g,s.zeroFill(n.getHours(),2)),t=t.replace(/i/g,s.zeroFill(n.getMinutes(),2)),t=t.replace(/s/g,s.zeroFill(n.getSeconds(),2)))},isDate:function(t){var e=/^(\d{4})-(\d{2})-(\d{2})$/,n=t+"";return""!==n&&!(!e.test(n)&&RegExp.$2<=12&&RegExp.$3<=31)},isMobile:function(t){return/^1(3|4|5|7|8)\d{9}$/.test(t)},formatMobile:function(t){return 0===s.count(t)?"":t.substring(0,3)+"****"+t.substring(t.length-4)},clone:function(t){if("object"!==(void 0===t?"undefined":l(t)))return t;if(null===t)return t;if(s.likeArray(t)){return o(t).slice(0)}return r(t,[])},count:function(t){try{if(void 0===t)return 0;if("number"==typeof t&&(t+=""),"number"==typeof t.length)return t.length;var e=0,n=void 0;for(n in t)e++;return e}catch(t){return 0}},runNum:function(t,e){var n=Number(t);if(n+""=="NaN"&&(n=0),/^[0-9]*[1-9][0-9]*$/.test(e)){n=n.toFixed(e);if(n.indexOf(".")<0){n+=".";for(var i=0;i<e;i++)n+="0"}}return n},formatSeconds:function(t){var e=parseInt(t),n=0,i=0;e>60&&(n=parseInt(e/60),e=parseInt(e%60),n>60&&(i=parseInt(n/60),n=parseInt(n%60)));var r=parseInt(e)+"秒";return n>0&&(r=parseInt(n)+"分"+r),i>0&&(r=parseInt(i)+"小时"+r),r},jsonParse:function(t,e){try{return JSON.parse(t)}catch(t){return e||{}}},jsonStringify:function(t,e){try{return JSON.stringify(t)}catch(t){return e||""}},removerNumberNaN:function(){for(var t=[],e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return n.forEach(function(e){isNaN(Number(e))||t.push(e)}),t},runMax:function(){return Math.max.apply(Math,i(s.removerNumberNaN.apply(s,arguments)))},runMin:function(){return Math.min.apply(Math,i(s.removerNumberNaN.apply(s,arguments)))},stringConnect:function(){for(var t=null,e="",n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return i.forEach(function(n){null===t?t=n:n&&(n&&e&&(e+=t),e+=n)}),e},bytesToSize:function(t){if(0===t)return"0 B";var e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(1024));return void 0===e[n]?"0 B":s.runNum(t/Math.pow(1024,n),2)+" "+e[n]}};t.exports=s},1:function(t,e,n){"use strict";var i=n(0),r=weex.requireModule("weiui"),o={jshome:"https://weiui.app/dist/0.3.0/",openViewCode:function(t){o.openViewUrl("https://weiui.app/"+t+".html")},openViewUrl:function(t){r.openPage({url:o.jshome+"index_browser.js",pageType:"weex",statusBarColor:"#3EB4FF",params:{title:"WEIUI",url:t}})},checkVersion:function(t){return"function"==typeof r.getVersion&&(0,i.runNum)(r.getVersion())>=(0,i.runNum)(t)}};t.exports=o},120:function(t,e,n){var i,r,o=[];o.push(n(45)),i=n(16);var l=n(79);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/GAOYI/wwwroot/weiui/weiui-template/src/pages/index_expand.vue",r.render=l.render,r.staticRenderFns=l.staticRenderFns,r._scopeId="data-v-3b3045ab",r.style=r.style||{},o.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,o),t.exports=i,t.exports.el="true",new Vue(t.exports)},16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);weex.requireModule("weiui");e.default={data:function(){return{expand_module:[{title:"APP相关",title_en:"appUtils",icon:"logo-ionic",url:"appUtils"},{title:"设备相关",title_en:"deviceUtils",icon:"logo-ionic",url:"deviceUtils"},{title:"网络相关",title_en:"networkUtils",icon:"logo-ionic",url:"networkUtils"},{title:"权限相关",title_en:"permissionUtils",icon:"logo-ionic",url:"permissionUtils"},{title:"手机相关",title_en:"phoneUtils",icon:"logo-ionic",url:"phoneUtils"},{title:"进程相关",title_en:"processUtils",icon:"logo-ionic",url:"processUtils"},{title:"屏幕相关",title_en:"screenUtils",icon:"logo-ionic",url:"screenUtils"},{title:"时间相关",title_en:"timeUtils",icon:"logo-ionic",url:"timeUtils"},{title:"摄像相关",title_en:"cameraTool",icon:"logo-ionic",url:"cameraTool"},{title:"定位相关",title_en:"locationTool",icon:"logo-ionic",url:"locationTool"},{title:"震动相关",title_en:"vibrateTool",icon:"logo-ionic",url:"vibrateTool"}]}},methods:{expandModuleClick:function(t){(0,i.openViewCode)("module/expand/"+t)}}}},45:function(t,e){t.exports={app:{flex:1},navbar:{width:"750",height:"100"},title:{fontSize:"28",color:"#ffffff"},list:{width:"750",flex:1},"list-title-box":{flexDirection:"row",alignItems:"center"},"list-title":{paddingTop:"36",paddingRight:"8",paddingBottom:"24",paddingLeft:"24",fontSize:"28",color:"#757575"},"list-subtitle":{paddingTop:"12",fontSize:"22",color:"#bbbbbb"},"list-item":{flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:"100",flex:1,paddingLeft:"20",paddingRight:"20",borderTopWidth:"1",borderTopColor:"#e8e8e8",borderTopStyle:"solid"},"list-item-left":{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",height:"100",flex:1},"list-left-icon":{width:"60",height:"60",color:"#3EB4FF"},"list-left-title":{color:"#242424",paddingLeft:"12",width:"380",fontSize:"26",textOverflow:"ellipsis",lines:1},"list-right-title":{color:"#a2a2a2",paddingRight:"3",fontSize:"22",textOverflow:"ellipsis",lines:1},"list-right-icon":{width:"40",height:"40",fontSize:"22",color:"#C9C9CE"},"list-item-right":{flexDirection:"row",alignItems:"center",justifyContent:"flex-end",height:"100"}}},79:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app"]},[n("navbar",{staticClass:["navbar"]},[n("navbar-item",{attrs:{type:"back"}}),n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["title"]},[t._v("拓展模块")])])],1),n("scroller",{staticClass:["list"]},[t._m(0),t._l(t.expand_module,function(e,i){return n("div",{key:i,staticClass:["list-item"],on:{click:function(n){t.expandModuleClick(e.url)}}},[n("div",{staticClass:["list-item-left"]},[n("icon",{staticClass:["list-left-icon"],attrs:{weiui:{content:e.icon}}}),n("text",{staticClass:["list-left-title"]},[t._v(t._s(e.title))])],1),n("div",{staticClass:["list-item-right"]},[n("text",{staticClass:["list-right-title"]},[t._v(t._s(e.title_en))]),n("icon",{staticClass:["list-right-icon"],attrs:{weiui:{content:"tb-right"}}})],1)])})],2)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["list-title-box"]},[n("text",{staticClass:["list-title"]},[t._v("Expand Module")]),n("text",{staticClass:["list-subtitle"]},[t._v("（暂不支持ios）")])])}]},t.exports.render._withStripped=!0}});