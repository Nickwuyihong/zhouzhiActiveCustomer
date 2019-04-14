<template>
	<view class="body">
		<view class="content">
			<image src="../../../static/img/scan.png" class="box-image" @click="scanning"></image>
			<text style="margin: auto;font-size: 50upx;font-weight: bold;">扫一扫</text>
		</view>
		<view class="bottom">
			<view v-for="(item,index) in items" :key="item.index" class="items">
				<image :src='item.src' class="box-image1" :id="item.index" v-on:click="jump(index)"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;">{{item.text}}</text>
			</view>
		</view>
	</view>

</template>

<script>
	import App from '../../../App.vue'
	import Api from '../../../api.js'
	var app = getApp()
	export default {
		data() {
			return {
				title: 'Hello',
				items: [{
						src: '../../../static/img/activeCenter.png',
						text: '活动中心'
					},
					{
						src: '../../../static/img/screening&publishing.png',
						text: '筛选及发布'
					},
					{
						src: '../../../static/img/privilegeManagement.png',
						text: '管理'
					},
				]
			};
		},
		onLoad() {
			console.log(App.getToken())
			uni.request({
				url: Api.usersAccount(),
				header: {
					token: App.getToken()
				},
				success: function(res) {
					console.log(res)
				}
			})
		},
		methods: {
			jump: function(index) {
				console.log('adadasd');
				if (index == 2) {
					uni.navigateTo({
						url: 'authorityManagemengt/authorityManagement',
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: 'selectAndpush/selectAndpush',
					})
				} else {
					uni.navigateTo({
						url: 'editActive/editActive',
					})
				}
			},
			scanning: function() {
				uni.navigateTo({
					url: 'scanning/success',
				})
			}
		}
	};
</script>

<style scoped>
	.body {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
	}

	.content {
		text-align: center;
		height: 88%;
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
		height: 12%;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.box-image1 {
		height: 100upx;
		width: 100upx;
		border-radius: 100%;
		margin: auto;
		margin-bottom: 0;
	}

	.items {
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;
		height: 100%;
	}
</style>
