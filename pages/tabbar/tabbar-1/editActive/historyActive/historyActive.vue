<template>
	<body>
		<view class="body">
			<view v-for="(item,index) in activityList" :key="index" :id="item.activity_id" class="preview">
				<view class="preview_text">{{item.activity_name}}</view>
				<view class="preview_img">

				</view>
			</view>
		</view>
	</body>
</template>

<script>
	import Api from "../../../../../api.js"
	import App from "../../../../../App.vue"
	export default {
		data() {
			return {
				activityList: []
			}
		},
		onLoad() {
			var that = this
			uni.request({
				url: Api.companyActivity(),
				header: {
					token: App.getToken()
				},
				data: {
					companyId: 5
				},
				success: function(res) {
					console.log(res)
					if (res.data.code == 200) {
						that.activityList = res.data.value
					} else {
						uni.showToast({
							title: '获取活动列表失败',
							icon: 'none'
						})
					}
				}
			})
		},
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
	uni-page-wrapper {
		background: #F2F2F2;
	}

	html,
	body {
		margin: 0;
		padding: 0;
		outline: none;
		list-style: none;
		width: 100%;
		height: 100%;
		font-family: "微软雅黑";
		background: #F2F2F2;
	}

	.body {
		/* display: flex;
		flex-direction: column; */
		display: block;
		/* 		height: 80vh; */
		/* overflow: scroll; */
		width: 100%;
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		overflow: scroll;
		/* #endif */
		/* #ifndef H5 */
		height: auto;
		/* #endif */
		background: #F2F2F2;
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
		margin-bottom: 20upx;
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
		margin-bottom: 0;
		text-align: left;
	}
</style>
