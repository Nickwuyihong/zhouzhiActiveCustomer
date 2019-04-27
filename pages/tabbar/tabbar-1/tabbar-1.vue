<template>
	<view class="body">
		<view class="content">
			<image src="../../../static/img/scan.png" class="box-image" @click="scanning"></image>
			<text style="margin: auto;font-size: 50upx;font-weight: bold;">扫一扫</text>

			<!-- <view class="qrimg">
				<tki-qrcode ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground"
				 :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" @result="qrR" />
			</view> -->

		</view>
		<!-- <view class="bottom">
			<view v-for="(item,index) in items" :key="item.index" class="items">
				<image :src='item.src' class="box-image1" :id="item.index" v-on:click="jump(index)"></image>
				<text style="margin: auto;font-size: 37upx;color: grey;">{{item.text}}</text>
			</view>
		</view> -->
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
				title: 'Hello',
				items: [{
						src: '../../../static/img/activeCenter.png',
						text: '活动中心'
					},
					{
						src: '../../../static/img/screening&publishing.png',
						text: '筛选及发布'
					},
					{
						src: '../../../static/img/privilegeManagement.png',
						text: '管理'
					},
				],
				// 				msg: 'hello vue',
				// 				codes: 'cnm',
				// 				val: '二维码', // 要生成的二维码值
				// 				size: 200, // 二维码大小
				// 				unit: 'upx', // 单位
				// 				background: '#b4e9e2', // 背景色
				// 				foreground: '#309286', // 前景色
				// 				pdground: '#32dbc6', // 角标色
				// 				icon: '', // 二维码图标
				// 				iconsize: 40, // 二维码图标大小
				// 				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				// 				onval: true, // val值变化时自动重新生成二维码
				// 				loadMake: true, // 组件加载完成后自动生成二维码
				// 				src: '' // 二维码生成后的图片地址或base64
			};
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
			jump: function(index) {
				console.log('adadasd');
				if (index == 2) {
					uni.navigateTo({
						url: 'authorityManagemengt/authorityManagement',
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: 'selectAndpush/selectAndpush',
					})
				} else {
					uni.navigateTo({
						url: 'editActive/editActive',
					})
				}
			},
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
		background: #f2f2f2;
		display: flex;
		flex-direction: column;
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
