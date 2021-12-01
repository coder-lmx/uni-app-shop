<template>
	<view>
		<navigator  url="/pages/my/login/login">
			<view class="prson">
				<u-avatar :src="src" size="94rpx"  class="prson_pic" ></u-avatar>
				<view class="prson_text">
					<p> 还未登入 </p>
					<p class="prson_text-two"> 还有有你的个性签名哦 </p>
				</view>
				<text class="prson_ico">
					<u-icon name="arrow-right" color="#ffffff"></u-icon>
				</text>
			</view>
		</navigator>
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
				src:'https://cdn.uviewui.com/uview/album/1.jpg',
				data:[{
					'iconfont':'\ue678',
					'title':'phone',
					'text':'绑定手机'
				},{
					'iconfont':'\ue62e',
					'title':'autonym',
					'text':'我的实名'
				},{
					'iconfont':'\ue673',
					'title':'reel',
					'text':'我的抵用卷'
				},{
					'iconfont':'\ue652',
					'title':'address',
					'text':'常用地址'
				},{
					'iconfont':'\ue8bd',
					'title':'message',
					'text':'消息中心'
				},{
					'iconfont':'\ue60d',
					'title':'service',
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
