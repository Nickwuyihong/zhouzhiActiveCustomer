<template>
	<view class="page">
		<view class="content">
			    <view class="text-wrapper">
				<view class="text">
				<input  placeholder="搜索交流圈" v-model="search"/>
				</view>
				<view class="image">
				<image class='picture' src="../../../../../../static/img/tabbar/add.png"></image>
				</view>
				</view>
		</view>
		<view  v-for="(circle,index) in filteredCircle">
			<view class="content" :class="{grey:!circle.isshow,white:circle.isshow}" @click="change(index)">
			<view id="text-wrapper2">
			<view class="text">{{circle.name}}</view>
			</view>
			</view>
		</view>
		<view class="sure" v-show="showed">
			<view class="sure-content1">
				<view>确认绑定</view>
				<view :class="circles">{{circles}}?</view>
			</view>
			<view class="sure-content2">
				<view class="sure-content2-text" style="color: #008000;">确定</view>
				<view class="sure-content2-text" @click="cancel">取消</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				search:'',
				circles:'',
				showed:false,
				Circle:[
					{
					name:'五山特斯乐粉丝群',
					isshow:true,
					},
					{
					name:'五山特斯乐粉丝群1',
					isshow:true,
					},
					{
					name:'五山特斯乐粉丝群2',
					isshow:true,
					},
					{
					name:'五山特斯乐粉丝群3',
					isshow:true,
					},
					{
					name:'一点点',
					isshow:true,
					},
					{
					name:'Coco',
					isshow:true,
					}
				]
			}
		},
		computed:{
			
				filteredCircle:function () {
					if(this.search){
					return this.Circle.filter((circle)=>{
					return circle.name.match(this.search);});
				}
				return {}
			} 
		},
		methods:{
			change:function(index){
				var that=this;
				that.filteredCircle[index].isshow=false
			setTimeout(function(){
				that.circles=that.filteredCircle[index].name
				that.showed=true
				that.filteredCircle[index].isshow=true
			},300)
		},
		cancel:function(){
			var that=this;
			that.showed=false;
		}
		}
		}
</script>
  
<style scoped>
	 .page{
		  display: flex;
		  flex-direction: column;
		   width: 100%;
		   height: 100vh;
		   background: #F2F2F2; 
		   z-index: 100;
	}
	.content{
		border-bottom: 1px solid #808080;
		height: 70upx;
		background-color: #FFFFFF;
		padding: 20upx 30upx;
	}
	.text-wrapper{
		display: flex;
		flex-direction: row;
		color: #000000;
		height: 70upx;
		border: 1upx solid #808080;
		border-radius: 35upx;
		padding: 0 20upx;
	}
	.text-wrapper2{
		display: flex;
		flex-direction: row;
		color: #000000;
		height: 70upx;
	}
	.text{
		display: flex;
		flex: 1;
		align-items: center;
	}
	.image{
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}
	.picture{
		height: 70upx;
		width: 70upx;
	}
	.white{
		background: #FFFFFF;
	}
	.grey{
		background: #F2F2F2;
	}
	.sure{
		display: flex;
		flex-direction: column;
		position: absolute;
		height: 300upx;
		width: 500upx;
		background: #FFFFFF;
		z-index: 200;
		border: 1upx solid #808080;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.sure-content1{
		display: flex;
		flex: 2;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.sure-content2{
		display: flex;
		flex-direction: row;
		flex: 1;
	}
	.sure-content2-text{
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		border-top:1upx solid #808080;
		border-right:1upx solid #808080;
	}
</style>
