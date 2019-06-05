<template>
	<view class="dialog">
		<view class="content">
			<text class="text-content">请填写筛选条件:</text>
			<checkbox-group>
				<view class="content-main-1">
					<view class="time-wrapper">
						<checkbox v-bind:checked="customers[0].checked" v-on:click="switchchecked(0)"></checkbox>
						{{customers[0].title}}
					</view>
					<view class="time-wrapper" style="margin-top: 20upx;">
						<text>开始时间：</text>
						<time-template fields="second" start="2010-01-01 00:00:00" end="2030-12-30 23:59:59" :value="valueStart" @change="bindChangeStart"></time-template>
					</view>
					<view class="time-wrapper" style="margin-top:20upx;">
						<text>结束时间：</text>
						<time-template fields="second" start="2010-01-01 00:00:00" end="2030-12-30 23:59:59" :value="valueEnd" @change="bindChangeEnd"></time-template>
					</view>
				</view>
				<view class="content-main">
					<checkbox v-bind:checked="customers[1].checked" v-on:click="switchchecked(1)"></checkbox>
					{{customers[1].title}}
					<view class="input-wrapper">
						<input v-model="customers[1].number" v-bind:placeholder="customers[1].placeholderName">
					</view>
					{{customers[1].ending}}
				</view>
				<view class="content-main">
					<checkbox v-bind:checked="customers[2].checked" v-on:click="switchchecked(2)"></checkbox>
					{{customers[2].title}}
					<view class="input-wrapper">
						<input v-model="customers[2].number" v-bind:placeholder="customers[2].placeholderName">
					</view>
					{{customers[2].ending}}
				</view>
			</checkbox-group>

			<text class="text-content">选项:</text>
			<checkbox-group>
				<view class="content-main">
					<checkbox v-bind:checked="checkedBottom" @click='checkedbottom'>检测重复发布者</checkbox>
				</view>
				<view class="content-main">
					<checkbox checked="true">筛选从最符合条件者开始</checkbox>
				</view>
				<view class="content-main">
					<checkbox checked="true">提示该用户活动期间第几次发布</checkbox>
				</view>
			</checkbox-group>
			<button class="btn" @click="readySelect">进行预筛选</button>
		</view>
		<view class="dialog-cover" v-if="showed">
			<view class="dialog-content">
				<view class="dialog-content-title">
					<view class="text-content">预筛选结果</view>
				</view>
				<view class='dialog-main'>
					<view class="text-content">本次活动共{{number}}人参与;</view>
					<view class="text-content">符合筛选条件的内容{{number}}篇;</view>
					<view class="text-content">其中重复发布{{repeat}}篇;</view>
					<view class="text-content">...</view>
				</view>
				<view class="dialog-content-1">
					<button class="btn-1" @click="submit">开始筛选</button>
				</view>
				<view class="dialog-content-2">
					<button class="btn-1" style="background: green;" @click="renewClick">重新设置筛选条件</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import timeTemplate from "../../../../components/time-template/time-template"
	import App from '../../../../../App.vue'
	import Api from '../../../../../api.js'
	export default {
		components: {
			timeTemplate
		},
		data() {
			return {
				valueStart: '2018-01-01 00:00:00',
				valueEnd: '2020-01-01 00:00:00',
				showed: false,
				checkedBottom: true,
				number: 0,
				repeat: 0,
				companyId: '1',
				startTime: '',
				endTime: '',
				cyid: [],
				couponsInfor: {},
				customers: [{
						number: '1',
						title: '发布时间：',
						checked: true,
						ending: ''
					},
					{
						number: '',
						placeholderName: '0',
						title: '点赞数达到',
						checked: false,
						ending: '个'
					},
					{
						number: '',
						placeholderName: '0',
						title: '点赞数前',
						checked: false,
						ending: '名'
					},
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			bindChangeStart(value) {
				this.valueStart = value;
			},
			bindChangeEnd(value) {
				this.valueEnd = value;
			},
			switchchecked: function(index) {
				this.customers[index].checked = !this.customers[index].checked,
					console.log(this.customers[index].checked)
			},
			checkedbottom: function() {
				this.checkedBottom = !this.checkedBottom;
			},
			readySelect: function() {
				var that = this;
				for (let customer in this.customers) {
					if (this.customers[customer].checked == true) {
						if (this.customers[customer].number == '') {
							this.customers[customer].number = this.customers[customer].placeholderName;
						}
						console.log(this.customers[customer].number);
					}
				}
				console.log(this.valueStart);
				console.log(this.valueEnd);

				this.startTime = Math.round(new Date(this.valueStart.replace(/\-/g, "\/")) / 1000);
				this.endTime = Math.round(new Date(this.valueEnd.replace(/\-/g, "\/")) / 1000);
				console.log(this.startTime)
				console.log(this.endTime)
				console.log(this.customers[1].number)
				console.log(this.customers[2].number)
				console.log(this.checkedBottom)
				console.log(App.getcompany().company_id)
				uni.request({
					url: Api.screenUser(),
					method: "POST",
					header: {
						"Content-Type": "application/x-www-form-urlencoded",
						token: App.getToken()
					},
					data: {
						companyId: App.getcompany().company_id,
						start: this.startTime,
						end: this.endTime,
						upNo: this.customers[2].number,
						upNum: this.customers[1].number,
						repeat: this.checkedBottom
					},
					success: function(res) {
						console.log(res);
						if (res.data.code == 200) {
							that.showed = true;
							that.cyid.length=0;
							for (let iterm in res.data.value.result) {
								that.cyid.push(res.data.value.result[iterm].cyid)
							}
							that.number = res.data.value.number;
							that.repeat = res.data.value.repeat;
							console.log(that.cyid);
						} else if (res.data.code == 16000) {
							uni.showToast({
								title: '发布时间为必填内容',
								duration: 2000,
								icon: 'none'
							})
						}
					}
				})
			},
			renewClick: function() {
				this.showed = false;
			},
			submit: function() {
				var that = this

				uni.navigateTo({
					url: './select/select?cyid=' + JSON.stringify(that.cyid)
				})
			},
		}
	}
</script>
<style scoped>
	.dialog {
		position: relative;
		color: #2e2c2d;
		background: #FFFFFF;
		font-size: 16upx;
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
	}

	input-wrapper {
		display: flex;
		align-items: center;
	}

	input {
		text-align: center;
		border: 1px solid #c9caca;
		margin: 0upx 20upx;
		height: 70upx;
		width: 100upx;
	}

	.content-main {
		font-size: 30upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0upx 40upx 40upx 40upx;
	}

	.content-main-1 {
		display: flex;
		flex-direction: column;
		font-size: 30upx;
		width: 100%;
		height: 250upx;
		margin: 0upx 40upx 40upx 40upx;
	}

	.time-wrapper {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.content {
		display: block;
		position: relative;
		z-index: 200;
	}

	.dialog-cover {
		display: flex;
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 300;
		background: rgba(0, 0, 0, 0.8);
	}

	.dialog-content {
		opacity: 1;
		display: flex;
		flex-direction: column;
		height: 500upx;
		width: 500upx;
		margin: auto;
		background: #FFFFFF;
		width: 600upx;
		height: 75vh;
		border: 2px solid #808080;
	}

	.dialog-content-title {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.dialog-main {
		display: flex;
		flex: 3;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.dialog-content-1 {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
	}

	.dialog-content-2 {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.text-content {
		font-size: 30upx;
		display: inline-block;
		color: #808080;
		margin: 30upx 20upx;
	}

	.btn-1 {
		color: #FFFFFF;
		background: rgb(255, 100, 100);
		font-size: 35upx;
		border-radius: 25upx;
		height: 100upx;
		width: 450upx;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		background: #ff6e6e;
		margin-top: 100upx;
		border-radius: 25upx;
		height: 100upx;
		width: 320upx;
	}
</style>
