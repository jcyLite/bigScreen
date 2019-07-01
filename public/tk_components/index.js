import ThankComponents from './components';
import ThankCommon from './common';
import Pot from '../pot_components';
import jsModel from '../module'
import './style/index.less';
const Thank = {
    version: 1.0,
    install(Vue) {
        Vue.use(ThankComponents)
        Vue.use(ThankCommon)
        Vue.use(Pot);
        Vue.use(jsModel);
    }
}
export default Thank;