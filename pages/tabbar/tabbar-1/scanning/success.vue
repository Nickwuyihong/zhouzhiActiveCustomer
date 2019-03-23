<template>
	<view class="body">
		<view class="content-top">
			<text class="text1">扫描结果</text>
			<view class="img">
				<image class="img-image" src="../../../../static/img/qa.png"></image>
			</view>
			<text class="text2">买一赠一劵</text>
			<view class="content-bottom">
				<button class="btn" @click="sure">确认兑换</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			sure: function() {
				uni.navigateTo({
					url: './sure',
				})
			}
		}

	}
</script>

<style>
	.body {
		margin-top: 200upx;
		display: flex;
		flex-direction: column;
	}

	.content-top {
		display: flex;
		flex-direction: column;
	}

	.text1 {
		display: flex;
		margin: 10upx;
		color: grey;
		font-size: 30upx;
		align-items: center;
		justify-content: center;
	}

	.text2 {
		color: grey;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img-image {
		margin: 0 auto;
		height: 300upx;
		width: 300upx;
	}

	.img {
		display: flex;
		margin: 30upx 0;
	}

	.btn {
		color: #FFFFFF;
		background: green;
		margin-top: 100upx;
		border-radius: 25upx;
		height: 100Upx;
		width: 450upx;
	}
</style>
