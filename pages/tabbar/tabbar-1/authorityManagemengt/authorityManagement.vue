<template>
	<view class="body">
		 <scroll-view  :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			 <view class="content">
			 <image class="box-image" src='../../../../static/img/tabbar/addactive.png' @click="addShop"></image>
			 <text class="text-content">添加门店</text>
              </view>
	     </scroll-view>
	</view>
</template>

<script>
	 export default {
		 data() {
			 return {
				 scrollTop:0,
				
			 }
		 },
		 methods:{
			 addShop:function(){
				uni.navigateTo({
				url:'./editShop/editShop'
				})
			 }
			 
		 }
	}
</script>

<style scoped>
	.body{
		display: block;
		height:100vh;
		width: 100%;
		background-color: #F8F8F8;
	}
	.content{
		display: flex;
		flex-direction: row;
		padding:35upx 0;
		height: 70upx;
		width: 100%;
		border-top: 1upx solid #F2F2F2;
	}
	.box-image{
			height:70upx;
			width: 70upx;
			margin: 0 10upx;
			/* border-radius: 1upx; */
	}
	.scroll-Y{
		background-color:#FFFFFF;
	}
	.text-content{
		line-height: 70upx;
		text-align:center;
		font-size: 30upx;
		color: grey;
	}
</style>
