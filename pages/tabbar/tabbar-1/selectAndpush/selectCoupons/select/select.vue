<template>
	<view class="body">
		<view class="content">
			<swiper class="swiper-list" duration='300' @change='swiperChange'>
				<swiper-item v-for="(t,index) in swiperList" style="display: flex;flex-direction: column;width: 100%;height: 100%;">
					<view style='margin-bottom:9upx;background:#F7F8F8;width:100%;display:flex;flex-direction:column;height: 100%;'>
						<view style='width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:-36upx;'>
							<view style='height:144upx;display:flex;flex-direction:row;align-items:center;'>
								<image style='margin-left:36upx;width:72upx;height:72upx;border-radius:50%;z-index:1;' :src='swiperList[currentTap].author.author_image' :onerror='errorImage()'></image>
								<view style='margin-left:18upx;display:flex;flex-direction:column;'>
									<text style='font-size:32upx;color:#333333'>{{swiperList[currentTap].author.author_name}}</text>
									<view style='margin-top:8upx;display:flex;flex-direction:row;'>
										<text style='font-size:22upx;color:#808080'>{{swiperList[currentTap].date}}</text>
									</view>
								</view>
							</view>
						</view>
						<text class='my-text'>{{swiperList[currentTap].text}}</text>
						<view class="picture">
							<view class="first" v-if="showedone">
								<view class='one-img' v-for="(a,p1) in swiperList[currentTap].data.img_list">
									<image :src="a" style="display: flex; height: 100%;width: 100%;" @click="view(p1)" :onerror="errorImage2(p1)"></image>
								</view>
							</view>
							<view class="two" v-if="showedtwo">
								<view class='four-img' v-for="(a,p2) in swiperList[currentTap].data.img_list" @click="view(p2) " :onerror="errorImage2(p2)">
									<image :src="a" style="display: flex; height: 100%;width: 100%;"></image>
								</view>
							</view>
							<view class="three" v-if="showedthree">
								<view class='night-img' v-for="(a,p3) in swiperList[currentTap].data.img_list">
									<image :src="a" style="display: flex; height: 100%;width: 100%;" @click="view(p3)" :onerror="errorImage2(p3)"></image>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="content-bottom">
			<view class="content-bottom-1">
				<view style="display: flex;align-items: center; margin:0upx 20upx;">
					<image class="img" src="../../../../../../static/image/name-01.png"></image>此内容为该用户活动期间第{{num}}次发布。
				</view>
			</view>
			<view class="content-bottom-2">
				<view class="text-left">
					<view style="display:flex;align-items: center;margin-left: 40upx;">
						<button style="color: #FFFFFF;background: rgb(255,100,100);border-radius: 25upx;" @click="jump">提交名单</button>
					</view>
				</view>
				<view class="text-right">
					<view style="display:flex;align-items: center;font-size: 35upx;">
						<text>选择({{number}})</text>
						<checkbox style="margin-right: 20upx;margin-left: 15upx;" @click="check" :checked="checked"></checkbox>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Api from '../../../../../../api.js'
	import App from '../../../../../../App.vue'
	export default {
		data() {
			return {
				// couponsInfor: {},
				author_List: [],
				checked: false,
				number: 0,
				num: 1,
				showedone: false,
				showedtwo: false,
				showedthree: false,
				currentTap: 0,
				scrollTop: 0,
				circleId: App.getcompany().circle_id,
				count: 0,
				swiperList: [],
				userid: [],
				cyid: [],
			}
		},
		onLoad(res) {
			var that = this
			that.cyid = JSON.parse(res.cyid)
			// that.couponsInfor = JSON.parse(res.couponsInfor)
			// console.log(that.couponsInfor)
			console.log(that.cyid)
			for (let iterm in that.cyid) {
				console.log(that.cyid[iterm])
				uni.request({
					url: Api.getArtical(),
					header: {
						token: App.getToken()
					},
					data: {
						cyId: that.cyid[iterm],
						circleId: that.circleId
					},
					success: function(res) {
						console.log(res)
						console.log(1)
						if(res.data.status=='1'){
							if(res.data.news.length>0){
								that.swiperList.push(res.data.news[0])
								that.getCount()
								}
						}
						
						console.log(2)
						console.log(that.swiperList)
					}
				})
			}

		},
		methods: {
			errorImage:function(){
				this.swiperList[this.currentTap].author.author_image=App.geturlerror(this.swiperList[this.currentTap].author.author_image)
			},
			errorImage2:function(index){
				this.swiperList[this.currentTap].data.img_list[index]=App.geturlerror(this.swiperList[this.currentTap].data.img_list[index])
			},
			view:function(index){
				var that=this;
				console.log(index);
				console.log(that.swiperList[that.currentTap].data.img_list[index]);
				uni.previewImage({
					urls:that.swiperList[that.currentTap].data.img_list,
					current:that.swiperList[that.currentTap].data.img_list[index]
				})
			},
			check: function() {
				var that = this;
				that.checked = !that.checked;
				console.log(that.checked)
				if (that.checked == true) {
					// 					that.author_Infor.author_id=that.swiperList[that.currentTap].author.author_id;
					// 					that.author_Infor.author_image=that.swiperList[that.currentTap].author.author_image;
					// that.userid.push(that.author_Infor)
					that.userid.push({
						author_id: that.swiperList[that.currentTap].author.author_id,
						author_image: that.swiperList[that.currentTap].author.author_image,
						cy_id: that.swiperList[that.currentTap].cyId,
						liketime:that.swiperList[that.currentTap].liketime
					})
					console.log(that.userid)
					that.number = that.userid.length
				} else {
					for (let iterm in that.userid) {
						if (that.userid[iterm].author_id == that.swiperList[that.currentTap].author.author_id && that.userid[iterm].cy_id ==
							that.swiperList[that.currentTap].cyId) {
							that.userid.splice(iterm, 1)
							break;
						}
					}
					that.number = that.userid.length
				}
			},
			getCount: function() {
				var that = this;
				that.checked = false;
				that.count = that.swiperList[that.currentTap].data.img_count
				if (that.count == 1) {
					that.showedone = true;
					that.showedtwo = false;
					that.showedthree = false;
				} else if (that.count == 2 || that.count == 4) {
					that.showedtwo = true;
					that.showedone = false;
					that.showedthree = false;
				} else {
					that.showedthree = true;
					that.showedtwo = false;
					that.showedone = false;
				}
			},
			swiperChange: function(e) {
				var that = this;
				that.num = 1;
				that.currentTap = e.detail.current;
				that.getCount();
				for (let iterm in that.userid) {
					if (that.userid[iterm].author_id == that.swiperList[that.currentTap].author.author_id && that.userid[iterm].cy_id ==
						that.swiperList[that.currentTap].cyId) {
						that.checked = true;
						break;
					} else if (that.userid[iterm].author_id == that.swiperList[that.currentTap].author.author_id && that.userid[iterm]
						.cy_id != that.swiperList[that.currentTap].cyId) {
						that.num = that.num + 1;
					}
				}
			},
			jump: function() {
				this.userid=this.userid.sort(function(a,b){
					return b.liketime-a.liketime
				})
				uni.navigateTo({
					url: './scanCustomer/scanCustomer?userid=' + JSON.stringify(this.userid) 
					// + '&couponsInfor=' + JSON.stringify(
					// 	this.couponsInfor)

				});
			}
		}
	}
