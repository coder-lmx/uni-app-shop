<template>
		<view class="model" @click="handSkip(data.title)">
			<text class="iconfont model_ico" v-html="data.iconfont"></text>
			<text class="model_text">{{data.text}}</text>
		</view>
</template>

<script>
	export default {
		name:'MyModel',
		props:['data'],
		methods:{
			handSkip(title){
				console.log(title)
				uni.navigateTo({
					url:`/pages/my/my-${title}/my-${title}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.model{
		display: flex;
		align-items: center;
		height: 108rpx;
		margin-bottom: 2rpx;
		background-color: $uni-bg-color-grey;
		&_ico{
			flex: 1;
			height: 100%;
			line-height: 108rpx;
			text-align: center;
		}
		&_text{
			flex: 3;			
			height: 100%;
			line-height: 108rpx;
			color: $uni-font-color-1;
			font-size: $uni-font-size-28;
		}
	}
</style>
