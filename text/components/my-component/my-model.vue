<template>
	<view class="model">
		<text class="iconfont model_ico" v-html="data.iconfont"></text>
		<text class="model_text">{{data.text}}</text>
	</view>
</template>

<script>
	export default {
		name:'MyModel',
		props:['data'],
	}
</script>

<style lang="scss" scoped>
	@import "../../style/iconfont.css";
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
