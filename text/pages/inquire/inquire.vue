<template>
	<view>
		<view class="main">
			<view class="main_view">
				<input type="text" placeholder="请输入快递单号查询"  class="main_input"/>
				<image src="../../assets/scancode-icon-scancode-icon.png" class="main_pic" bindtap="handClickScan"></image>
			</view>
		</view>
		<view class="box_big">
			<image src="../../assets/big-img-big-img.png" class="box_big_pic"></image>
			<view>抱歉，还没有查询到您的快递哦</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.main{
    display: flex;
    width: 100%;
    height: 238rpx;
    box-sizing: border-box;
    background-color: #35bc02;
	&_view{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 622rpx;
		height: 72rpx;
		margin: auto;
		background-color: $uni-bg-color-grey;
	}
	&_input{
		color: $uni-font-color;
		font-size: $uni-font-size-24;
		text-align: center;
	}
	&_pic{
		width: 30rpx;
		height: 28rpx;
		margin-right: 22rpx;
	}
}

.box_big{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 262rpx);
    color: $uni-font-color;
    font-size: $uni-font-size-24;
	&_pic{
		width: 332rpx;
		height: 332rpx;
	}
}

</style>
