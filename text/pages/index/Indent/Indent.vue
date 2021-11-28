<template>
	<view>
		<!-- 当前寄出还是收到显示组件 -->
		<u-tabs  style=" background-color: #FFFFFF;"
		:list="list2" 
		lineColor="#35BD00"
		:activeStyle="{
			color: '#35BD00',
			fontWeight: 'bold',
			transform: 'scale(1.05)'}"
			@click="handChangIsSend" 
			></u-tabs>
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
				<dataList :expressItem="item" v-for="(item,index) of expressData" :key="item.number" > </dataList> 
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
				childState:{                  //用于保存子组件的英文状态用于后端传输
					state:'NearltWeek',        //当前按钮处于的状态
					search_text:'' ,
					calendarDate:[],             //子组件传来的自定义日期数据
				},                    
				// state:'send',
				isload:false,                        //当前是否处于刷新状态 
				isSend:'send',                       //当前处于寄出还是收到状态
				showComponent:'comp-query',        //用于显示当前搜索组件
				expressData:[],                  //用于保存后端传输的所有快递数据
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
				const { data }=await http.request({
					method:'GET',
					url:'/getexpress',
					params:{							//发送数据数据
						isSend:this.isSend,
						state:JSON.stringify(this.childState)             //以JSON格式发送组件所有数据
						// state:this.childState.state,
						// calendarDate:this.childState.calendarDate,
						// searchText:this.calendarDate.search_text
					}
				})
				this.expressData=data
				// console.log(this.expressData)
				this.isload=false
				if(data.length>0){
					this.loadState=Object.assign(this.loadState,{ nomore:'loadmore' })
					
				}
			}
		},
		provide(){
			return {
				changChildState:this.changChildState,
				changeCalendar:this.changeCalendar,
				setSearchText:this.setSearchText
			}
		},
		methods:{
			//当点击寄出还是收到时触发的事件
			handChangIsSend(e){
				if(e.name=='我收到的'){
					this.isSend='receive'
				}else{
					this.isSend='send'
				}
				this.isload=true
			},
			//子组件修改state更改当前按钮的状态
			changChildState(value){
				this.childState.calendarDate=[]
				switch(value){
					case '今天': this.childState.state ='Today';break;
					case '近七天':this.childState.state ='NearlyWeek';break;
					case '近一个月':this.childState.state ='NearlyMonth';break;
					case '搜索':this.childState.state ='Search';break;
					default:this.childState.state ='Custom';
				}
				if(value =='搜索' || value =='自定义')
				return ;
				this.isload=true
			},
			//将组件传来的数据添加到数组中
			changeCalendar(data){
				this.childState.calendarDate=[...data]
				this.isload=true
			},
			//切换搜索组件的显示
			changeShowComponent(){
				if(this.showComponent != 'comp-query') this.isload=true       //如果当前是搜索组件则不进行加载
				if(this.showComponent == 'comp-query'){
					this.childState.state='近一个月'
					this.showComponent = 'comp-search' 
				}else{
					this.showComponent = 'comp-query'
				}
			},
			//用于获取搜索的内容且将其赋值
			setSearchText(value){
				// console.log(value)
				this.childState.search_text=value
				this.isload=true
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
