<template>
	<div class="ripple ripple-radial" @click="abc($event)" :class="['tk-button',disabled?'tk-disabled':'','button-'+type]">
		<slot></slot>
		<span v-show="isLoading" class="icon icon-spinner2"></span>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				active:true,
				isOne:false
			}
		},
		props:{
			isLoading:{
				type:Boolean,
				default:false
			},
			type:{
				type:Number,
				default:0
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			abc(e){
				if(!this.disabled){
					this.$emit('click')
					import('./ripple.js').then(d=>{
						d.default(e)
					})
					
				}
			}
		}
	}
</script>

<style lang="less">
	@keyframes spinner2 {
		from{
			transform:rotateZ(0deg);
		}
		to{
			transform:rotateZ(360deg);
		}
	}
	.tk-button{
		height:50px;
		line-height: 50px;
		border-radius:3px;
		text-align: center;
		margin-left:10px;
		margin-right:10px; 
		.icon.icon-spinner2{
			margin-left:10px;
			vertical-align: middle;
			display: inline-block;
			animation:spinner2 2s infinite;;
		}
		&.button-0{
			background:#ffb243;
			color:#fff;
			height:40px;
			line-height:40px;
			&.tk-disabled{
				background:#f7db9d;
			}
		}
		&.button-1{
			background:#4a4c5b;
			color:#fff;
			&:active{
				background:#444654;
			}
		}
		&.button-2{
			z-index:100;
			margin-left:0px;
			margin-right:0px;
			background:#FCBD3A;
			color:#fff;
			border-radius:0px;
			position:fixed;
			width:100%;
			bottom:0;
			border:none;
			&.tk-disabled{
				background:#f7db9d;
			}
		}
		&.button-4{
			box-sizing: border-box;
			color:#fff;
			height:30px;
			line-height:30px;
			font-size:14px;
			border-radius:4px;
			background:#FCBD3A;
			width:100%;
			position:absolute;
			bottom:0;
		}
	}
	
</style>