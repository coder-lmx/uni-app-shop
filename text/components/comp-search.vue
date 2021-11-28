<template>
	<view class="query">
		<u--input
			class="query_input"
			placeholder="请输入姓名/电话/单号快速查找"
			prefixIcon="search"
			prefixIconStyle="font-size: 22px"
			v-model="input_text"
			:clearable="true"
			shape="circle"
			fontSize="32rpx"
			@input="handChangeInput"
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
				input_text:'',          //获取当前input框中的内容
				bt_text:'取消'
			};
		},
		inject:['setSearchText'],
		methods:{
			handClickShowComp(){
				if(this.bt_text=='取消'){
					this.$emit('clickShowComp')
				}else{
					this.setSearchText(this.input_text)
					// console.log(this.input_text)
				}
			},
			handChangeInput(e){
				if(e !==''){
					this.bt_text='搜索'
				}else{
					this.bt_text='取消'
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
