<template>
	<view class="body">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="content" v-for="(iterm,index) in shops" @click="jump(index)">
				<view>{{iterm.company_name}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import App from '../../../../App.vue'
	import Api from '../../../../api.js'
	export default {
		data() {
			return {
				scrollTop: 0,
				shops: [],
				shop: {},
			}
		},
		methods: {
			jump: function(index) {
				console.log(1)
				this.shop = this.shops[index]
				console.log(this.shop)
				App.setShop(this.shop)
				uni.navigateBack({
					delta: ''
				});
			}
		},
		onLoad() {
			var that = this;
			if (App.getToken()) {
				uni.request({
					url: Api.shop(),
					header: {
						token: App.getToken()
					},
					success: function(res) {
					   if(res.data.code==200){
						   console.log(res)
						   that.shops = res.data.value;
						   console.log(that.shops);
					   }
						else if(res.data.code==1005){
							uni.showToast({
								title: '您不属于任何商家',
								duration: 2000,
								icon:'none'
							})
						}
					}
				})
			} else {
				uni.showToast({
					title: '未登录',
					icon: 'none'
				})
				setTimeout(function() {
					uni.navigateTo({
						url: '../login'
					})
				}, 1000)
			}
		}
	}
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
		background: #f7f8f8;
	}

	.content {
		display: flex;
		padding-left: 40upx;
		background: #FFFFFF;
		align-items: center;
		font-size: 35upx;
		color: #595757;
		height: 120upx;
		width: 100%;
		margin-bottom: 20upx;
	}
</style>
