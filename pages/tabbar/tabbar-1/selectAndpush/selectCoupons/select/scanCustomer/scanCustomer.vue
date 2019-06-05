<template>
	<view class="body">
		<view class="content">
			<scroll-view class="content-main" scroll-y="true">
				<view class="picture-avtatar">
					<image class="avatar" v-for="iterm in avatars" :src="iterm.author_image"></image>
				</view>
			</scroll-view>
		</view>
		<view class="content-bottom">
			<button class="btn" @click="jump">确定名单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				avatars: [],
				// couponsInfor: {}
			};
		},
		onLoad(res) {
			var that = this
			console.log(res.userid)
			that.avatars = JSON.parse(res.userid)
			// that.couponsInfor = JSON.parse(res.couponsInfor)
			// console.log(that.couponsInfor)
		},
		methods: {
			jump: function() {
				uni.navigateTo({
					url: './startSelect/scanCoupons/scanCoupons?avatars=' + JSON.stringify(this.avatars) 
					// + '&couponsInfor=' + JSON.stringify(
					// 	this.couponsInfor)
				})
			}
		}
	}
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
		background: #F7F8F8;
	}

	.content {
		display: flex;
		height: 80%;
		width: 100%;
		padding-left: 4%;
	}

	/* 按钮部分 */
	.content-bottom {
		display: flex;
		width: 100%;
		height: 20%;
	}

	/*  */
	.content-main {
		width: 100%;
		height: 100%;
		display: flex;
	}

	.picture-avtatar {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.btn {
		margin: auto;
		color: #FFFFFF;
		background: rgb(255, 100, 100);
		border-radius: 25upx;
		width: 300upx;
		height: 100upx;
		line-height: 100upx;
	}

	.avatar {
		display: flex;
		margin-top: 20upx;
		margin-right: 4%;
		height: 140upx;
		width: 20%;
		background: #808080;
	}
</style>
