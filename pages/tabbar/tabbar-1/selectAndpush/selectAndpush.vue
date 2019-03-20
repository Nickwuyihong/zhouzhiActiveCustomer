<template>
	<view class="body">
	 <scroll-view  :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
				 <view class="content" v-for="(coupon,index) in coupons">
					  <view class="content-left">
					  <text class="text-content-1" >{{coupon.date}}</text>
					  <text class="text-content-2">({{coupon.title}})</text>
					  </view>
					   <view class="content-right">
	          <button v-color="coupon.features" class='btn' @click="scanFeatures(index)">{{coupon.features}}</button>
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
				 coupons:[
				{
					 date:'2019-2-22期',
					 title:'未发布优惠券',
					 features:'筛选'
				 },
				 {
				 	 date:'2019-2-22期',
				 	 title:'已发布优惠券',
				 	 features:'查看'
				 },
				 {
				 	 date:'2019-5-22期',
				 	 title:'已发布优惠券',
				 	 features:'筛选'
				 }
				 ],
			 }
		 },
		 methods:{
			 scanFeatures:function(index){
				if(this.coupons[index].features=='查看'){
					this.scan(index);
			    }
			    else{
					this.select(index);
					console.log(1)
				}
		    },
			scan:function(index){
				uni.navigateTo({
					url:'./scanCoupons/scanCoupons'
				})
			},
			select:function(index){
				uni.navigateTo({
					url:'./selectCoupons/selectCoupons'
				})
			}
		 
	},
	 directives:{
  	'color':{
  		bind(el,binding,vnode){
  			if(binding.value=='查看'){
				el.style.background='rgb(0,255,0)';
  		}
		else{
			el.style.background='rgb(255,100,100)';
		}
  	}
  }
	},
	}
</script>

<style scoped>
	.content{
		display: block;
		position:relative;
		padding:40upx 0;
		height: 60upx;
		width: 100%;
		border-top: 1upx solid #F2F2F2;
	}
	.body{
		display: block;
		height:100vh;
		width: 100%;
		background-color: #F8F8F8;
	}
	.scroll-Y{
		background-color:#FFFFFF;
	}
	.content-left {
		display: block;
		float: left;
	}
	.content-right {
		display: block;
		float:right;
	}
	.text-content-1{
			line-height:60upx;
			font-size: 35upx;
			text-align:center;
		    margin-right: 20upx;
			margin-left: 20upx;
	}
	.text-content-2{
		line-height:60upx;
		font-size: 35upx;
		text-align: center;
		color: grey;
	}
	.btn{
		margin-right: 30upx;
		font-size: 30upx;
		color: #FFFFFF;
		border-radius: 42%;
		line-height: 60upx;
		width: 120upx;
		height: 60upx;
		}
</style>
