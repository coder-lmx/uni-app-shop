<template>
  <view class= " phone ">
	    <view class="phone_main">
			  <u--input
				class="phone_main_model"
				placeholder="请输入原手机号"
				border="surround"
				type="number"
				shape="circle"
				maxlength="20"
				v-model="value"
			  ></u--input> 
			  <u-button 
			  class="phone_main_bt"
			  :disabled="btState.disabled"
			  :text="btState.text"
			  @click="handClikCheck"
			  > </u-button>
		</view>
		<view style=" margin-top: 40rpx; margin-bottom: 40rpx;">  
			<u--input
				class="phone_main_model"
				placeholder="请输入现手机号"
				border="surround"
				type="number"
				shape="circle"
				maxlength="20"
				v-model="value"
			></u--input>  
		</view>
		<view class="check">
			<text>请输入验证码:</text>
			<u-code-input
				v-model="NewValue" 
				:maxlength="4"
				color="#35BD00" 
				borderColor="#35BD00"
			></u-code-input>
		</view>
		<view class="phone_bt">
			<u-button 
				text="确定"
				type="success" 
				shape="circle"
			></u-button>
		</view>
		<u-toast ref="uToast"></u-toast>   <!-- 弹出框 -->
  </view>
</template>

<script>
import http from '@/common/baseRequest.js'
  export default {
    data(){
		return{
			value:'',
			NewValue:'',
			btState:{            		//关于验证码的状态
				disabled:false,   		//当前时候禁止
				isChilk:false,			//是否点击过
				text:"获取验证码"
			},
			toast:{              //关于弹出框的状态
				type: 'loading',          
				loading:true,           //是否加载状态 
				message:'正在发送验证码'   //              
			}
		}
	},
	methods:{
		async handClikCheck(){
			this.btState=Object.assign(this.btState,{ disabled:true,isChilk:true })       //更改按钮的状态
			uni.showLoading({                              //加载状态
				title: '正在获取验证码'
			})
			const {data}=await http.request({            //发送数据
				method:'GET',
				url:'/text'
			})
			if(data.status){                           //成功发送数据
				uni.hideLoading();
				uni.$u.toast('验证码已发送');
			}
			console.log(this.btState.disabled)
		}
	}
  }
</script>
<style lang="scss" scoped>
	page{
		background-color: $uni-bg-color-grey;
	}
	.phone{
		padding: 40rpx;
		&_main{
			position: relative;
			&_model{
				height: 50rpx;
				padding: 20rpx;
				background-color: $uni-bg-color;
			}
			&_bt{
				position: absolute;
				right: 20rpx;
				top: 50%;
				width: 200rpx; 
				height: 80%;
				color: $uni-bg-color-grey;
				font-size: 28rpx;
				transform: translateY(-50%);
				background-color: $main-color;
				
			}
		}
		&_bt{
			margin-top: 40rpx;
		}
	}
	.check{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>