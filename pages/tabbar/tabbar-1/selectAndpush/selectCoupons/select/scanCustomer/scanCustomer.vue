<template>
	<view class="body">
		<scroll-view class="content" :scroll-top="scrollTop" scroll-y="true">
			<view class="content-main">
				<view class="avatar" v-for="iterm in avatars">{{iterm.name}}</view>
			</view>
		</scroll-view>
		<view class="content-bottom">
			<button style="margin: auto;color: #FFFFFF;background: rgb(255,100,100);border-radius: 25upx" @click="jump">确定名单,去选择优惠券</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				avatars: [{
						name: '1'
					},
					{
						name: "2"
					},
					{
						name: '3'
					},
					{
						name: '4'
					},
					{
						name: '5'
					},
					{
						name: "2"
					},
					{
						name: '3'
					},
					{
						name: '4'
					},
					{
						name: '5'
					},
					{
						name: "2"
					},
					{
						name: '3'
					},
					{
						name: '4'
					},
					{
						name: '5'
					},
					{
						name: '7'
					},
					{
						name: '8'
					},
					{
						name: '9'
					},
					{
						name: '10'
					},
					{
						name: '11'
					}
				]
			};
		},
		methods: {
			jump: function() {
				uni.navigateTo({
					url: './startSelect/startSelect?avatars=' + JSON.stringify(this.avatars)
				})
			}
		}
	}
</script>

<style scoped>
	.body {
		height: calc(100vh - var(--window-top));
		width: 100%;
		background: #F7F8F8;
	}

	.content {
		height: 80%;
		width: 100%;
	}

	.content-bottom {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 20%;
	}

	.content-main {
		display: flex;
		position: fixed;
		height: auto;
		flex-wrap: wrap;
		width: 100%;
		padding: 4%;
	}

	.avatar {
		display: flex;
		margin-top: 20upx;
		margin-right: 4%;
		height: 140upx;
		width: 20%;
		background: #808080;
	}
</style>
