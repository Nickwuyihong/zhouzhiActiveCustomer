<template>
	<view class="body">
		<view class="content-top">
			<view  style="display: flex;height: 100upx;">
				<view class="content-1">
					<image class="box-image" :src='avatarUrl' :onerror='errorImage()'></image>
				</view>
				<view class="content-2">
					<view class="content-2-top">
						<text class="text-content" style="color: #000000;font-weight: bold;" v-if="logined">{{name}}</text>
						<text class="text-content" style="color: #000000;font-weight: bold;" @click="login" v-if="nologined">{{name}}</text>
					</view>
					<view class="content-2-bottom">
						<view v-if="showed1">
							<text class="text-content" style="margin-right: 20upx;">游客</text>
						</view>
						<picker mode="selector" @change="bindPickerChange" :range="shops" id="0" range-key="company_name" v-if="showed2">
							<text class="text-content">机构：{{shopName}}</text>
						</picker>
					</view>
				</view>
				<view style="display: flex;height: 30upx;width: 150upx; position: absolute;right: 30upx;align-items: center;text-align: center;margin-top: 40upx;" @click="edit">
					<text style="line-height: 30upx;font-size: 25upx;color:#595757 ;margin-right: 10upx;">编辑资料</text>
					<image src="../../../../static/image/1-01.png" style="height: 30upx;width: 35upx;"></image>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-left">
			<image class="image" src="../../../../static/image/mall-01.png"></image>
			<text>商城</text>
			</view>
			<view class="content-right">
			<image style="display: block; height: 30upx;width: 35upx;margin-right: 30upx;" src="../../../../static/image/2-01.png" @click="show"></image>
			</view>
		</view>
		<view class="content-first" v-if="showed">
			<view class="content-first1" v-for="(iterm,index) in commodity">
				<view style="display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;font-size: 25upx;color:#595757 ;">
					<image :src="iterm.src" class="commodity-image" @click="scan(index)"></image>
					<text>{{iterm.type}}</text>
				</view>
			</view>
		</view>
		<!-- <view class="content" @click="jump('/pages/tabbar/tabbar-1/authorityManagemengt/authorityManagement')">选择门店</view> -->
		<view class="content">
			<view class="content-left">
			<image class="image" src="../../../../static/image/ordering-01.png"></image>
			<text>我的订单</text>
			</view>
			<view class="content-right">
			<image style="display: block; height: 30upx;width: 35upx;margin-right: 30upx;" src="../../../../static/image/1-01.png"></image>
			</view>
		</view>
		<view class="content" @click="jump('./wallet/wallet')">
			<view class="content-left">
			<image class="image" src="../../../../static/image/wallet-01.png" ></image>
			<text>我的钱包</text>
			</view>
			<view class="content-right">
			<image style="display: block; height: 30upx;width: 35upx;margin-right: 30upx;" src="../../../../static/image/1-01.png"></image>
			</view>
		</view>
		
		<view class="content" @click="jump('/pages/tabbar/tabbar-1/authorityManagemengt/editShop/editShop')">
			<view class="content-left">
			<image class="image" src="../../../../static/image/management-01.png"></image>
			<text>门店管理</text>
			</view>
			<view class="content-right">
			<image style="display: block; height: 30upx;width: 35upx;margin-right:30upx;" src="../../../../static/image/1-01.png"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	import App from '../../../../App.vue'
	import Api from '../../../../api.js'
	export default {
		data() {
			return {
				logined:true,
				nologined:false,
				showed:false,
				url: '',
				showed1: false,
				showed2: false,
				avatarUrl: '',
				name: '',
				shopName: '',
				shops: [],
				commodity:[
			    {
					type:'单月套餐',
					src:'../../../../static/image/month-01.png',//单月
				},
				{
					type:'季度套餐',
					src:'../../../../static/image/quarter-01.png',//季度
				},
				{
					type:'半年套餐',
					src:'../../../../static/image/halfyear-01.png',//半年
				},
				{
					type:'年度套餐',
					src:'../../../../static/image/year-01.png',//年度
				}
				]
			};
		},
		methods: {
			//登录
			login:function(){
					uni.navigateTo({
						url: '../login'
					})
			},
			//个人信息编辑
			edit:function(){
				if(App.getToken()){
					uni.navigateTo({
						url:'./edit/edit?avatarUrl='+this.avatarUrl+'&'+'name='+this.name
					})
				}
				else{
					uni.showToast({
						title:'您尚未登录'
					})
				}
				},
			show:function(){
				this.showed=!this.showed
			},
			//错误图片
			errorImage: function() {
				this.avatarUrl = this.url
			},
			//picker改变
			bindPickerChange: function(e) {
				var that = this
				console.log(e)
				console.log('picker发送选择改变，携带值为', e.target.value)
				var ind = e.target.value
				that.shopName = that.shops[e.target.value].company_name
				App.savecompany(that.shops[e.target.value])
			},
			//跳转（个人订单、钱包、门店管理）
			jump(url) {
				if (!url) return;
				uni.navigateTo({
					url
				});
			},
			//产看商城
			scan(index){
				uni.navigateTo({
					url:'./commodity-detail/commodity-detail?index='+index
				});
			},
			//二维码（本页面没有）
			
		},
		onShow() {
			var that = this;
			if (App.getToken()) {
				console.log(App.getcompany())
				//内存中有公司
				if (App.getcompany()) {
					that.showed1 = false//显示机构，否则显示游客
					that.showed2 = true
					this.shopName = App.getcompany().company_name;
					uni.request({
						url: Api.shop(),
						header: {
							token: App.getToken()
						},
						success: function(res) {
							if (res.data.code == 200) {
								that.shops = res.data.value
							} else {
								uni.showToast({
									title: '获取门店失败',
									duration: 2000,
									icon: 'none'
								})
							}
						},
					})
				} else {
					uni.request({
						url: Api.shop(),
						header: {
							token: App.getToken()
						},
						success: function(res) {
							if (res.data.code == 200) {
								that.showed1 = false
								that.showed2 = true
								that.shopName = '请选择门店'
								console.log(res)
								that.shops = res.data.value;
								console.log(that.shops);
							} else if (res.data.code == 1005) {
								that.showed1 = true
								that.showed2 = false
								// uni.showToast({
								// 	title: '您不属于任何商家',
								// 	duration: 2000,
								// 	icon:'none'
								// })
							}
						}
					})
				}
				console.log(App.getcompany().company_name);
				uni.request({
					url: Api.seeUser(),//查看个人信息
					header: {
						token: App.getToken(),
					},
					data: {
						otherId: App.getUserId()
					},
					success(res) {
						console.log(res)
						if (res.data.code) {
							uni.showToast({
								title: 'token失效！',
								icon: 'none'
							})
							uni.clearStorage()
						} else {
							that.url = App.geturlerror(res.data.user.author_image)
							console.log(that.url)
							that.avatarUrl = res.data.user.author_image
							that.name = res.data.user.author_name
						}
					}
				})
			} else {
				this.name='点击授权登录'
				this.logined=false
				this.nologined=true
				this.url='../../../../static/img/tabbar/me.png'
			}
		}
	}
