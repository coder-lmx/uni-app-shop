<template>
	<view>
		<view class="query">
			<button 
			class="query_bt iconfont"
			:style="{
				'background-color':childState.state == item? calendar.color :bgcolor ,
				'color': childState.state == item? '#ffffff':textColor}"
			:class="{
				'btn-radius':shape == 'circle'}" 
			v-for="(item,index) of this.dateList"
			:ket="index"
			@click="handClickChange(item)"
			><u-icon name="search" v-if="index == 4 ? true : false"></u-icon>{{item}}</button>
		</view>
		<u-calendar 
			:show="calendar.show" 
			:mode="calendar.mode" 
			:minDate="calendar.minDate" 
			:maxDate="calendar.maxDate" 
			:color="calendar.color" 
			:closeOnClickOverlay="true"
			:defaultDate="defaultDate"
			:maxRange="10"
			@close="close"
			@confirm="success"
			>
		</u-calendar>	
	</view>
</template>

<script>
	import  moment  from '@/common/moment.js'
	 //#ifndef APP-PLUS 
	 import main_color from '@/uni.scss'
	// #endif 
	export default {
		name:'comp-query',
		props:{
			shape:{
				type:String,
				validator(value) {
					return ['square', 'circle'].includes(value)
				},
				default(){
					return 'circle'
				}
			},
			bgcolor:{
				type:String,
				default(){
					return '#f4f6fa'
				}
			},
			textColor:{
				type:String,
				default(){
					return '#000000'
				},
			}
		},
		data(){
			return{
				dateList:['今天','近七天','近一个月','自定义','搜索'],
				defaultDate:[],  //选择时保存日期
				calendarList:[],
				calendar:{
					minDate:moment().subtract(1, 'month').format('YYYY-MM'),  //可选最小月份
					maxDate:moment().add(10, 'days').format('YYYY-MM-DD'),    //可选最大天数
					// #ifndef APP-PLUS                 
						 color:main_color.main_color,
					// #endif
					// #ifdef APP-PLUS                 
						color:'#35BD00',
					// #endif
					text:'请选择日期',
					mode: 'range',
					show:false,
				}
			}
		},
		watch:{
			calendarList(){
				if(this.calendarList.length==0){
					this.childState.state='近一个月'
				}
			}
		},
		inject:['calendarDate','ChangeCalendar','childState','changChildState'] ,
		methods:{
			//点击遮罩成进行隐藏
			close(e){
				this.calendarList=[]
				this.calendar.show=false
			},
			//点击确定时触发
			success(e){
				this.defaultDate=[...e]
				this.calendarList=e
				this.calendar.show=false
			},
			handClickChange(e){
				this.changChildState(e)
				switch(e){
					case '自定义':
						this.calendar.show=true ; break;
					case '搜索':
						this.$emit('clickShowComp'); break;
					default :
						return
				}
			}
		},
		mounted() {
			// console.log(main_color.main_color)
			// this.changeCalendar({name:'aa'})
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/style/iconfont.css";
	.query{
		display: flex;
		align-items: center;
		justify-content: space-around;;
		width: 750rpx;
		height: 100rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
		background-color: $uni-bg-color-grey;
		&_bt{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 120rpx;
			height: 70rpx;
			padding: 0 0rpx;
			border: none;
			font-size: 24rpx;
		}
	}
	uni-button:after{
		border: none;
		// display: none;
	}
	.btn-radius{
		border-radius: 50%;
	}
</style>
