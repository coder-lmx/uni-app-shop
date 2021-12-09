import Vue from 'vue'
import path from './modules/path.js'
import Router from 'uni-simple-router'
Vue.use(Router)
//初始化
const router = new Router({
		
	    h5:{
	        paramsToQuery: false,
	        vueRouterDev: false,
	        vueNext: false,
	        mode: 'hash',
	        base: '/',
	        linkActiveClass: 'router-link-active',
	        linkExactActiveClass: 'router-link-exact-active',
	        scrollBehavior: (to, from, savedPostion) => ({ x: 0, y: 0 }),
	        fallback: true
	    },
	    APP: {
	        registerLoadingPage: true,  //v2.0.6+
	        loadingPageStyle: () => JSON.parse('{"backgroundColor":"#FFF"}'),
	        loadingPageHook: (view) => { view.show(); },
	        launchedHook: () => { plus.navigator.closeSplashscreen(); },
	        animation: {}
	    },
	    applet: {   //v2.0.6+
	        animationDuration: 300
	    },
    routes: [...path]//路由表
});
//全局路由前置守卫
// router.beforeEach((to, from, next) => {
//   next()
// })
// // 全局路由后置守卫
// router.afterEach((to, from) => {
// })
export default router;