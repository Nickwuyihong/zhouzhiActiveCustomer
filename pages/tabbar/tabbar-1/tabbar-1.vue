<template>
	<view class="body">
		<view class="content">
			<!-- <image src="../../../static/img/scan.png" class="box-image" @click="scanning"></image> -->
			<!-- <text style="margin: auto;font-size: 50upx;font-weight: bold;">扫一扫</text> -->
			<scroll-view class="content-main" :scroll-y="true">
				<image src="https://zhouzhi-test1.oss-cn-shenzhen.aliyuncs.com/xzData/background/poster1.png" style="height:50vh;width: 100%;position: absolute" @click="jump"></image>
				<image src="https://zhouzhi-test1.oss-cn-shenzhen.aliyuncs.com/xzData/background/poster2.png" style="height:132vh;width: 100%;" @click="scanning()"></image>	
			</scroll-view>
			<!-- <view class="qrimg">
				<tki-qrcode ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground"
				 :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" @result="qrR" />
			</view> -->
		</view>
	</view>
</template>

<script>
	import App from '../../../App.vue'
	import Api from '../../../api.js'
	import tkiQrcode from '../../components/tki-qrcode/tki-qrcode.vue'
	var app = getApp()
	export default {
		components: {
			tkiQrcode
		},
		data() {
			return {

			};
		},
		onShareAppMessage: function() {
			return {
				title: '周知密客',
				path: '/pages/tabbar/tabbar-1/tabbar-1'
			}
		},
		onLoad() {
			//App.saveToken("i")

			console.log(App.getToken())

			uni.request({
				url: Api.usersAccount(),
				header: {
					token: App.getToken()
				},
				success: function(res) {
					console.log(res)
				}
			})
		},
		methods: {
			// sliderchange(e) {
			// 	this.size = e.detail.value
			// },
			// creatQrcode() {
			// 	this.$refs.qrcode._makeCode()
			// },
			// saveQrcode() {
			// 	this.$refs.qrcode._saveCode()
			// },
			// qrR(res) {
			// 	this.src = res
			// },
			// clearQrcode() {
			// 	this.$refs.qrcode._clearCode()
			// 	this.val = ''
			// },
			// selectIcon() {
			// 	let that = this
			// 	uni.chooseImage({
			// 		count: 1, //默认9
			// 		sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			// 		sourceType: ['album'], //从相册选择
			// 		success: function(res) {
			// 			that.icon = res.tempFilePaths[0]
			// 			setTimeout(() => {
			// 				that.creatQrcode()
			// 			}, 100);
			// 			// console.log(res.tempFilePaths);
			// 		}
			// 	});
			// },
			jump:function(){
				uni.navigateTo({
					url:'./scanning/guide/guide'
				})
			},
			// jump: function(index) {
			// 	console.log('adadasd');
			// 	if (index == 2) {
			// 		uni.navigateTo({
			// 			url: 'authorityManagemengt/authorityManagement',
			// 		})
			// 	} else if (index == 1) {
			// 		uni.navigateTo({
			// 			url: 'selectAndpush/selectAndpush',
			// 		})
			// 	} else {
			// 		uni.navigateTo({
			// 			url: 'editActive/editActive',
			// 		})
			// 	}
			// },
			scanning: function() {
				if (App.getToken()) {
					// 允许从相机和相册扫码
					uni.scanCode({
						success: function(res) {
							console.log('条码类型：' + res.scanType)
							console.log('条码内容：' + res.result)
							uni.navigateTo({
								url: 'scanning/success?type=' + res.scanType + "&result=" + res.result,
							})
						}
					})
				} else {
					uni.navigateTo({
						url: 'login',
					})
				}
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
		
	}

	.content {
		text-align: center;
		height: 100%;
		width: 100%;
		
	}

	.content-main {
		
		width: 100%;
		height: 100%;
	}
</style>
