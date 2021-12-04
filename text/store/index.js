import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // vue的插件机制

// Vuex.Store 构造器选项
const store = new Vuex.Store({
    // 为了不和页面或组件的data中的造成混淆，state中的变量前面建议加上$符号
    state: {
        // 用户信息
        $userInfo: {
            id: 1
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
		}
	},
	actions:{
		
	}
})

export default store
