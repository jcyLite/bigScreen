<style lang="less">
        .tk-cell-row{
                margin-top:10px;
                margin-left:5px;
                margin-right:5px;
                border-radius: 5px;
                height:50px;
                display: flex;
                >div{
                        flex:1;
                        text-align: center;
                        overflow: hidden;
			text-overflow:ellipsis;
                        white-space: nowrap;
                        font-size:14px;
                        line-height:50px;
                }
                background:#fff;
                box-shadow: 1px 1px 5px rgba(51, 51, 51, 0.342);
                color:rgba(0, 0, 0, 0.719);
                .filter{
			color:rgb(255, 160, 101);
			display: inline-block;
                }
                
                
        }
</style>
<template>
        <div v-if="dataCpt" class="tk-cell-row" @click="$emit('click')">
                <div v-for="itema of data" >
                        <template v-for="(item,index) of itema.split&&itema.split(filter)">
                                <template v-if="filter">
                                        <span>{{item}}</span>
				        <span class="filter" v-if="index!=(itema.split(filter).length-1)">{{filter}}</span>
                                </template>
			</template>
                        <span v-if="!filter">{{itema}}</span>
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
                data:{
                        type:Array,
                        default:()=>[
                                'aaaaaa',
                                'bbbbbb',
                                'cccccc',
                                'dddddd',
                                'eeeeee',
                                'aaaaaa'
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
                                if(item.indexOf&&item.indexOf(this.filter)!=-1){
                                        a=true
                                }
                        })
                        return a;
                }
        }

}
</script>

