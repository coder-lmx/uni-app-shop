<template>
	<view>
		<view class="prson">
			<u-avatar :src="src" size="94rpx"  class="prson_pic" ></u-avatar>
			<view class="prson_text">
				<p> 慕慕 </p>
				<p class="prson_text-two"> 还有有你的个性签名哦 </p>
			</view>
			<text class="prson_ico">
				<u-icon name="arrow-right" color="#ffffff"></u-icon>
			</text>
		</view>
		<view class="main">
			<MyModel v-for="(item,index) of data" :data="item" :key="index" />	
		</view>
	</view>
</template>

<script>
	import MyModel from '../../components/my-component/my-model.vue';
	export default {
		components:{ MyModel },
		data() {
			return {
				src:'../../assets/portrait-img-portrait-img.png',
				data:[{
					'iconfont':'&#xe678;',
					'text':'绑定手机'
				},{
					'iconfont':'&#xe62e;',
					'text':'我的实名'
				},{
					'iconfont':'&#xe673;',
					'text':'我的抵用卷'
				},{
					'iconfont':'&#xe652;',
					'text':'常用地址'
				},{
					'iconfont':'&#xe8bd;',
					'text':'消息中心'
				},{
					'iconfont':'&#xe60d;',
					'text':'客服服务'
				}]
			}; 
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../style/iconfont.css";
.prson{
	display: flex;
	// justify-content: center;
	align-items: center;
	width: 750rpx;
	height: 238rpx;
	background-color: $main-color;
	&_pic{
		// width: 94rpx;
		// height: 82rpx;
		margin-left: 96rpx;
	}
	&_text{
		flex: 1;
		margin-left: 22rpx;
		color: $uni-bg-color-grey;
		font-size: $uni-font-size-28;
		@include textover;
		&-two{
			font-size: $uni-font-size-24;
		}
	}
	&_ico{
		 margin-right:58rpx;
		&_pic{
			width: 18rpx;
			height: 30rpx;
		}
	}
}
.main{
	margin-top: 42rpx;
}
</style>
