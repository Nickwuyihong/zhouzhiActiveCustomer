<template>
	<view class="body">
		<view class="title">活动名称</view>
		<view class="activeName">
			<input type="text" :value="activeName" placeholder="请输入活动名称" style="width: 90%;margin: auto;" v-model="activeName" />
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
		
		<view v-if="couponList.length>0" class="">
			<view v-for="(item,index) in couponList" :key="index">
				<view style="width: 90%;display: flex;justify-content: space-between;margin: auto;align-items: center;height: 100upx;">
					<text>优惠{{index + 1}}</text>
					<button type="default" size="mini" style="margin: 0;" @click="modify(index)">修改</button>
				</view>
				<view v-if="item.modifyDiscount==true">
					<view class="add_reward2">
						<view class="couponImg">
							<view class="left">
								<text style="margin: auto;">{{item.organization}}</text>
								<text style="font-size: x-large;margin: auto;margin-top: 0;">{{item.couponName}}</text>
							</view>
							<view class="right">
								<button v-if="item.disable==true" size="mini" style="background: #BBBBBB;">查看详情</button>
								<button v-else size="mini" v-on:click="toDetail(item + 1)">查看详情</button>
							</view>
						</view>
						<text style="padding-top: 20upx;color: #BBBBBB;">券预览图</text>
						<view style="width: 90%;padding-top: 20upx;">填写相关信息</view>
						<view class="inputs">
							<text style="width: 20%;">券名：</text>
							<input type="text" :value="item.couponName" placeholder="请输入券名" style="width: 85%;border-bottom: 1px solid #F2F2F2;" :id="index + 1" v-on:input="setName"/>
						</view>
						<view class="inputs">
							<view style="width: 30%;">可用时间：</view>
							<input type="text" :value="item.availableTime" placeholder="请输入优惠券可用时间" style="width: 70%;border-bottom: 1px solid #F2F2F2;" :id="index + 1" v-on:input="setATime"/>
						</view>
						<view class="inputs">
							<view style="width: 30%;">有效日期：</view>
							<input type="text" :value="item.exTime" placeholder="请输入优惠券有效日期" style="width: 70%;border-bottom: 1px solid #F2F2F2;" :id="index + 1" v-on:input="setETime"/>
						</view>
						<view class="inputs">
							<view style="width: 30%;">发券机构：</view>
							<select v-model="couponList[index].organization">
								<option value="volvo" style="display: none;">请选择机构</option>
								<option v-for="item2 in organizationList" :key="item2.index" :value="item2">{{item2}}</option>
							</select>
						</view>
						<view class="inputs" style="align-items: flex-start;">
							<view style="width: 30%;">使用规则：</view>
							<textarea type="text" auto-height="true" placeholder="请输入使用规则" style="width: 70%;border-bottom: 1px solid #F2F2F2;" :id="index + 1" v-on:input="setRule" v-model="item.rule"><s:property :value="item.rule"/></textarea>
		</view>

		<button class="btn" @click="save(index)">确定</button>
	</view>
	</view>
	<view v-else>
		<view class="add_reward">
			<view class="couponImg">
				<view class="left">
					<text style="margin: auto;">{{item.organization}}</text>
					<text style="font-size: x-large;margin: auto;margin-top: 0;">{{item.couponName}}</text>
				</view>
				<view class="right">
					<button v-if="item.disable==true" size="mini" style="background: #BBBBBB;">查看详情</button>
					<button v-else size="mini" v-on:click="toDetail(index + 1)">查看详情</button>
				</view>
			</view>
		</view>
	</view>
	</view>
	</view>

	<view style="width: 90%;display: flex;justify-content: space-between;margin: auto;align-items: center;height: 100upx;">
		<text>优惠{{couponList.length + 1}}</text>
	</view>
	<view v-if="coupon.modifyDiscount==false" class="add_reward" v-on:click="add_discount">
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
				<button v-if="coupon.disable==true" size="mini" style="background: #BBBBBB;">查看详情</button>
				<button v-else size="mini" v-on:click="toDetail(0)">查看详情</button>
			</view>
		</view>
		<text style="padding-top: 20upx;color: #BBBBBB;">券预览图</text>
		<view style="width: 90%;padding-top: 20upx;">填写相关信息</view>
		<view class="inputs">
			<text style="width: 20%;">券名：</text>
			<input type="text" value="" placeholder="请输入券名" style="width: 85%;border-bottom: 1px solid #F2F2F2;" id="0"
			 v-on:input="setName" />
		</view>
		<view class="inputs">
			<view style="width: 30%;">中奖概率：</view>
			<input type="text" value="" placeholder="请输入该券中奖概率" style="width: 70%;border-bottom: 1px solid #F2F2F2;" id="0"
			 v-on:input="setProbability" />
		</view>
		<view class="inputs">
			<view style="width: 30%;">数量上限：</view>
			<input type="text" value="" placeholder="请输入该券数量上限" style="width: 70%;border-bottom: 1px solid #F2F2F2;" id="0"
			 v-on:input="setToplimit" />
		</view>
		<view class="inputs">
			<view style="width: 30%;">发券时间：</view>
			<input type="text" value="" placeholder="请输入优惠券发送时间" style="width: 70%;border-bottom: 1px solid #F2F2F2;" id="0"
			 v-on:input="setPTime" />
		</view>
		<view class="inputs">
			<view style="width: 30%;">可用时间：</view>
			<input type="text" value="" placeholder="请输入优惠券可用时间" style="width: 70%;border-bottom: 1px solid #F2F2F2;" id="0"
			 v-on:input="setATime" />
		</view>
		<view class="inputs">
			<view style="width: 30%;">有效日期：</view>
			<input type="text" value="" placeholder="请输入优惠券有效日期" style="width: 70%;border-bottom: 1px solid #F2F2F2;" id="0"
			 v-on:input="setETime" />
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
			<textarea type="text" value="" auto-height="true" placeholder="请输入使用规则" style="width: 70%;border-bottom: 1px solid #F2F2F2;"
			 id="0" v-on:input="setRule" v-model="coupon.rule" />
			</view>
				
				<button class="btn" @click="addCoupon">确定</button>
			</view>
		
		<view v-if="couponList.length>0" style="width: 80%;display: flex;justify-content: space-between;margin: auto;margin-top: 100upx;">
			<button type="primary" size="default" style="width: 250upx;">保存</button>
			<button type="default" size="default" style="width: 250upx;" @click="handleAlert02">创建活动</button>
		</view>
		<xy-dialog 
			ref="xyDialog02" 
			title="false"
			message="确定创建？"
			@cancelButton="handleClose" 
			@confirmButton="handleConfirm"
		></xy-dialog>
		<view class="title"></view>
	</view>
