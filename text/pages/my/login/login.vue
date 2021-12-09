<template>
	<view class="login">
		<view class="model">
			<text>头像</text>
			<view class="model_ico">
				<u--image 
					src="https://cdn.uviewui.com/uview/album/1.jpg" 
					width="100rpx"
					height="100rpx"
				></u--image>
			</view>
		</view>
		<view class="model">
			<text>名字</text>
			<view class="model_ico">
				<text>LMX</text>
			</view>
		</view>
		<view class="model">
			<text>手机号</text>
			<view class="model_ico">
				<text>1550***3550</text>
			</view>
		</view>
		<view class="model">
			<text>微信号</text>
			<view class="model_ico">
				<text>lmx981229</text>
			</view>
		</view>
		<navigator url="/pages/my/login/login_model/login_model" >
			<view class="model">
				<text>更多信息</text>
				<view class="model_ico">
					<text class="iconfont">&#xe600;</text>
				</view>
			</view>
		</navigator>
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
	page{
		background-color: $uni-bg-color-grey;
	}
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
