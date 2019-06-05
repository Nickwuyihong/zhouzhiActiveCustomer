
<template>
	<view class="body">
		<scroll-view class="content" :scroll-y="true">
			<view style="font-size: 30upx;color: #000;margin: 20upx 30upx;font-weight: bold;">当前所在活动：{{actName}}</view>
			
				<view class="content-main" v-for="(iterm,index) in activity" :key="iterm.coupon_type_id">
					<view style="font-size: 25upx;color: #808080;margin-bottom: 30upx;margin-left: 20upx;">
						<text style="margin-right: 20upx;">{{index+1}}等奖</text>
						<text>数量：</text>
						<text>{{iterm.coupon_sum}} 张</text>
						 <text style="display: inline;position: absolute;right: 30upx;" v-if="iterm.isSend==false">未派发</text>
						<text style="display: inline;position: absolute;right: 30upx;" v-if="iterm.isSend==true">已派发</text>
					</view>
					<view class="picture">
						<view class="picture-left">
							<view style="font-size: 30upx;margin-left: 30upx;margin-top: 10upx;">{{companyName}}</view>
							<view style="font-size: 45upx;margin-left: 30upx;">{{iterm.couponName}}</view>
						</view>
						<view class="picture-right">
							<button class="btn-1" @click="jump(index)" style="background: #22BB22;" v-if="iterm.isSend==false">查看详情</button>
							<button class="btn-1" @click="scan(index)" v-if="iterm.isSend==true">查看名单</button>
						</view>
					</view>
				</view>
		</scroll-view>
	</view>
</template>
<script>
	import Api from '../../../../../api.js'
	import App from '../../../../../App.vue'
	export default {
		data() {
			return {
				companyName: App.getcompany().company_name,
				shops: [],
				couponsInfor: {},
				hadcouponsInfor:{},
				activity:[],
				actName:''
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
						that.activity = res.data.value.coupons
						that.actName = res.data.value.actName
					}
				})
		},
		methods: {
			jump: function(index) {
				var that = this
				uni.navigateTo({
					 url: "../selectCoupons/select/scanCustomer/startSelect/scanCoupons/couponsDetails/couponsDetails?coupon_type_id=" + this.activity[index].coupon_type_id
				})
			},
			scan:function(index){
				var that = this
				that.hadcouponsInfor=this.activity[index]
					uni.navigateTo({
						url: '../scanwinner/scanwinner?hadcouponsInfor=' + JSON.stringify(that.hadcouponsInfor),
					})
				}
		},
		
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
		background: #F7F8F8;
	}
	
	.content {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.content-main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 200upx;
		margin-bottom: 30upx;
	}
	
	.picture {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		height: 90%;
		width: 80%;
		margin: auto;
		border-radius: 25upx;
		border: 4upx solid #ffdd00;
	}
	
	.picture-left {
		display: flex;
		justify-content: center;
		flex: 1;
		flex-direction: column;
		color: #f8b62d;
	}
	
	.picture-right {
		display: flex;
		flex: 1;
	}
	
	.content-center {
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 500upx;
		margin-bottom: 100upx;
	}
	
	.picture-1 {
		background: #BBBBBB;
		width: 80%;
		height: 90%;
		margin: auto;
		padding-left: 3.3%;
		padding-top: 3.3%;
	}
	
	.picture-avtatar {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.avatar {
		display: flex;
		width: 20%;
		height: 100upx;
		margin-right: 5%;
		margin-bottom: 20upx;
		background: #808080;
	}
	
	.content-bottom {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 20%;
		bottom: 0;
	}
	
	.btn {
		display: block;
		margin: auto;
		color: #FFFFFF;
		background: #5acc93;
		border-radius: 25upx;
		width: 300upx;
	}
	
	.btn-1 {
		display: flex;
		height: 70upx;
		width: 200upx;
		font-size: 30upx;
		margin: auto;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		background-color: #f8b62d;
		border-radius: 25upx;
	}
	
	.dialog-cover {
		display: flex;
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 300;
		background: rgba(f, f, f, 0.8);
	}
	
	.sure {
		display: flex;
		flex-direction: column;
		height: 300upx;
		width: 500upx;
		background: #FFFFFF;
		border: 1upx solid #808080;
		margin: auto;
	}
</style>
