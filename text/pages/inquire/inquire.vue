<template>
	<view>
		<view class="main">
			<view class="main_view">
				<input 
					type="text" 
					placeholder="请输入快递单号查询"  
					class="main_input"
					v-model="text"
					/>
				<text 
				class="main_text"
				v-show="showIco"
				@click="handClickSearch"
				>
					搜索
				</text>
				<u-icon 
					v-show="!showIco"
					name="scan"
					class="main_pic" 
					size="28"
					@click="handClickScan"
					></u-icon>
			</view>
		</view>
		<view class="box_big" v-show="showData">
			<image 
				src="../../assets/big-img-big-img.png" 
				class="box_big_pic"
				></image>
			<view>抱歉，还没有查询到您的快递哦</view>
		</view>
		<u-toast 
			ref="uToast"
		></u-toast>
		<view class="data" v-show="!showData">
			<dataList
			:expressItem="item" 
			v-for="(item,index) of expressData" 
			:key="item.number" 
			> </dataList>
		</view>
	</view>
</template>

<script>
	import dataList from '@/components/comp-dataList.vue'
	import http from '@/common/baseRequest.js'
	export default {
		components:{dataList},
		data() {
			return {
				text:'',
				expressData:[]
			};
		},
		computed:{
			showIco: function (){
				return Boolean(this.text)
			},
			showData:function(){
				return this.expressData.length >0 ? false :true
			}
		},
		methods:{
			//点击搜索发送请求
			async handClickSearch(){
				const {data}=await http.request({
					method:'GET',
					url:'/searchdata',
					params:{
						number:this.text
					}
				})
				this.expressData=data
				console.log(this.expressData)
			},
			//点击扫码时执行
			handClickScan(){
				//只在H5中执行
				//#ifdef H5
					this.$refs.uToast.show({
						type: 'error',
						message: "请在客户端下使用",
						duration:'1000'
					})
				//#endif
				
				//App下允许从相机和相册扫码
				//#ifndef H5
					uni.scanCode({
						scanType:['barCode'],
					    success: function (res) {
					        console.log('条码内容：' + res.result);
					    }
					});
				//#endif
			}
		}
	}
</script>

<style lang="scss" scoped>
.main{
    display: flex;
    width: 100%;
    height: 238rpx;
    box-sizing: border-box;
    background-color: #35bc02;
	&_view{
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		width: 622rpx;
		height: 72rpx;
		padding-left: 20rpx;
		margin: auto;
		background-color: $uni-bg-color-grey;
		color: $uni-font-color;
	}
	&_input{
		font-size: $uni-font-size-24;
		flex: 1;
	}
	&_text{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100%;
	}
	&_pic{
		margin-right: 22rpx;
	}
}

.box_big{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 262rpx);
    color: $uni-font-color;
    font-size: $uni-font-size-24;
	&_pic{
		width: 332rpx;
		height: 332rpx;
	}
}
.data{
	padding: 20rpx 20rpx ;
}

</style>
