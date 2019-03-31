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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(82);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(85)
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
__vue_options__.__file = "/Users/GAOYI/wwwroot/weiui/weiui-template/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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

/***/ 83:
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1
  },
  "navbar": {
    "width": "750",
    "height": "100"
  },
  "navbar-title": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "navbar-icon": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "list": {
    "width": "750",
    "flex": 1
  },
  "list-title-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "list-title": {
    "paddingTop": "36",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24",
    "fontSize": "28",
    "color": "#757575"
  },
  "list-subtitle": {
    "position": "absolute",
    "right": "24",
    "bottom": "24",
    "fontSize": "24"
  },
  "list-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": "100",
    "width": "750",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderTopWidth": "1",
    "borderTopColor": "#e8e8e8",
    "borderTopStyle": "solid"
  },
  "list-item-left": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "height": "100",
    "flex": 1
  },
  "list-left-icon": {
    "width": "60",
    "height": "60",
    "color": "#3EB4FF"
  },
  "list-left-title": {
    "color": "#242424",
    "paddingLeft": "12",
    "width": "380",
    "fontSize": "26",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "list-left-title-history": {
    "color": "#242424",
    "paddingLeft": "12",
    "width": "660",
    "fontSize": "26",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "list-right-title": {
    "color": "#a2a2a2",
    "paddingRight": "3",
    "fontSize": "22",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "list-right-icon": {
    "width": "40",
    "height": "40",
    "color": "#C9C9CE"
  },
  "list-item-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "height": "100"
  }
}

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _global = __webpack_require__(0);

var _app = __webpack_require__(1);

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

var weiui = weex.requireModule('weiui');

exports.default = {
    data: function data() {
        return {
            components: [{
                title: '轮播控件',
                title_en: 'banner',
                icon: 'md-easel',
                url: _app.jshome + 'component_banner.js'
            }, {
                title: '常用按钮',
                title_en: 'button',
                icon: 'logo-youtube',
                url: _app.jshome + 'component_button.js'
            }, {
                title: '网格容器',
                title_en: 'grid',
                icon: 'md-grid',
                url: _app.jshome + 'component_grid.js'
            }, {
                title: '字体图标',
                title_en: 'icon',
                icon: 'logo-ionic',
                url: _app.jshome + 'component_icon.js'
            }, {
                title: '跑马文字',
                title_en: 'marquee',
                icon: 'md-code-working',
                url: _app.jshome + 'component_marquee.js'
            }, {
                title: '导航栏',
                title_en: 'navbar',
                icon: 'md-menu',
                url: _app.jshome + 'component_navbar.js'
            }, {
                title: '列表容器',
                title_en: 'scroll-view',
                icon: 'md-list',
                url: _app.jshome + 'component_list.js'
            }, {
                title: '滚动文字',
                title_en: 'scroll-text',
                icon: 'ios-more',
                url: _app.jshome + 'component_scroll_text.js'
            }, {
                title: '侧边栏',
                title_en: 'side-panel',
                icon: 'md-albums',
                url: _app.jshome + 'component_side_panel.js'
            }, {
                title: '标签页面',
                title_en: 'tabbar',
                icon: 'md-filing',
                url: _app.jshome + 'component_tabbar.js'
            }],

            module: [{
                title: '页面功能',
                title_en: 'newPage',
                icon: 'md-book',
                url: _app.jshome + 'module_page.js'
            }, {
                title: '系统信息',
                title_en: 'system',
                icon: 'ios-cog',
                url: _app.jshome + 'module_system.js'
            }, {
                title: '数据缓存',
                title_en: 'caches',
                icon: 'md-beaker',
                url: _app.jshome + 'module_caches.js'
            }, /*{
                title: '单位转换',
                title_en: 'weex px',
                icon: 'md-calculator',
                url: jshome + 'module_weexpx.js',
               }, */{
                title: '确认对话框',
                title_en: 'alert',
                icon: 'md-alert',
                url: _app.jshome + 'module_alert.js'
            }, {
                title: '等待弹窗',
                title_en: 'loading',
                icon: 'tb-loading',
                url: _app.jshome + 'module_loading.js'
            }, {
                title: '验证弹窗',
                title_en: 'captcha',
                icon: 'md-checkmark-circle',
                url: _app.jshome + 'module_captcha.js'
            }, {
                title: '二维码扫描',
                title_en: 'scaner',
                icon: 'tb-scan',
                url: _app.jshome + 'module_scaner.js'
            }, {
                title: '跨域异步请求',
                title_en: 'ajax',
                icon: 'md-git-pull-request',
                url: _app.jshome + 'module_ajax.js'
            }, {
                title: '剪切板',
                title_en: 'clipboard',
                icon: 'md-copy',
                url: _app.jshome + 'module_plate.js'
            }, {
                title: '提示消息',
                title_en: 'toast',
                icon: 'md-notifications',
                url: _app.jshome + 'module_toast.js'
            }, {
                title: '广告弹窗',
                title_en: 'adDialog',
                icon: 'logo-buffer',
                url: _app.jshome + 'module_ad_dialog.js' /*, {
                                                            title: '更多拓展模块',
                                                            title_en: 'expandModule',
                                                            icon: 'md-more',
                                                            url: jshome + 'index_expand.js',
                                                         }*/ }],

            plugin: [{
                title: '城市选择器',
                title_en: 'citypicker',
                icon: 'md-pin',
                url: _app.jshome + 'plugin_citypicker.js'
            }, {
                title: '图片选择器',
                title_en: 'picture',
                icon: 'md-camera',
                url: _app.jshome + 'plugin_picture.js'
            }, {
                title: '组件截图',
                title_en: 'screenshots',
                icon: 'md-crop',
                url: _app.jshome + 'plugin_screenshots.js'
            }, {
                title: '融云通信模块',
                title_en: 'rongim',
                icon: 'tb-community',
                url: _app.jshome + 'plugin_rongim.js'
            }, {
                title: '友盟推送模块',
                title_en: 'umeng',
                icon: 'md-send',
                url: _app.jshome + 'plugin_umeng.js'
            }, {
                title: '第三方支付(微信/支付宝)',
                title_en: 'pay',
                icon: 'tb-sponsor',
                url: _app.jshome + 'plugin_pay.js'
            }, {
                title: '即时通讯',
                title_en: 'websocket',
                icon: 'md-repeat',
                url: _app.jshome + 'plugin_websocket.js'
            }],

            about_lists: [{
                title: '开发文档',
                title_en: 'document',
                icon: 'md-code-working',
                url: 'https://weiui.app'
            }, {
                title: '托管平台',
                title_en: 'github',
                icon: 'logo-github',
                url: 'https://github.com/kuaifan/weiui'
            }, {
                title: '个人博客',
                title_en: 'http://kuaifan.vip',
                icon: 'logo-rss',
                url: 'http://kuaifan.vip'
            }, {
                title: 'WEIUI版本',
                title_en: weiui.getVersionName(),
                icon: 'md-information-circle',
                url: 'https://weiui.app'
            }],

            history: []
        };
    },
    mounted: function mounted() {
        this.history = (0, _global.jsonParse)(weiui.getCachesString("scaner", []), []);
        //
        weiui.setPageBackPressed(null, function () {
            weiui.confirm({
                title: "温馨提示",
                message: "你确定要退出WEIUI吗？",
                buttons: ["取消", "确定"]
            }, function (result) {
                if (result.status === "click" && result.title === "确定") {
                    weiui.closePage(null);
                }
            });
        });
    },


    methods: {
        scaner: function scaner() {
            var _this = this;

            weiui.openScaner(null, function (res) {
                if (res.status === "success") {
                    _this.history.unshift(res.text);
                    weiui.setCachesString("scaner", (0, _global.jsonStringify)(_this.history), 0);
                    _this.openAuto(res.text);
                }
            });
        },
        refresh: function refresh() {
            weiui.reloadPage();
        },
        clearHistory: function clearHistory() {
            var _this2 = this;

            weiui.confirm({
                title: "删除提示",
                message: "你确定要删除扫码记录吗？",
                buttons: ["取消", "确定"]
            }, function (result) {
                if (result.status === "click" && result.title === "确定") {
                    _this2.history = [];
                    weiui.setCachesString("scaner", (0, _global.jsonStringify)(_this2.history), 0);
                }
            });
        },
        openUrl: function openUrl(url) {
            weiui.openPage({
                url: url,
                pageType: 'weex'
            });
        },
        openWeb: function openWeb(url) {
            (0, _app.openViewUrl)(url);
        },
        openThird: function openThird(url) {
            (0, _app.openViewCode)("module/third/" + url);
        },
        openAuto: function openAuto(url) {
            weiui.openPage({
                url: url,
                pageType: 'auto'
            });
        }
    }
};

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('navbar', {
    staticClass: ["navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "left"
    },
    on: {
      "click": _vm.scaner
    }
  }, [_c('icon', {
    staticClass: ["navbar-icon"],
    attrs: {
      "weiui": {
        content: 'tb-scan'
      }
    }
  })], 1), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["navbar-title"]
  }, [_vm._v("WEIUI")])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": _vm.refresh
    }
  }, [_c('icon', {
    staticClass: ["navbar-icon"],
    attrs: {
      "weiui": {
        content: 'md-refresh'
      }
    }
  })], 1)], 1), _c('scroll-view', {
    staticClass: ["list"]
  }, [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("组件 Components")]), _vm._l((_vm.components), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "weiui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v("<" + _vm._s(item.title_en) + ">")]), _c('icon', {
      staticClass: ["list-right-icon"],
      attrs: {
        "weiui": {
          content: 'tb-right 70%'
        }
      }
    })], 1)])
  }), _c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("模块 Module")]), _vm._l((_vm.module), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "weiui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v(_vm._s(item.title_en))]), _c('icon', {
      staticClass: ["list-right-icon"],
      attrs: {
        "weiui": {
          content: 'tb-right 70%'
        }
      }
    })], 1)])
  }), _c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("插件化 Plugins")]), _vm._l((_vm.plugin), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "weiui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v(_vm._s(item.title_en))]), _c('icon', {
      staticClass: ["list-right-icon"],
      attrs: {
        "weiui": {
          content: 'tb-right 70%'
        }
      }
    })], 1)])
  }), _c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("关于 About Weiui")]), _vm._l((_vm.about_lists), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openWeb(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "weiui": {
          content: item.icon
        }
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }, [_vm._v(_vm._s(item.title_en))]), _c('icon', {
      staticClass: ["list-right-icon"],
      attrs: {
        "weiui": {
          content: 'tb-right 70%'
        }
      }
    })], 1)])
  }), (_vm.history.length > 0) ? _c('div', {
    staticClass: ["list-title-box"]
  }, [_c('text', {
    staticClass: ["list-title"]
  }, [_vm._v("扫码历史")]), _c('text', {
    staticClass: ["list-subtitle"],
    on: {
      "click": function($event) {
        _vm.clearHistory()
      }
    }
  }, [_vm._v("清空历史")])]) : _vm._e(), (_vm.history.length > 0) ? _c('div', _vm._l((_vm.history), function(text, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openAuto(text)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('text', {
      staticClass: ["list-left-title-history"]
    }, [_vm._v(_vm._s(text))])]), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('icon', {
      staticClass: ["list-right-icon"],
      attrs: {
        "weiui": {
          content: 'tb-right 70%'
        }
      }
    })], 1)])
  })) : _vm._e()], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });