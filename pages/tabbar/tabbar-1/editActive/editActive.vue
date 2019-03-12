<template>
	<view class="body">
		<view class="three">
			<view class="items" style="border-bottom:3px #F2F2F2 solid;border-right:3px #F2F2F2 solid;">
				<image src='../../../../static/img/qa.png' class="box-image1" id="0" v-on:click="jump"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;">详情页编辑</text>
			</view>
			<view class="items" style="border-bottom:3px #F2F2F2 solid;">
				<image src='../../../../static/img/release.png' class="box-image1" id="1" v-on:click="jump"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;">发布页编辑</text>
			</view>
			<view class="items" style="border-right:3px #F2F2F2 solid;">
				<image src='../../../../static/img/video.png' class="box-image1" id="2" v-on:click="jump"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;">历史活动</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	.body {
		height: 90vh;
		width: 100%;
	}

	.box-image1 {
		height: 100upx;
		width: 100upx;
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
