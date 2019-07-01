<template>
        <div class="head">
                <div class="nav">
                        <ul>
                                <!-- <li :class="{active01:active==-1}">
                                        <router-link to="/ykgk">送桥概况</router-link>
                                </li> -->
				<li :class="{active01:active==0}">
                                        <router-link to="/djyl">党建引领</router-link>
                                        <!-- <a href="djyl.html">党建引领</a> -->
                                </li>
                                <li :class="{active01:active==1}">
                                        <router-link to="/xzsp">政务服务</router-link>
                                        <!-- <a href="xzsp.html">政务服务</a> -->
                                </li>
                        </ul>
                        <div>
                                <router-link to="/ykgk">
                                        <div class="logo"></div>
                                </router-link>
                        </div>
                        <ul>
                                <li :class="{active02:active==3}">
                                        <router-link to="/zhzf">综合执法</router-link>
                                        <!-- <a href="zhzf.html">综合执法</a> -->
                                </li>
                                <li :class="{active02:active==4}">
                                        <router-link to="/grid">网格治理</router-link>
                                        <!-- <a href="wgzl.html">网格治理</a> -->
                                </li>
				<!-- <li :class="{active02:active==5}">
				        <router-link to="/zhzx">指挥中心</router-link>
				</li> -->
                                <!--	<li>
                    <a href="zhzx.html">指挥中心</a>
                </li>  -->
                        </ul>
                </div>
                <div class="time" id="nowTime_wgzl">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                <slot></slot>
        </div>
</template>
<script>
export default {
        props:['active'],
        watch:{
                $route(to){
                        console.log(12)
                }
        },
        mounted(){

        }
}
</script>
<style lang="less">
         @import '../css/main.css';
</style>
