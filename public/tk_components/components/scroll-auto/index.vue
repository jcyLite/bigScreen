<template>
        <div class="tk-scroll-auto">
                <div ref="wrapper" :style="{'transform':`translateY(${y}px)`}" class="tk-scroll-auto-wrapper">
                        <slot></slot>
                </div>
        </div>
</template>

<script>
import { setInterval } from 'timers';
export default {
        data(){
                return {
                        y:0
                }
        },
        mounted(){
                console.log(this.$refs.wrapper.scrollHeight)
                var h=this.$refs.wrapper.scrollHeight;
                setInterval(()=>{
                        this.y-=80
                        if(this.y<-4000){
                                this.y=0;
                        }
                },1000)
        }
}
</script>

<style lang="less">
        .tk-scroll-auto{
                .tk-scroll-auto-wrapper{
                        transition:.3s all;
                }
                overflow: hidden;
        }
</style>
