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
			<!-- #ifndef APP-PLUS  -->
			<keep-alive>
				<transition name="tran" mode="out-in">
					<component :is="showComponent"  @clickShowComp="changeShowComponent"></component>
				</transition>
			</keep-alive>
			<!-- #endif -->
			<scroll-view scroll-y="true" refresher-enabled="true" class="scrlll">
				
			</scroll-view>
	</view>
	
</template>

<script>
	import compQuery from '@/components/comp-query.vue'
	import compSearch from '@/components/comp-search.vue'
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
				}]
			}
		},
		provide(){
			return {
				calendarDate:this.calendarDate,
				ChangeCalendar:this.ChangeCalendar
			}
		}
		,
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
		}
	}
</script>

<style lang="scss" scoped>
	.scrlll{
		max-height:1100rpx;
		text-align: center;
	}
	.tran-enter-active, .tran-leave-active {
	  transition: all .2s;
	}
	.tran-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  transform: translateX(-100%);
	}
	.tran-enter{
		transform: translateX(100%);
	}
</style>
