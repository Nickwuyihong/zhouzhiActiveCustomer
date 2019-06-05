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
				<text class="text-name">优惠劵用途：</text>
				<text class="text-content">{{coupon_state}}</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">优惠劵数量：</text>
				<text class="text-content">{{coupon_number}}</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">发劵机构：</text>
				<text class="text-content">{{company_name}}</text>
			</view>
			<view class="text-wrapper">
				<text class="text-name">活动规则：</text>
			</view>
			<view class="text-content" style="margin-left: 115upx;">
				<view>1.本劵有效期见劵面所示；</view>
				<view>2.本劵为{{coupon_name}}，仅适用于本店饮品。</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Api from '../../../../../../../api.js'
	import App from '../../../../../../../App.vue'
	export default {
		
		data() {
			return {
				// couponsInfor:{},
				coupon_type_id:'',
				couponsDetail:{},
				coupon_name:'',
				coupon_state: '',
				coupon_number:'',
				company_name:App.getcompany().company_name
			};
		},
		onLoad(data) {
			var that =this;
			// that.couponsInfor=JSON.parse(data.couponsInfor);
			console.log(data)
			that.coupon_type_id=data.coupon_type_id;
			console.log(that.coupon_type_id)
			uni.request({
				url: Api.getCouponsdetail(that.coupon_type_id),
				header: {	
					token: App.getToken()
				},
				data: {
					
					id: that.coupon_type_id
				},
				success(res) {
					console.log(res)
					that.couponsDetail=res.data.value
					console.log(that.couponsDetail)
					that.coupon_name=that.couponsDetail.coupon_name
					that.coupon_state=that.couponsDetail.coupon_state
					that.coupon_number=that.couponsDetail.coupon_sum
				}
			})
		}
	}
</script>

<style>
	.body {
		background: #F7F8F8;
		width: 100%;
			/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
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
