<template>
	<view class="body">
		<view class="content">
			<text class="text-content">请填写筛选条件:</text>
			<checkbox-group v-for='(iterm,index) in customers'>
				<label>
				<checkbox v-bind:checked="iterm.checked" v-on:click="switchchecked(index)">
				{{iterm.title}}<input type="text" v-model="iterm.number" v-bind:placeholder="iterm.placeholderName">{{iterm.ending}}
				</checkbox>
				</label>
			</checkbox-group>
			<text class="text-content">默认选项:</text>
			<checkbox-group>
				<label><checkbox v-bind:checked="checkedBottom">检测重复发布者</checkbox></label>
				<label><checkbox v-bind:checked="checkedBottom">筛选从最符合条件者开始</checkbox></label>
				<label><checkbox v-bind:checked="checkedBottom">提示该用户活动期间第几次发布</checkbox></label>
			</checkbox-group>
			<button class="btn" @click="readySelect">进行预筛选</button>	
			<view class="content-main" v-if="showed">
				<view class="content-main-1">
					<text class="text-content">预筛选结果</text>
				</view>
				<view class="content-main-2">
					<view class="text-content">本次活动共30人参与;</view>
					<view class="text-content">符合筛选条件的内容20篇;</view>
					<view class="text-content">其中重复发布0篇;</view>
					<view class="text-content">...</view>
				</view>
				<view class="content-main-3">
					<button class="btn-1">开始筛选</button>
				</view>
				<view class="content-main-4">
					<button class="btn-1" style="background: green;" @click="renewClick">重新设置筛选条件</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				showed: false,
				checkedBottom: true,
				customers:[{
					number: '',
					placeholderName: '2.19 0:00-2.26 24:00',
					title: '发布时间',
					checked: true,
					ending:''
				},
				{
					number: '',
					placeholderName: '20',
					title: '点赞数达到',
					checked: true,
					ending:'个'
				},
				{
					number: '',
					placeholderName: '20',
					title: '点赞数前',
					checked: false,
					ending:'个'
				},
				{
					number: '',
					placeholderName: '20',
					title: '随机挑选',
					checked: false,
					ending:'名'
				}
				]
			}
			},
			methods:{
				switchchecked:function(index){
					this.customers[index].checked=!this.customers[index].checked,
					console.log(this.customers[index].checked)
				},
				readySelect:function(){
					for(let customer in this.customers){
						if(this.customers[customer].checked==true){
							if(this.customers[customer].number==''){
								this.customers[customer].number=this.customers[customer].placeholderName;
							}
	                      console.log(this.customers[customer].number);
						}
					}
					this.showed=true;
					
				},
				renewClick:function(){
					this.showed=false;
				}
			}		
	}
</script>

<style scoped>
	.content{
		display: block;
		position: relative;
		z-index: 200;
	}
	.content-main{
		display: flex;
		flex-direction: column;
		position: absolute;
		width:600upx;
		height: 75vh;
		border: 2px solid #808080;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background: #FFFFFF;
		z-index: 300;
	}
	.content-main-1{
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
	}
	.content-main-2{
		display: flex;
		flex: 3;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.content-main-3{
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
	}
	.content-main-4{
		display: flex;
		flex: 1;
		justify-content: center;
	}
	input{
		display: block;
		border:1px solid grey ;
		margin: 0upx 20upx;
		width: auto;
	}
	label{
		font-size: 30upx;
		display: block;
		margin: 0upx 40upx 40upx 40upx;
	}
	.text-content{
		font-size: 30upx;
		display: inline-block;
		color: #808080;
		margin: 30upx 20upx;
	}
	.btn-1{
		color: #FFFFFF;
		background: rgb(255,100,100);
		border-radius: 25upx;
		height: 100Upx;
		width: 450upx;
	}
	.btn{
		color: #FFFFFF;
		background: rgb(255,100,100);
		margin-top: 200upx;
		border-radius: 25upx;
		height: 100Upx;
		width: 450upx;
	};
</style>
