<template>
	<view>
		<view class="query">
			<button 
			class="query_bt query_bt-hidden" 
			:style="{'background-color': bgcolor }">今天</button>
			<button class="query_bt ">近七天</button>
			<button class="query_bt ">近一个月</button>
			<button class="query_bt ">自定义</button>
			<button class="query_bt">搜索</button>
		</view>
		<view>
			<u-calendar :show="true" :allowSameDay="true" mode="'range'" :minDate="minDate" :maxDate="maxDate" ></u-calendar>	
		</view>
	</view>
</template>

<script>
	import  moment  from '@/common/moment.js'
	export default {
		name:'comp-query',
		props:{
			shape:{
				type:String,
				validator(value) {
					return ['square', 'circle'].includes(value)
				},
				default(){
					return 'square'
				}
			},
			size:{
				type:String,
				 validator(value) {
				 	return ['large','mini','normal'].includes(value)
				 } ,
				default(){
					return 'normal'	
				}
			},
			bgcolor:{
				type:String,
				default(){
					return '#f3f3f3'
				},
			textColor:{
				type:String,
				default(){
					return '#000000'
				},
			}
			}
		},
		data(){
			return{
				minDate:moment().subtract(1, 'month').format('YYYY-MM'),
				maxDate:moment().add(10, 'days').format('YYYY-MM-DD')
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.query{
		display: flex;
		align-items: center;
		width: 750rpx;
		height: 90rpx ;
		margin-top: 20rpx;
		background-color: $uni-bg-color-grey;
		&_bt{
			display: flex;
			align-items: center;
			padding: 0 28rpx;
			border-radius: 52rpx;
			border: none;
			font-size: 14rpx;
			&-hidden{
				display: none !important;
			}
		}
		&_bt::after{
			border: none;
		}
	}
</style>
