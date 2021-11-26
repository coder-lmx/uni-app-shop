<template>
	<view class="query">
		<u--input
			class="query_input"
			placeholder="请输入姓名/电话/单号快速查找"
			prefixIcon="search"
			prefixIconStyle="font-size: 22px"
			:clearable="true"
			shape="circle"
			fontSize="32rpx"
			></u--input>
			<text class="query_text" @click="handClickShowComp">
				{{bt_text}}
			</text>
	</view>
</template>

<script>
	export default {
		name:"comp-search",
		data() {
			return {
				bt_text:'取消'
			};
		},
		methods:{
			handClickShowComp(){
				if(this.bt_text=='取消'){
						this.$emit('clickShowComp')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.query{
		display: flex;
		align-items: center;
		width: 750rpx;
		height: 100rpx;
		padding: 0 0 0 15px;
		margin-top: 20rpx;
		font-size: 19px;
		box-sizing: border-box;
		background-color: $uni-bg-color-grey;
		&_input{
			background-color: $uni-bg-color;
		}
		&_text{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 80px;
			height: 100%;
			color: $uni-font-color;
		}
	}
</style>
