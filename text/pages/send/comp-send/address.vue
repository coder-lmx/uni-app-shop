<template>
	<view>
		<view class="address align-items">
			<view class="ico">
				<image src="@/assets/ji.png" class="address_model_ico"></image>
				<image src="@/assets/shenglve.png" class="address_model_ico"></image>
				<image src="@/assets/shenglve.png" class="address_model_ico"></image>
				<image src="@/assets/shou.png" class="address_model_ico"></image>
			</view>
			<view class="address_model">
				<view class="address_main padd align-items">
					<view class="address_model_person">
						<text>李闽昕</text>
						<text>155****3550</text>
						<view class="address_model_person-addr">江西省南昌市青山湖区博林中心广场(南昌市青山湖区)</view>
					</view>
					<text class="address_model_addr">地址簿</text>
				</view>
				<view class="address_main mar">
					<view class="address_model_person">
						<text>李闽昕</text>
						<text>155****3550</text>
						<view class="address_model_person-addr">江西省南昌市青山湖区博林中心广场(南昌市青山湖区)</view>
					</view>
					<text class="address_model_addr">地址簿</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'Address'
};
</script>

<style lang="scss" scoped>
.main {
	padding: 20rpx;
}
.align-items {
	align-items: center;
}
.address {
	padding: 20rpx;
	display: flex;
	box-sizing: border-box;
	background-color: $uni-bg-color-grey;
	&_main {
		display: flex;
		align-items: center;
	}
	&_model {
		display: flex;
		flex-direction: column;
		padding: 10rpx 0;
		&_person {
			margin-left: 20rpx;
			color: $uni-font-color-1;
			font-size: 30rpx;
			&-addr {
				color: $uni-font-color;
				font-size: 25rpx;
			}
		}
		&_ico {
			width: 50rpx;
			height: 50rpx;
		}
		&_addr {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 130rpx;
			height: 60rpx;
			font-size: $uni-font-size-28;
			font-weight: 900;
			color: $uni-font-color-1;
			border-left: 2rpx solid $uni-font-color;
		}
	}
}
.ico {
	display: flex;
	flex-direction: column;
}
.padd {
	padding-bottom: 30rpx;
	border-bottom: 2rpx solid $uni-font-color;
}
.mar {
	padding: 40rpx 0 10rpx;
}
</style>
