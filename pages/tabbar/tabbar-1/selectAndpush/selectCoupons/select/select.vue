<template>
	<view class="body">
		<scroll-view class="content" :scroll-top="scrollTop" scroll-y="true" >
		<view class="content-main"></view>
		<view class="content-bottom">
			<view class="content-bottom-1">
				<view style="display: flex;align-items: center; margin:0upx 20upx;">
				<image class="img" src="../../../../../../static/img/tabbar/news.png"></image>
				</view>
				<view style="display: flex;align-items: center;">此内容为该用户活动期间第2次发布。</view>
			</view>
			<view class="content-bottom-2">
				<view class="text-left">
					<view style="display:flex;align-items: center;">
						<button style="color: #FFFFFF;background: rgb(255,100,100);
		border-radius: 25upx;" @click="jump">提交筛选名单</button>
					</view>
				</view>
				<view class="text-right">
					<view style="display:flex;align-items: center;font-size: 35upx;">
						<text>选择(3)</text>
						<checkbox style="margin-right: 20upx;margin-left: 15upx;"></checkbox>
					</view>
				</view>
			</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:0
			};
		},
		methods:{
			jump:function(){
				uni.navigateTo({
					url:"./scanCustomer/scanCustomer"
				})
			}
		}
	}
</script>

<style scoped>
    .content{
	position: fixed;
	height: 100%;
	width: 100%;
	background: #F2F2F2;
	}
	.content-bottom{
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		bottom: 0;
		background: #FFFFFF;
	}
	.content-bottom-1{
		font-size: 30upx;
		color: #000000;
		display: flex;
		flex-direction: row;
		width: 100%;
		height:70upx;
		border-bottom: 5upx solid #F2F2F2;
	}
	.content-bottom-2{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 150upx;
	}
	.img{
		height: 50upx;
		width: 50upx;
	}
	.text-left{
		display: flex;
		flex: 1;
		justify-content: center;
	}
	.text-right{
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}
</style>
