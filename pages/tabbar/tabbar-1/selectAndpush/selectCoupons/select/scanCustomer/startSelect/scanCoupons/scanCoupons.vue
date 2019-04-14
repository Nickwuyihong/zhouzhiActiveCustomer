<template>
	<view class="body">
		<view class="content">
			<view style="font-size: 25upx;color: #808080;margin: 20upx 30upx;">本期优惠券:</view>
			<view class="content-main">
				<view class="picture">
					<view class="picture-left">
						<view :class="company_name" style="font-size: 30upx;margin-left: 30upx;margin-bottom: 20upx;">{{company_name}}</view>
						<view :class="coupon_name" style="font-size: 45upx;margin-left: 30upx;">{{coupon_name}}</view>
					</view>
					<view class="picture-right">
						<button class="btn-1" @click="scan">查看详情</button>
					</view>
				</view>
			</view>
			<view style="font-size: 27upx;color: #808080;margin: 14upx;text-align: center;">{{coupon.coupontype}}
				{{coupon.couponName}}</view>
			<view style="font-size: 25upx;color: #808080;margin:0upx 0upx 20upx 30upx;">本期名单:</view>
			<view class="content-center">
				<scroll-view class="picture-1" scroll-y="true">
					<view class="picture-avtatar">
						<view v-for="iterm in customers" class="avatar">
							{{iterm.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="content-bottom">
			<button class="btn" @click="jump">确定发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				company_name: '新枝公司',
				coupon_name: '周知满减劵',
				coupon: {},
				customers: []
			};
		},
		methods: {
			jump: function() {
				uni.navigateTo({

				})
			},
			scan: function() {
				uni.navigateTo({
					url: "./couponsDetails/couponsDetails"
				})
			}
		},
		onLoad(data) {
			console.log(data);
			this.coupon = JSON.parse(data.img);
			this.customers = JSON.parse(data.avatars);
			console.log(this.coupon);
		}
	}
</script>

<style scoped>
	.body {
		height: calc(100vh - var(--window-top));
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
		width: 100%;
		height: 20%;
	}

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
		height: 80%;

	}

	.picture-1 {
		background: #BBBBBB;
		width: 80%;
		height: 100%;
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