</script>

<style>
	.body {
		display: block;
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
		background-color: #f7f8f8;
	}
    .content-first{
		display: flex;
		height: 150upx;
		width: 100%;
		background: #FFFFFF;
		margin-bottom: 20upx;
		align-items: center;
		justify-content: center;
	}
	.content-first1{
		display: flex;
		flex-direction: row;
		height: 90%;
		width: 90%;
		background: #FFFFFF;
		
	}
	.content {
		display: flex;
		background: #FFFFFF;
		flex-direction: row;
		font-size: 35upx;
		color: #595757;
		height: 120upx;
		width: 100%;
		border-bottom: 2upx solid #EBEDF0;
	}
    .content-left{
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-start;
	}
	.content-right{
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-end;
	}
	.content-1 {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-start;
	}

	.content-2 {
		display: flex;
		flex-direction: column;
	}

	.content-2-top {
		display: flex;
		flex: 1;
	}

	.content-2-bottom {
		display: flex;
		flex: 1;
	}

	.box-image {
		height: 100upx;
		width: 100upx;
		margin-right: 20upx;
		border-radius: 15upx;
		/* border-radius: 1upx; */
	}

	.text-content {
		line-height: 60upx;
		text-align: center;
		display: block;
		font-size: 35upx;
		color: grey;
	}

	.content-top {
		display: flex;
		padding-left: 40upx;
		background: #FFFFFF;
		flex-direction: row;
		margin-top: 40upx;
		font-size: 35upx;
		color: #595757;
		height: 170upx;
		width: 100%;
		margin-bottom: 20upx;
	}
	.image{
		width: 70upx;
		height: 70upx;
		margin-right: 15upx;
		margin-left: 40upx;
	}
	.commodity-image{
		width: 70upx;
		height: 70upx;
		margin-bottom: 5upx;
	}
</style>
