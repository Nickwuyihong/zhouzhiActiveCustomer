<template>
	<view class="body">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="content">
				<view class="content-1">
					<image class="box-image" src='../../../../../static/img/tabbar/addactive.png'></image>
				</view>
				<view class="content-2">
					<text class="text-content">添加运营</text>
				</view>
			</view>
			<view class="content" v-for="(operator,index) in operation">
				<view class="content-left">
					<image class="box-image" src='../../../../../static/img/tabbar/me.png'></image>
				</view>
				<view class="content-center">
					<text class="text-content"> {{operator.operate}}</text>
				</view>
				<view class="content-right">
					<button class='btn' @click="deleteOperator(index)">移除</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import App from '../../../../../App.vue'
	import Api from '../../../../../api.js'
	import tkiQrcode from '../../../../components/tki-qrcode/tki-qrcode.vue'
	export default {
		data() {
			return {
				scrollTop: 0,
				operation: [{
						operate: '运营1'
					},
					{
						operate: '运营2'
					},
					{
						operate: '运营3'
					},
				],
			}
		},
		methods: {
			deleteOperator: function(index) {
				console.log(1)
				this.operation.splice(index, 1)
			},
			addOperator: function() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType)
						console.log('条码内容：' + res.result)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.body {
		display: block;
		height: 100vh;
		width: 100%;
		background-color: #F8F8F8;
	}

	.content {
		display: flex;
		flex-direction: row;
		padding: 35upx 0;
		height: 70upx;
		width: 100%;
		border-top: 1upx solid #F2F2F2;
	}

	.content-1 {
		display: flex;
		flex: 1;
		align-content: center;
		justify-content: center;
	}

	.content-2 {
		display: flex;
		flex: 5;
	}

	.content-left {
		display: flex;
		align-content: center;
		justify-content: center;
		flex: 1;
	}

	.content-right {
		display: flex;
		align-content: center;
		justify-content: center;
		flex: 1;
	}

	.content-center {
		display: flex;
		flex: 4;
	}

	.box-image {
		height: 70upx;
		width: 70upx;
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
		font-size: 30upx;
		margin-right: 20upx;
		color: #FFFFFF;
		border-radius: 42%;
		line-height: 60upx;
		width: 150upx;
		height: 60upx;
		background-color: rgb(255, 100, 100);
	}
</style>
