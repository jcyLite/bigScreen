<style lang="less">
        .tk-table{
                .pot-scroll-list-wrapper{
                        // width:auto;
                }
                .pot-scroll-content{
                       display:inline-block;
                }
                .tk-table-header{
                        width:auto;
                        height:40px;
                        overflow: hidden;
                        div{
                                width:25vw;
                                display:inline-block;
                        }
                       
                }
                .tk-table-body{
                        overflow: hidden;
                        >div{
                                >div{
                                        width:25vw;
                                       display:inline-block;
                                }
                        }
                }
                .tk-table-box{
                        width:100vw;
                        position:relative;
                        .tk-table-first{
                                position:absolute;
                                width:25vw;
                                z-index:2; 
                                background:#fff;
                        }
                }
                .tk-table-container{
                        padding-left:25vw;
                }
        }
</style>
<template>
        <div class="tk-table">
                <pot-scroll ref="scroll" derection="vertical">
                        <div class="tk-table-box">
                                <div class="tk-table-first">
                                        <div>{{theader[0]}}</div>
                                        <div v-for="item of tbody">
                                                {{item[0]}}
                                        </div>
                                </div>
                                <div class="tk-table-container-box">
                                        <pot-scroll nest-mode="free" :data="tbody" class="horizontal-scroll-list-wrap" direction="horizontal" ref="scrollw">
                                                <div class="tk-table-container" :style="{width:(25*theader.length)+'vw'}">
                                                        <div  class="tk-table-header">
                                                                <div v-for="item of theader.slice(1,theader.length)">
                                                                        {{item}}
                                                                </div>
                                                        </div>
                                                        <div class="tk-table-body">
                                                                <div v-for="item of tbody">
                                                                        <div v-for="i of item.slice(1,item.length)">
                                                                                {{i}}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </pot-scroll>
                                </div>
                        </div>
                       
                       
                        
                </pot-scroll>
        </div>
</template>

<script>
export default {
        props:['tbody',"theader"],
        mounted(){
                
        },
        updated(){
                
                this.$refs.scrollw.forceUpdate(true)
        }
}
</script>


