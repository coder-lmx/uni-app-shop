<template>
	<view>
		<view class="address">
			<u-tabs 
				:list="tabsState.list" 
				:lineColor="tabsState.lineColor"
				:activeStyle="tabsState.activeStyle"
				@click="handClickTabs"
			></u-tabs>
			<view class="address_box">
				<u--input
					class="address_box_input"
					placeholder="请输入姓名/电话/地址快速查找"
					prefixIcon="search"
					shape="circle "
					:clearable="true"
					border="surround"
					@input="handInput"
					@clear="handClickCler"
					v-model="value"
				  ></u--input>
			</view>
		</view>
		<scroll-view 
			class="address_scr"
			scroll-y="true" 
			:refresher-enabled="true"
			refresher-background="#f4f6fa"
			:refresher-triggered="isload"
			@refresherrefresh="refresherrefresh">
			<compList 
				v-for="(item,index) of dataList " 
				:key="item.id" :item="item" 
				:isShow="isShow"
			></compList>
		</scroll-view>
		<compFoot 
			@handOk="handOk" 
			:refresherrefresh="refresherrefresh"
		></compFoot>
	</view>
</template>
<script>
	import http from '@/common/baseRequest.js'
	import compList from  '@/pages/my/my-address/comp-list'
	import compFoot from  '@/pages/my/my-address/comp-foot'
	//#ifndef APP-PLUS
		import {main_color} from '@/uni.scss'     //除了App下执行
	//#endif 
	export default {
		components:{compList,compFoot},
		data() {
			return {
				value:'',
				isload:false,
				isShow:false,                   //子组件选择框的显示与隐藏
				// dataList:[],                  //主要数据展示
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
				stateData:{                          //发送数据时的所有状态
					isSend:'寄件人',                       //当前时发送还是寄件人
					search:'',                     //当前搜索数据
				}
			}
		},
		watch:{
			async isload(next,old){
				if(next == false) return
				this.stateData.search=this.value                     //获取当前输入框的值
				const { data }=await http.request({
					method:'GET',
					url:'/getaddress',
					params:{												//发送数据数据
						state:JSON.stringify(this.stateData)             //以JSON格式发送组件所有数据
					}
				})
				this.$store.commit('addAddrData',data)
				this.dataList=this.$store.state.address
				this.isload=false
			}
		},
		computed:{
			dataList:{
				get:function (){
					return this.$store.state.address
				},
				set:function (){
					return [];
				}
			}
		},
		methods:{
			//用户输入时触发
			handInput(){
				uni.$u.debounce(()=>{this.isload=true}, 500)                 //使用防抖函数处理
			},
			//点击搜索清空时触发
			handClickCler(){
				this.isload=true
			},
			//点击标签时触发
			handClickTabs(e){
				this.stateData.isSend=e.name
				this.isload=true
			},
			//点击管理和完成时触发改变
			handOk(){
				this.isShow=!this.isShow
			},
			//下拉时触发改变状态
			refresherrefresh(){
				this.isload=true
			}
		},
		//进入前刷新数据
		onReady(){
			setTimeout(()=>{
				this.isload=true
			},500)
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
		&_scr{
			padding: 30rpx;
			box-sizing: border-box;
			height: 950rpx;
		}
	}
	
</style>
