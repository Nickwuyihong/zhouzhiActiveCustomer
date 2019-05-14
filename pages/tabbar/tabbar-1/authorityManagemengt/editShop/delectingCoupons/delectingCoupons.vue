<template>
	<view class="body">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="content">
				<view class="content-1">
					<image class="box-image" src='../../../../../../static/image/添加奖励-01.png' @click="addOperator"></image>
				</view>
				<view class="content-2">
					<text class="text-content">添加劵核销员</text>
				</view>
			</view>
			<view class="content" v-for="(operator,index) in operation">
				<view class="content-left">
					<image class="box-image" :src='operator.image'></image>
					<view class="text-content"> {{operator.operate}}</view>
				</view>
				<view class="content-right">
					<button class='btn' @click="deleteOperator(index)">移除</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import App from '../../../../../../App.vue'
	import Api from '../../../../../../api.js'
	import tkiQrcode from '../../../../../components/tki-qrcode/tki-qrcode.vue'
	export default {
		data() {
			return {
				scrollTop: 0,
				account_id: '',
				userid: '',
				userinfor: {},
				operation: []
			}
		},
		onLoad() {
			var that = this
			uni.request({
				url: Api.addoperator(),
				header: {
					token: App.getToken()
				},
				data: {
					companyId: App.getcompany().company_id
				},
				success: function(res) {
					console.log(res)
					if(res.data.code==200){
						for (let iterm in res.data.value) {
							if (res.data.value[iterm].level == 3) {
								that.userid=res.data.value[iterm].userid
								uni.request({
									url: Api.seeUser(),
									header: {
										token: App.getToken(),
									},
									data: {
										otherId: that.userid
									},
									success(res) {
										console.log(res)
										that.userinfor = {
												image: res.data.user.author_image,
												operate: res.data.user.author_name,
												userid: res.data.user.author_id
											},
											that.operation.push(that.userinfor)
										console.log(that.operation)
									}
								})
							}
						}
					}
					else{
						uni.showToast({
							title: '您没有这个权限',
							icon: 'none'
						})
				}
				}
			})
		},
		methods: {
			deleteOperator: function(index) {
				var that = this
				console.log(that.operation[index].userid)
				uni.request({
					url: Api.addoperator(),
					method: 'DELETE',

					header: {
						"Content-Type": "application/x-www-form-urlencoded",
						token: App.getToken()
					},
					data: {
						companyId: App.getShop().company_id,
						userid: that.operation[index].userid
					},
					success(res) {
						console.log(res)
						that.operation.splice(index, 1)
					}
				})

			},
			addOperator: function() {
				var that = this
				uni.scanCode({
					success: function(res) {
						that.account_id = res.result;
						console.log(that.account_id)
						uni.request({
							url: Api.addoperator(),
							method: 'POST',
							header: {
								token: App.getToken(),
								"Content-Type": "application/x-www-form-urlencoded"
							},
							data: {
								companyId: App.getShop().company_id,
								account: that.account_id,
								level: false
							},
							success: function(res) {
								console.log(res)
								console.log(res.data.value.userid)
								that.userid = res.data.value.userid
								console.log(that.userid)
								if(res.data.code==200){
									uni.request({
										url: Api.seeUser(),
										header: {
											token: App.getToken(),
										},
										data: {
											otherId: that.userid
										},
										success(res) {
									
											console.log(res)
											that.userinfor = {
													image: res.data.user.author_image,
													operate: res.data.user.author_name
												},
												that.operation.push(that.userinfor)
											console.log(that.operation)
										}
									}) 
								}
								else if(res.data.code==1006){
									uni.showToast({
												title: '此员工已经存在',
												icon: 'none'
											})
									}
									else{
										uni.showToast({
													title: '您没有权限',
													icon: 'none'
												})
									}
								}
									
						})
					}
				})
			}

		}
	}
</script>

<style scoped>
	.body {
		display: block;
		height: calc(100vh - var(--window-top));
		width: 100%;
		background-color: #F7F8F8;
	}

	.content {
		display: flex;
		flex-direction: row;
		height: 130upx;
		width: 100%;
		border-top: 4upx solid #f7f8f8f8;
		color: #808080;
	}

	.content-1 {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-start;
	}

	.content-2 {
		display: flex;
		flex: 5;
		align-items: center;
		justify-content: flex-start;
	}

	.content-left {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex: 1;
	}

	.content-right {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex: 1;
	}

	.content-center {
		display: flex;
		flex: 4;
	}

	.box-image {
		height: 70upx;
		width: 70upx;
		margin-right: 20upx;
		margin-left: 30upx;
		/* border-radius: 1upx; */
	}

	.scroll-Y {
		background-color: #FFFFFF;
	}

	.text-content {
		line-height: 60upx;
		text-align: center;
		display: block;
		font-size: 35upx;
		color: grey;
	}

	.btn {
		font-size: 26upx;
		margin-right: 30upx;
		color: #FFFFFF;
		border-radius: 25upx;
		line-height: 60upx;
		width: 150upx;
		height: 60upx;
		background-color: #ff6e6e;
	}
</style>
