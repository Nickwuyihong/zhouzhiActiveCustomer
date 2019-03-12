<template>
	<view class="body">
		<view class="content">
			<image src="../../../static/img/scan.png" class="box-image"></image>
			<text style="margin: auto;font-size: 50upx;font-weight: bold;">扫一扫</text>
		</view>
		<view class="bottom">
			<view v-for="item in items" :key="item.index" class="items">
				<image :src='item.src' class="box-image1" :id="item.index" v-on:click="jump"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;">{{item.text}}</text>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				items: [{
						src: '../../../static/img/qa.png',
						text: '活动编辑'
					},
					{
						src: '../../../static/img/release.png',
						text: '券中心'
					},
					{
						src: '../../../static/img/video.png',
						text: '筛选及发布'
					},
					{
						src: '../../../static/logo.png',
						text: '权限管理'
					},
				]
			};
		},
		onLoad() {},
		methods: {
			jump:function(){
				console.log('adadasd')
				uni.navigateTo({
					url:'editActive/editActive'
				})
			}
		}
	};
</script>

<style>
	.body {
		height: 83vh;
		width: 100%;
	}

	.content {
		text-align: center;
		height: 80%;
		width: 100%;
		background: #f2f2f2;
		display: flex;
		flex-direction: column;
	}

	.box-image {
		width: 600upx;
		height: 600upx;
		margin: auto;
		margin-bottom: 0;
	}

	.bottom {
		height: 20%;
		width: 100%;
		display: flex;
		align-items: center;
	}
	
	.box-image1{
		height: 100upx;
		width: 100upx;
		border-radius: 100%;
		margin: auto;
		margin-bottom: 0;
	}
	
	.items{
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;
		height: 100%;
	}
</style>
