// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=103)}({0:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e){return Array.isArray(e)?e:Array.from(e)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a={isNullOrUndefined:function(e){return void 0===e||null===e},isFunction:function(e){return!a.isNullOrUndefined(e)&&"function"==typeof e},isObject:function(e){return!a.isNullOrUndefined(e)&&"object"===(void 0===e?"undefined":u(e))},likeArray:function(e){return!a.isNullOrUndefined(e)&&"number"==typeof e.length},isJson:function(e){return a.isObject(e)&&!a.likeArray(e)},getObject:function(e,t){var r=e;if(0===a.count(e)||0===a.count(t))return"";var n=t.replace(/,/g,"|").replace(/\./g,"|").split("|");return a.each(n,function(e,t){r=void 0===r[t]?"":r[t]}),r},each:function(e,t){var r=void 0,n=void 0;if(a.likeArray(e)){if("number"==typeof e.length)for(r=0;r<e.length;r++)if(!1===t.call(e[r],r,e[r]))return e}else for(n in e)if(e.hasOwnProperty(n)&&!1===t.call(e[n],n,e[n]))return e;return e},last:function(e){var t=!1;return"object"===(void 0===e?"undefined":u(e))&&e.length>0&&(t=e[e.length-1]),t},delLast:function(e){var t=[];return"object"===(void 0===e?"undefined":u(e))&&e.length>0&&a.each(e,function(r,n){r<e.length-1&&t.push(n)}),t},strExists:function(e,t){return e+="",t+="",-1!==e.indexOf(t)},leftExists:function(e,t){return e+="",t+="",e.substring(0,t.length)===t},rightExists:function(e,t){return e+="",t+="",e.substring(e.length-t.length)===t},getMiddle:function(e,t,r){return e+="",a.ishave(t)&&a.strExists(e,t)&&(e=e.substring(e.indexOf(t)+t.length)),a.ishave(r)&&a.strExists(e,r)&&(e=e.substring(0,e.indexOf(r))),e},subString:function(e,t,r){return e+="",a.ishave(r)||(r=e.length),e.substring(t,r)},randomString:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",r=t.length,n="",i=0;i<e;i++)n+=t.charAt(Math.floor(Math.random()*r));return n},ishave:function(e){return!(null===e||"null"===e||void 0===e||"undefined"===e||!e)},zeroFill:function(e,t,r){if(e+="",e.length>=t)return e;for(var n="",i=0;i<t;i++)n+="0";return r||void 0===r?(n+""+e).substr(-1*t):(e+""+n).substr(0,t)},formatDate:function(e,t){if(""===e&&(e="Y-m-d H:i:s"),void 0===t)t=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(t))t*=1e3;else if(/^(-)?\d{1,13}$/.test(t))t*=1e3;else if(/^(-)?\d{1,14}$/.test(t))t*=100;else if(/^(-)?\d{1,15}$/.test(t))t*=10;else{if(!/^(-)?\d{1,16}$/.test(t))return t;t*=1}var r=new Date(t);return parseInt(r.getFullYear())+""=="NaN"?t:(e=e.replace(/Y/g,r.getFullYear()),e=e.replace(/m/g,a.zeroFill(r.getMonth()+1,2)),e=e.replace(/d/g,a.zeroFill(r.getDate(),2)),e=e.replace(/H/g,a.zeroFill(r.getHours(),2)),e=e.replace(/i/g,a.zeroFill(r.getMinutes(),2)),e=e.replace(/s/g,a.zeroFill(r.getSeconds(),2)))},isDate:function(e){var t=/^(\d{4})-(\d{2})-(\d{2})$/,r=e+"";return""!==r&&!(!t.test(r)&&RegExp.$2<=12&&RegExp.$3<=31)},isMobile:function(e){return/^1(3|4|5|7|8)\d{9}$/.test(e)},formatMobile:function(e){return 0===a.count(e)?"":e.substring(0,3)+"****"+e.substring(e.length-4)},clone:function(e){if("object"!==(void 0===e?"undefined":u(e)))return e;if(null===e)return e;if(a.likeArray(e)){return o(e).slice(0)}return i(e,[])},count:function(e){try{if(void 0===e)return 0;if("number"==typeof e&&(e+=""),"number"==typeof e.length)return e.length;var t=0,r=void 0;for(r in e)t++;return t}catch(e){return 0}},runNum:function(e,t){var r=Number(e);if(r+""=="NaN"&&(r=0),/^[0-9]*[1-9][0-9]*$/.test(t)){r=r.toFixed(t);if(r.indexOf(".")<0){r+=".";for(var n=0;n<t;n++)r+="0"}}return r},formatSeconds:function(e){var t=parseInt(e),r=0,n=0;t>60&&(r=parseInt(t/60),t=parseInt(t%60),r>60&&(n=parseInt(r/60),r=parseInt(r%60)));var i=parseInt(t)+"秒";return r>0&&(i=parseInt(r)+"分"+i),n>0&&(i=parseInt(n)+"小时"+i),i},jsonParse:function(e,t){try{return JSON.parse(e)}catch(e){return t||{}}},jsonStringify:function(e,t){try{return JSON.stringify(e)}catch(e){return t||""}},removerNumberNaN:function(){for(var e=[],t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach(function(t){isNaN(Number(t))||e.push(t)}),e},runMax:function(){return Math.max.apply(Math,n(a.removerNumberNaN.apply(a,arguments)))},runMin:function(){return Math.min.apply(Math,n(a.removerNumberNaN.apply(a,arguments)))},stringConnect:function(){for(var e=null,t="",r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return n.forEach(function(r){null===e?e=r:r&&(r&&t&&(t+=e),t+=r)}),t},bytesToSize:function(e){if(0===e)return"0 B";var t=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(e)/Math.log(1024));return void 0===t[r]?"0 B":a.runNum(e/Math.pow(1024,r),2)+" "+t[r]}};e.exports=a},1:function(e,t,r){"use strict";var n=r(0),i=app.requireModule("weiui"),o={jshome:"https://weiui.app/dist/0.4.6/",openViewCode:function(e){o.openViewUrl("https://weiui.app/"+e+".html")},openViewUrl:function(e){i.openPage({url:o.jshome+"index_browser.js",pageType:"weex",statusBarColor:"#3EB4FF",params:{title:"WEIUI",url:e}})},checkVersion:function(e){return"function"==typeof i.getVersion&&(0,n.runNum)(i.getVersion())>=(0,n.runNum)(e)}};e.exports=o},103:function(e,t,r){var n,i,o=[];o.push(r(61)),n=r(2);var u=r(94);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/GAOYI/wwwroot/weiui/weiui-template/src/pages/component_banner.vue",i.render=u.render,i.staticRenderFns=u.staticRenderFns,i._scopeId="data-v-8d9e6b9c",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=app.requireModule("weiui");t.default={data:function(){return{imageList:[{src:"https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"},{src:"https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"},{src:"https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"}]}},methods:{viewCode:function(e){(0,n.openViewCode)(e)},itemClick:function(e){i.toast("点击"+(e.position+1)+"项")}}}},61:function(e,t){e.exports={app:{width:"750",flex:1,backgroundColor:"#ffffff"},navbar:{width:"750",height:"100"},title:{fontSize:"28",color:"#ffffff"},iconr:{width:"100",height:"100",color:"#ffffff"},banner:{width:"750",height:"420"},"banner-frame":{width:"750",height:"420",position:"relative"},"banner-image":{width:"750",height:"420"}}},94:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["app"]},[r("navbar",{staticClass:["navbar"]},[r("navbar-item",{attrs:{type:"back"}}),r("navbar-item",{attrs:{type:"title"}},[r("text",{staticClass:["title"]},[e._v("轮播控件")])]),r("navbar-item",{attrs:{type:"right"},on:{click:function(t){e.viewCode("component/banner")}}},[r("icon",{staticClass:["iconr"],attrs:{content:"md-code-working"}})],1)],1),r("banner",{staticClass:["banner"],on:{itemClick:e.itemClick}},e._l(e.imageList,function(e){return r("div",{staticClass:["banner-frame"]},[r("image",{staticClass:["banner-image"],attrs:{resize:"cover",src:e.src}})])}))],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});