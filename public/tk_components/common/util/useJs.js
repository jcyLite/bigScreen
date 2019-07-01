export default function useJs(src, onCallback) {
    var body = document.getElementsByTagName('body')[0];
    var node = document.createElement('script');
    node.type = "text/javascript";
    node.charset = "GBK";
    node.src = src;
    node.async = true;
    body.appendChild(node);

    function onScriptLoad(e) {
        var readyRegExp = navigator.platform === 'PLaySTATION 3' ? /^complete$/ : /^(complete|loaded)$/
        if (e.type === 'load' || (readyRegExp.test((e.currentTarget || e.srcElement).readyState))) {
            //     head.removeChild(node);
            onCallback && onCallback();
        }
    }
    if (node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) && !isOpera) {
        node.attachEvent('onreadystatechange', function(e) {
            onScriptLoad(e);
        });
    } else {
        node.addEventListener('load', function(e) {
            onScriptLoad(e);
        }, false);
    }
};