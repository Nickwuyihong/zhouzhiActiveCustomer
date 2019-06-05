<template>
	 <view>
        <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/component/web-view?id=web-view"></web-view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				 webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
