<template>
	<view class="body">
		<view class="title">活动名称</view>
		<view class="activeName">
			<input type="text" value="" placeholder="请输入活动名称" style="width: 90%;margin: auto;" />
		</view>
		<view class="title">活动内容</view>
		<view class="preview">
			<view class="preview_img">

			</view>
			<view class="preview_text">预览图</view>
		</view>

		<view v-if="ads.length==0" class="add_img">
			<view style="margin: auto;margin-left: 50upx;">添加广告图片</view>
			<image src="../../../../../static/img/add_topic.png" v-on:click="add_img"></image>
			<view style="margin: auto;margin-left: 50upx;margin-top: 0;">输入广告链接</view>
			<textarea type="text" value="" placeholder="请输入广告推文链接" style="width: 85%;margin: auto;margin-left: 70upx;margin-top: 0;color: #007AFF;height: 100upx;" />
			</view>
		
		<view v-else>
			<view v-for="(item,index) in ads" :key="item.index" class="add_img">
				<view style="margin: auto;margin-left: 50upx;">图片{{index+1}}</view>
				<image :src="item.img" v-on:click="add_img" style="width: 85%;"></image>
				<view style="margin: auto;margin-left: 50upx;margin-top: 0;">广告链接{{index+1}}</view>
				<textarea type="text" :value="item.link" placeholder="请输入广告推文链接" v-on:input="setLink" :id="index" style="width: 85%;margin: auto;margin-left: 70upx;margin-top: 0;color: #007AFF;height: 100upx;" />
			</view>
			<view class="add_reward" style="margin-top: 40upx;">
				<image src="../../../../../static/img/add_admin.png" v-on:click="add_img"></image>
				<text>继续添加广告图片</text>
			</view>
		</view>
		
		<view class="title" style="margin-top: 50upx;">优惠设置</view>
		
		<view v-if="hasDiscount==false" class="add_reward" v-on:click="add_discount">
			<image src="../../../../../static/img/add_admin.png"></image>
			<text>添加优惠</text>
		</view>
		
		<view v-else class="add_reward2">
			<view class="couponImg">
				<view class="left">
					<text style="margin: auto;">{{coupon.organization}}</text>
					<text style="font-size: x-large;margin: auto;margin-top: 0;">{{coupon.couponName}}</text>
				</view>
				<view class="right">
					<button v-if="disable==true" size="mini" style="background: #BBBBBB;">查看详情</button>
					<button v-else size="mini" v-on:click="toDetail">查看详情</button>
				</view>
			</view>
			<text style="padding-top: 20upx;color: #BBBBBB;">券预览图</text>
			<view style="width: 90%;padding-top: 20upx;">填写相关信息</view>
			<view class="inputs">
				<text style="width: 20%;">券名：</text>
				<input type="text" value="" placeholder="请输入券名" style="width: 85%;border-bottom: 1px solid #F2F2F2;" v-on:input="setName"/>
			</view>
			<view class="inputs">
				<view style="width: 30%;">可用时间：</view>
				<input type="text" value="" placeholder="请输入优惠券可用时间" style="width: 70%;border-bottom: 1px solid #F2F2F2;" v-on:input="setATime"/>
			</view>
			<view class="inputs">
				<view style="width: 30%;">兑换时间：</view>
				<input type="text" value="" placeholder="请输入优惠券兑换时间" style="width: 70%;border-bottom: 1px solid #F2F2F2;" v-on:input="setETime"/>
			</view>
			<view class="inputs">
				<view style="width: 30%;">发券机构：</view>
				<select v-model="coupon.organization">
					<option value="volvo" style="display: none;">请选择机构</option>
					<option v-for="item in organizationList" :key="item.index" :value="item">{{item}}</option>
				</select>
			</view>
			<view class="inputs" style="align-items: flex-start;">
				<view style="width: 30%;">使用规则：</view>
				<textarea type="text" value="" auto-height="true" placeholder="请输入使用规则" style="width: 70%;border-bottom: 1px solid #F2F2F2;" v-on:input="setRule"/>
			</view>
			
			<button class="btn" @click="sure">确定</button>
		</view>
		
		<view class="title"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ads:[],
				hasDiscount: false,
				coupon:{
					couponName: '请输入券名',
					availableTime: '',
					exTime: '',
					organization: '请输入发券机构',
					rule: ''
				},
				disable: true,
				organizationList: [
					'特斯了1',
					'特斯了2',
					'特斯了3',
					'特斯了4'
				]
			}
		},
		onLoad() {
			
		},
		created() {
			this.coupon.organization = '请输入发券机构'
		},
		methods: {
			jump: function(e) {
				console.log(e)
				if (e.currentTarget.id == 0) {
					uni.navigateTo({
						url: ''
					})
				} else if (e.currentTarget.id == 1) {
					uni.navigateTo({
						url: ''
					})
				} else {
					uni.navigateTo({
						url: ''
					})
				}
			},
			add_discount:function(){
				this.hasDiscount = true
			},
			add_img:function(){
				uni.chooseImage({
					success: (chooseImageRes) => {
						var tempFilePaths = chooseImageRes.tempFilePaths
						var a = {
							img: tempFilePaths[0]
						}
						this.ads.push(a)
					}
				})
			},
			setLink:function(e){
				this.ads[e.currentTarget.id].link = e.detail.value
			},
			setOrganization:function(e){
				console.log(e)
				this.coupon.organization = e
				if(this.coupon.couponName.length>0&&
					this.coupon.couponName!='请输入券名'&&
					this.coupon.availableTime.length>0&&
					this.coupon.exTime.length>0&&
					this.coupon.organization!='请输入发券机构'&&
					this.coupon.organization.length>0&&
					this.coupon.rule.length>0){
					this.disable = false
				}else{
					this.disable = true
				}
			},
			setName:function(e){
				console.log(e)
				this.coupon.couponName = e.detail.value
				if(this.coupon.couponName.length>0&&
					this.coupon.couponName!='请输入券名'&&
					this.coupon.availableTime.length>0&&
					this.coupon.exTime.length>0&&
					this.coupon.organization!='请输入发券机构'&&
					this.coupon.organization.length>0&&
					this.coupon.rule.length>0){
					this.disable = false
				}else{
					this.disable = true
				}
			},
			setATime:function(e){
				console.log(e)
				this.coupon.availableTime = e.detail.value
				if(this.coupon.couponName.length>0&&
					this.coupon.couponName!='请输入券名'&&
					this.coupon.availableTime.length>0&&
					this.coupon.exTime.length>0&&
					this.coupon.organization!='请输入发券机构'&&
					this.coupon.organization.length>0&&
					this.coupon.rule.length>0){
					this.disable = false
				}else{
					this.disable = true
				}
			},
			setETime:function(e){
				console.log(e)
				this.coupon.exTime = e.detail.value
				if(this.coupon.couponName.length>0&&
					this.coupon.couponName!='请输入券名'&&
					this.coupon.availableTime.length>0&&
					this.coupon.exTime.length>0&&
					this.coupon.organization!='请输入发券机构'&&
					this.coupon.organization.length>0&&
					this.coupon.rule.length>0){
					this.disable = false
				}else{
					this.disable = true
				}
			},
			setRule:function(e){
				console.log(e)
				this.coupon.rule = e.detail.value
				if(this.coupon.couponName.length>0&&
					this.coupon.couponName!='请输入券名'&&
					this.coupon.availableTime.length>0&&
					this.coupon.exTime.length>0&&
					this.coupon.organization!='请输入发券机构'&&
					this.coupon.organization.length>0&&
					this.coupon.rule.length>0){
					this.disable = false
				}else{
					this.disable = true
				}
			},
			toDetail:function(){
				uni.navigateTo({
					url: 'coupon?detail=' + JSON.stringify(this.coupon) 
				})
			}
		}
	}
