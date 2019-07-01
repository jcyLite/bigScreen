export default function jsModel(Vue) {
    Vue.prototype.timestampToDate = function(timestamp) {
        var time = new Date(parseFloat(timestamp));
        var a = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + (time.getDate());
        // var b = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
        return a
    }
}