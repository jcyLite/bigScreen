import three from './components/three.vue'
export default function echart(Vue) {
    Vue.prototype.echarts = require('echarts')
    Vue.component('tchart-three', three)
}