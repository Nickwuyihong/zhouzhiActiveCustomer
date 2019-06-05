<template>
	<view class="body">

		<view class="content">
			<view class="user_v">
				<image :src="icon" mode="" :onerror="errorimage()"></image>
				<view style="display: flex;flex-direction: column;height: 100upx;">
					<text>{{name}}</text>
					<!-- <text style="color: #9a9a9a;font-size: 28upx;">{{position}}</text> -->
				</view>
			</view>
			
			<tki-qrcode style="margin: auto;" ref="qrcode" :val="author_id" :size="size" :unit="unit" :background="background" :foreground="foreground"
			 :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" @result="qrR" />
			 
			 <text style="margin: auto;color: #9a9a9a;font-size: 28upx;" @click="creatQrcode">扫一扫添加</text>
		</view>

	</view>
</template>

<script>
	import App from '../../../../../App.vue'
	import Api from '../../../../../api.js'
	import tkiQrcode from '../../../../components/tki-qrcode/tki-qrcode.vue'

	var app = getApp()
	export default {
		components: {
			tkiQrcode
		},
		data() {
			return {
				size: 400, // 二维码大小
				unit: 'upx', // 单位
				background: '#b4e9e2', // 背景色
				foreground: '#309286', // 前景色
				pdground: '#32dbc6', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: true, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '', // 二维码生成后的图片地址或base64
				position: '游客',
				name: '',
				author_id: ''
			};
		},
		onLoad() {
			var that = this
			uni.request({
				url: Api.seeUser(),
				header: {
					token: App.getToken(),
				},
				data: {
					otherId: App.getUserId()
				},
				success(res) {
					console.log(res)
					if (res.data.code) {
						uni.showToast({
							title: 'token失效！',
							icon: 'none'
						})
						uni.clearStorage()
					} else {
						that.icon = res.data.user.author_image
						that.name = res.data.user.author_name
						console.log(8)
						uni.request({
							url: Api.usersAccount(),
							header: {
								token: App.getToken(),
							},
							success(res) {
								console.log(res)
								that.author_id = res.data.value
							}
						})
						
					}
				}
			})
		},
		methods: {
			errorimage:function(){
				this.icon=App.geturlerror(this.icon)
				console.log(this.icon)
			},
			sliderchange(e) {
				this.size = e.detail.value
			},
			creatQrcode() {
				this.$refs.qrcode._makeCode()
			},
			saveQrcode() {
				this.$refs.qrcode._saveCode()
			},
			qrR(res) {
				this.src = res
			},
			clearQrcode() {
				this.$refs.qrcode._clearCode()
				this.val = ''
			},
			selectIcon() {
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						that.icon = res.tempFilePaths[0]
						setTimeout(() => {
							that.creatQrcode()
						}, 100);
					}
				});
			}
		}
	};
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
		background: #f2f2f2;
		display: flex;
	}

	.content {
		text-align: center;
		height: 70%;
		width: 90%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		margin: auto;
	}
	
	.user_v{
		display: flex;
		align-items: flex-start;
		margin: auto;
		width: 90%;
	}
	
	.user_v image{
		width: 100upx;
		height: 100upx;
		margin-left: 20upx;
		border-radius: 10upx;
	}
	
	.user_v text{
		font-size: 30upx;
		margin: auto;
		margin-left: 20upx;
	}

	.box-image {
		width: 600upx;
		height: 600upx;
		margin: auto;
		margin-bottom: 0;
	}

	.bottom {
		height: 12%;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.box-image1 {
		height: 100upx;
		width: 100upx;
		border-radius: 100%;
		margin: auto;
		margin-bottom: 0;
	}

	.items {
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;
		height: 100%;
	}
</style>
