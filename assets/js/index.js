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

let MDHtmlTemplate = function (html) {
    //平台标签
    html = html.replace(/<(Android|iOS)\s*(\/\s*|><\/\1)>/gmi, '<div class="md-badge md-badge-warn md-badge-middle">仅 $1</div>');
    //新标签
    html = html.replace(/<New date="(\d{4})+(\d{2})+(\d{2})"\s*(\/\s*|><\/New)>/gmi, function(str, y, m, d) {
        if (new Date(y + "-" + m + "-" + d).getTime() > new Date().getTime() - 86400000 * 30) {
            return '<div class="md-badge md-badge-new md-badge-middle">新</div>'
        }else{
            return '';
        }
    });
    return html;
};