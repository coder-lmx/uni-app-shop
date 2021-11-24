<template>
	<view class="indent">
		<text class="indent_text" 
		:class="state=='send'?'indent_text-hove':'' " 
		@click="handClickChangeState('send')">
			我寄出的
		</text>
		<text class="indent_text"  
		:class="state=='receive'?'indent_text-hove':''"
		@click="handClickChangeState('receive')">
			我收到的
		</text>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				state:'send'
			}
		},
		methods:{
			handClickChangeState(state){
				this.state=state
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
