<template>
	<view class="body">
		<view class="content">
			<view style="font-size: 25upx;color: #808080;margin: 20upx 30upx;">本期优惠券:</view>
			<view class="content-main">
				<view class="picture">
					<view class="picture-left">
						<view  style="font-size: 30upx;margin-left: 30upx;margin-bottom: 20upx;">{{company_name}}</view>
						<view  style="font-size: 45upx;margin-left: 30upx;">{{coupon_name}}</view>
					</view>
					<view class="picture-right">
						<button class="btn-1" @click="scan">查看详情</button>
					</view>
				</view>
			</view>
			
			<view style="font-size: 25upx;color: #808080;margin:30upx 0upx 20upx 30upx;">获奖名单:</view>
			<view class="content-center">
				<scroll-view class="picture-1" scroll-y="true">
					<view class="picture-avtatar">
						<image v-for="iterm in customers" class="avatar" :src="iterm.headimg"></image>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import Api from "../../../../../../../api.js"
	import App from "../../../../../../../App.vue"
	export default {
		data() {
			return {
				company_name: '',
				coupon_name: '',
				coupon_type: '',
				coupon: {},
				customers: [],
				hadcouponsInfor: {}
			};
		},
		methods: {
			scan: function() {
				uni.navigateTo({
					url: "../selectCoupons/select/scanCustomer/startSelect/scanCoupons/couponsDetails/couponsDetails?coupon_type_id="+this.coupon_type
				})
			}
		},
		onLoad(data) {
			var that=this
			console.log(data);
			this.hadcouponsInfor = JSON.parse(data.hadcouponsInfor)
			this.company_name = this.hadcouponsInfor.companyName
			this.coupon_name = this.hadcouponsInfor.couponName
			this.coupon_type = this.hadcouponsInfor.coupon_type_id
			console.log(this.coupon_type)
			console.log(this.hadcouponsInfor)
			uni.request({
				url:Api.getUser(that.coupon_type),
				header:{
					token:App.getToken()
				},
				data:{
					typeId:that.coupon_type
				},
				success(res) {
					console.log(res)
					that.customers=res.data.value
					console.log(that.customers)
				}
			})
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
    /* 优惠券+查看详情 */
	.content {
		height: 90%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
   /* 查看详情框 */
	.content-main {
		display: flex;
		width: 100%;
		height: 20%;
	}
   /* 查看详情框内容 */
	.picture {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		height: 100%;
		width: 80%;
		margin: auto;
		border-radius: 25upx;
		border: 4upx solid #ffdd00;
	}
   /* 查看详情框左侧 */
	.picture-left {
		display: flex;
		justify-content: center;
		flex: 1;
		flex-direction: column;
		color: #f8b62d;
	}
    /* 查看详情框右侧 */
	.picture-right {
		display: flex;
		flex: 1;
	}
    /* 下面显示名单框 */
	.content-center {
		display: flex;
		width: 100%;
		height: 70%;
	}
  /* 名单容器scrollview */
	.picture-1 {
		background: #BBBBBB;
		width: 80%;
		height: 97%;
		margin: auto;
		padding-left: 3.3%;
		padding-top: 3.3%;
	}
    /* 名单容器scrollview 内容 */
	.picture-avtatar {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	/* 名单头像 */
	.avatar {
		display: flex;
		width: 20%;
		height: 100upx;
		margin-right: 5%;
		margin-bottom: 20upx;
		background: #808080;
	}
	/* 查看详情按钮 */
	.btn-1 {
		display: flex;
		height: 70upx;
		width: 80%;
		font-size: 30upx;
		margin: auto;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		background-color: #f8b62d;
		border-radius: 25upx;
	}
</style>
