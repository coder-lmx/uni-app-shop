<template>
	<view class="addrList">
		<view class="addrList_person">
			<view v-show="isShow">
				<checkbox-group
					@change="handChangeState($event,item.id)"
				>
					<checkbox 
						:checked="item.isDelet"
						color="#35BD00"
					/>
				</checkbox-group>
			</view>
			<view class="addrList_person_main">
				<text class="addrList_person_name">{{item.name}}</text> 
				<text class="addrList_person_phone"> {{item.phone}} </text> 
				<text class="addrList_person_moren" v-if="item.isDefault">默认</text>
				<view class="addrList_person_addre"> {{item.province}}-{{item.city}}-{{item.else}}</view>
			</view>
			<text class="iconfont">&#xe8cf;</text>
		</view>
		<view class="addrList_bt">
			<view style="display: flex; align-items: center;">
				<u-switch
					v-model="btValue"
					:activeColor="main_color"
					@change="handchangeBt(item.isDefault,item.id)"
					></u-switch>
				<text class="addrList_bt_text">设置为默认寄件地址</text>
			</view>
		</view>
	</view>
</template>

<script>
	//#ifndef APP-PLUS
		import {main_color} from '@/uni.scss'     //除了App下执行
	//#endif 
	export default {
		name:'compList',
		props:['item','isShow'],
		data(){
			return{
				text1:true,
				isDelet:false,
				//#ifndef APP-PLUS
					main_color:main_color,
					//#endif
				//#ifdef APP-PLUS
					main_color:'#35BD00',
				//#endif
				// isShow:false               ,//是否显示选择
				checkboxValue1:[]           
			}
		},
		computed:{
			btValue:{
				get(){
					return this.item.isDefault
				},
				set(){
					return false
				}
			}
		},
		methods:{
			handChangeState(event,id){
				this.$store.commit('changeAddrDelet',{ id:id,e:event.detail.value.length===0?false:true })
			},
			//默认选择控件
			handchangeBt(value,id){
				this.$store.commit('changeAddrDefault',{ value,id })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.addrList{
		margin-bottom: 20rpx;
		border-radius: 30rpx;
		color: $uni-font-color-1;
		background-color: $uni-bg-color-grey;
		&_person{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 40rpx;
			border-bottom: 2rpx solid #f4f6fa;
			&_main{
				max-width: 560rpx;
				@include textover;
			}
			&_name{
				color: #000000;
				font-weight: 500;
			}
			&_phone{
				margin: 0 30rpx 0 20rpx;
				font-size: $uni-font-size-24;
			}
			&_addre{
				color: $uni-font-color-1;
				font-size: $uni-font-size-28;
				margin-top: 10rpx;
				max-width: 560rpx;
				@include textover;
			}
			&_moren{
				display: inline-block;
				width: 60rpx;
				height: 30rpx;
				text-align: center;
				line-height: 30rpx;
				color: $uni-bg-color-grey;
				font-size: $uni-font-size-20;
				background-color: $main-color;
			}
		}
		&_bt{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 40rpx;
			color: $uni-font-color;
			&_text{
				margin-left: 30rpx;
				font-size: $uni-font-size-20;
			}
			&_dele{
				
				font-size: $uni-font-size-28;
			}
		}
	}
	.uni-checkbox-input{
		background-color: $main-color;
		color: $uni-bg-color-grey;
	}
</style>
