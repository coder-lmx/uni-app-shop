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
		<compQuery></compQuery>
	</view>
	
</template>

<script>
	import compQuery from '@/components/comp-query.vue'
	export default {
		components:{compQuery},
		data(){
			return{
				state:'send',
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
		methods:{
			handClickChangeState(state){
				this.state=state
			},
			change4(index) {
							this.current4 = index
						}
		}
	}
</script>

<style lang="scss" scoped>
	// .indent{
	// 	display: flex;
	// 	align-items: center;
	// 	width: 750rpx;
	// 	height:90rpx ;
	// 	background-color: $uni-bg-color-grey;
	// }
</style>
