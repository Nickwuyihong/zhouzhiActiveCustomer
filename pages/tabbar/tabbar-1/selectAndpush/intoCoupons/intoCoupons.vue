<template>
	<view class="body">
		<scroll-view :scroll-top="0" scroll-y="true" class="content-top">
			<view style="display: flex;justify-content: flex-end;margin:20upx 10% 20upx 0;color: #898989;font-size: 32upx;">未派发</view>
			<view class="content-main" v-for="(coupon,index) in nosended">
				<view class="picture">
					<view class="picture-left">
						<view style="font-size: 30upx;margin-left: 30upx;margin-top: 10upx;">{{coupon.companyName}}</view>
						<view style="font-size: 45upx;margin-left: 30upx;margin-bottom: 10upx;">{{coupon.couponName}}</view>
					</view>
					<view class="picture-right">
						<button class="btn-1" @click="jump(index)">筛选</button>
					</view>
				</view>
			</view>
			<view style="display: flex;justify-content: flex-end;margin:20upx 10% 20upx 0;color: #898989;font-size: 32upx;">已派发</view>
			<view>
				<view class="content-main" v-for="(coupon1,index1) in issended">
					<view class="picture" style="border: 4upx solid #f8b62d;">
						<view class="picture-left" style="color: #f8b62d;">
							<view style="font-size: 30upx;margin-left: 30upx;margin-top: 10upx;">{{coupon1.companyName}}</view>
							<view style="font-size: 45upx;margin-left: 30upx;margin-bottom: 10upx;">{{coupon1.couponName}}</view>
						</view>
						<view class="picture-right">
							<button class="btn-1" style="background: #f8b62d;" @click="scan(index1)">查看</button>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- <view class="content-bottom">
			<button class='btn'>确定</button>
		</view> -->
	</view>
</template>

<script>
	import Api from '../../../../../api.js'
	import App from '../../../../../App.vue'
	export default {
		data() {
			return {
				shops: [],
				issended: [],
				nosended: [],
				couponsInfor: {},
				hadcouponsInfor:{}
			}
		},
		onLoad(data) {
			var that = this
			console.log(data);
			this.activity_id = data.activity_id;
			console.log(this.activity_id);
				uni.request({
					url: Api.getCoupons(this.activity_id),
					header: {
						token: App.getToken()
					},
					data: {
						activityId: that.activity_id,
						companyId:App.getcompany().company_id
					},
					success: function(res) {
						console.log(res);
						if (res.data.code == 200) {
							for (let c in res.data.value.coupons) {
								if (res.data.value.coupons[c].isSend == false) {
									that.nosended.push(res.data.value.coupons[c])
								} else {
									that.issended.push(res.data.value.coupons[c])
								}
							}
						}
						console.log(that.nosended);
						console.log(that.issended);
					}
				})
		},
		methods: {
			jump: function(index) {
				var that = this
				that.couponsInfor = that.nosended[index];
				console.log(that.couponsInfor);
				uni.navigateTo({
					url: '../selectCoupons/selectCoupons?couponsInfor=' + JSON.stringify(that.couponsInfor),
				})
			},
			scan:function(index){
				var that = this
					that.hadcouponsInfor = that.issended[index];
					console.log(that.hadcouponsInfor);
					uni.navigateTo({
						url: '../scanwinner/scanwinner?hadcouponsInfor=' + JSON.stringify(that.hadcouponsInfor),
					})
				}
		},
		
		}
	
</script>

<style>
	.body {
		display: flex;
		flex-direction: column;
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		background: #F7F8F8;
	}

	.content-top {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	/* .content-bottom {
		display: flex;
		height: 20%;
		width: 100%;
	} */

	/* .btn {
		display: flex;
		margin: auto;
		align-items: center;
		justify-content: center;
		border-radius: 25upx;
		background: #5acc93;
		color: #FFFFFF;
		font-size: 40upx;
		width: 270upx;
		height: 100upx;
	} */

	.content-main {
		display: flex;
		width: 100%;
		height: 20%;
		margin-bottom: 36upx;
	}

	.picture {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		height: 80%;
		width: 90%;
		margin: auto;
		border-radius: 25upx;
		border: 4upx solid #898989;
	}

	.picture-left {
		display: flex;
		justify-content: center;
		flex: 2;
		flex-direction: column;
		color: #898989;
	}

	.picture-right {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.btn-1 {
		display: flex;
		height: 70upx;
		width: 130upx;
		font-size: 30upx;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		background-color: #ff6e6e;
		border-radius: 25upx;
	}
</style>
