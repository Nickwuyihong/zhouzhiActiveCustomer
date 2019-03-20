<template>
	<view class="body">
		<view class="title">活动名称</view>
		<view class="activeName">
			<input type="text" value="" placeholder="请输入活动名称" style="width: 90%;margin: auto;" />
		</view>
		<view class="title">活动内容</view>
		<view class="preview">
			<view class="preview_img">

			</view>
			<view class="preview_text">预览图</view>
		</view>
		<view class="add_img">
			<view style="margin: auto;margin-left: 50upx;">添加广告图片</view>
			<image src="../../../../../static/img/add_topic.png" v-on:click="add_img"></image>
			<view style="margin: auto;margin-left: 50upx;margin-top: 0;">输入广告链接</view>
			<textarea type="text" value="" placeholder="请输入广告推文链接" style="width: 85%;margin: auto;margin-left: 70upx;margin-top: 0;color: #007AFF;height: 100upx;" />
			</view>
		<view class="title" style="margin-top: 50upx;">奖励设置</view>
		<view class="add_reward">
			<image src="../../../../../static/img/add_admin.png"></image>
			<text>添加奖励</text>
		</view>
		<view class="title"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {
			jump: function(e) {
				console.log(e)
				if (e.currentTarget.id == 0) {
					uni.navigateTo({
						url: ''
					})
				} else if (e.currentTarget.id == 1) {
					uni.navigateTo({
						url: ''
					})
				} else {
					uni.navigateTo({
						url: ''
					})
				}
			},
			add_img:function(){
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(tempFilePaths)
					}
				})
			}
		}
	}
</script>

<style>
	.body {
		width: 100%;
		background: #F2F2F2;
		display: flex;
		flex-direction: column;
	}

	.title {
		height: 100upx;
		width: 90%;
		text-align: left;
		display: flex;
		align-items: center;
		margin: auto;
	}

	.activeName {
		width: 100%;
		height: 100upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	.preview {
		width: 100%;
		height: 450upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.preview_img {
		width: 90%;
		height: 300upx;
		margin: auto;
		border: #BBBBBB solid 5upx;
		border-radius: 20upx;
	}

	.preview_text {
		width: 90%;
		height: 50upx;
		margin: auto;
		margin-top: 0;
		text-align: center;
	}

	.add_img {
		display: flex;
		flex-direction: column;
		height: 550upx;
		width: 100%;
		background: #FFFFFF;
		margin-top: 40upx;
		align-items: flex-start;
	}

	.add_img image {
		height: 200upx;
		width: 200upx;
		margin: auto;
		margin-left: 70upx;
		margin-top: 0;
	}

	.add_reward {
		display: flex;
		height: 200upx;
		width: 100%;
		background: #FFFFFF;
		align-items: center;
	}
	
	.add_reward image{
		height: 100upx;
		width: 100upx;
		margin-left: 40upx;
	}
	
	.add_reward text{
		margin-left: 40upx;
	}
</style>
