<template>
	<view class="express-data">
		<view class="number"> 运单号：SF1336024630268 <image src="@/assets/svg/copy.svg" mode="'aspectFit'" class="number_img"></image></view>
		<view class="main">
			<view class="main_model">
				<text class="main_model_city">杭州市</text>
				<text>小惠</text>
			</view>
			<view class="main_model">
				<text class="main_model_city main_model_city-red">--------></text>
				<text class="main_model_city-block">已签收</text>
			</view>
			<view class="main_model">
				<text class="main_model_city">曲靖市</text>
				<text>刘凯</text>
			</view>
		</view>
		<view class="date">签收时间：2021-08-15 </view>
		<view class="foot">
			<view class="u-page__button-item">
				<u-button
					text="分享"
					size="normal"
					plain
					shape="circle"
					type="success"
					class="foot_bt"
				></u-button>
			</view>
			<view class="u-page__button-item">
				<u-button
					text="删除"
					size="normal"
					plain
					shape="circle"
					type="success"
					class="foot_bt"
				></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'data-list'
	}
</script>

<style lang="scss" scoped>
	.express-data{
		margin-bottom: 20rpx;
		padding: 20rpx;
		color: $uni-font-color;
		background-color: $uni-bg-color-grey;
	}
	.number{
		font-size: $uni-font-size-20;
		color: $uni-font-color-1;
		margin-left: 0px;
		&_img{
			width: 25rpx;
			height: 25rpx;
			margin-left: 15rpx;
		}
	}
	.main{
		display: flex;
		justify-content: center;
		// margin-top: 40rpx;
		&_model{
			display: flex;
			flex-direction: column;
			text-align: center;
			font-size: 30rpx;
			padding: 40rpx;
			&_city{
				font-weight: 500;
				font-size: 40rpx;
				margin-bottom: 10rpx;
				color: $uni-font-color-1;
				&-red{
					color: red;
				}
				&-block{
					color: #000000;
				}
			}
		}
	}
	.date{
		font-size: $uni-font-size-28;
		padding-bottom:10rpx ;
		border-bottom: 2rpx solid $uni-font-color;
	}
	.foot{
		display: flex;
		justify-content: flex-end;
		&_bt{
			width: 150rpx;
			height: 50rpx;
			margin: 14rpx 4rpx 0 14rpx;
		}
	}
</style>
