import store from "@/store/index.js"
const path=[
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/index/index',
	  aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
	  name: 'index',
	    // meta: {
	    //     title: '首页',
	    // }
	},
	{
	    path: '/pages/send/send',
	    name: 'send',
	    // meta: {
	    //     title: '寄快递',
	    // }
	},
	{
	    path: '/pages/inquire/inquire',
	    name: 'inquire',
	    // meta: {
	    //     title: '查询',
	    // }
	},
	{
	    path: '/pages/my/my',
	    name: 'my',
	    // meta: {
	    //     title: '我的',
	    // }
	},
	{
	    path: '/pages/index/Indent/Indent',
	    name: 'Indent',
	    // meta: {
	    //     title: '我的快递',
	    // }
	},
	{
	    path: '/pages/index/DataItem/DataItem',
	    name: 'DataItem'
	},
	{
	    path: '/pages/my/login/login',
	    name: 'mylogin',
	    // meta: {
	    //     title: '更多信息',
	    // }
		beforeEnter:(to,from,next)=>{
			console.log('adw')
			if(!store.state.$userInfo.usename){
				uni.navigateTo({
					url:'/pages/inquire/login/login'
				})
			}else{
				next({name:'login'})
			}
		}
	},
	{
		path: '/pages/my/login/login_model/login_model',
		name: 'login_model',
	},
	{
	    path: '/pages/my/my-phone/my-phone',
	    name: 'my-phone',
	    // meta: {
	    //     title: '手机号设置',
	    // }
	},
	{
	    path: '/pages/my/my-autonym/my-autonym',
	    name: 'my-autonym',
	    // meta: {
	    //     title: '实名制设置',
	    // }
	},
	{
	    path: '/pages/my/my-reel/my-reel',
	    name: 'my-reel',
	    // meta: {
	    //     title: '我的抵用卷',
	    // }
	},
	{
		path: '/pages/my/my-address/my-address',
		name: 'my-addres',
	},
	{
		path: '/pages/my/my-message/my-message',
		name: 'my-message',
	},
	{
		path: '/pages/my/my-service/my-service',
		name: 'my-service',
	},
	{
		path: '/pages/inquire/login/login',
		name: 'login',
	}
]
export default path