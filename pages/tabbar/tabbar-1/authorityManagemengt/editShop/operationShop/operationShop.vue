<template>
	<view class="body">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="content">
				<view class="content-1">
					<image class="box-image" src='../../../../../../static/image/添加奖励-01.png' @click="addOperator"></image>
				</view>
				<view class="content-2">
					<text class="text-content">添加运营</text>
				</view>
			</view>
			<view class="content" v-for="(operator,index) in operation">
				<view class="content-left">
					<image class="box-image" src='../../../../../../static/img/tabbar/me.png'></image>
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
				this.operation.push({
					operate: '运营4'
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
