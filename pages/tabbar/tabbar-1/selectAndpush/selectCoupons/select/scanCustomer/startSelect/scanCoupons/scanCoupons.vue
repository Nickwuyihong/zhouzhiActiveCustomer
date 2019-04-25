<template>
	<view class="body">
		<view class="content">
			<view class="content-main">
				<view style="font-size: 25upx;color: #808080;margin: 20upx 30upx;">本期优惠券:</view>
				<view class="picture">
					<view class="picture-left">
						<view style="font-size: 30upx;margin-left: 30upx;margin-top: 10upx;">{{couponsInfor.companyName}}</view>
						<view style="font-size: 45upx;margin-left: 30upx;">{{couponsInfor.couponName}}</view>
					</view>
					<view class="picture-right">
						<button class="btn-1" @click="scan">查看详情</button>
					</view>
				</view>
			</view>
			<view class="content-center" >
				<view style="font-size: 25upx;color: #808080;margin:20upx 30upx;">本期名单:</view>
				<scroll-view class="picture-1" scroll-y="true" :scroll-top="0">
					<view class="picture-avtatar">
						<image v-for="iterm in customers" class="avatar" :src="iterm.author_image"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="content-bottom">
			<button class="btn" @click="jump">确定发布</button>
		</view>
		<view class="dialog-cover" v-if="showed">
			<view class="sure">
				<view style="display: flex;flex:1;align-items: center;justify-content: center;">发布成功</view>
				<view style="display: flex;flex:1;">
					<button class="btn" @click="recall">回到主页</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Api from '../../../../../../../../../api.js'
	import App from '../../../../../../../../../App.vue'
	export default {
		data() {
			return {
				couponsInfor: {},
				customers: [],
				showed: false
			};
		},
		methods: {
			jump: function() {
				var that = this
				for (let iterm in that.customers) {
					uni.request({
						url: Api.postCoupons(),
						method: 'POST',
						header: {
							"Content-Type": "application/x-www-form-urlencoded",
							token: App.getToken()
						},
						data: {
							userId: that.customers[iterm].author_id,
							companyId: '5',
							typeId: that.couponsInfor.coupon_type_id
						},
						success(res) {
							console.log(res)
							
						}
					})
					console.log(that.customers[iterm].author_id)
					console.log(that.couponsInfor.coupon_type_id)
				}
				that.showed = true;
			},
			recall: function() {
				uni.navigateTo	({
					url: '../../../../../selectAndpush',
				});
				this.showed = false;	
			},
			scan: function() {
				uni.navigateTo({
					url: "./couponsDetails/couponsDetails?couponsInfor=" + JSON.stringify( this.couponsInfor)
				})
			}
		},
		onLoad(data) {
			console.log(data);
			this.customers = JSON.parse(data.avatars);
			this.couponsInfor = JSON.parse(data.couponsInfor);
			console.log(this.couponsInfor);
			console.log(this.customers);
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
		display: flex;
		flex-direction: column;
	}

	.content-main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 20%;
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
		height: 80%;
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
		height: 100%;
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
