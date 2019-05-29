// { "framework": "Vue"} 
const app=weex;
!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=135)}({0:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t){return Array.isArray(t)?t:Array.from(t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a={isNullOrUndefined:function(t){return void 0===t||null===t},isFunction:function(t){return!a.isNullOrUndefined(t)&&"function"==typeof t},isObject:function(t){return!a.isNullOrUndefined(t)&&"object"===(void 0===t?"undefined":s(t))},likeArray:function(t){return!a.isNullOrUndefined(t)&&"number"==typeof t.length},isJson:function(t){return a.isObject(t)&&!a.likeArray(t)},getObject:function(t,e){var n=t;if(0===a.count(t)||0===a.count(e))return"";var r=e.replace(/,/g,"|").replace(/\./g,"|").split("|");return a.each(r,function(t,e){n=void 0===n[e]?"":n[e]}),n},each:function(t,e){var n=void 0,r=void 0;if(a.likeArray(t)){if("number"==typeof t.length)for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(t.hasOwnProperty(r)&&!1===e.call(t[r],r,t[r]))return t;return t},last:function(t){var e=!1;return"object"===(void 0===t?"undefined":s(t))&&t.length>0&&(e=t[t.length-1]),e},delLast:function(t){var e=[];return"object"===(void 0===t?"undefined":s(t))&&t.length>0&&a.each(t,function(n,r){n<t.length-1&&e.push(r)}),e},strExists:function(t,e){return t+="",e+="",-1!==t.indexOf(e)},leftExists:function(t,e){return t+="",e+="",t.substring(0,e.length)===e},rightExists:function(t,e){return t+="",e+="",t.substring(t.length-e.length)===e},getMiddle:function(t,e,n){return t+="",a.ishave(e)&&a.strExists(t,e)&&(t=t.substring(t.indexOf(e)+e.length)),a.ishave(n)&&a.strExists(t,n)&&(t=t.substring(0,t.indexOf(n))),t},subString:function(t,e,n){return t+="",a.ishave(n)||(n=t.length),t.substring(e,n)},randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",n=e.length,r="",i=0;i<t;i++)r+=e.charAt(Math.floor(Math.random()*n));return r},ishave:function(t){return!(null===t||"null"===t||void 0===t||"undefined"===t||!t)},zeroFill:function(t,e,n){if(t+="",t.length>=e)return t;for(var r="",i=0;i<e;i++)r+="0";return n||void 0===n?(r+""+t).substr(-1*e):(t+""+r).substr(0,e)},formatDate:function(t,e){if(""===t&&(t="Y-m-d H:i:s"),void 0===e)e=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(e))e*=1e3;else if(/^(-)?\d{1,13}$/.test(e))e*=1e3;else if(/^(-)?\d{1,14}$/.test(e))e*=100;else if(/^(-)?\d{1,15}$/.test(e))e*=10;else{if(!/^(-)?\d{1,16}$/.test(e))return e;e*=1}var n=new Date(e);return parseInt(n.getFullYear())+""=="NaN"?e:(t=t.replace(/Y/g,n.getFullYear()),t=t.replace(/m/g,a.zeroFill(n.getMonth()+1,2)),t=t.replace(/d/g,a.zeroFill(n.getDate(),2)),t=t.replace(/H/g,a.zeroFill(n.getHours(),2)),t=t.replace(/i/g,a.zeroFill(n.getMinutes(),2)),t=t.replace(/s/g,a.zeroFill(n.getSeconds(),2)))},isDate:function(t){var e=/^(\d{4})-(\d{2})-(\d{2})$/,n=t+"";return""!==n&&!(!e.test(n)&&RegExp.$2<=12&&RegExp.$3<=31)},isMobile:function(t){return/^1(3|4|5|7|8)\d{9}$/.test(t)},formatMobile:function(t){return 0===a.count(t)?"":t.substring(0,3)+"****"+t.substring(t.length-4)},clone:function(t){if("object"!==(void 0===t?"undefined":s(t)))return t;if(null===t)return t;if(a.likeArray(t)){return o(t).slice(0)}return i(t,[])},count:function(t){try{if(void 0===t)return 0;if("number"==typeof t&&(t+=""),"number"==typeof t.length)return t.length;var e=0,n=void 0;for(n in t)e++;return e}catch(t){return 0}},runNum:function(t,e){var n=Number(t);if(n+""=="NaN"&&(n=0),/^[0-9]*[1-9][0-9]*$/.test(e)){n=n.toFixed(e);if(n.indexOf(".")<0){n+=".";for(var r=0;r<e;r++)n+="0"}}return n},formatSeconds:function(t){var e=parseInt(t),n=0,r=0;e>60&&(n=parseInt(e/60),e=parseInt(e%60),n>60&&(r=parseInt(n/60),n=parseInt(n%60)));var i=parseInt(e)+"秒";return n>0&&(i=parseInt(n)+"分"+i),r>0&&(i=parseInt(r)+"小时"+i),i},jsonParse:function(t,e){try{return JSON.parse(t)}catch(t){return e||{}}},jsonStringify:function(t,e){try{return JSON.stringify(t)}catch(t){return e||""}},removerNumberNaN:function(){for(var t=[],e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.forEach(function(e){isNaN(Number(e))||t.push(e)}),t},runMax:function(){return Math.max.apply(Math,r(a.removerNumberNaN.apply(a,arguments)))},runMin:function(){return Math.min.apply(Math,r(a.removerNumberNaN.apply(a,arguments)))},stringConnect:function(){for(var t=null,e="",n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.forEach(function(n){null===t?t=n:n&&(n&&e&&(e+=t),e+=n)}),e},bytesToSize:function(t){if(0===t)return"0 B";var e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(1024));return void 0===e[n]?"0 B":a.runNum(t/Math.pow(1024,n),2)+" "+e[n]}};t.exports=a},1:function(t,e,n){"use strict";var r=n(0),i=app.requireModule("weiui"),o={jshome:"https://weiui.app/dist/0.4.0/",openViewCode:function(t){o.openViewUrl("https://weiui.app/"+t+".html")},openViewUrl:function(t){i.openPage({url:o.jshome+"index_browser.js",pageType:"weex",statusBarColor:"#3EB4FF",params:{title:"WEIUI",url:t}})},checkVersion:function(t){return"function"==typeof i.getVersion&&(0,r.runNum)(i.getVersion())>=(0,r.runNum)(t)}};t.exports=o},135:function(t,e,n){var r,i,o=[];o.push(n(60)),r=n(34);var s=n(93);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/GAOYI/wwwroot/weiui/weiui-template/src/pages/plugin_websocket.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-8ac4b682",i.style=i.style||{},o.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),t.exports=r,t.exports.el="true",new Vue(t.exports)},34:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=app.requireModule("weiui"),o=app.requireModule("websocket");e.default={data:function(){return{url:"ws://echo.websocket.org",msgLists:[],sendText:""}},mounted:function(){if(void 0===o)return void i.alert({title:"温馨提示",message:"检测到未安装websocket插件，安装详细请登录https://weiui.app/"},function(){i.closePage()});this.connect()},methods:{viewCode:function(t){(0,r.openViewCode)(t)},connect:function(){var t=this,e=i.loading({title:"正在连接，请稍后..."});o.connect(this.url,function(n){switch(n.status){case"open":i.loadingClose(e),t.addMsg({type:"left",msg:"请问您有什么问题？"});break;case"message":t.addMsg({type:"left",msg:n.msg});break;case"closed":case"failure":case"error":i.loadingClose(e),i.confirm({title:"温馨提示",message:"连接关闭，点击确定重新连接？",buttons:["取消","确定"]},function(e){"click"===e.status&&("确定"===e.title?t.connect():i.closePage())})}})},addMsg:function(t){var e=this;this.msgLists.push(t),setTimeout(function(){e.$refs.myLists.smoothScrollToPosition(-1)},300)},send:function(){var t=this.sendText.trim();if(""===t)return void i.toast("请输入要发送的内容！");this.sendText="",this.addMsg({type:"right",msg:t}),o.send(t),i.keyboardHide()},returnSend:function(t){"send"===t.returnKeyType&&this.send(t.value)},startAjax:function(){var t=this;this.status="",this.content="",i.ajax({url:this.url,dataType:"text"},function(e){""===t.status?t.status+=e.status:t.status+=" > "+e.status,"success"===e.status&&(t.content=e.result)})}}}},60:function(t,e){t.exports={app:{width:"750",flex:1},navbar:{width:"750",height:"100"},title:{fontSize:"28",color:"#ffffff"},iconr:{width:"100",height:"100",color:"#ffffff"},lists:{flex:1,paddingBottom:"25",backgroundColor:"#e8e8e8"},left:{width:"700",flexDirection:"row",marginTop:"25",marginLeft:"25",marginRight:"25"},right:{width:"700",flexDirection:"row",justifyContent:"flex-end",marginTop:"25",marginLeft:"25",marginRight:"25"},photo:{width:"90",height:"90",backgroundColor:"#ffffff",borderRadius:"45"},detail:{marginLeft:"24",marginRight:"24",justifyContent:"center",paddingTop:"24",paddingRight:"24",paddingBottom:"24",paddingLeft:"24",borderRadius:"4",backgroundColor:"#ffffff"},"detail-right":{backgroundColor:"#7CBF57"},text:{maxWidth:"520",fontSize:"28"},bottom:{width:"750",height:"98",flexDirection:"row",alignItems:"center"},"bottom-input":{width:"570",height:"80",lineHeight:"80",marginLeft:"20",fontSize:"28",paddingLeft:"6",paddingRight:"6"},"bottom-line":{position:"absolute",top:"89",left:"20",width:"570",height:"1",backgroundColor:"#dddddd"},"bottom-button":{width:"130",height:"70",marginLeft:"10",marginRight:"20",lineHeight:"70",fontSize:"24",textAlign:"center",color:"#ffffff",backgroundColor:"#00B4FF",borderRadius:"6"},"bottom-button-null":{width:"130",height:"70",marginLeft:"10",marginRight:"20",lineHeight:"70",fontSize:"24",textAlign:"center",color:"#ffffff",backgroundColor:"#e4e4e4",borderRadius:"6"}}},93:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app"]},[n("navbar",{staticClass:["navbar"]},[n("navbar-item",{attrs:{type:"back"}}),n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["title"]},[t._v("即时通讯")])]),n("navbar-item",{attrs:{type:"right"},on:{click:function(e){t.viewCode("plugin/websocket")}}},[n("icon",{staticClass:["iconr"],attrs:{content:"md-code-working"}})],1)],1),n("scroll-view",{ref:"myLists",staticClass:["lists"]},t._l(t.msgLists,function(e,r){return n("div",{key:r},["left"===e.type?n("div",{staticClass:["left"]},[n("image",{staticClass:["photo"],attrs:{resize:"cover",src:"https://weiui.app/assets/grid/grid_7.jpg"}}),n("div",{staticClass:["detail"]},[n("text",{staticClass:["text"]},[t._v(t._s(e.msg))])])]):n("div",{staticClass:["right"]},[n("div",{staticClass:["detail","detail-right"]},[n("text",{staticClass:["text"]},[t._v(t._s(e.msg))])]),n("image",{staticClass:["photo"],attrs:{resize:"cover",src:"https://weiui.app/assets/grid/grid_10.jpg"}})])])})),n("div",{staticClass:["bottom"]},[n("input",{staticClass:["bottom-input"],attrs:{hideDoneButton:!0,upriseOffset:9,placeholder:"输入要发送的内容",returnKeyType:"send",value:t.sendText},on:{return:t.returnSend,input:function(e){t.sendText=e.target.attr.value}}}),n("text",{class:[""===t.sendText.trim()?"bottom-button-null":"bottom-button"],on:{click:t.send}},[t._v("发送")]),n("div",{staticClass:["bottom-line"]})])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});