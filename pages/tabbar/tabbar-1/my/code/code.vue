<template>
	<view class="body">
		<view class="content">
			<view style="text-align: center;font-size: 35upx;font-weight: bold;margin-bottom: 80upx;">请输入激活码</view>
			<view style="display: flex;align-items: center;justify-content: center;">
				<input v-model="code" style="width: 500upx;height: 60upx;border: 2upx solid #000000;margin-bottom: 80upx;" />
			</view>
			<view>
				<button style="width: 200upx;height: 75upx;line-height: 75upx;font-size: 35upx;background: #FF6E6E;" @click="activate" >激活</button>
			</view>
		</view>
	</view>
</template>

<script>
	import App from '../../../../../App.vue'
	import Api from '../../../../../api.js'
	export default {
		data() {
			return {
             code:''
			}
		},
		methods: {
          activate:function(){
			  var that=this
			  console.log(this.code)
			  uni.request({
			  	url:Api.codeActivate(),
				header:{
				token:App.getToken()	
				},
				data:{
					codeNum:that.code
				}
			  })
		  }
		}
	}
</script>

<style>
	.body {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
		background: #F2F2F2;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		width:80%;
		height: 40%;
	}
</style>
