// { "framework": "Vue" } 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var global = {
    isNullOrUndefined: function isNullOrUndefined(obj) {
        return typeof obj === "undefined" || obj === null;
    },
    isFunction: function isFunction(obj) {
        return global.isNullOrUndefined(obj) ? false : typeof obj === "function";
    },
    isObject: function isObject(obj) {
        return global.isNullOrUndefined(obj) ? false : (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object";
    },
    likeArray: function likeArray(obj) {
        return global.isNullOrUndefined(obj) ? false : typeof obj.length === 'number';
    },
    isJson: function isJson(obj) {
        return global.isObject(obj) && !global.likeArray(obj);
    },
    getObject: function getObject(obj, keys) {
        var object = obj;
        if (global.count(obj) === 0 || global.count(keys) === 0) {
            return "";
        }
        var arr = keys.replace(/,/g, "|").replace(/\./g, "|").split("|");
        global.each(arr, function (index, key) {
            object = typeof object[key] === "undefined" ? "" : object[key];
        });
        return object;
    },


    /**
     * 遍历数组、对象
     * @param elements
     * @param callback
     * @returns {*}
     */
    each: function each(elements, callback) {
        var i = void 0,
            key = void 0;
        if (global.likeArray(elements)) {
            if (typeof elements.length === "number") {
                for (i = 0; i < elements.length; i++) {
                    if (callback.call(elements[i], i, elements[i]) === false) return elements;
                }
            }
        } else {
            for (key in elements) {
                if (!elements.hasOwnProperty(key)) continue;
                if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
        }

        return elements;
    },


    /**
     * 获取数组最后一个值
     * @param array
     * @returns {*}
     */
    last: function last(array) {
        var str = false;
        if ((typeof array === "undefined" ? "undefined" : _typeof(array)) === 'object' && array.length > 0) {
            str = array[array.length - 1];
        }
        return str;
    },


    /**
     * 删除数组最后一个值
     * @param array
     * @returns {Array}
     */
    delLast: function delLast(array) {
        var newArray = [];
        if ((typeof array === "undefined" ? "undefined" : _typeof(array)) === 'object' && array.length > 0) {
            global.each(array, function (index, item) {
                if (index < array.length - 1) {
                    newArray.push(item);
                }
            });
        }
        return newArray;
    },


    /**
     * 字符串是否包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    strExists: function strExists(string, find) {
        string += "";
        find += "";
        return string.indexOf(find) !== -1;
    },


    /**
     * 字符串是否左边包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    leftExists: function leftExists(string, find) {
        string += "";
        find += "";
        return string.substring(0, find.length) === find;
    },


    /**
     * 字符串是否右边包含
     * @param string
     * @param find
     * @returns {boolean}
     */
    rightExists: function rightExists(string, find) {
        string += "";
        find += "";
        return string.substring(string.length - find.length) === find;
    },


    /**
     * 取字符串中间
     * @param string
     * @param start
     * @param end
     * @returns {*}
     */
    getMiddle: function getMiddle(string, start, end) {
        string += "";
        if (global.ishave(start) && global.strExists(string, start)) {
            string = string.substring(string.indexOf(start) + start.length);
        }
        if (global.ishave(end) && global.strExists(string, end)) {
            string = string.substring(0, string.indexOf(end));
        }
        return string;
    },


    /**
     * 截取字符串
     * @param string
     * @param start
     * @param end
     * @returns {string}
     */
    subString: function subString(string, start, end) {
        string += "";
        if (!global.ishave(end)) {
            end = string.length;
        }
        return string.substring(start, end);
    },


    /**
     * 随机字符
     * @param len
     * @returns {string}
     */
    randomString: function randomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },


    /**
     * 判断是否有
     * @param set
     * @returns {boolean}
     */
    ishave: function ishave(set) {
        return !!(set !== null && set !== "null" && set !== undefined && set !== "undefined" && set);
    },


    /**
     * 补零
     * @param str
     * @param length
     * @param after
     * @returns {*}
     */
    zeroFill: function zeroFill(str, length, after) {
        str += "";
        if (str.length >= length) {
            return str;
        }
        var _str = '',
            _ret = '';
        for (var i = 0; i < length; i++) {
            _str += '0';
        }
        if (after || typeof after === 'undefined') {
            _ret = (_str + "" + str).substr(length * -1);
        } else {
            _ret = (str + "" + _str).substr(0, length);
        }
        return _ret;
    },


    /**
     * 时间戳转时间格式
     * @param format
     * @param v
     * @returns {string}
     */
    formatDate: function formatDate(format, v) {
        if (format === '') {
            format = 'Y-m-d H:i:s';
        }
        if (typeof v === 'undefined') {
            v = new Date().getTime();
        } else if (/^(-)?\d{1,10}$/.test(v)) {
            v = v * 1000;
        } else if (/^(-)?\d{1,13}$/.test(v)) {
            v = v * 1000;
        } else if (/^(-)?\d{1,14}$/.test(v)) {
            v = v * 100;
        } else if (/^(-)?\d{1,15}$/.test(v)) {
            v = v * 10;
        } else if (/^(-)?\d{1,16}$/.test(v)) {
            v = v * 1;
        } else {
            return v;
        }
        var dateObj = new Date(v);
        if (parseInt(dateObj.getFullYear()) + "" === "NaN") {
            return v;
        }
        //
        format = format.replace(/Y/g, dateObj.getFullYear());
        format = format.replace(/m/g, global.zeroFill(dateObj.getMonth() + 1, 2));
        format = format.replace(/d/g, global.zeroFill(dateObj.getDate(), 2));
        format = format.replace(/H/g, global.zeroFill(dateObj.getHours(), 2));
        format = format.replace(/i/g, global.zeroFill(dateObj.getMinutes(), 2));
        format = format.replace(/s/g, global.zeroFill(dateObj.getSeconds(), 2));
        return format;
    },


    /**
     * 是否日期格式
     * @returns {boolean}
     */
    isDate: function isDate(string) {
        var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
        var str = string + "";
        if (str === "") return false;
        return !(!reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31);
    },


    /**
     * 检测手机号码格式
     * @param str
     * @returns {boolean}
     */
    isMobile: function isMobile(str) {
        return (/^1(3|4|5|7|8)\d{9}$/.test(str)
        );
    },


    /**
     * 手机号码中间换成****
     * @param phone
     * @returns {string}
     */
    formatMobile: function formatMobile(phone) {
        if (global.count(phone) === 0) {
            return "";
        }
        return phone.substring(0, 3) + "****" + phone.substring(phone.length - 4);
    },


    /**
     * 克隆对象
     * @param myObj
     * @returns {*}
     */
    clone: function clone(myObj) {
        if ((typeof myObj === "undefined" ? "undefined" : _typeof(myObj)) !== 'object') return myObj;
        if (myObj === null) return myObj;
        //
        if (global.likeArray(myObj)) {
            var _myObj = _toArray(myObj),
                myNewObj = _myObj.slice(0);

            return myNewObj;
        } else {
            var _myNewObj = _objectWithoutProperties(myObj, []);

            return _myNewObj;
        }
    },


    /**
     * 统计数组或对象长度
     * @param obj
     * @returns {number}
     */
    count: function count(obj) {
        try {
            if (typeof obj === "undefined") {
                return 0;
            }
            if (typeof obj === "number") {
                obj += "";
            }
            if (typeof obj.length === 'number') {
                return obj.length;
            } else {
                var i = 0,
                    key = void 0;
                for (key in obj) {
                    i++;
                }
                return i;
            }
        } catch (e) {
            return 0;
        }
    },


    /**
     * 相当于 intval
     * @param str
     * @param fixed
     * @returns {number}
     */
    runNum: function runNum(str, fixed) {
        var _s = Number(str);
        if (_s + "" === "NaN") {
            _s = 0;
        }
        if (/^[0-9]*[1-9][0-9]*$/.test(fixed)) {
            _s = _s.toFixed(fixed);
            var rs = _s.indexOf('.');
            if (rs < 0) {
                _s += ".";
                for (var i = 0; i < fixed; i++) {
                    _s += "0";
                }
            }
        }
        return _s;
    },


    /**
     * 秒转化为天小时分秒字符串
     * @param value
     * @returns {string}
     */
    formatSeconds: function formatSeconds(value) {
        var theTime = parseInt(value); // 秒
        var theTime1 = 0; // 分
        var theTime2 = 0; // 小时
        if (theTime > 60) {
            theTime1 = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            if (theTime1 > 60) {
                theTime2 = parseInt(theTime1 / 60);
                theTime1 = parseInt(theTime1 % 60);
            }
        }
        var result = parseInt(theTime) + "秒";
        if (theTime1 > 0) {
            result = parseInt(theTime1) + "分" + result;
        }
        if (theTime2 > 0) {
            result = parseInt(theTime2) + "小时" + result;
        }
        return result;
    },


    /**
     * 将一个 JSON 字符串转换为对象（已try）
     * @param str
     * @param defaultVal
     * @returns {*}
     */
    jsonParse: function jsonParse(str, defaultVal) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return defaultVal ? defaultVal : {};
        }
    },


    /**
     * 将 JavaScript 值转换为 JSON 字符串（已try）
     * @param json
     * @param defaultVal
     * @returns {string}
     */
    jsonStringify: function jsonStringify(json, defaultVal) {
        try {
            return JSON.stringify(json);
        } catch (e) {
            return defaultVal ? defaultVal : "";
        }
    },


    /**
     * 去除数组中的非数字项
     * @param value
     * @returns {Array}
     */
    removerNumberNaN: function removerNumberNaN() {
        var array = [];

        for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
            value[_key] = arguments[_key];
        }

        value.forEach(function (ele) {
            if (!isNaN(Number(ele))) {
                array.push(ele);
            }
        });
        return array;
    },


    /**
     * Math.max 过滤NaN
     * @param value
     * @returns {number}
     */
    runMax: function runMax() {
        return Math.max.apply(Math, _toConsumableArray(global.removerNumberNaN.apply(global, arguments)));
    },


    /**
     * Math.min 过滤NaN
     * @param value
     * @returns {number}
     */
    runMin: function runMin() {
        return Math.min.apply(Math, _toConsumableArray(global.removerNumberNaN.apply(global, arguments)));
    },


    /**
     * 链接字符串
     * @param value 第一个参数为连接符
     * @returns {string}
     */
    stringConnect: function stringConnect() {
        var s = null;
        var text = "";

        for (var _len2 = arguments.length, value = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            value[_key2] = arguments[_key2];
        }

        value.forEach(function (val) {
            if (s === null) {
                s = val;
            } else if (val) {
                if (val && text) text += s;
                text += val;
            }
        });
        return text;
    },


    /**
     * 字节转换
     * @param bytes
     * @returns {string}
     */
    bytesToSize: function bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        var k = 1024;
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        if (typeof sizes[i] === "undefined") {
            return '0 B';
        }
        return global.runNum(bytes / Math.pow(k, i), 2) + ' ' + sizes[i];
    }
};

