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
				v-model="NewValue"
			></u--input>  
		</view>
		<view class="check">
			<text>请输入验证码:</text>
			<u-code-input
				v-model="auth" 
				:maxlength="4"
				color="#35BD00" 
				:borderColor="borderColor"
				@input="checkChange"
			></u-code-input>
		</view>
		<view class="phone_bt">
			<u-button 
				text="确定"
				type="success" 
				shape="circle"
				@click="handClikSubmit"
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
			value:'',        												//原手机号值
		 	NewValue:'',													//现手机号值
			auth:'',													//输入框值
			borderColor:'#35BD00',											//输入框状态
			check:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,       //手机号正则校验
			btState:{            		//关于验证码的状态
				disabled:false,   		//当前时候禁止
				isChilk:false,			//是否点击过
				text:"获取验证码"
			},
			// toast:{              //关于弹出框的状态
			// 	type: 'loading',          
			// 	loading:true,           //是否加载状态 
			// 	message:'正在发送验证码'   //              
			// }
		}
	},
	methods:{
		async handClikCheck(){
			if(!this.check.test(this.value)){
				this.value=''
				this.$refs.uToast.show({type:'error',message: "请输入正确的手机号!",})
				return
			}
			let time=30                                                                   //倒计时时间显示
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
			let timer=setInterval( ()=>{this.btState.text=`${time-=1}后重试`} ,1000)              //设置倒计时
			setTimeout(()=>{ 
				clearInterval(timer); 
				if(this.btState.isChilk){                                                          //30秒后解除所有设置
					this.btState=Object.assign(this.btState,{ disabled:false ,text:'重新获取'})      
				}else{
					this.btState=Object.assign(this.btState,{ disabled:false ,text:'获取验证码'})
				}
			},30000)
		},
		checkChange(){
			console.log(this.auth)
			if(this.auth=='' || this.auth== '1234' ){
				this.borderColor='#35BD00'
			}else{
				this.borderColor='red'
			}
		},
		//确定按钮点击时触发校验提交
		async handClikSubmit(){
			if(!this.check.test(this.value)||!this.check.test(this.NewValue)){
				this.value=''
				this.NewValue=''
				this.$refs.uToast.show({type:'error',message: "请输入正确的手机号!",})
				return
			}
			uni.showLoading({                              //加载状态
				title: '正在修改'
			})
			const {data}=await http.request({            //发送数据
				method:'GET',
				url:'/text'
			})
			uni.hideLoading();                         //弹框隐藏
			this.$refs.uToast.show({type:'success',message: "修改成功!",})              
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
				font-size:$uni-font-size-28;
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