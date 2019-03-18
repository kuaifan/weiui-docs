let getStarted = function() {
    let url = pathname + '#/?id=框架介绍';
    if (decodeURI(window.location.hash).indexOf("id=框架介绍") !== -1) {
        url+= '&r=' + Math.random().toString().substr(-12);
        window.location.replace(url)
    }else{
        window.location.href = url;
    }
};

let setIframeHeight = function(iframe) {
    if (iframe) {
        let iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
        if (typeof iframe._setInterval !== 'undefined') {
            clearInterval(iframe._setInterval);
        }
        iframe._setInterval = setInterval(function() { reinitIframe(iframe) }, 200);
    }
};

let reinitIframe = function(iframe){
    if (iframe) {
        try{
            let bHeight = iframe.contentWindow.document.body.scrollHeight;
            let dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
            iframe.height = Math.min(bHeight, dHeight);
        }catch (ex){ }
    }
};

let formatDate = function(format, v) {
    let dateObj;
    if (v instanceof Date) {
        dateObj = v;
    }else {
        dateObj = new Date(v);
    }
    let _zeroFill = function(num) {
        return parseInt(num) < 10 ? "0" + num : num;
    };
    format = format.replace(/Y/g, dateObj.getFullYear());
    format = format.replace(/m/g, _zeroFill(dateObj.getMonth() + 1));
    format = format.replace(/d/g, _zeroFill(dateObj.getDate()));
    format = format.replace(/H/g, _zeroFill(dateObj.getHours()));
    format = format.replace(/i/g, _zeroFill(dateObj.getMinutes()));
    format = format.replace(/s/g, _zeroFill(dateObj.getSeconds()));
    return format;
};

let addCssRule = function() {
    function createStyleSheet() {
        let head = document.head || document.getElementsByTagName('head')[0];
        let style = document.createElement('style');
        style.type = 'text/css';
        head.appendChild(style);
        return style.sheet ||style.styleSheet;
    }
    let sheet = createStyleSheet();
    return function(selector, rules, index) {
        index = index || 0;
        if (sheet.insertRule) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        } else if (sheet.addRule) {
            sheet.addRule(selector, rules, index);
        }
    }
}();