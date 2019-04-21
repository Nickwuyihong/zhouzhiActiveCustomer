<template>
	<view class="body">
		<scroll-view class="content" :scroll-top="scrollTop" scroll-y="true">
			<view class="content-main">
				<image class="avatar" v-for="iterm in avatars" :src="iterm.author_image">
				</image>
			</view>
		</scroll-view>
		<view class="content-bottom">
			<button style="margin: auto;color: #FFFFFF;background: rgb(255,100,100);border-radius: 25upx" @click="jump">确定名单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				avatars: [],
				couponsInfor: {}
			};
		},
		onLoad(res) {
			var that = this
			console.log(res.userid)
			that.avatars = JSON.parse(res.userid)
			that.couponsInfor = JSON.parse(res.couponsInfor)
			console.log(that.couponsInfor)
		},
		methods: {
			jump: function() {
				uni.navigateTo({
					url: './startSelect/scanCoupons/scanCoupons?avatars=' + JSON.stringify(this.avatars) + '&couponsInfor=' + JSON.stringify(
						this.couponsInfor)
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
		height: 80%;
		width: 100%;
	}

	.content-bottom {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 20%;
	}

	.content-main {
		display: flex;
		position: fixed;
		height: auto;
		flex-wrap: wrap;
		width: 100%;
		padding: 4%;
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
