<template>
	<view class="body">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<!-- <view class="text-content-1" style="color: #4d4d4d;background: ;">阶梯奖励活动数量为：{{number}}</view> -->
			<view class="content" v-for="(activity,index) in activities" :key="index">
				<view class="content-left" >
					<text class="text-content-1" style="color: #4d4d4d;">{{activity.activity_name}}</text>
					<text style="font-size: 35upx;color: #f8b62d;" @click="intocoupons(index)">（活动详情）</text>
				</view>
				<view class="content-right">
					<button class='btn'  style="background: #FF6E6E;" @click="selectCoupons(index)">筛选</button>
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
				number:0,
				scan: 'true',
				scrollTop: 0,
				shops: [],
				activity_id: '',
				activities: [],
				activitystate: []
			}
		},
		onShow() {
			var that = this;
			that.activities.length=0;
			if (App.getToken()) {
							uni.request({
						url: Api.getActivity(),
						header: {
							token: App.getToken()
						},
						data: {
							companyId:App.getcompany().company_id
						},
						success: function(res) {
							console.log(res)
							if (res.data.code == 16000) {
								uni.showToast({
									title: '您没有权限',
									duration: 2000,
									icon:'none'
								})
							} else {
								if (res.data.value.length > 0) {
									for (let iterm in res.data.value) {
										if(res.data.value[iterm].activity_type==0&&res.data.value[iterm].is_delete==0)
										that.activities.push(res.data.value[iterm]);
									}
								}
								if(that.activities.length==0){
									uni.showToast({
										title: '您暂时没有活动',
										duration: 2000,
										icon:'none'
									})
								}
								else{
									that.number=that.activities.length
								}
					
							}
							console.log(that.activities);
						}
					})
		
			} else {
				uni.showToast({
					title: '未登录',
					icon: 'none'
				})
				setTimeout(function() {
					
					uni.switchTab({
						url: '../my/my'
					})
				}, 1000)
			}
		},
		methods: {
			intocoupons: function(index) {
				var that = this;
				that.activity_id = that.activities[index].activity_id;
				uni.navigateTo({
					url: 'intoCoupons/intoCoupons?activity_id=' + JSON.stringify(that.activity_id) + '&shops=' + JSON.stringify(
						that.shops)
				});
			},
			selectCoupons:function(index){
				var that=this;
				App.setactivityId(that.activities[index].activity_id)
				uni.navigateTo({
					url:'./selectCoupons/selectCoupons'
				})
			}
		},
		
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
