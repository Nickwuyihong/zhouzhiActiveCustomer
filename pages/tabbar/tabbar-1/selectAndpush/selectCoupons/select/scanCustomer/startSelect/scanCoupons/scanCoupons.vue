<template>
	<view class="body">
		<view class="content">
			<view class="content-main">	
			
			</view>
			<view class="content-bottom">
				
			<button class="btn" @click="jump">确定发布</button>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				abc: {}
			};
		},
		methods:{
			jump:function(){
				uni.navigateTo({
					
				})
			}
		},
		onLoad(data) {
			console.log(data);
			this.abc = JSON.parse(data.img);
			console.log(this.abc);
		}
	}
</script>

<style scoped>
      .content{  
      height: calc(100vh - var(--window-top));
      width: 100%;
      background: #F2F2F2;
      }
	  .content-bottom{
	  	position: fixed;
	  	display: flex;
	  	flex-direction: column;
	  	width: 100%;
	  	height: 200upx;
	  	bottom: 0;
	  }
	  .btn{
		  display: block;
		  margin: auto;
		  color: #FFFFFF;
		  background: green;
		  border-radius: 25upx;
		  width: 300upx;
	  }
</style>