</script>

<style>
	.body {
		width: 100%;
		background: #F2F2F2;
		display: flex;
		flex-direction: column;
	}

	.title {
		height: 100upx;
		width: 90%;
		text-align: left;
		display: flex;
		align-items: center;
		margin: auto;
	}

	.activeName {
		width: 100%;
		height: 100upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	.preview {
		width: 100%;
		height: 450upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.preview_img {
		width: 90%;
		height: 300upx;
		margin: auto;
		border: #BBBBBB solid 5upx;
		border-radius: 20upx;
	}

	.preview_text {
		width: 90%;
		height: 50upx;
		margin: auto;
		margin-top: 0;
		text-align: center;
	}

	.add_img {
		display: flex;
		flex-direction: column;
		height: 550upx;
		width: 100%;
		background: #FFFFFF;
		margin-top: 40upx;
		align-items: flex-start;
	}

	.add_img image {
		height: 200upx;
		width: 200upx;
		margin: auto;
		margin-left: 70upx;
		margin-top: 0;
	}

	.add_reward {
		display: flex;
		height: 200upx;
		width: 100%;
		background: #FFFFFF;
		align-items: center;
	}
	
	.add_reward image{
		height: 100upx;
		width: 100upx;
		margin-left: 40upx;
	}
	
	.add_reward text{
		margin-left: 40upx;
	}
	
	.add_reward2 {
		display: flex;
		flex-direction: column;
		padding-top: 20upx;
		padding-bottom: 50upx;
		width: 100%;
		background: #FFFFFF;
		align-items: center;
	}
	.inputs{
		display: flex;
		padding-top: 40upx;
		width: 90%;
		background: #FFFFFF;
		align-items: center;
	}
	
	.couponImg{
		height: 200upx;
		width: 90%;
		border: 3px solid #ffdd00;
		border-radius: 50upx;
		display: flex;
	}
	
	.btn {
		color: #FFFFFF;
		background: #22bb22;
		margin-top: 100upx;
		border-radius: 25upx;
		height: 100Upx;
		width: 350upx;
	}
	
	.inputs select{
		width: 70%;
	}
	
	.inputs textarea{
		height: 60upx;
	}
	
	.left{
		height: 100%;
		width: 50%;
		display: flex;
		flex-direction: column;
		color: #FFBB00;
	}
	
	.right{
		height: 100%;
		width: 50%;
		display: flex;
		align-items: center;
	}
	
	.right button{
		background: #FFBB00;
		color: #FFFFFF;
		border-radius: 60upx;
	}
</style>
