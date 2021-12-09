<template>
	<view class="main">
		<view class="foot" v-show="isShow">
			<u-button
				class="foot_bt"
				type="default" 
				text="管理"
				:hairline="true"
				:plain="true"
				:throttleTime="500"
				@click="handChangeShow"
			></u-button>
			<u-button 
				class="foot_bt-right"
				type="primary" 
				text="+新建地址"
				:throttleTime="500"
			></u-button>
		</view>
		<view v-show="!isShow" class="main_delel">
			<view style="display: flex; align-items: center;">
				<checkbox-group
					@change="handClickcheck"
				>
					<checkbox 
						id="check"
						:checked="isCheck"
						color="#35BD00"/>
				</checkbox-group>
				<label for="check">全选</label>
			</view>
			<view style="display: flex;">
				<u-button
					class="main_delel_bt main_delel_bt-left"
					type="default" 
					text="删除"
					:hairline="true"
					:disabled="isDisabled"
					:plain="true"
					:throttleTime="500"
					@click="handClickDelet"
				></u-button>
				<u-button
					class="main_delel_bt"
					type="primary" 
					text="完成"
					:hairline="true"
					:throttleTime="500"
					@click="handChangeShow"
				></u-button>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import http from '@/common/baseRequest.js'
	//#ifndef APP-PLUS
		import {main_color} from '@/uni.scss'     //除了App下执行
	//#endif 
	export default {
		name:'comp-foot',
		props:['refresherrefresh'],                            //列表刷新函数
		data(){
			return{
				isShow:true,
				//#ifndef APP-PLUS
					main_color:main_color,
					//#endif
				//#ifdef APP-PLUS
					main_color:'#35BD00',
				//#endif
			}
		},
		computed:{
			isDisabled(){                            //删除按钮是否显示
				return !this.$store.state.address.some(item => item.isDelet)
			},
			isCheck(){                                 //全选的状态逻辑
				return this.$store.state.address.every(item => item.isDelet)
			}
		},
		methods:{
			//切换模块样式
			handChangeShow(){
				this.isShow=!this.isShow
				this.$emit('handOk')
			},
			//点击单选框时改变数据
			handClickcheck(event){
				const e=event.detail.value.length==0?false:true
				if(e){                   //e为真时为选中状态
					this.$store.commit('changeAddrDelet',{e:true})
				}else{                   
					this.$store.commit('changeAddrDelet',{e:false})
				}
			},
			//点击删除按钮实现
			async handClickDelet(){
				const deletList=[]
				this.$store.state.address.forEach(item => { if(item.isDelet) deletList.push( item.id)} )         //获取当前要删除的id号
				const { data }=await http.request({
					method:'GET',
					url:'/deletId',
					params:{												//发送数据数据
						state:JSON.stringify(deletList)             //以JSON格式发送组件所有数据
					}
				})
				if(data[0].status){
					const refresherrefresh=this.refresherrefresh
					this.$refs.uToast.show({
						type: 'success',
						message: "删除成功",
						duration:1000,
						complete(){
							refresherrefresh()
						}
					})
				}else{
					this.$refs.uToast.show({
						type: 'error',
						message: "删除失败请重试",
						duration:1000
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 20rpx 40rpx;
		font-size: $uni-font-size-24;
		background-color: $uni-bg-color-grey;
		&_delel{
			display: flex;
			justify-content:space-between;
			align-items: center;
			&_bt{
				width: 160rpx;
				margin: 0 10rpx;
				&-left{
					border: 2rpx solid $uni-font-color-1;
				}
				&-hove{
					border:2rpx solid $main-color ;
					color: $main-color;
				}
			}
		}
	}
	.foot{
		display: flex;
		&_bt{
			flex: 1;
			margin-right: 40rpx;
			color: $uni-font-color-1;
			border-radius: 10rpx;
			border: 2rpx solid $uni-font-color ;
		}
		&_bt-right{
			flex: 3;
		}
	}
</style>
