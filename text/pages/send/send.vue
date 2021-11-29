<template>
	<view>
		<view class="nav">
		    <image src="../../assets/portrait-img-portrait-img.png" class="nav_img"></image>
		    <view class="model_prson_text">
		    <view ><text> 慕慕**</text> <text class="phone">155***550</text> </view>
		    <view class="model_prson_type"> <text class="express">急速快递</text> <text>中兴和园</text></view>
		    </view>
		        <image src="../../assets/arrow-gray-arrow-gray.png" class="nav_ico"></image>
		</view>
		<view class="nav_input" >
		        <input type="text" class="nav_input_text" placeholder="发件人信息" maxlength="30"/>
		        <text class="nav_input_ico"></text>
		        <view  bindtap="handGetPhone">
		            <image src="../../assets/people-icon-tool-gerenliebiao.png" class="nav_input_pic" @click="handClickMess"></image>
		        </view>
		    </view>
		    <view class="nav_input">
		        <input type="text" class="nav_input_text" placeholder="收件人信息" maxlength="30"/>
		        <text class="nav_input_ico"></text>
		        <image src="../../assets/people-icon-tool-gerenliebiao.png" class="nav_input_pic" @click="handClickScan"></image>
		    </view>
		    <button class="bt">下一步</button>
		    <view class="foot">
		        <view class="flex-1">
		            <image src="../../assets/punctual-icon-punctual-icon.png" class="foot_img"></image>
		            <text >守时守约</text>
		             <text class="m-l">|</text>
		        </view>
		        <view class="flex-1">
		            <image src="../../assets/paid-icon-paid-icon.png" class="foot_img"></image>
		            <text >丢损必陪</text>
		            <text class="m-l">|</text>
		        </view>
		        <view class="flex-1">
		            <image src="../../assets/guarantee-icon-guarantee-icon.png" class="foot_img"></image>
		            <text>极速官方保证</text>
		        </view>
		    </view>
			<u-toast
				ref="uToast"
			></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			handClickMess(){
				//#ifdef H5
					this.$refs.uToast.show({
						type: 'error',
						message: "请在客户端下使用",
						duration:'1000'
					})
				//#endif
				//#ifndef H5
					uni.addPhoneContact({
					    nickName: '昵称',
					    lastName: '姓',
					    firstName: '名',
					    remark: '备注',
					    mobilePhoneNumber: '114',
					    weChatNumber: 'wx123',
					    success: function () {
					        console.log('success');
					    },
					    fail: function () {
					        console.log('fail');
					    }
					});
				//#endif
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav{
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;    
		justify-content: space-between;
		padding: 34rpx 60rpx;
		&_img{
			width: 92rpx;
			height: 92rpx;
		}
		&_ico{
			width: 16rpx;
			height: 30rpx;
			margin-right: 30rpx;
		}
		&_input{
			display: flex;
			align-items: center;
			width: 100%;
			height: 108rpx;
			margin-top: 20rpx;
			background-color: #fff;
			&_text{
				flex: 1;
				font-size: $uni-font-size-28;
				color:$uni-font-color-1;
				text-align: center;
				margin-left: 65rpx;
			}
			&_ico{
				left: 90rpx;
				position: absolute;
				width: 12rpx;
				height: 12rpx;
				border-radius: 50%;
				background-color: $main-color;
			}
			&_pic{
				width: 32rpx;
				height: 36rpx;
				margin-right: 54rpx;
			}
		}
	}
	.model_prson_text{
	    flex: 1;
	    max-width: 500rpx;
	    margin-right: 58rpx;
	    margin-left: 34rpx;
	    color: $uni-font-color-1;
	    font-size: $uni-font-size-28;
	}
	.model_prson_type{
	  margin-top: 12rpx;
	  color: $uni-font-color;
	  font-size: $uni-font-size-24;
	}
	.express{
	    margin-right: 20rpx;
	}
	.bt{
	    margin-top: 40rpx;
	    width: 660rpx !important;
	    height: 72rpx;
	    font-size: $uni-font-size-28;
	    color: $uni-bg-color-grey;
	    background-color: $main-color;
	    border-radius: 200rpx;
	}
	.foot{
	    display: flex;
	    justify-content: space-between;
	    margin: 20rpx auto;
	    width: 660rpx !important;
	    color: $uni-font-color;
	    font-size: $uni-font-size-24;
		&_img{
			width: 20rpx;
			height: 26rpx;
			margin-right: 19rpx;
		}
	}
	.flex-1{
	    flex: 1;
	}
	
	.m-l{
	    margin-left: 45rpx;
	}
</style>
