<template>
	<view class="body">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="content" v-for="(coupon,index) in coupons">
				<view class="content-left">
					<text class="text-content-1" style="color: #4d4d4d;">{{coupon.date}}</text>
					<text class="text-content-2" style="color: #b5b5b6;">({{coupon.title}})</text>
				</view>
				<view class="content-right">
					<button v-color="coupon.features" class='btn' @click="scanFeatures(index)">{{coupon.features}}</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import App from '../../../../App.vue'
	import Api from '../../../../api.js'
	export default {
		data() {
			return {
				scrollTop: 0,
				companyid: [],
				shops: [],
				coupons: [{
						date: '2019-2-22期',
						title: '未发布优惠券',
						features: '筛选'
					},
					{
						date: '2019-2-22期',
						title: '已发布优惠券',
						features: '查看'
					},
					{
						date: '2019-5-22期',
						title: '已发布优惠券',
						features: '筛选'
					}
				],
			}
		},
		onLoad() {
			var that = this;
			uni.request({
				url: Api.shop(),
				header: {
					token: App.getToken()
				},
				success: function(res) {
					console.log(res)
					that.shops = res.data.value;
					console.log(that.shops);
					for (let id in that.shops) {
						console.log(that.shops[id].company_id)
						uni.request({
							url: Api.companyId(that.shops[id].company_id),
							header: {
								token: App.getToken()
							},
							success: function(res) {
								console.log(res)
							}
						})
					}
				}
			})
		},
		methods: {
			scanFeatures: function(index) {
				if (this.coupons[index].features == '查看') {
					this.scan(index);
				} else {
					this.select(index);
					console.log(1)
				}
			},
			scan: function(index) {
				uni.navigateTo({
					url: './scanCoupons/scanCoupons'
				})
			},
			select: function(index) {
				uni.navigateTo({
					url: './selectCoupons/selectCoupons'
				})
			}

		},
		directives: {
			'color': {
				bind(el, binding, vnode) {
					if (binding.value == '查看') {
						el.style.background = '#5acc93';
					} else {
						el.style.background = '#ff6e6e';
					}
				}
			}
		},
	}
</script>

<style scoped>
	.body {
		display: block;
		height: calc(100vh - var(--window-top));
		width: 100%;
		background-color: #f7f8f8;
	}

	.content {
		display: flex;
		height: 132upx;
		width: 100%;
		border-top: 4upx solid #F7F8F8;
	}

	.scroll-Y {
		background-color: #FFFFFF;
	}

	.content-left {
		display: flex;
		flex: 5;
		align-items: center;
	}

	.text-content-1 {
		font-size: 35upx;
		margin-right: 20upx;
		margin-left: 20upx;
	}

	.content-right {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.btn {
		display: flex;
		margin-right: 20upx;
		align-items: center;
		font-size: 30upx;
		color: #FFFFFF;
		border-radius: 30upx;
		width: 120upx;
		height: 60upx;
	}
</style>
