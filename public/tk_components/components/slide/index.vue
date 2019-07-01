<template>
	<div class="tk-slide">
		<pot-slide ref="slide" :data="items" @change="changePage">
			<pot-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
			    <img :src="item.image">
			</pot-slide-item>
		</pot-slide>
	</div>
</template>

<script>
	export default {
		props:{
			items:{
				type: Array,
				default:()=>[
			        {
			          image: require('./banner01.jpg')
			        },
			        {
			          image: require('./banner02.jpg')
			        },
			        {
			          image: require('./banner03.jpg')
			        }
			    ]
			}
		},
		methods:{
			changePage(){
				
			}
		}
	}
</script>

<style lang="less">
	.tk-slide{
		.pot-slide-group{
			height:200px;
			overflow: hidden;
		}
		img{
			width:100%;
		}
	}
</style>