<template>
	<view class="page">
		<view class="content">
			<view class="text-wrapper">
				<view class="text">
					<input placeholder="搜索交流圈" placeholder-style="color:#999999;font-size:35upx" @input='getinput' v-model="inputvalue" />
				</view>
				<view class="image">
					<image class='picture' src="../../../../../../static/image/放大镜-01.png"></image>
				</view>
			</view>
		</view>
		<view v-for="(circle,index) in Circle">
			<view class="content" @click="change(index)">
				<view id="text-wrapper2">
					<view class="text">{{circle.circlename}}</view>
				</view>
			</view>
		</view>
		<view class="dialog-cover" v-if="showed">
			<view class="sure" v-if="showed2">
				<view class="sure-content1">
					<view style="font-size:35upx ;color: #595757;line-height: 50upx;">确认绑定</view>
					<view style="font-size:35upx ;color: #595757;line-height: 50upx;">"{{circles}}"?</view>
				</view>
				<view class="sure-content2">
					<view class="sure-content2-text" style="color: #5ACC93;" @click="sure">确定</view>
					<view class="sure-content2-text" @click="cancel" style="color: #898989;">取消</view>
				</view>
			</view>
			<view class="sure" v-if="showed1">

				<view style="display: flex;flex:1;align-items: center;justify-content: center;">该圈子已被绑定</view>
				<view style="display: flex;flex:1;">
					<button class="btn" @click="recall">重新绑定</button>
				</view>


			</view>
		</view>
	</view>
</template>

<script>
	import Api from '../../../../../../api.js'
	import App from '../../../../../../App.vue'
	export default {
		data() {
			return {
				index: '',
				shop: {},
				background: '',
				isshow: true,
				inputvalue: '',
				circles: '',
				showed: false,
				showed1: false,
				showed2: true,
				Circle: [],
				circle_id: '',
				company_id: '0'
			}
		},
		onLoad(data) {
			var that = this;
			console.log(data)
			this.shop = JSON.parse(data.shop)
			console.log(this.shop)
			that.company_id = that.shop.company_id;
		},
		methods: {
			sure: function() {
				console.log(1)
				var that = this;
				uni.request({
					url: Api.bindingCircle(),
					method: "POST",
					header: {
						token: App.getToken(),
						"Content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						companyId: that.company_id,
						circleId: that.circle_id
					},
					success: function(res) {
						console.log(res)
						if (res.data.code == '200') {
							uni.navigateTo({
								url: '../../authorityManagement',
							});
						} else {
							that.showed1 = true;
							that.showed2 = false;
						}
					}
				})
			},
			clearTimer() {
				if (this.timer) {
					clearTimeout(this.timer)
				}
			},
			getinput: function(event) {
				var that = this;
				that.clearTimer()
				// console.log(event.timeStamp)
				this.timer = setTimeout(() => {
					uni.request({
						url: Api.searchCircle(),
						header: {
							'Content-Type': 'application/json',
							token: App.getToken()
						},
						data: {
							circleName: that.inputvalue
						},
						success: function(res) {
							if (that.inputvalue != '') {
								that.Circle = res.data.circlelist;
								console.log(that.Circle);
							} else {
								that.Circle = [];
							}
						}
					});
				}, 500)
			},
			change: function(index) {
				var that = this;
				setTimeout(function() {
					that.circles = that.Circle[index].circlename
					that.showed = true
				}, 300)
				that.circle_id = that.Circle[index].circleid;
				console.log(that.circle_id);
				console.log(that.company_id);
			},
			cancel: function() {
				var that = this;
				that.showed = false;
			},
			recall: function() {
				var that = this;
				that.showed = false;
				that.showed1 = false;
				that.showed2 = true;
			}
		}
	}
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		width: 100%;
			/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		background: #F7F8F8;
		z-index: 100;
	}

	.content {
		display: flex;
		width: 100%;
		align-items: center;
		color: #727171;
		border-bottom: 2upx solid #dcdddd;
		height: 70upx;
		background-color: #FFFFFF;
		padding: 20upx 30upx;
	}

	.text-wrapper {
		display: flex;
		flex-direction: row;
		color: #727171;
		height: 70upx;
		width: 80%;
		border: 2upx solid #cccccc;
		border-radius: 35upx;
		padding-left: 40upx;
		padding-right: 30upx;
	}

	.text-wrapper2 {
		display: flex;
		flex-direction: row;
		color: #000000;
		height: 70upx;
	}

	.text {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.image {
		display: flex;
		flex: 1;
		justify-content: flex-end;
		align-items: center;
	}

	.picture {
		height: 35upx;
		width: 35upx;
	}

	.grey {
		background: #efefef;
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

	.sure-content1 {
		display: flex;
		flex: 2;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.sure-content2 {
		display: flex;
		flex-direction: row;
		flex: 1;
	}

	.sure-content2-text {
		display: flex;
		flex: 1;
		align-items: center;
		font-size: 35upx;
		justify-content: center;
		border-top: 1upx solid #808080;
		border-right: 1upx solid #808080;
	}

	.btn {
		display: flex;
		font-size: 35upx;
		align-items: center;
		justify-content: center;
		margin: auto;
		height: 80upx;
		width: 200upx;
		border-radius: 25upx;
		background: #FF6E6E;
		color: #FFFFFF;
	}
</style>
