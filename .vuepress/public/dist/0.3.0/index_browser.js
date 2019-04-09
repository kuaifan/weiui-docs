// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=119)}({0:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t){return Array.isArray(t)?t:Array.from(t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s={isNullOrUndefined:function(t){return void 0===t||null===t},isFunction:function(t){return!s.isNullOrUndefined(t)&&"function"==typeof t},isObject:function(t){return!s.isNullOrUndefined(t)&&"object"===(void 0===t?"undefined":a(t))},likeArray:function(t){return!s.isNullOrUndefined(t)&&"number"==typeof t.length},isJson:function(t){return s.isObject(t)&&!s.likeArray(t)},getObject:function(t,e){var n=t;if(0===s.count(t)||0===s.count(e))return"";var r=e.replace(/,/g,"|").replace(/\./g,"|").split("|");return s.each(r,function(t,e){n=void 0===n[e]?"":n[e]}),n},each:function(t,e){var n=void 0,r=void 0;if(s.likeArray(t)){if("number"==typeof t.length)for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(t.hasOwnProperty(r)&&!1===e.call(t[r],r,t[r]))return t;return t},last:function(t){var e=!1;return"object"===(void 0===t?"undefined":a(t))&&t.length>0&&(e=t[t.length-1]),e},delLast:function(t){var e=[];return"object"===(void 0===t?"undefined":a(t))&&t.length>0&&s.each(t,function(n,r){n<t.length-1&&e.push(r)}),e},strExists:function(t,e){return t+="",e+="",-1!==t.indexOf(e)},leftExists:function(t,e){return t+="",e+="",t.substring(0,e.length)===e},rightExists:function(t,e){return t+="",e+="",t.substring(t.length-e.length)===e},getMiddle:function(t,e,n){return t+="",s.ishave(e)&&s.strExists(t,e)&&(t=t.substring(t.indexOf(e)+e.length)),s.ishave(n)&&s.strExists(t,n)&&(t=t.substring(0,t.indexOf(n))),t},subString:function(t,e,n){return t+="",s.ishave(n)||(n=t.length),t.substring(e,n)},randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",n=e.length,r="",i=0;i<t;i++)r+=e.charAt(Math.floor(Math.random()*n));return r},ishave:function(t){return!(null===t||"null"===t||void 0===t||"undefined"===t||!t)},zeroFill:function(t,e,n){if(t+="",t.length>=e)return t;for(var r="",i=0;i<e;i++)r+="0";return n||void 0===n?(r+""+t).substr(-1*e):(t+""+r).substr(0,e)},formatDate:function(t,e){if(""===t&&(t="Y-m-d H:i:s"),void 0===e)e=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(e))e*=1e3;else if(/^(-)?\d{1,13}$/.test(e))e*=1e3;else if(/^(-)?\d{1,14}$/.test(e))e*=100;else if(/^(-)?\d{1,15}$/.test(e))e*=10;else{if(!/^(-)?\d{1,16}$/.test(e))return e;e*=1}var n=new Date(e);return parseInt(n.getFullYear())+""=="NaN"?e:(t=t.replace(/Y/g,n.getFullYear()),t=t.replace(/m/g,s.zeroFill(n.getMonth()+1,2)),t=t.replace(/d/g,s.zeroFill(n.getDate(),2)),t=t.replace(/H/g,s.zeroFill(n.getHours(),2)),t=t.replace(/i/g,s.zeroFill(n.getMinutes(),2)),t=t.replace(/s/g,s.zeroFill(n.getSeconds(),2)))},isDate:function(t){var e=/^(\d{4})-(\d{2})-(\d{2})$/,n=t+"";return""!==n&&!(!e.test(n)&&RegExp.$2<=12&&RegExp.$3<=31)},isMobile:function(t){return/^1(3|4|5|7|8)\d{9}$/.test(t)},formatMobile:function(t){return 0===s.count(t)?"":t.substring(0,3)+"****"+t.substring(t.length-4)},clone:function(t){if("object"!==(void 0===t?"undefined":a(t)))return t;if(null===t)return t;if(s.likeArray(t)){return o(t).slice(0)}return i(t,[])},count:function(t){try{if(void 0===t)return 0;if("number"==typeof t&&(t+=""),"number"==typeof t.length)return t.length;var e=0,n=void 0;for(n in t)e++;return e}catch(t){return 0}},runNum:function(t,e){var n=Number(t);if(n+""=="NaN"&&(n=0),/^[0-9]*[1-9][0-9]*$/.test(e)){n=n.toFixed(e);if(n.indexOf(".")<0){n+=".";for(var r=0;r<e;r++)n+="0"}}return n},formatSeconds:function(t){var e=parseInt(t),n=0,r=0;e>60&&(n=parseInt(e/60),e=parseInt(e%60),n>60&&(r=parseInt(n/60),n=parseInt(n%60)));var i=parseInt(e)+"秒";return n>0&&(i=parseInt(n)+"分"+i),r>0&&(i=parseInt(r)+"小时"+i),i},jsonParse:function(t,e){try{return JSON.parse(t)}catch(t){return e||{}}},jsonStringify:function(t,e){try{return JSON.stringify(t)}catch(t){return e||""}},removerNumberNaN:function(){for(var t=[],e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.forEach(function(e){isNaN(Number(e))||t.push(e)}),t},runMax:function(){return Math.max.apply(Math,r(s.removerNumberNaN.apply(s,arguments)))},runMin:function(){return Math.min.apply(Math,r(s.removerNumberNaN.apply(s,arguments)))},stringConnect:function(){for(var t=null,e="",n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.forEach(function(n){null===t?t=n:n&&(n&&e&&(e+=t),e+=n)}),e},bytesToSize:function(t){if(0===t)return"0 B";var e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(1024));return void 0===e[n]?"0 B":s.runNum(t/Math.pow(1024,n),2)+" "+e[n]}};t.exports=s},105:function(t,e,n){var r,i,o=[];o.push(n(142)),r=n(141);var a=n(144);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/GAOYI/wwwroot/weiui/weiui-template/src/components/headNav.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-c6e7507a",i.style=i.style||{},o.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),t.exports=r},119:function(t,e,n){var r,i,o=[];o.push(n(40)),r=n(15);var a=n(74);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="/Users/GAOYI/wwwroot/weiui/weiui-template/src/pages/index_browser.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-1958a767",i.style=i.style||{},o.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),t.exports=r,t.exports.el="true",new Vue(t.exports)},141:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=weex.requireModule("weiui");e.default={name:"head-nav",props:{title:{type:String,default:""},loading:{type:Boolean,default:!1},back:{type:Boolean,default:!0},backIcon:{type:String,default:"tb-back"},rightTitle:{type:String,default:""},color:{type:String,default:"#FFFFFF"},backgroundColor:{type:String,default:"#3EB4FF"}},methods:{goBack:function(){r.closePage()},rightClick:function(){this.$emit("rightClick")}}}},142:function(t,e){t.exports={nav:{flexDirection:"row",alignItems:"center",width:"750",height:"96"},back:{position:"absolute",left:0,top:0,width:"96",height:"96",lineHeight:"96",textAlign:"center",fontSize:"38",color:"#ffffff"},title:{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},"title-text":{fontSize:"32",fontWeight:"300",maxWidth:"520",textOverflow:"ellipsis",lines:1},"title-load":{width:"42",height:"42",fontSize:"32",marginLeft:"6",content:"'tb-loading-d spin'"},"title-right":{position:"absolute",right:0,top:0,height:"96",lineHeight:"96",textAlign:"center",fontSize:"26",color:"#ffffff",paddingTop:0,paddingRight:"26",paddingBottom:0,paddingLeft:"26"}}},144:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["nav"],style:{backgroundColor:t.backgroundColor}},[n("div",{staticClass:["title"]},[n("text",{staticClass:["title-text"],style:{color:t.color}},[t._v(t._s(t.title))]),t.loading?n("icon",{staticClass:["title-load"],style:{color:t.color}}):t._e()],1),""!==t.rightTitle?n("text",{staticClass:["title-right"],on:{click:t.rightClick}},[t._v(t._s(t.rightTitle))]):t._e(),t.back?n("icon",{staticClass:["back"],attrs:{content:t.backIcon},on:{click:t.goBack}}):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(105),o=function(t){return t&&t.__esModule?t:{default:t}}(i),a=weex.requireModule("weiui");e.default={components:{HeadNav:o.default},data:function(){return{loadIng:1,title:"",url:"",fixedTitle:!1,hideBottomNav:!1,canGoBack:!1,canGoForward:!1}},mounted:function(){},methods:{lifecycle:function(t){},apiReady:function(){var t=this;this.title=(0,r.getObject)(weex.config.params,"title"),this.url=(0,r.getObject)(weex.config.params,"url"),this.fixedTitle=!0===(0,r.getObject)(weex.config.params,"fixedTitle"),this.hideBottomNav=!0===(0,r.getObject)(weex.config.params,"hideBottomNav"),this.$refs.myWebview.setProgressbarVisibility(!1!==(0,r.getObject)(weex.config.params,"progressbarVisibility")),this.$refs.myWebview.setUrl(this.url),setTimeout(function(){t.loadIng--},100)},stateChanged:function(t){switch(t.status){case"start":this.loadIng++;break;case"success":case"error":this.loadIng--,this.canGo();break;case"title":!1===this.fixedTitle&&(this.title=t.title)}},goBack:function(){a.closePage()},webLeft:function(){var t=this;this.$refs.myWebview.goBack(function(e){t.canGo()})},webRight:function(){var t=this;this.$refs.myWebview.goForward(function(e){t.canGo()})},canGo:function(){var t=this;this.$refs.myWebview.canGoBack(function(e){t.canGoBack=e}),this.$refs.myWebview.canGoForward(function(e){t.canGoForward=e})}}}},40:function(t,e){t.exports={app:{flex:1},bottom:{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"750",height:"98",backgroundColor:"#ffffff",borderTopWidth:"1",borderTopStyle:"solid",borderTopColor:"#EAEAEA"},"bottom-icon":{width:"180",height:"98",fontSize:"50",marginLeft:"20",marginRight:"20",color:"#242424"},"bottom-icon-gray":{width:"180",height:"98",fontSize:"50",marginLeft:"20",marginRight:"20",color:"#e4e4e4"}}},74:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["app"],on:{lifecycle:t.lifecycle}},[n("head-nav",{attrs:{title:t.title,loading:t.loadIng>0,backIcon:"tb-close"}}),n("web-view",{ref:"myWebview",staticClass:["app"],on:{ready:t.apiReady,stateChanged:t.stateChanged}}),t.hideBottomNav||!t.canGoBack&&!t.canGoForward?t._e():n("div",{staticClass:["bottom"]},[n("icon",{class:[t.canGoBack?"bottom-icon":"bottom-icon-gray"],attrs:{content:"tb-back"},on:{click:t.webLeft}}),n("icon",{class:[t.canGoForward?"bottom-icon":"bottom-icon-gray"],attrs:{content:"tb-right"},on:{click:t.webRight}})],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});