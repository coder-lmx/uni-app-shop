<template>
	<view class="login">
		<view class="model">
			<text>性别</text>
			<view class="model_ico">
				<text>男</text>
			</view>
		</view>
		<view class="model">
			<text>地区</text>
			<view class="model_ico">
				<text>江西 九江</text>
			</view>
		</view>
		<view class="model">
			<text>个性签名</text>
			<view class="model_ico">
				<text>未填写</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.login{
			padding:0 40rpx;
		}
	.model{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: $uni-font-size-28;
		padding: 20rpx 0;
		border-bottom: 2rpx solid $uni-bg-color-white;
		&_ico{
			display: flex;
			align-items: center;
		}
	}
</style>
