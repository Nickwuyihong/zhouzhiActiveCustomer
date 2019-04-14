<template>
	<view class="body">
		<view class="content-top">
			<view class="content-top-main"></view>
		</view>

		<scroll-view class="content-bottom" scroll-y="true">
			<view class="text-wrapper1">
				<text class="text-name" style="color: #3e3a39;">优惠劵详情</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">优惠名称：</text>
				<text class="text-content">{{coupon_name}}</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">优惠劵码：</text>
				<text class="text-content">{{coupon_number}}</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">有效日期：</text>
				<text class="text-content">{{date}}</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">可用时间：</text>
				<text class="text-content">{{time}}</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">状态：</text>
				<text class="text-content">{{status}}</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">活动规则：</text>
			</view>
			<view class="text-content" style="margin-left: 115upx;">
				<view>1.本卷有效期见卷面所示；</view>
				<view>2.本卷为{{coupon_name}}，仅适用于本店饮品。</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coupon_name: "买一送一劵",
				coupon_number: '1234589021346799',
				date: '2019.03.17-2019.03.24',
				time: '周一至周日 15:00后',
				status: '未兑换'
			};
		}
	}
</script>

<style>
	.body {
		background: #F7F8F8;
		width: 100%;
		height: calc(100vh - var(--window-top));
	}

	.content-top {
		display: flex;
		height: 40%;
		width: 100%;
	}

	.content-top-main {
		width: 70%;
		height: 80%;
		background: #BBBBBB;
		margin: auto;
	}

	.content-bottom {
		display: flex;
		flex-direction: column;
		height: 60%;
		width: 100%;
	}

	.text-wrapper1 {
		color: #3e3a39;
		font-size: 35upx;
		margin-left: 40upx;
		margin-bottom: 40upx;
	}

	.text-wrapper {
		margin-left: 80upx;
		margin-bottom: 40upx;
		font-size: 35upx;
	}

	.text-name {
		color: #727171;
	}

	.text-content {
		color: #3E3A39;
	}
</style>
