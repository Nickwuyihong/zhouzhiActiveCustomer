<template>
	<view class="body">
		<scroll-view class="content" :scroll-top="scrollTop" scroll-y="true">
			<view class="content-main">
				<view v-for="(iterm,index) in coupons" class="coupon">
					<view class="picture">{{iterm.src}}</view>
					<view class="text">{{iterm.coupontype}}</view>
					<view class="text">{{iterm.couponName}}</view>
					<view class="check">
						<checkbox @click="sure(index)" :checked="iterm.checked"></checkbox>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="content-bottom">
			<button class="btn" @click="jump">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				index: '',
				avatars: [],
				coupons: [{
						src: '1',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: "2",
						coupontype: '紫荆花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: '3',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: '4',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: '5',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: "2",
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: '3',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: '5',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: "2",
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: '3',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: '5',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: "2",
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
					{
						src: '3',
						coupontype: '樱花季',
						couponName: '买一送一劵',
						checked: false
					},
				]
			};
		},
		onLoad(data) {
			console.log(data);
			this.avatars = JSON.parse(data.avatars);
			console.log(this.avatars);
		},
		methods: {
			jump: function() {
				console.log(this.index)
				uni.navigateTo({
					url: './scanCoupons/scanCoupons?img=' + JSON.stringify(this.coupons[this.index]) + '&avatars=' + JSON.stringify(
						this.avatars)
				})
			},
			sure: function(index) {
				this.index = index;
				for (let iterm in this.coupons) {
					if (this.coupons[iterm].checked == true && iterm != index) {
						this.coupons[iterm].checked = false;
					}
				}
				this.coupons[index].checked = !this.coupons[index].checked;
			}
		}
	}
</script>

<style scoped>
	.body {
		height: calc(100vh - var(--window-top));
		width: 100%;
		background: #F2F2F2;
	}

	.content {
		height: 80%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.content-bottom {
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
		background: green;
		border-radius: 25upx;
		width: 300upx;
	}

	.content-main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		padding: 6%;
	}

	.coupon {
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
		margin-right: 6%;
		width: 25%;

	}

	.picture {
		display: flex;
		flex: 4;
		height: 140upx;
		background: #808080;
	}

	.text {
		margin-top: 5upx;
		display: flex;
		font-size: 30upx;
		color: #BBBBBB;
		flex: 1;
		justify-content: center;
	}

	.check {
		display: flex;
		flex: 1;
		justify-content: center;
	}
</style>
