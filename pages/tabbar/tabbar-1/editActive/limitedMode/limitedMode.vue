<template>
	<view class="body">
		<view class="title">
			活动名称
		</view>
		<view class="activeName">
			<input type="text" value="" placeholder="请输入活动名称" style="width: 90%;"/>
		</view>
		<view class="title">
			活动内容
		</view>
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
		height: 65upx;
		width: 100%;
		padding: 25upx;
		text-align: left;
		display: flex;
		align-items: center;
	}
	.activeName{
		width: 100%;
		height: 70upx;
		padding: 25upx;
		background: #FFFFFF;
	}
</style>
