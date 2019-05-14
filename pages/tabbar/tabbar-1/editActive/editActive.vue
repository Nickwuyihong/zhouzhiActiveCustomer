<template>
	<view class="body">
		<view class="three">
			<view class="items" style="border-bottom:3px #F2F2F2 solid;border-right:3px #F2F2F2 solid;" id="0" v-on:click="jump">
				<image src='../../../../static/img/rankReward.png' class="box-image1"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;margin-top: 0;">排名奖励</text>
			</view>
			<view class="items" style="border-bottom:3px #F2F2F2 solid;" id="1" v-on:click="jump">
				<image src='../../../../static/img/randomReward.png' class="box-image1"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;margin-top: 0;">随机模式</text>
			</view>
			<view class="items" style="border-right:3px #F2F2F2 solid;" id="2" v-on:click="jump">
				<image src='../../../../static/img/historyActive.png' class="box-image1"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;margin-top: 0;">历史活动</text>
			</view>
		</view>
	</view>
</template>

<script>
	import App from '../../../../App.vue'
	import Api from '../../../../api.js'
	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {
			jump: function(e) {
				console.log(e)
				if (App.getToken()) {
					if (e.currentTarget.id == 0) {
						uni.navigateTo({
							url: 'limitedMode/limitedMode'
						})
					} else if (e.currentTarget.id == 1) {
						uni.navigateTo({
							url: 'randomMode/randomMode'
						})
					} else {
						uni.navigateTo({
							url: 'historyActive/historyActive'
						})
					}
				} else {
					uni.navigateTo({
						url: '../login'
					})
				}
			}
		}
	}
</script>

<style>
	.body {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
	}

	.box-image1 {
		height: 150upx;
		width: 150upx;
		border-radius: 100%;
		margin: auto;
		margin-bottom: 0;
	}

	.three {
		margin: auto;
		margin-top: 20upx;
		width: 90%;
		height: 50%;
		display: block;
	}

	.items {
		position: relative;
		float: left;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 49%;
		width: 49%;
	}
</style>
