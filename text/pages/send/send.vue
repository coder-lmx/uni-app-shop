<template>
	<view class="main">
		<Address></Address>
		<Select></Select>
	</view>
</template>

<script>
	import Address from '@/pages/send/comp-send/address.vue'
	import Select from '@/pages/send/comp-send/select.vue'
	export default {
		components:{Address,Select}
		}
</script>

<style lang="scss" scoped>
	.main {
		padding: 20rpx;
	}
</style>
