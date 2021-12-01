<template>
	<view>
		<view class="address">
			<u-tabs 
				:list="tabsState.list" 
				:lineColor="tabsState.lineColor"
				:activeStyle="tabsState.activeStyle"
			></u-tabs>
			<view class="address_box">
				<u--input
					class="address_box_input"
					placeholder="请输入姓名/电话/地址快速查找"
					prefixIcon="search"
					shape="circle "
					:clearable="true"
					border="surround"
					v-model="value"
				  ></u--input>
			</view>
		</view>
	</view>
</template>
<script>
	//#ifndef APP-PLUS
		import {main_color} from '@/uni.scss'      //除了App下执行
	//#endif 
	export default {
		data() {
			return {
				value:'',
				tabsState:{                  //滑块样式设置
					list:[{
							name:'寄件人'
						},{
							name:'收件人'
						}],
					activeStyle:{
						color:'#35BD00',
						fontSize:'35rpx'
					},
					//#ifndef APP-PLUS
					lineColor:main_color,
					//#endif
					//#ifdef APP-PLUS
					lineColor:'#35BD00',
					//#endif
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.address{
		padding-bottom: 30rpx;
		background-color: $uni-bg-color-grey;
		&_box{
			margin-top: 10rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			&_input{
				background-color: $uni-bg-color;
			}
		}
	}
</style>