module.exports = global;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _global = __webpack_require__(0);

var weiui = weex.requireModule('weiui');

var app = {

    jshome: 'https://weiui.app/dist/0.2.0/',

    openViewCode: function openViewCode(str) {
        app.openViewUrl("https://weiui.app/" + str + ".html");
    },
    openViewUrl: function openViewUrl(url) {
        weiui.openPage({
            url: app.jshome + 'index_browser.js',
            pageType: 'weex',
            statusBarColor: "#3EB4FF",
            params: {
                title: "WEIUI",
                url: url
            }
        });
    },
    checkVersion: function checkVersion(compareVersion) {
        if (typeof weiui.getVersion !== "function") {
            return false;
        }
        return (0, _global.runNum)(weiui.getVersion()) >= (0, _global.runNum)(compareVersion);
    }
};

module.exports = app;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _component_button = __webpack_require__(15);

var _component_button2 = _interopRequireDefault(_component_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_component_button2.default.el = '#root';
new Vue(_component_button2.default);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/GAOYI/wwwroot/weiui/weiui-template/src/component_button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-11594e8d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "width": "750",
    "flex": 1,
    "backgroundColor": "#ffffff"
  },
  "navbar": {
    "width": "750",
    "height": "100"
  },
  "title": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "iconr": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "list": {
    "width": "750",
    "flex": 1
  },
  "list-title": {
    "marginTop": "24",
    "marginBottom": "12",
    "paddingTop": "36",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24",
    "fontSize": "28",
    "color": "#757575"
  },
  "list-item": {
    "width": "750",
    "flexDirection": "row"
  },
  "button": {
    "fontSize": "24",
    "marginLeft": "37.5",
    "marginRight": "37.5",
    "marginBottom": "20",
    "width": "300",
    "height": "80"
  },
  "list-input-item": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "alignItems": "center",
    "borderBottomColor": "#e4e4e4",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1"
  },
  "cell": {
    "paddingLeft": "50",
    "fontSize": "24",
    "color": "#666666"
  },
  "switch": {
    "marginRight": "40"
  },
  "input": {
    "paddingRight": "50",
    "flex": 1,
    "height": "90",
    "textAlign": "right",
    "fontSize": "28"
  },
  "demo-item": {
    "width": "750",
    "paddingTop": "30",
    "paddingBottom": "30",
    "alignItems": "center"
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = __webpack_require__(1);

var weiui = weex.requireModule('weiui'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            text: '按钮',
            width: '702px',
            height: '80px',
            loading: false,
            disabled: false,
            backgroundColor: '#FF5000',
            borderColor: '#FF5000',
            borderRadius: '8px',
            fontSize: '28px',
            color: '#FFFFFF'
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.text = '按钮文字';
        });
    },

    computed: {
        weiuiStyle: function weiuiStyle() {
            var backgroundColor = this.backgroundColor,
                borderColor = this.borderColor,
                borderRadius = this.borderRadius,
                text = this.text,
                color = this.color,
                loading = this.loading,
                disabled = this.disabled;

            var customStyle = {};
            if (backgroundColor) {
                customStyle.backgroundColor = backgroundColor;
            }
            if (borderColor) {
                customStyle.borderColor = borderColor;
                customStyle.borderWidth = "1px";
            }
            if (borderRadius) {
                customStyle.borderRadius = borderRadius;
            }
            if (text) {
                customStyle.text = text;
            }
            if (color) {
                customStyle.color = color;
            }
            customStyle.loading = loading;
            customStyle.disabled = disabled;
            return customStyle;
        },
        demoStyle: function demoStyle() {
            var width = this.width,
                height = this.height;

            var customStyle = {};
            customStyle.width = width;
            customStyle.height = height;
            return customStyle;
        }
    },
    methods: {
        viewCode: function viewCode(str) {
            (0, _app.openViewCode)(str);
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('navbar', {
    staticClass: ["navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("常用按钮")])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": function($event) {
        _vm.viewCode('component/button')
      }
    }
  }, [_c('icon', {
    staticClass: ["iconr"],
    attrs: {
      "content": "md-code-working"
    }
  })], 1)], 1), _c('scroller', {
    staticClass: ["list"]
  }, [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("预设样式")]), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '默认'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '红色',
        model: 'red'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '绿色',
        model: 'green'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '蓝色',
        model: 'blue'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '粉红',
        model: 'pink'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '黄色',
        model: 'yellow'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '橙色',
        model: 'orange'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '灰色',
        model: 'gray'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '黑色',
        model: 'black'
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '白色',
        model: 'white'
      }
    }
  })], 1), _c('div', {
    staticClass: ["list-item"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '加载中',
        loading: true
      }
    }
  }), _c('button', {
    staticClass: ["button"],
    attrs: {
      "weiui": {
        text: '禁用',
        disabled: true
      }
    }
  })], 1), _c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("自定义样式")]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("按钮文字：")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "文字",
      "value": (_vm.text)
    },
    on: {
      "input": function($event) {
        _vm.text = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("是否加载中：")]), _c('switch', {
    staticClass: ["switch"],
    attrs: {
      "checked": _vm.loading
    },
    on: {
      "change": function($event) {
        _vm.loading = !_vm.loading
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("是否禁用：")]), _c('switch', {
    staticClass: ["switch"],
    attrs: {
      "checked": _vm.disabled
    },
    on: {
      "change": function($event) {
        _vm.disabled = !_vm.disabled
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("按钮宽度：")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现, 默认全屏",
      "value": (_vm.width)
    },
    on: {
      "input": function($event) {
        _vm.width = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("按钮高度：")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现, 默认高度80px",
      "value": (_vm.height)
    },
    on: {
      "input": function($event) {
        _vm.height = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("背景颜色：")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现",
      "value": (_vm.backgroundColor)
    },
    on: {
      "input": function($event) {
        _vm.backgroundColor = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("边框颜色：")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现",
      "value": (_vm.borderColor)
    },
    on: {
      "input": function($event) {
        _vm.borderColor = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["list-input-item"]
  }, [_c('text', {
    staticClass: ["cell"]
  }, [_vm._v("边框圆角：")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "自定义样式实现,默认8px",
      "value": (_vm.borderRadius)
    },
    on: {
      "input": function($event) {
        _vm.borderRadius = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["demo-item"]
  }, [_c('button', {
    staticClass: ["demoButton"],
    style: _vm.demoStyle,
    attrs: {
      "weiui": _vm.weiuiStyle
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);