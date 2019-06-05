<template>
	<view class="body">
		<view class="content">
			<view class="content-top">设定活动奖励</view>
			<view class="content-bottom" >
				<view class="content-main" v-for="(iterm,index) in activityFirst" @click="jump(index)">
					<image class="image" :src="iterm.picture"></image>
					<text>{{iterm.name}}</text>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-top">编辑活动</view>
			<view class="content-bottom">
				<view class="content-main" v-for="(iterm,index) in activitySecond" @click="jump1(index)">
					<image class="image" :src="iterm.picture"></image>
					<text>{{iterm.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import App from '../../../../App.vue'
	import Api from '../../../../api.js'
	export default {
		data() {
			return {
				activityFirst: [{
						name: '排名奖励',
						src: 'limitedMode/limitedMode',
						picture:'../../../../static/img/ranking-01.png'
					},
					{
						name: '新发布奖励',
						src: './limitedMode/newPublish/newPublish',
						picture:'../../../../static/img/newPublish-01.png'//新发布
					},
					{
						name: '打卡奖励',
						src: './limitedMode/puch/puch',
						picture:'../../../../static/img/punch-01.png'//打卡
					},
					{
						name: '集赞奖励',
						src: './limitedMode/likeCollect/likeCollect',
						picture:'../../../../static/img/collection-01.png'//集赞
					}
				],
				activitySecond: [{
						name: '广告编辑',
						src: './adEdite/adEdite',
						picture:'../../../../static/img/ad-01.png'//广告编辑
					},
					{
						name: '推文编辑',
						src: './tweetsEdite/tweetsEdite',
						picture:'../../../../static/img/tweets-01.png'//推文
					},
					{
						name: '历史活动',
						src: './historyActive/historyActive',
						picture:'../../../../static/img/history-01.png'//历史
					}

				],
			}
		},
		onLoad() {},
		methods: {
			jump: function(index) {
				
				if (App.getToken()) {
					if (index == 0) {
						uni.navigateTo({
							url: this.activityFirst[index].src
							// url:'test/test'
						})
					} else if (index == 1) {
						uni.navigateTo({
							url: this.activityFirst[index].src
						})
					} else if (index == 2){
						uni.navigateTo({
							url: this.activityFirst[index].src
						})
					}
					else{
						uni.navigateTo({
							url: this.activityFirst[index].src
						})
					}

				} else {
					uni.navigateTo({
						url: '../login'
					})
				}
			},
			jump1: function(index) {
				
				if (App.getToken()) {
					if (index == 0) {
						uni.navigateTo({
							url: this.activitySecond[index].src
							// url:'test/test'
						})
					} else if (index == 1) {
						uni.navigateTo({
							url: this.activitySecond[index].src
						})
					} else if (index == 2){
						uni.navigateTo({
							url: this.activitySecond[index].src
						})
					}
					else{
						uni.navigateTo({
							url: 'historyActive/historyActive'
						})
					}
			
				} else {
					uni.navigateTo({
						url: '../login'
					})
				}
			}
		}
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
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.content {
		display: flex;
		height: 300upx;
		width: 95%;
		margin-top:20upx ;
		margin-bottom:10upx ;
		flex-direction: column;
		background: #FFFFFF;
		border-radius: 15upx;
	}
	.content-top{
		border-bottom: 1upx solid #F7F8F8;
		height: 70upx;
		font-size: 30upx;
		line-height: 70upx;
		color: #595757;
		padding-left: 15upx;
	}
	.content-bottom{
		display: flex;
		flex-direction: row;
		height: 230upx;
		width: 100%;
	}
	.content-main{
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #595757;
	}
	.image{
		display: block;
		height: 100upx;
		width: 100upx;
	}
</style>
