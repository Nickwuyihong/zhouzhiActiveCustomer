<template>
	<div></div>
</template>

<script>
	export default {
		data() {
			return {
				coupon:{}
			}
		},
		onLoad(e) {
			console.log(e)
			this.coupon = JSON.parse(e)
			console.log(this.coupon)
		},
		methods: {
			jump: function(e) {
				console.log(e)
				if (e.currentTarget.id == 0) {
					uni.navigateTo({
						url: 'limitedMode/limitedMode'
					})
				} else if (e.currentTarget.id == 1) {
					uni.navigateTo({
						url: 'randomMode/randomMode'
					})
				} else {
					uni.navigateTo({
						url: 'historyActive/historyActive'
					})
				}
			}
		}
	}
</script>

<style>
</style>
