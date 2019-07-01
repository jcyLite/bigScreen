<style lang="less">
        .tk-three{
                height:300px;
        }
</style>
<template>
        <div ref="three" class="tk-three">

        </div>
</template>

<script>
export default {
        props:{
                data:{
                        type:Object,
                        default(){
                                return {
                                        a:{
                                                title:'a',
                                                list:[]
                                        },
                                        b:{
                                                title:'b',
                                                list:[]
                                        },
                                        c:{
                                                title:'c',
                                                list:[]
                                        }
                                }
                        }
                }
        },
        watch:{
                data(){
                        this.init()
                }
        },
        data(){
                return {
                        myChart:null
                }
        },
        computed:{
                option(){
                        return {
                               tooltip: {
                                        trigger: 'axis',
                                        axisPointer: {
                                        type: 'cross',
                                        crossStyle: {
                                                color: '#999'
                                        }
                                        }
                                },
                                toolbox: {
                                        feature: {
                                        dataView: {show: true, readOnly: false},
                                        magicType: {show: true, type: ['line', 'bar']},
                                        restore: {show: true},
                                        // saveAsImage: {show: true}
                                        }
                                },
                                legend: {
                                        orient: 'horizontal',
                                        x: 'left',
                                        data:[this.data.b.title,this.data.c.title]
                                },
                                xAxis: [
                                        {
                                        type: 'category',
                                        data:this.data.a.list,
                                        axisPointer: {
                                                type: 'shadow'
                                        }
                                        }
                                ],
                                yAxis: [
                                        {
                                        type: 'value',
                                        name: '',
                                        // interval: 50,
                                        // axisLabel: {
                                        //         formatter: '{value} 件'
                                        // }
                                        },
                                        // {
                                        //         type: 'value',
                                        //         name: '温度',
                                        //         interval: 5,
                                        //         axisLabel: {
                                        //                 formatter: '{value} °C'
                                        //         }
                                        // }
                                ],
                                series: [
                                        {
                                        name:this.data.b.title,
                                        type:'bar',
                                        data:this.data.b.list
                                        },
                                        {
                                        name:this.data.c.title,
                                        type:'bar',
                                        data:this.data.c.list
                                        },
                                        // {
                                        // name:'平均温度',
                                        // type:'line',
                                        // yAxisIndex: 1,
                                        // data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                                        // }
                                ]
                        }
                }
        },
        methods:{
                init(){
                        this.myChart=this.echarts.init(this.$refs.three);
                        this.myChart.setOption(this.option);
                }
        },
        mounted(){
                this.init()
                
        }
}
</script>

