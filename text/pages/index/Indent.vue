<template>
	<view class="u-page">
		<!-- <text class="indent_text" 
		:class="state=='send'?'indent_text-hove':'' " 
		@click="handClickChangeState('send')">
			我寄出的
		</text>
		<text class="indent_text"  
		:class="state=='receive'?'indent_text-hove':''"
		@click="handClickChangeState('receive')">
			我收到的
		</text> -->
		<view class="u-demo-block">
					<text class="u-demo-block__title">默认位置</text>
					<view class="u-demo-block__content">
						<u-subsection
							:list="list"
							mode="button"
							:current="current4"
							activeColor="#f9ae3d"
							@change="change4"
						></u-subsection>
					</view>
				</view>
	</view>
	
</template>

<script>
	export default {
		data(){
			return{
				state:'send',
				current4: 1,
				list: ['未付款', '待评价', '已付款'],
			}
		},
		methods:{
			handClickChangeState(state){
				this.state=state
			},
			change4(index) {
							this.current4 = index
						}
		}
	}
</script>

<style lang="scss" scoped>
	.indent{
		display: flex;
		align-items: center;
		width: 750rpx;
		height:90rpx ;
		background-color: $uni-bg-color-grey;
		&_text{
			flex: 1;
			color: $uni-font-color;
			text-align: center;
			&-hove{
				color: $uni-font-color-2;
			}
		}
	}
</style>