</template>

<script>
	import xyDialog from '@/pages/components/xy-dialog/xy-dialog.vue'
	export default {
		data() {
			return {
				activeName: '',
				ads:[],
				coupon:{
					couponName: '请输入券名',
					probability: '',
					toplimit: '',
					publishTime: '',
					availableTime: '',
					exTime: '',
					organization: '请输入发券机构',
					rule: '',
					disable: true,
					modifyDiscount: false,
				},
				organizationList: [
					'特斯了1',
					'特斯了2',
					'特斯了3',
					'特斯了4'
				],
				couponList:[]
			}
		},
		components:{
			xyDialog
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
				this.coupon.modifyDiscount = true
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
			setName:function(e){
				console.log(e)
				if(e.currentTarget.id == 0){
					this.coupon.couponName = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.availableTime.length>0&&
						this.coupon.exTime.length>0&&
						this.coupon.organization!='请输入发券机构'&&
						this.coupon.organization.length>0&&
						this.coupon.rule.length>0){
						this.coupon.disable = false
					}else{
						this.coupon.disable = true
					}
				}else{
					var i = e.currentTarget.id - 1
					console.log(i)
					this.couponList[i].couponName = e.detail.value
					if(this.couponList[i].couponName.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.couponList[i].couponName!='请输入券名'&&
						this.couponList[i].availableTime.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].organization!='请输入发券机构'&&
						this.couponList[i].organization.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			setProbability:function(e){
				console.log(e)
				if(e.currentTarget.id == 0){
					this.coupon.probability = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.availableTime.length>0&&
						this.coupon.exTime.length>0&&
						this.coupon.organization!='请输入发券机构'&&
						this.coupon.organization.length>0&&
						this.coupon.rule.length>0){
						this.coupon.disable = false
					}else{
						this.coupon.disable = true
					}
				}else{
					var i = e.currentTarget.id - 1
					console.log(i)
					this.couponList[i].probability = e.detail.value
					if(this.couponList[i].couponName.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.couponList[i].couponName!='请输入券名'&&
						this.couponList[i].availableTime.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].organization!='请输入发券机构'&&
						this.couponList[i].organization.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			setToplimit:function(e){
				console.log(e)
				if(e.currentTarget.id == 0){
					this.coupon.toplimit = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.availableTime.length>0&&
						this.coupon.exTime.length>0&&
						this.coupon.organization!='请输入发券机构'&&
						this.coupon.organization.length>0&&
						this.coupon.rule.length>0){
						this.coupon.disable = false
					}else{
						this.coupon.disable = true
					}
				}else{
					var i = e.currentTarget.id - 1
					console.log(i)
					this.couponList[i].toplimit = e.detail.value
					if(this.couponList[i].couponName.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.couponList[i].couponName!='请输入券名'&&
						this.couponList[i].availableTime.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].organization!='请输入发券机构'&&
						this.couponList[i].organization.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			setPTime:function(e){
				console.log(e)
				if(e.currentTarget.id == 0){
					this.coupon.publishTime = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.availableTime.length>0&&
						this.coupon.exTime.length>0&&
						this.coupon.organization!='请输入发券机构'&&
						this.coupon.organization.length>0&&
						this.coupon.rule.length>0){
						this.coupon.disable = false
					}else{
						this.coupon.disable = true
					}
				}else{
					var i = e.currentTarget.id - 1
					console.log(i)
					this.couponList[i].publishTime = e.detail.value
					if(this.couponList[i].couponName.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.couponList[i].couponName!='请输入券名'&&
						this.couponList[i].availableTime.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].organization!='请输入发券机构'&&
						this.couponList[i].organization.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			setATime:function(e){
				if(e.currentTarget.id == 0){
					this.coupon.availableTime = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.coupon.availableTime.length>0&&
						this.coupon.exTime.length>0&&
						this.coupon.organization!='请输入发券机构'&&
						this.coupon.organization.length>0&&
						this.coupon.rule.length>0){
						this.coupon.disable = false
					}else{
						this.coupon.disable = true
					}
				}else{
					var i = e.currentTarget.id - 1
					this.couponList[i].availableTime = e.detail.value
					if(this.couponList[i].couponName.length>0&&
						this.couponList[i].couponName!='请输入券名'&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.couponList[i].availableTime.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].organization!='请输入发券机构'&&
						this.couponList[i].organization.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			setETime:function(e){
				if(e.currentTarget.id == 0){
					this.coupon.exTime = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.coupon.availableTime.length>0&&
						this.coupon.exTime.length>0&&
						this.coupon.organization!='请输入发券机构'&&
						this.coupon.organization.length>0&&
						this.coupon.rule.length>0){
						this.coupon.disable = false
					}else{
						this.coupon.disable = true
					}
				}else{
					var i = e.currentTarget.id - 1
					this.couponList[i].exTime = e.detail.value
					if(this.couponList[i].couponName.length>0&&
						this.couponList[i].couponName!='请输入券名'&&
						this.couponList[i].availableTime.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].organization!='请输入发券机构'&&
						this.couponList[i].organization.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			setRule:function(e){
				if(e.currentTarget.id == 0){
					this.coupon.rule = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.availableTime.length>0&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.coupon.exTime.length>0&&
						this.coupon.organization!='请输入发券机构'&&
						this.coupon.organization.length>0&&
						this.coupon.rule.length>0){
						this.coupon.disable = false
					}else{
						this.coupon.disable = true
					}
				}else{
					var i = e.currentTarget.id - 1
					this.couponList[i].rule = e.detail.value
					if(this.couponList[i].couponName.length>0&&
						this.couponList[i].couponName!='请输入券名'&&
						this.coupon.probability.length>0&&
						this.coupon.toplimit.length>0&&
						this.coupon.publishTime.length>0&&
						this.couponList[i].availableTime.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].organization!='请输入发券机构'&&
						this.couponList[i].organization.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			toDetail:function(e){
				if(e==0){
					uni.navigateTo({
						url: 'randomCoupon?detail=' + JSON.stringify(this.coupon) + "&ads=" + JSON.stringify(this.ads)
					})
				}else{
					e--
					console.log(e)
					uni.navigateTo({
						url: 'randomCoupon?detail=' + JSON.stringify(this.couponList[e]) + "&ads=" + JSON.stringify(this.ads)
					})
				}
			},
			addCoupon:function(){
				if(this.coupon.disable==false){
					this.coupon.modifyDiscount = false
					this.couponList.push(this.coupon)
					this.coupon = {
						couponName: '请输入券名',
						availableTime: '',
						publishTime: '',
						toplimit: '',
						probability: '',
						exTime: '',
						organization: '请输入发券机构',
						rule: '',
						disable: true,
						modifyDiscount: false
					}
				}else{
					uni.showToast({
						title: '请填写完整信息',
						icon: 'none'
					})
				}
			},
			modify:function(e){
				this.couponList[e].modifyDiscount = true
			},
			save:function(e){
				this.couponList[e].modifyDiscount = false
			},
			createActive:function(){
				if(this.activeName.length>0&&this.ads.length>0&&this.couponList.length>0){
					uni.showToast({
						title: '您没有权限进行创建！'
					})
				}else{
					uni.showToast({
						title: '活动尚未完成编辑，未能创建!'
					})
				}
			},
			handleClose () {
				console.log('点击关闭按钮')
				uni.showToast({
					title: '点击关闭按钮,触发自定义事件',
					icon: 'none'
				})
			},
			// 确定按钮方法
			handleConfirm () {
				console.log('点击确定按钮')
				uni.showToast({
					title: '您没有权限进行创建!',
					icon: 'none'
				})
			},
			handleAlert02 () {
				this.$refs.xyDialog02.alert()
			},
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
		height: 150upx;
		width: 90%;
		border: 3px solid #ffdd00;
		border-radius: 20upx;
		display: flex;
		margin: auto;
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
