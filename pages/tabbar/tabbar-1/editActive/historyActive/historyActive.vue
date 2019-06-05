<template>
	<body>
		<view class="body">
			<view class="content" v-for="(iterm,index) in activityFirst">
				<view class="content-left">
					<image class="image" :src="iterm.picture"></image>
					<text>{{iterm.name}}</text>
				</view>
				<view class="content-right" @click="jump(index)">
					<image style="display: block; height: 30upx;width: 35upx;margin-right: 30upx;" src="../../../../../static/image/1-01.png"></image>
				</view>
			</view>
		</view>
	</body>
</template>

<script>
	import App from '../../../../../App.vue'
	import Api from '../../../../../api.js'
	export default {
		data() {
			return {
				ranking: [], //排名
				newPublish: [], //新发布
				puch: [], //打卡
				likeCollect: [], //集赞
				activityFirst: [{
						name: '排名奖励活动',
						src: 'limitedMode/limitedMode',
						picture: '../../../../../static/img/ranking-01.png'
					},
					{
						name: '新发布奖励活动',
						src: './limitedMode/newPublish/newPublish',
						picture: '../../../../../static/img/newPublish-01.png' //新发布
					},
					{
						name: '打卡奖励活动',
						src: './limitedMode/puch/puch',
						picture: '../../../../../static/img/punch-01.png' //打卡
					},
					{
						name: '集赞奖励活动',
						src: './limitedMode/likeCollect/likeCollect',
						picture: '../../../../../static/img/collection-01.png' //集赞
					}
				],
			}
		},
		onLoad() {},
		onShow() {
			var that = this
			that.ranking.length=0
			that.newPublish.length=0
			that.puch.length=0
			that.likeCollect.length=0
			uni.request({
				url: Api.getActivity(),
				header: {
					token: App.getToken()
				},
				data: {
					companyId: App.getcompany().company_id
				},
				success: function(res) {
					console.log(res)
					if (res.data.code == 16000) {
						uni.showToast({
							title: '您没有权限',
							duration: 2000,
							icon: 'none'
						})
					} else {
						if (res.data.value.length > 0) {
							for (let iterm in res.data.value) {
								if (res.data.value[iterm].activity_type == 0){
									that.ranking.push(res.data.value[iterm]);
								}
								else if (res.data.value[iterm].activity_type == 1){
									that.newPublish.push(res.data.value[iterm]);
								}	
								else if (res.data.value[iterm].activity_type == 2){
									that.puch.push(res.data.value[iterm]);
								}	
								else{
									that.likeCollect.push(res.data.value[iterm]);
								}
							}
						} else {
							uni.showToast({
								title: '您暂时没有活动',
								duration: 2000,
								icon: 'none'
							})
						}
					}
					console.log(that.ranking);
					console.log(that.newPublish);
					console.log(that.puch);
					console.log(that.likeCollect);
				}
			})
		},
		methods: {
			jump: function(index) {
				if(index==0){
					uni.navigateTo({
						url:'./activities/activities?activity='+JSON.stringify(this.ranking)
					})
				}
				else if(index==1){
					uni.navigateTo({
						url:'./activities/activities?activity='+JSON.stringify(this.newPublish)
					})
				}
				else if(index==2){
					uni.navigateTo({
						url:'./activities/activities?activity='+JSON.stringify(this.puch)
					})
				}
				else{
					uni.navigateTo({
						url:'./activities/activities?activity='+JSON.stringify(this.likeCollect)
					})
				}
			}
		}
	}
</script>

<style>
	.body {
		/* display: flex;
		flex-direction: column; */
		display: block;
		/* 		height: 80vh; */
		/* overflow: scroll; */
		width: 100%;
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		overflow: scroll;
		/* #endif */
		/* #ifndef H5 */
		height: auto;
		/* #endif */
		background: #F2F2F2;
	}

	.content {
		display: flex;
		background: #FFFFFF;
		flex-direction: row;
		font-size: 35upx;
		color: #595757;
		height: 120upx;
		width: 100%;
		border-bottom: 2upx solid #EBEDF0;
	}

	.content-left {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-start;
	}

	.content-right {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-end;
	}

	.image {
		width: 70upx;
		height: 70upx;
		margin-right: 15upx;
		margin-left: 40upx;
	}
</style>
