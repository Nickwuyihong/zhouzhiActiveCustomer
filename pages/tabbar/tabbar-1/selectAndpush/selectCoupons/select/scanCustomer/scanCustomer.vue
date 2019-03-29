<template>
	<view class="body">
		<scroll-view  class="content" :scroll-top="scrollTop" scroll-y="true">
			<view class="content-main" >
				<view class="avatar" v-for="iterm in avatars">{{iterm.name}}</view>
			</view>
			<view class="content-bottom">
				<button style="margin: auto;color: #FFFFFF;background:  rgb(255,100,100);border-radius: 25upx" @click="jump">确定名单,去选择优惠券</button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:0,
				avatars:[
					{
						name:'1'
					},
					{
						name:"2"
					},
					{
						name:'3'
					},
					{
						name:'4'
					},
					{
						name:'5'
					},
					{
						name:"2"
					},
					{
						name:'3'
					},
					{
						name:'4'
					},
					{
						name:'5'
					},
					{
						name:"2"
					},
					{
						name:'3'
					},
					{
						name:'4'
					},
					{
						name:'5'
					},
				]
			};
		},
		methods:{
			jump:function(){
				uni.navigateTo({
					url:'./startSelect/startSelect'
				})
			}
		}
	}
</script>

<style scoped>
      .content{
	  display: block;
	  height: 100%;
      position: fixed;
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
	  .content-main{
		  display: flex;
		  position: fixed;
		  height: auto;
		  flex-wrap:wrap;
		  width: 100%;
		  padding: 4%;
	  }
	  .avatar{
		  display: flex;
		  margin-top: 20upx;
		  margin-right: 4%;
		  height: 140upx;
		  width: 20%;
		  background: #808080;
	  }
</style>
