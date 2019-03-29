<template>
	<view class="body">
		<scroll-view  :scroll-top="scrollTop" scroll-y="true">
		<view class="content">
			<view class="content-main">	
			<view v-for="(iterm,index) in coupons" class="coupon">
			<view  class="picture">{{iterm.src}}</view>
			<view class="text">{{iterm.coupontype}}</view>
			<view class="text">{{iterm.couponName}}</view>
			<view class="check"><checkbox @click="sure(index)"></checkbox></view>
			</view>
			</view>
			<view class="content-bottom">
			<button class="btn" @click="jump">确定</button>	
			</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:0,
				index:'',
				coupons:[
						{
						src:'1',
						coupontype:'樱花卷',
						couponName: '买一送一'
					},
					{
						src:"2",
						coupontype:'紫荆花卷',
						couponName: '买一送一'
					},
					{
						src:'3',
						coupontype: '樱花卷',
						couponName: '买一送一'
					},
					{
						src:'4',
						coupontype: '樱花卷',
						couponName: '买一送一'
					},
					{
						src:'5',
						coupontype: '樱花卷',
						couponName: '买一送一'
					},
					{
						src:"2",
						coupontype: '樱花卷',
						couponName: '买一送一'
					},
					{
						src:'3',
						coupontype: '樱花卷',
						couponName: '买一送一'
					},
					
				]
			};
		},
		methods:{
			jump:function(){
				console.log(this.index)
				uni.navigateTo({
					url:'./scanCoupons/scanCoupons?img=' + JSON.stringify(this.coupons[this.index])
				})
			},
			sure:function(index){
				this.index=index;
			}
		}
	}
</script>

<style scoped>
        .content{
      position: fixed;
      height: 100%;
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
	   .content-main{
	  		  display: flex;
	  		  position: fixed;
			  flex-direction: row;
	  		  height: auto;
	  		  flex-wrap:wrap;
	  		  width: 100%;
	  		  padding: 6%;
	  }
	  .coupon{
		  display: flex;
		  flex-direction: column;
		  margin-top: 20upx;
		  margin-right: 6%;
		  width: 25%;
		  
	  }
	  .picture{
		  display: flex;
		  flex: 4;
		  height: 140upx;
		  background: #808080;
	  }
	  .text{
		  margin-top: 5upx;
		  display: flex;
		  font-size:30upx;
		  color: #BBBBBB;
		  flex: 1;
		  justify-content: center;
	  }
	  .check{
		  display: flex;
		  flex: 1;
		  justify-content: center;
	  }
</style>