</script>

<style>
	.body {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
		background: #F2F2F2;
	}

	.content {
		height: 85%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.swiper-list {
		width: 100%;
		height: 100%;
	}

	.content-bottom {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 15%;
		bottom: 0;
		background: #FFFFFF;
	}

	.swiper-list {
		height: 100%;
		width: 100%;
	}

	.content-bottom-1 {
		font-size: 30upx;
		color: #000000;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 35%;
		border-bottom: 5upx solid #F2F2F2;
	}

	.content-bottom-2 {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 65%;
	}

	.img {
		display: flex;
		align-items: center;
		height: 50upx;
		width: 50upx;
		margin-right: 20upx;
	}

	.text-left {
		display: flex;
		flex: 1;
	}

	.text-right {
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}

	.one-img {
		margin-top: 24upx;
		width:450upx;
		height:450upx;
	}
	
	.picture {
		width: 100%;
		height: 60%;
	}
	
	.four-img {
		display: flex;
		width: 40%;
		height: 270upx;
		margin-right: 4%;
		margin-top: 12upx;
		margin-bottom: 12upx;
	}
	
	.night-img {
		display: flex;
		width: 29%;
		height: 200upx;
		margin-right: 2%;
		margin-top: 12upx;
		margin-bottom: 3%;
	}
	
	.my-text {
		text-align: start;
		margin-left: 36upx;
		margin-right: 36upx;
		font-size: 32upx;
		color: #333;
		line-height: 46upx;
	}
	
	.first {
		display: flex;
		padding-left: 36upx;
		width: 100%;
	}
	
	.two {
		width: 100%;
		display: flex;
		padding-left: 36upx;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.three {
		display: flex;
		padding-left: 36upx;
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
