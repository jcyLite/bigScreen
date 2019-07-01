<template>
        <div class="tk-bottom-bar">
                <div @click="left" class="icon glyphicon glyphicon-menu-left"></div>
                <div @click="right" class="icon glyphicon glyphicon-menu-right"></div>
        </div>
</template>

<script>
export default {
        methods:{
                left(){
                        this.$router.go(-1)
                },
                right(){
                        this.$router.go(1)
                }
        }
}
</script>

<style lang="less">
        .tk-bottom-bar{
                position:fixed;
                bottom:0;
                height:50px;
                left:0;
                right:0;
                background:rgba(255, 255, 255, 0.774);
                z-index:100;
                border-top:1px solid rgba(116, 101, 101, 0.438);
                .icon{
                        width:30px;
                        font-size:24px;
                        color:rgba(80, 67, 67, 0.562);
                }
                .glyphicon-menu-left{
                        margin-top:10px;
                        position:absolute;
                        left:15vw;
                }
                .glyphicon-menu-right{
                        margin-top:10px;
                        position: absolute;
                        right:15vw;
                }
        }
</style>
