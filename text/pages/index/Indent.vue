<template>
	<view>
		<!-- <text class="indent_text" 
		:class="state=='send'?'indent_text-hove':'' " 
		@click="handClickChangeState('send')">
			我寄出的
		</text>
		<text class="indent_text"  
		:class="state=='receive'?'indent_text-hove':''"
		@click="handClickChangeState('receive')">
			我收到的
		</text> -->
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
			<scroll-view scroll-y="true" :refresher-enabled="true" class="scrlll" :refresher-triggered="true">
				<view class="u-demo-block__content">
					
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
	import http from '@/common/baseRequest.js'
	export default {
		components:{compQuery,compSearch},
		data(){
			return{
				calendarDate:{},
				state:'send',
				showComponent:'comp-query',
				list2: [{
				    name: '我寄出的'
				}, {
				    name: '我收到的',
				    badge: {
				        isDot: true
				    }
				}],
				loadState:{                        //设置加载状态
					loadisShow:true,
					nomore:"nomore" ,
					nomoreText:"没有了还看",
					isLine:true
				}
			}
		},
		provide(){
			return {
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
			//将组件传来的数据添加到数组中
			changeCalendar(data){
				this.calendarDate=Object.assign({},data)
				console.log(this.calendarDate)
			},
			//切换搜索组件的显示
			changeShowComponent(){
				if(this.showComponent == 'comp-query'){
					this.showComponent = 'comp-search' 
				}else{
					this.showComponent = 'comp-query'
				}
			}
		},
		 onShow:async ()=>{
			 const {data}= await http.request({
				method:'GET',
				url:'/getexpress'
			})
			console.log(data)
		}
	}
</script>

<style lang="scss" scoped>
	.scrlll{
		max-height:1100rpx;
		text-align: center;
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
</style>
