//js Module
import CreateAPI from 'vue-create-api'
//vue Module
import detailTextarea from './detail-textarea'
import buttonGroup from './button/group.vue'
import header from './header'
import Button from './button';
import sign from './sign';
import Form from './Form/Form.vue';
import menu from './menu';
import popup from './popup/popup.vue'
import Detail from './detail'
import addMinus from './add-minus'
import Textarea from './textarea'
import Cellfour from './cell/Cell_Four.vue';
import CellRow from './cell/cell-row.vue'
import cellThree from './Cell/Cell_three.vue';
import cell from './Cell/cell.vue';
import Switch from './Switch/Switch.vue';
import PopShoppingCar from './pop-shopping-car'
import Scroll from './scroll'
import CellWithImage from './cell/cell-with-image.vue';
import cellBox from './cell/cell-box.vue'
import search from './search'
import popBottom from './pop-bottom'
import selectTime from './Form/select-time.vue'
import popRight from './pop-right'
import tabContainer from './tab-container'
import filter from './filter'
import fiterItem from './filter/item.vue'
import Image from './image'
import imageCell from './image/cell.vue'
import slide from './slide'
import bottomBar from './bottom/bar'
import table from './table'
import scrollAuto from './scroll-auto'
//add to vue.prototype
import Bottom from './Poper/Bottom';
import Tip from './Poper/Tip';
import popMiddle from './pop-middle'
import title from './title'
import uploadAudio from './upload-audio'
import uploadVideo from './upload-video'
import uploadPhoto from './upload-photo'
import detailAudio from './detail-audio'
import detailVideo from './detail-video'
import detailPhoto from './detail-photo'
import playVideo from './play-video'
import nodata from './nodata'
import cellOne from './Cell/cell-one.vue'
import chatBubble from './chat-bubble'
import login from './login'

const ThankComponents = {
    version: 1.0,
    install(Vue) {
        Vue.use(CreateAPI, { componentPrefix: 'tk-' })
        Vue.component('tk-pop-shopping-car', PopShoppingCar)
        Vue.createAPI(PopShoppingCar, ['confirm', 'cancel', 'close', 'btn-click', 'link-click'], true)
        Vue.component('tk-pop-bottom', popBottom)
        Vue.createAPI(popBottom, ['data'], true)
        Vue.extend(popMiddle);
        Vue.component('tk-pop-middle', popMiddle)
        Vue.createAPI(popMiddle, ['data'], true)
        Vue.component('tk-play-video', playVideo)
        Vue.createAPI(playVideo, ['data'], true)
        Vue.component('tk-detail', Detail)
        Vue.component('tk-header', header)
        Vue.component('tk-tab-container', tabContainer)
        Vue.component('tk-scroll-auto', scrollAuto)
        Vue.component('tk-chat-bubble', chatBubble)
        Vue.component('tk-cell-row', CellRow)
        Vue.component('tk-bottom-bar', bottomBar)
        Vue.component('tk-popup', popup)
        Vue.component('tk-slide', slide)
        Vue.component('tk-form', Form)
        Vue.component('tk-menu', menu)
        Vue.component('tk-switch', Switch)
        Vue.component('tk-button', Button)
        Vue.component('tk-table', table)
        Vue.component('tk-detail-textarea', detailTextarea)
        Vue.component('tk-button-group', buttonGroup)
        Vue.component('tk-add-minus', addMinus)
        Vue.component('tk-scroll', Scroll)
        Vue.component('tk-textarea', Textarea)
        Vue.component('tk-cell-four', Cellfour)
        Vue.component('tk-cell', cell)
        Vue.component('tk-cell-three', cellThree)
        Vue.component('tk-search', search)
        Vue.component('tk-sign', sign)
        Vue.component('tk-cell-with-image', CellWithImage)
        Vue.component('tk-select-time', selectTime)
        Vue.component('tk-pop-right', popRight)
        Vue.component('tk-filter', filter);
        Vue.component('tk-filter-item', fiterItem)
        Vue.component('tk-title', title)
        Vue.component('tk-cell-box', cellBox)
        Vue.component('tk-image', Image)
        Vue.component('tk-image-cell', imageCell)
        Vue.component('tk-upload-photo', uploadPhoto)
        Vue.component('tk-upload-audio', uploadAudio)
        Vue.component('tk-upload-video', uploadVideo)
        Vue.component('tk-detail-photo', detailPhoto)
        Vue.component('tk-detail-audio', detailAudio)
        Vue.component('tk-detail-video', detailVideo)
        Vue.component('tk-nodata', nodata)
        Vue.component('tk-cell-one', cellOne)
        Vue.component('tk-login', login)
    }
}
export default ThankComponents;