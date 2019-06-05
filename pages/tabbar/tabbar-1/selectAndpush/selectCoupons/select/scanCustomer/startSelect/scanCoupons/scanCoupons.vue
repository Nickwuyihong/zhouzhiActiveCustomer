<template>
	<view class="body">
		<scroll-view class="content" :scroll-y="true">
			<view style="font-size: 30upx;color: #000;margin: 20upx 30upx;font-weight: bold;">当前所在活动：{{actName}}</view>
			<checkbox-group @change="checkboxChange">
				<view class="content-main" v-for="(iterm,index) in activity" :key="iterm.coupon_type_id">
					<view style="font-size: 25upx;color: #808080;margin-bottom: 30upx;margin-left: 20upx;">
						<text style="margin-right: 20upx;">{{index+1}}等奖</text>
						<text>数量：</text>
						<text>{{iterm.coupon_sum}} 张</text>
						<checkbox style="display: inline;position: absolute;right: 30upx;" v-if="iterm.isSend==false" :value="iterm.coupon_type_id"
						 :checked="iterm.checked">未派发</checkbox>
						<text style="display: inline;position: absolute;right: 30upx;" v-if="iterm.isSend==true">已派发</text>
					</view>
					<view class="picture">
						<view class="picture-left">
							<view style="font-size: 30upx;margin-left: 30upx;margin-top: 10upx;">{{companyName}}</view>
							<view style="font-size: 45upx;margin-left: 30upx;">{{iterm.couponName}}</view>
						</view>
						<view class="picture-right">
							<button class="btn-1" @click="scan(index)">查看详情</button>
						</view>
					</view>
				</view>
			</checkbox-group>
			<button style="display: block;font-size:35upx ;width: 500upx;height: 75upx;color: #FFFFFF;background: #FF6E6E;line-height: 75upx;border-radius: 25upx;margin-top:60upx;margin-bottom:30upx;" @click="jump()">勾选完毕，向以下名单派发</button>
			<view class="content-center" >
				<view style="font-size: 25upx;color: #808080;margin:20upx 30upx;">将向下列用户依次派发所勾卡券:</view>
				<scroll-view class="picture-1" scroll-y="true" :scroll-top="0">
					<view class="picture-avtatar">
						<image v-for="iterm in customers" class="avatar" :src="iterm.author_image"></image>
					</view>
				</scroll-view>
			</view>
		</scroll-view>

		<view class="dialog-cover" v-if="showed">
			<view class="sure">
				<view style="display: flex;flex:1;align-items: center;justify-content: center;">发布成功</view>
				<view style="display: flex;flex:1;">
					<button class="btn" @click="recall">回到主页</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Api from '../../../../../../../../../api.js'
	import App from '../../../../../../../../../App.vue'
	export default {
		data() {
			return {
				// couponsInfor: {},
				companyName: App.getcompany().company_name,
				actName: '',
				activity: [],
				coupon_type: [],
				customers: [],
				showed: false,
				userId:[]
			};
		},
		methods: {
			checkboxChange: function(e) {

				this.coupon_type = e.detail.value.sort();
				// console.log(e.detail.value)
				for (var iterm in this.coupon_type) {
					this.coupon_type[iterm] = parseInt(this.coupon_type[iterm])
				}
				
				console.log(this.coupon_type)
			},
			jump: function() {
				var that = this
					uni.request({
						url: Api.postCoupons(),
						method: 'POST',
						header: {
							"Content-Type": "application/x-www-form-urlencoded",
							token: App.getToken()
						},
						data: {
							userId: that.userId,
							companyId: App.getcompany().company_id,
							typeId: that.coupon_type
						},
						success(res) {
							console.log(res)
							if (res.data.code == 200) {
								that.showed = true;
							}
						}
					})
					// console.log(that.customers[iterm].author_id)
					console.log(that.coupon_type)

			},
			recall: function() {
				uni.reLaunch({
					url: '../../../../../../selectAndpush/selectAndpush'
				});
				this.showed = false;
			},
			scan: function(index) {
				uni.navigateTo({
					url: "./couponsDetails/couponsDetails?coupon_type_id=" + this.activity[index].coupon_type_id
				})
				console.log(this.activity[index].coupon_type_id)
			}
		},
		created() {
			var that=this
			uni.request({
				url: Api.getactivityCoupons(App.getactivityId()),
				header: {
					token: App.getToken()
				},
				data: {
					companyId: App.getcompany().company_id,
					activity: App.getactivityId()
				},
				success(res) {
					if (res.data.code == 200) {
						console.log(res)
						that.activity = res.data.value.coupons
						that.actName = res.data.value.actName
						console.log(that.activity)
						console.log(typeof that.activity[0].isSend)
					}
				}
			})
			console.log(this.customers);
			console.log(App.getcompany().company_id)
		},
		onLoad(data) {
			
			console.log(data);
			this.customers = JSON.parse(data.avatars);
			console.log(this.customers)
			for(let iterm in this.customers){
				this.userId.push(this.customers[iterm].author_id)
			}
			
			// this.couponsInfor = JSON.parse(data.couponsInfor);
			// console.log(this.couponsInfor);
			
		}
	}
</script>

<style scoped>
	.body {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
		background: #F7F8F8;
	}
	
	.content {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.content-main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 200upx;
		margin-bottom: 30upx;
	}
	
	.picture {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		height: 90%;
		width: 80%;
		margin: auto;
		border-radius: 25upx;
		border: 4upx solid #ffdd00;
	}
	
	.picture-left {
		display: flex;
		justify-content: center;
		flex: 1;
		flex-direction: column;
		color: #f8b62d;
	}
	
	.picture-right {
		display: flex;
		flex: 1;
	}
	
	.content-center {
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 500upx;
		margin-bottom: 100upx;
	}
	
	.picture-1 {
		background: #BBBBBB;
		width: 80%;
		height: 90%;
		margin: auto;
		padding-left: 3.3%;
		padding-top: 3.3%;
	}
	
	.picture-avtatar {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.avatar {
		display: flex;
		width: 20%;
		height: 100upx;
		margin-right: 5%;
		margin-bottom: 20upx;
		background: #808080;
	}
	
	.content-bottom {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 20%;
		bottom: 0;
	}
	
	.btn {
		display: block;
		margin: auto;
		color: #FFFFFF;
		background: #5acc93;
		border-radius: 25upx;
		width: 300upx;
	}
	
	.btn-1 {
		display: flex;
		height: 70upx;
		width: 200upx;
		font-size: 30upx;
		margin: auto;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		background-color: #f8b62d;
		border-radius: 25upx;
	}
	
	.dialog-cover {
		display: flex;
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 300;
		background: rgba(f, f, f, 0.8);
	}
	
	.sure {
		display: flex;
		flex-direction: column;
		height: 300upx;
		width: 500upx;
		background: #FFFFFF;
		border: 1upx solid #808080;
		margin: auto;
	}
</style>
