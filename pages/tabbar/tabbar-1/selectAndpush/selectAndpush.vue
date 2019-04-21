<template>
	<view class="body">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="content" v-for="(activity,index) in activities">
				<view class="content-left">
					<text class="text-content-1" style="color: #4d4d4d;">{{activity.activity_name}}</text>
				</view>
				<view class="content-right">
					<button class='btn' @click="intocoupons(index)" style="background: #FF6E6E;">进入</button>
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
				scan: 'true',
				scrollTop: 0,
				shops: [],
				activity_id: '',
				activities: [],
				activitystate: []
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
							url: Api.getActivity(),
							header: {
								token: App.getToken()
							},
							data: {
								companyId: that.shops[id].company_id
							},
							success: function(res) {
								console.log(res)
								if (res.data.value.length > 0) {
									for (let iterm in res.data.value) {
										that.activities.push(res.data.value[iterm]);
										// 										uni.request({
										// 											url: Api.getCoupons(res.data.value[iterm].activity_id),
										// 											header: {
										// 												token: App.getToken()
										// 											},
										// 											data: {
										// 												companyId: that.shops[id].company_id,
										// 												activityId: res.data.value[iterm].activity_id
										// 											},
										// 											success: function(res) {
										// 												var a = 1;
										// 												console.log(res);
										// 												for (let iterm in res.data.value.coupons) {
										// 													if (res.data.value.coupons[iterm].issend == false) {
										// 														a = 2;
										// 														break;
										// 													}
										// 												}
										// 												if (a == 1) {
										// 													that.activitystate.push(that.show1) 
										// 												} else {
										// 													that.activitystate.push (that.show2)
										// 												}
										// 												console.log(that.activitystate);
										// 											}
										// 										})
									}
								}
								console.log(that.activities);
							}
						})
					}
				}
			})
		},
		methods: {
			intocoupons: function(index) {
				var that = this;
				that.activity_id = that.activities[index].activity_id;
				uni.navigateTo({
					url: 'intoCoupons/intoCoupons?activity_id=' + JSON.stringify(that.activity_id) + '&shops=' + JSON.stringify(
						that.shops)
				});
			}
		}
	}
</script>

<style scoped>
	.body {
		display: block;
			/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
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
		margin-right: 30upx;
		margin-left: 20upx;
	}

	.text-content-2 {
		font-size: 35upx;
		color: #b5b5b6;
	}

	.content-right {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.btn {
		display: flex;
		margin-right: 30upx;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #FFFFFF;
		border-radius: 30upx;
		width: 130upx;
		height: 70upx;
	}
</style>
