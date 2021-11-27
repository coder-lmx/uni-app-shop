<template>
	<view>
		<!-- 当前寄出还是收到显示组件 -->
		<u-tabs  style=" background-color: #FFFFFF;"
		:list="list2" 
		lineColor="#35BD00"
		:activeStyle="{
			color: '#35BD00',
			fontWeight: 'bold',
			transform: 'scale(1.05)'
		}"></u-tabs>
		<!-- #ifdef H5  -->
		<keep-alive>
			<transition name="tran" mode="out-in">
				<component :is="showComponent"  @clickShowComp="changeShowComponent"></component>
			</transition>
		</keep-alive>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
			<component :is="showComponent" @clickShowComp="changeShowComponent"></component>
		<!-- #endif -->
		<!-- 提示语显示 -->
		<view class="u-demo-block prompt">
			<view class="u-demo-block__content">
				<u-notice-bar
					:text="promptState.text"
					:color="promptState.color"
					direction="column"
					mode="closable"
				></u-notice-bar>
			</view>
		</view>
		
		<scroll-view 
		scroll-y="true" 
		:refresher-enabled="true"       
		refresher-background="#f4f6fa"
		class="scrll"
		:refresher-triggered="isload"        	
		@refresherrefresh="refresherrefresh"   
		>
			<view class="u-demo-block__content">
				<!-- 当前数据显示 -->
				<dataList> </dataList> 
				<dataList> </dataList>
				<dataList> </dataList>
				<dataList> </dataList>
				<!-- 设置加载状态 -->
				<u-loadmore           
					v-show="loadState.loadisShow"
					:status="loadState.nomore"
					:nomoreText="loadState.nomoreText"
					loadingText="先等会,我先加载下"
					fontSize="30rpx"
					color="#35BD00"
					height="40"
					:line="loadState.isLine"
				></u-loadmore>
			</view>
		</scroll-view>
	</view>
	
</template>

<script>
	import compQuery from '@/components/comp-query.vue'
	import compSearch from '@/components/comp-search.vue'
	import dataList from '@/pages/index/Indent/dataList.vue'
	import http from '@/common/baseRequest.js'
	export default {
		components:{compQuery,compSearch,dataList},
		data(){
			return{
				childState:{
					state:'近一个月'
				},                    //当前按钮处于的状态
				calendarDate:{},
				state:'send',
				isload:false,                        //当前是否处于刷新状态 
				showComponent:'comp-query',        //用于显示当前搜索组件
				list2: [{
				    name: '我寄出的'
				}, {
				    name: '我收到的',
				    badge: {
				        isDot: true
				    }
				}],
				promptState:{                   //提示语状态
					text:['这是一条提示语'],     
					color:'#35BD00'
				},
				loadState:{                        //设置加载状态
					loadisShow:true,
					nomore:"nomore" ,
					nomoreText:"没有了还看",
					isLine:true
				}
			}
		},
		watch:{
			async isload(next,old){
				if(next == false) return
				const data=await http.request({
					method:'GET',
					url:'/getexpress'
				})
				console.log(data)
				this.isload=false
			}
		},
		provide(){
			return {
				childState:this.childState,
				changChildState:this.changChildState,
				calendarDate:this.calendarDate,
				ChangeCalendar:this.ChangeCalendar
			}
		},
		methods:{
			 handClickChangeState(state){
				 this.state=state
			},
			change4(index) {
				 this.current4 = index
			},
			//子组件修改state更改当前按钮的状态
			changChildState(value){
				this.childState.state=value
			},
			//将组件传来的数据添加到数组中
			changeCalendar(data){
				this.calendarDate=Object.assign({},data)
				console.log(this.calendarDate)
			},
			//切换搜索组件的显示
			changeShowComponent(){
				if(this.showComponent != 'comp-query') this.isload=true
				if(this.showComponent == 'comp-query'){
					this.childState.state='近一个月'
					this.showComponent = 'comp-search' 
				}else{
					this.showComponent = 'comp-query'
				}
			},
			refresherrefresh(){                    //下拉刷新触发事件
				this.isload=true
			}
		},
		onReady:function (){
			setTimeout(()=>{
				this.isload=true
			},500)
		}
	}
</script>

<style lang="scss" scoped>
	.scrll{
		box-sizing: border-box;
		padding: 0 20rpx 0;
		max-height:900rpx;
	}
	.tran-enter-active, .tran-leave-active {
	  transition: all .1s;
	}
	.tran-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  transform: translateX(-100%);
	}
	.tran-enter{
		transform: translateX(100%);
	}
	.prompt{
		padding: 20rpx;
	}
</style>
