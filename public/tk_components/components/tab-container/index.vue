<template>
  <div class="tk-tab-container">
    <pot-tab-bar
      v-model="selectedLabel"
      show-slider
      :use-transition="true"
      ref="tabNav"
      :data="tabLabels"
    ></pot-tab-bar>
    <div class="tab-slide-container">
      <pot-slide
        ref="slide"
        :loop="false"
        :initial-index="initialIndex"
        :auto-play="false"
        :show-dots="false"
        :options="{
					listenScroll: true,
					probeType: 2,
					directionLockThreshold: 0
				}"
        @scroll="scroll"
        @change="changePage"
      >
        <pot-slide-item :key=index v-for="(item,index) of tabLabels">
          <slot :name="index"></slot>
        </pot-slide-item>
      </pot-slide>
    </div>
  </div>
</template>
<script>
export default {
  props:['value','active'],
  data(){
    return { 
      selectedLabel:this.value[this.active].label,
      tabLabels:this.value
    }
  },
  computed:{
    initialIndex() {
      let index = 0
      index = this.findIndex(this.value, item => item.label === this.selectedLabel)
      return index
    }
  },
  methods:{
			scroll(pos) {
				const x = Math.abs(pos.x)
				const tabItemWidth = this.$refs.tabNav.$el.clientWidth
				const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
				const deltaX = x / slideScrollerWidth * tabItemWidth
				this.$refs.tabNav.setSliderTransform(deltaX)
      },
      changePage(current) {
				this.selectedLabel = this.tabLabels[current].label
      },
      findIndex(ary, fn) {
				if(ary.findIndex) {
					return ary.findIndex(fn)
				}
				/* istanbul ignore next */
				let index = -1
				/* istanbul ignore next */
				ary.some(function(item, i, ary) {
					const ret = fn.call(this, item, i, ary)
					if(ret) {
						index = i
						return ret
					}
				})
				/* istanbul ignore next */
				return index
			}
    }
};
</script>
<style>
</style>


