<template>
	<view class="body">
		<view class='content'>
			<view class='content-1'>
				<image src='../../../../static/img/tabbar/me.png' class="box-image" id="0" v-on:click="jump('./operationManagement/operationManagement')"></image>
				<text class='text-world'>运营者管理</text>
			</view>
			<view class='content-1'>
				<image src='../../../../static/img/tabbar/meactive.png' class="box-image" id="0" v-on:click="jump()"></image>
			<text class='text-world'>劵核销员管理</text>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	        fullHeight:document.documentElement.clientHeight,
			fullWidth:document.documentElement.clientWidth
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url
				});
			}
		},
		mounted(){
			const that = this
			window.onresize = () =>{
				return (()=> {
					window.fullHeight = document.documentElement.clientHeight
					window.fullWidth = document.documentElement.clientWidth
					that.fullWidth =window.fullWidth
					that.fullHeight =window.fullHeight
				})()
			}
			console.log(this.fullHeight)
			console.log(this.fullWidth)
		}
	}
</script>

<style scoped>
	.body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 90vh;
		width: 100%;
	}
	.box-image{
		   display: block;
			height: 100upx;
			width: 100upx;
			border-radius: 100%;
			 margin: auto;
			margin-bottom: 0;		
	}
	.content-1{
		display: block;
		margin-bottom:150upx;
	}
	.content{
	}
	.text-world{
		text-align:center;
		display:block;
		margin:auto;
		font-size: 37upx;
		color: grey;
	}
</style>
