<template>
	<div class="zhzx">
		<theader :active="5"></theader>
		<div id="hv-wrapper">
			<!--/tree-->
			<div class="listBoxfirst">			    
			此处是目录树
			</div>			
			
			<!--/mapBox-->
			<div class="mapBox">
				此处是地图				
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			
		}
	}
</script>

<style lang="less">
	// css
	.zhzx{
		.listBoxfirst{
    width: 463px;
    height: 880px;
    color: #fff;
    position: absolute;
    top: 0;
    left:0;
    border-radius: 16px;
	background: #f00;
}
.mapBox{
    width: 1390px;
    height: 880px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 483px;
	background:#1274D2;
	border-radius: 20px;
}
	}
</style>
