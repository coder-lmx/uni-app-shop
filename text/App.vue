<script>
	export default {
		onLaunch: async function() {
			const data= await this.$u.http.get('https://www.fastmock.site/mock/0cbd0a45609057735540800dd376bd09/api/tododata')
			console.log(data)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
</style>
