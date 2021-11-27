<template>
	<view>
		<view>
			<image src="http://lizuishuai.top/uni-app/images/banner.png"class="pic"></image>
		</view>
		<view class="model">
		    <text class="model_text">最常用快递员</text>
		    <view class="model_prson prson">
		      <u-avatar :src="src" size="92rpx"  class="prson_pic" ></u-avatar>
		      <view class="model_prson_text">
		        <view class="model_prson_addr"><text> 慕慕**</text> <text>155***550</text> </view>
		        <view class="model_prson_type"> <text class="express">急速快递</text> <text>中兴和园</text></view>
		      </view>
		      <button class="model_prson_but" @click="handClickSend" >一键寄出</button>
		    </view>
		  </view>
		<view class="model_prson model">
		    <image src="../../assets/small-img.png" class="model2_pic"></image>
		    <button class="model_prson_but r-20" @click="handClickIndent">我的订单</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				src:'../../assets/portrait-img-portrait-img.png',
				title: 'Hello'
			}
		},
		methods: {
			handClickSend(){
				uni.switchTab({
				    url: '/pages/send/send'
				});
			},
			handClickIndent(){
				uni.navigateTo({
				    url: './Indent/Indent',
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pic{
		width: 750rpx;
		height: 444rpx;
	}
	.model{
		width: 710rpx;
		margin: 46rpx auto 0;
		color: $uni-font-color;
		font-size: $uni-font-size-28;
		&_text{
			margin: 20rpx;
			color: $uni-font-color;
			font-size: $uni-font-size-28;
		}
		&_prson{
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			background-color: $uni-bg-color-grey;
			&_pic{
				width: 92rpx;
				height: 92rpx;
			}
			&_text{
				flex: 1;
				margin-right: 58rpx;
				margin-left: 34rpx;
				color: $uni-font-color-1;
				font-size: $uni-font-size-28;
			}
			&_addr{
				display: flex;
				justify-content: space-between;
			}
			&_type{
				margin-top: 12rpx;
				color: $uni-font-color;
				font-size: $uni-font-size-24;
			}
			&_but{
				padding: 0;
				width: 186rpx !important;
				height: 60rpx;
				color: $uni-bg-color-grey;
				line-height: 60rpx;
				font-size: $uni-font-size-24;
				border-radius: 100rpx;
				background-color: $main-color;
			}
		}
	}
	.prson{
		padding: 32rpx 20rpx;
	}
	.express{
	  margin-right: 20rpx;
	}
	.model2_pic{
	  margin-left: 34rpx;
	  width: 150rpx;
	  height: 150rpx;
	}
	.r-20{
	  margin-right: 20rpx !important;
	}
</style>
