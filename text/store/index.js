import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // vue的插件机制

// Vuex.Store 构造器选项
const store = new Vuex.Store({
    // 为了不和页面或组件的data中的造成混淆，state中的变量前面建议加上$符号
    state: {
        // 用户信息
        $userInfo: {
            id: 1,
			attestation:false                                             //实名状态
        },
		//用户所有的地址
		address:[
			// city: "南昌市"
			// else: "青山湖区 艾溪湖东路"
			// id: 0
			// isDefault: true
			// name: "李"
			// phone: "155******3550"
			// province: "江西省"
			//isDelet:true     //删除选定  
		]
    },
	mutations:{
		addAddrData(state,value){
			state.address=[...value]
		},
		changeAddrDelet(state,value){
			const { id,e }=value
			if(id === undefined){                           //只点击全选时触发
				state.address=state.address.map(item => Object.assign({},item,{ isDelet : e}))
			}else{                             //点击单个时触发
				state.address=state.address.map(item =>{
					if(item.id != id) return item
					return Object.assign({},item,{ isDelet : e})
				})
				state.address=state.address.map(item =>{
					if(item.id != id) return item
					return Object.assign({},item,{ isDelet : e})
				})
			}
		},
		changeAddrDefault(state,option){
			const { value,id }=option
			console.log(value,id)
		},
		editAttestation(state){
		   state.$userInfo.attestation=true
		}
	},
	actions:{
		
	}
})
 
export default store
