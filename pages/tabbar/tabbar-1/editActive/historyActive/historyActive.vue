<template>
	<div></div>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		},
		onLoad() {},
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
			}
		}
	}
</script>

<style>
</style>
