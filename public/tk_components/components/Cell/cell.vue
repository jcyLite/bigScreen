<style lang="less">
        .tk-cell{
                padding:13px;
                margin-top:10px;
                margin-left:5px;
                margin-right:5px;
                >div{
                        margin-top:5px;
                        overflow: hidden;
			text-overflow:ellipsis;
                        white-space: nowrap;
                        font-size:14px;
                        line-height:20px;
                }
                background:#fff;
                color:rgba(0, 0, 0, 0.719);
                .filter{
			color:rgb(255, 160, 101);
			display: inline-block;
                }
                .tk-cell-title{
                        width:100px;
                }
                .tk-cell-content{
                        width:calc(100% - 100px);
                        float:right;
                        text-align: right;
                        text-overflow:ellipsis;
                        overflow: hidden;
                }
        }
</style>
<template>
        <div v-if="dataCpt" class="tk-cell" @click="$emit('click')">
                <div v-for="(itema,indexa) of data" >
                        <span class="tk-cell-title">{{title[indexa]}}</span>
                        <span  class="tk-cell-content">
                                <template v-for="(item,index) of itema.toString().split(filter)">
                                        <template v-if="filter">
                                                <span v-html="item">{{item}}</span>
                                                <span v-html="filter" class="filter" v-if="index!=(itema.toString().split(filter).length-1)"></span>
                                        </template>
                                </template>
                        </span>
                        <span class="tk-cell-content" v-html="itema" v-if="!filter"></span>
                </div>
        </div>
</template>

<script>
export default {
        props:{
                filter:{
                        type:String,
                        default:''
                },
                title:{
                        type:Array,
                        default:()=>[
                                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                                'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                                'ccccccccccccccccccccccccccccccccccc',
                                'ddddddddddddddddddddddddddddddddddd',
                                'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        ]
                },
                data:{
                        type:Array,
                        default:()=>[
                                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                                'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                                'ccccccccccccccccccccccccccccccccccc',
                                'ddddddddddddddddddddddddddddddddddd',
                                'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        ]
                }
        },
        computed:{
                touchStart(e){
                        // click(e)
                },
                dataCpt(){
                        var a=false;
                        this.data.forEach(item=>{
                                if(item.toString().indexOf(this.filter)!=-1){
                                        a=true
                                }
                        })
                        return a;
                }
        }

}
</script>

