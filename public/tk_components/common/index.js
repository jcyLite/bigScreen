import type from './util/type.js'
import useJs from './util/useJs'
const ThankCommon = {
    install(Vue) {
        Vue.prototype.$tkType = type;
        Vue.prototype.useJs = useJs
    }
}
export default ThankCommon