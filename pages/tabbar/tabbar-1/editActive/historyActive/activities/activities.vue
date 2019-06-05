<template>
	<view class="body">
		<scroll-view :scroll-y="true">
			<view style="font-size: 35upx;margin-left: 20upx;">当前正在进行活动：{{ongoinglength}}</view>
			<view class="content" v-for="(activity,index) in ongoingActivity" >
				<view class="content-left">
					<text class="text-content-1" style="color: #4d4d4d;">{{activity.activity_name}}</text>
					<text style="font-size: 35upx;color: #f8b62d;" @click="activityDetail1(index)">（活动详情）</text>
				</view>
				<view class="content-right">
					<button class='btn' style="background: #FF6E6E;" @click="close(index)">关闭活动</button>
				</view>
			</view>
			<view style="font-size: 35upx;margin-left: 20upx;margin-bottom: 20upx;">历史活动：{{historylength}}</view>
			<view class="content" v-for="(iterm,index) in historyActivity" >
				<view class="content-left">
					<text class="text-content-1" style="color: #4d4d4d;">{{iterm.activity_name}}</text>
					<!-- <text style="font-size: 35upx;color: #f8b62d;" @click="intocoupons(index)">（活动详情）</text> -->
				</view>
				<view class="content-right">
					<button class='btn' style="background: #FF6E6E;" @click="activityDetail2(index)">活动详情</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import App from '../../../../../../App.vue'
	import Api from '../../../../../../api.js'
	export default {
		data() {
			return {
				ongoinglength: 0,
				historylength: 0,
				activity: [],
				ongoingActivity: [],
				historyActivity: []
			}
		},
		onShow() {

		},
		onLoad(res) {
			this.activity = JSON.parse(res.activity)
			console.log(this.activity)
			this.ongoingActivity.length = 0
			this.historyActivity.length = 0
			for (let iterm in this.activity) {
				if (this.activity[iterm].is_delete == 0) {
					this.ongoingActivity.push(this.activity[iterm])
				} else if ((this.activity[iterm].is_delete == 1)) {
					this.historyActivity.push(this.activity[iterm])
				}
			}
			this.ongoinglength = this.ongoingActivity.length
			this.historylength = this.historyActivity.length
			console.log(this.ongoingActivity)
			console.log(this.historyActivity)
		},
		methods: {
			close: function(index) {
				var that = this
				uni.request({
					url: Api.closeActivity(),
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						token: App.getToken()
					},
					data: {
						companyId: App.getcompany().company_id,
						activityId: that.ongoingActivity[index].activity_id,
					},
					success: function(res) {
						console.log(res)
						if (res.data.code == 200) {
							that.historyActivity.push(that.ongoingActivity[index])
							that.ongoingActivity.splice(index,1)
						}
						that.ongoinglength = that.ongoingActivity.length
						that.historylength = that.historyActivity.length
						console.log(that.ongoingActivity)
						console.log(that.historyActivity)
					}
				})
			},
			activityDetail1:function(index){
				uni.navigateTo({
					url:'./activity-detail/activity-detail?activity_id='+this.ongoingActivity[index].activity_id
				})
			},
			activityDetail2:function(index){
				uni.navigateTo({
					url:'./activity-detail/activity-detail?activity_id='+this.historyActivity[index].activity_id
				})
			}
		}
	}
</script>

<style>
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
		background: #FFFFFF;
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
		width: 200upx;
		height: 70upx;
	}
</style>
