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
			<view style="display: flex;">
				<u-checkbox-group
					placement="column"
				>
					<u-checkbox
						:activeColor="main_color"
						shape="circle"
						@change="handClickcheck"
					>
					</u-checkbox>
				</u-checkbox-group>	
				全选
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
	</view>
</template>

<script>
	//#ifndef APP-PLUS
		import {main_color} from '@/uni.scss'     //除了App下执行
	//#endif 
	export default {
		name:'comp-foot',
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
			isDisabled(){
				console.log(this.$store.state.address.some(item => !item.isDelet))
				return this.$store.state.address.some(item => !item.isDelet)
			}
		},
		methods:{
			//切换模块样式
			handChangeShow(){
				this.isShow=!this.isShow
				this.$emit('handOk')
			},
			//点击全选时改变数据
			handClickcheck(e){
				if(e){                   //e为真时为选中状态
					this.$store.commit('changeAddrDelet','add')
					console.log(this.$store.state.address)
				}else{
					this.$store.commit('changeAddrDelet','dele')
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
