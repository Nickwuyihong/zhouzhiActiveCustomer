<template>
	<view class="body">
		<view class="content">
			<text style="margin-left: 40upx;">头像</text>
			<image class="image" :src="avatarUrl"></image>
		</view>
		<view class="content">
			<text style="margin-left: 40upx;">微信名：{{name}}</text>
		</view>
		<view class="content">
			<text style="margin-left: 40upx;">机构：{{company_name}}</text>
		</view>
		<view class="content" @click="toQRCode()">
			<text style="margin-left: 40upx;">二维码名片</text>
		</view>
	</view>
</template>

<script>
	import App from '../../../../../App.vue'
	export default {
		data() {
			return {
				avatarUrl:'',
				name:'',
				company_name:App.getcompany().company_name
			}
		},
		onLoad(res) {
			console.log(res)
			this.avatarUrl=res.avatarUrl
			this.name=res.name
		},
		methods: {
            toQRCode: function() {
            	var that = this
            	if (App.getToken()) {
            		uni.navigateTo({
            			url: '../QRCodeCard/QRCodeCard'
            		})
            	} else {
            		uni.showToast({
            			title: '未登录',
            			icon: 'none'
            		})
            	}
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
		background: #FFFFFF;
		flex-direction: row;
		font-size: 35upx;
		color: #595757;
		height: 120upx;
		width: 100%;
		border-bottom: 2upx solid #EBEDF0;
		align-items: center;
	}
	.image{
		display: block;
		height: 70upx;
		width: 70upx;
		border-radius: 50%;
		margin-left: 40upx ;
	}
</style>
