<template>
	<view class="body">
		<view class="title">活动名称</view>
		<view class="activeName">
			<input type="text" :value="activeName" placeholder="请输入活动名称" style="width: 90%;margin: auto;" v-on:input="setTitle"
			 v-model="activeName" />
		</view>

		<view class="title">选择活动开始时间：</view>
		<view class="activeName" style="display: flex;justify-content: center;">
		<view class="time">
			<picker mode="date" :value="startTime" :start="startDate" :end="endDate" @change="bindDateChange" id="1">
				<view class="uni-input">{{startTime}}</view>
			</picker>
		</view>
		</view>
		<view class="title">选择活动结束时间：</view>
		<view class="activeName" style="display: flex;justify-content: center;">
		<view class="time">
			<picker mode="date" :value="endTime" :start="startDate" :end="endDate" @change="bindDateChange" id="2">
				<view class="uni-input">{{endTime}}</view>
			</picker>
		</view>
		</view>
		<view class="title">活动内容</view>

		<view v-if="ads.length==0" class="add_img">
			<view style="margin: auto;margin-left: 50upx;">添加广告图片</view>
			<image src="../../../../../../static/img/addImg.png" v-on:click="add_img"></image>
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
				<image src="../../../../../../static/img/addReward.png" v-on:click="add_img"></image>
				<text>继续添加广告图片</text>
			</view>
		</view>
		
		<view class="title" style="margin-top: 50upx;">奖励设置</view>
		
		<view v-if="couponList.length>0" class="">
			<view v-for="(item,index) in couponList" :key="index">
				<view style="width: 90%;display: flex;justify-content: space-between;margin: auto;align-items: center;height: 100upx;">
					<text>{{index + 1}}等奖</text>
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
						<!-- <view class="inputs">
							<view style="width: 30%;">数量上限：</view>
							<input type="text" :value="item.toplimit" placeholder="请输入该券数量上限 (例: 300张)" style="width: 70%;border-bottom: 1px solid #F2F2F2;" :id="index + 1" v-on:input="setToplimit"/>
						</view> -->
						<!-- <view class="inputs">
							<view style="width: 30%;">开始时间：</view>
							
							<picker mode="date" :id="index + 1" :value="item.availableTime" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{item.availableTime}}</view>
							</picker>
						</view>
						<view class="inputs">
							<view style="width: 30%;">券有效期：</view>
							<input type="text" :value="item.exTime" placeholder="请输入优惠券有效天数" style="width: 70%;border-bottom: 1px solid #F2F2F2;" :id="index + 1" v-on:input="setETime"/>
						</view> -->
						<view class="inputs">
							<view style="width: 30%;">发券机构：</view>
							<view class="uni-input">{{item.organization}}</view>
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
		<text>打卡奖励</text>
	</view>
	<view v-if="coupon.modifyDiscount==false" class="add_reward" v-on:click="add_discount">
		<image src="../../../../../../static/img/addReward.png"></image>
		<text>添加奖励</text>
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
		<!-- <view class="inputs">
			<view style="width: 30%;">数量上限：</view>
			<input type="text" placeholder="请输入该券数量上限 (例: 300张)" style="width: 70%;border-bottom: 1px solid #F2F2F2;" id="0"
			 v-on:input="setToplimit" />
		</view> -->
	<!-- 	<view class="inputs">
			<view style="width: 30%;">开始时间：</view>
			<picker mode="date" :value="coupon.availableTime" :start="startDate" :end="endDate" @change="bindDateChange" id="0">
				<view class="uni-input">{{coupon.availableTime}}</view>
			</picker>
		</view>
		<view class="inputs">
			<view style="width: 30%;">券有效期：</view>
			<input type="text" value="" placeholder="请输入优惠券有效天数" style="width: 70%;border-bottom: 1px solid #F2F2F2;" id="0"
			 v-on:input="setETime" />
		</view> -->
		<view class="inputs">
			<view style="width: 30%;">发券机构：</view>
			<view class="">

			</view>
			<view class="uni-input">{{coupon.organization}}</view>
		</view>
		<view class="inputs" style="align-items: flex-start;">
			<view style="width: 30%;">使用规则：</view>
			<textarea type="text" value="" auto-height="true" placeholder="请输入使用规则" style="width: 70%;border-bottom: 1px solid #F2F2F2;"
			 id="0" v-on:input="setRule" v-model="coupon.rule" />
			</view>
				<button class="btn" @click="handleConfirm()">创建</button>
			</view>
		
		<view v-if="couponList.length>0" style="width: 80%;display: flex;justify-content: space-between;margin: auto;margin-top: 100upx;">
			<button class="btnSave" size="default" @click="saveActive">保存</button>
			<button class="btnCreate" size="default" @click="createActive"  :disabled="readyToUpdate">创建活动</button>
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
	import Api from "../../../../../../api.js"
	import App from "../../../../../../App.vue"
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				startTime:currentDate,
				endTime:currentDate,
				activeName: '',
				ads:[],
				readyToUpdate: true,
				coupon:{
					couponName: '请输入券名',
					availableTime: currentDate,
					exTime: '',
					organization: '请选择机构',
					rule: '',
					disable: true,
					modifyDiscount: false,
					toplimit: '',
					company_index: 0
				},
				couponList: [],
				activityId: 0
			}
		},
		components:{
			xyDialog
		},
		onLoad() {
			
		},
		created() {
			var that = this
			that.coupon.organization = App.getcompany().company_name
			// uni.getStorage({
			// 	key: 'active',
			// 	success: function (res) {
			// 		console.log(res.data);
			// 		that.activityId = res.data.activityId
			// 		that.ads = res.data.ads
			// 		that.couponList = res.data.couponList
			// 		that.activeName = res.data.activeName
			// 		if(that.activeName.length>0&&that.ads.length>0&&that.couponList.length>0){
			// 			that.readyToUpdate = false
			// 		}else{
			// 			that.readyToUpdate = true
			// 		}
			// 	}
			// })
		},
		computed: {
			startDate() {
				return this.getDate('start')
			},
			endDate() {
				return this.getDate('end')
			}
		},
		methods: {
			bindDateChange: function(e) {
				var that = this
				console.log(e)
				var time = e.target.value
				if(e.currentTarget.id == 0){
					that.coupon.availableTime = time
				}
				else if(e.currentTarget.id == 1){
					that.startTime=time
				}
				else if(e.currentTarget.id == 2){
					that.endTime=time
				}
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
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
				//活动名称>0,广告长度大于0，卡卷长度>0,readyToUpdate为false
				if(this.activeName.length>0&&this.ads.length>0&&this.couponList.length>0){
					this.readyToUpdate = false
				}else{
					this.readyToUpdate = true
				}
			},
			//活动名称
			setTitle:function(e){
				this.activeName = e.detail.value
				console.log(this.activeName)
				if(this.activeName.length>0&&this.couponList.length>0){
					this.readyToUpdate = false
				}else{
					this.readyToUpdate = true
				}
			},
			//广告链接
			setLink:function(e){
				this.ads[e.currentTarget.id].link = e.detail.value
				if(this.activeName.length>0&&this.ads.length>0&&this.couponList.length>0){
					this.readyToUpdate = false
				}else{
					this.readyToUpdate = true
				}
			},
			//券名
			setName:function(e){
				console.log(e)
				if(e.currentTarget.id == 0){
					this.coupon.couponName = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.rule.length>0){
						this.coupon.disable = false//该券可发
					}else{
						this.coupon.disable = true
					}
				}else{
					var i = e.currentTarget.id - 1
					console.log(i)
					this.couponList[i].couponName = e.detail.value
					if(this.couponList[i].couponName.length>0&&
						this.couponList[i].couponName!='请输入券名'&&
						this.couponList[i].toplimit.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			//数量上限
			setToplimit:function(e){
				console.log(e)
				if(e.currentTarget.id == 0){
					this.coupon.toplimit = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.toplimit.length>0&&
						this.coupon.exTime.length>0&&
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
						this.couponList[i].couponName!='请输入券名'&&
						this.couponList[i].toplimit.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			//开始时间
			setATime:function(e){
				if(e.currentTarget.id == 0){
					this.coupon.availableTime = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.toplimit.length>0&&
						this.coupon.exTime.length>0&&
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
						this.couponList[i].toplimit.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			//有效天数
			setETime:function(e){
				if(e.currentTarget.id == 0){
					this.coupon.exTime = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.couponName!='请输入券名'&&
						this.coupon.toplimit.length>0&&
						this.coupon.exTime.length>0&&
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
						this.couponList[i].toplimit.length>0&&
						this.couponList[i].exTime.length>0&&
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			//规则
			setRule:function(e){
				if(e.currentTarget.id == 0){
					this.coupon.rule = e.detail.value
					if(this.coupon.couponName.length>0&&
						this.coupon.couponName!='请输入券名'&&
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
						this.couponList[i].rule.length>0){
						this.couponList[i].disable = false
					}else{
						this.couponList[i].disable = true
					}
				}
			},
			//卡卷细节
			toDetail:function(e){
				if(e==0){
					uni.navigateTo({
						url: '../coupon?detail=' + JSON.stringify(this.coupon) + "&ads=" + JSON.stringify(this.ads)
					})
				}else{
					e--
					console.log(e)
					uni.navigateTo({
						url: '../coupon?detail=' + JSON.stringify(this.couponList[e]) + "&ads=" + JSON.stringify(this.ads)
					})
				}
			},
			addCoupon:function(){
				//创建卡卷完成
				if(this.coupon.disable==false){
					this.coupon.modifyDiscount = false//卡卷可修改
					this.couponList.push(this.coupon)
					var newDate = this.getDate({
						format: true
					})//当前时间
					//卡券刷新
					this.coupon = {
						couponName: '请输入券名',
						availableTime: newDate,
						exTime: '',
						organization: App.getcompany().company_name,
						rule: '',
						disable: true,//卡券创建未完成
						modifyDiscount: false,//卡券可修改
						toplimit: ''
					}
				}else{
					uni.showToast({
						title: '请填写完整信息',
						icon: 'none'
					})
				}
				if(this.activeName.length>0&&this.couponList.length>0){
					this.readyToUpdate = false
				}else{
					this.readyToUpdate = true
				}
			},
			modify:function(e){
				this.couponList[e].modifyDiscount = true
			},
			save:function(e){
				this.couponList[e].modifyDiscount = false
			},
			createActive:function(){
				this.$refs.xyDialog02.alert()
			},
			saveActive:function(){
				var that = this
				var active = {
					activeName: that.activeName,
					activityId: that.activityId,
					ads: that.ads,
					couponList: that.couponList
				}
				uni.setStorage({
					key: 'active',
					data: active,
					success: function () {
						console.log('success');
						uni.showToast({
							title: '保存成功'
						})
						setTimeout(function(){
							uni.navigateBack({
								delta: 1
							})
						},2000)
					}
				})
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
				var that = this
				console.log('点击确定按钮')
				uni.request({
					url: Api.puch(),
					method: 'POST',
					header:{
						'content-type': 'application/x-www-form-urlencoded',
						token: App.getToken()
					},
					data:{
						activityName: that.activeName,
						companyId: App.getcompany().company_id,
						start_time:new Date(that.startTime).getTime()/1000,
						end_time:new Date(that.endTime).getTime()/1000
					},
					success:function(res){
						console.log(res)
						if(res.data.code==200){
							that.activityId = res.data.value.activity_id
							//创建卡券
							
								var atime = new Date(that.startTime).getTime()/1000
								var btime = new Date(that.endTime).getTime()/1000
								if(atime.toString()=="NaN"){
									atime = 0
									console.log(atime)
								}
								if(btime.toString()=="NaN"){
									btime = 0
									console.log(btime)
								}
								uni.request({
									url: Api.puchCoupon(),
									method:	'POST',
									header:{
										'content-type': 'application/x-www-form-urlencoded',
										token: App.getToken()
									},
									data:{
										companyId: App.getcompany().company_id,
										activityId: that.activityId,
										name: that.coupon.couponName,
										state: that.coupon.rule,	
										start: atime,
										end:btime
									},
									success:function(res){
										console.log(res)
										if(res.data.code == 200){
											uni.showToast({
												title: '活动创建成功',
												icon: 'none'
											})
											var newDate = that.getDate({
												format: true
											})
											that.coupon = {
												couponName: '请输入券名',
												availableTime: newDate,
												exTime: '',
												organization: App.getcompany().company_name,
												rule: '',
												disable: true,
												modifyDiscount: false,
												toplimit: ''
												
											}
											 that.activeName=''
											 that.ads=[]
											 that.activityId=0
										}else{
											uni.showToast({
												title: '创建失败',
												icon: 'none'
											})
											
										}
									}
								})
							
							
							//创建广告
							// for(var i=0;i<that.ads.length;i++){
							// 	uni.request({
							// 		url: Api.addAds(),
							// 		method: 'POST',
							// 		header:{
							// 			token: App.getToken(),
							// 			'content-type': 'application/x-www-form-urlencoded',
							// 		},
							// 		data:{
							// 			url: that.ads[i].link,
							// 			
							// 		}
							// 	})
							// }
							
						}
						else if(res.data.code==1009){
							uni.showToast({
								title: '已存在一个打卡活动',
								icon: 'none'
							})
						}
						else{
							uni.showToast({
								title: '获取活动id失败',
								icon: 'none'
							})
						}
					}
				})
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
    .time{
		display: flex;
		align-items: center;
		border: 2upx solid #727171;
		color: #595757;
		font-size: 35upx;
		height: 60upx;
		width: 250upx;
		margin-left: 5%;
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
	
	.btnSave{
		background: #22BB22;
		width: 250upx;
		color: #FFFFFF;
	}
	
	.btnCreate{
		background: #FFBB00;
		width: 250upx;
		color: #FFFFFF;
	}
</style>
