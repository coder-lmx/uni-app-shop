<template>
	<view class="container">
		<view v-if="attestation">
			<view class="view_top">
				<text class="iconfont autonym_icon">&#xe654;</text>
				<text class="ok_text_one Block_text">认证完成</text>
				<text class="Block_text">恭喜你，完成了认证</text>
			</view>
		</view>
		<view v-else>
			<text class="iconfont autonym_icon">&#xe648;</text>
			<u-notice-bar :text="text1" class="container_notice_top"></u-notice-bar>
			<view class="container_input_name">
				<text class="container_input_text">真实姓名</text>
				<u--input
					placeholder="请输入真实姓名"
					border="none"
					clearable
					class="container_input_write"
					v-model="inputName"
					@blur="
						checkName;
						showError();
					"
					@input="checkName"
				></u--input>
			</view>
			<view class="container_input_id">
				<text class="container_input_text">身份证号</text>
				<u--input
					placeholder="请输入身份证号"
					border="none"
					clearable
					class="container_input_write"
					@blur="
						checkID;
						showError();
					"
					@input="checkID"
					v-model="inputID"
				></u--input>
			</view>
			<u-row justify="center" class="container_row_box">
				<u-col :span="9">
					<u-button text="提交" class="container_submit_btn" shape="circle" :disabled="isSubmit.isID || isSubmit.isName" @click="submitBtn"></u-button>
				</u-col>
			</u-row>
			<u-row justify="center" class="container_row_box">
				<text>
					{{ text2 }}
					<u-link href="https://uviewui.com/" text="点击获得帮助" @click="click"></u-link>
				</text>
			</u-row>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
import http from '@/common/baseRequest.js';
export default {
	data() {
		return {
			text1: '请尽快完成实名认证  请尽快完成实名认证',
			text2: '无法通过认证？',
			inputID: '',
			inputName: '',
			checkID_text:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,  
			isSubmit: {
				isID: true,
				isName: true
			},
			show: false,
			list: {
				success: {
					type: 'success',
					message: '实名认证成功',
					url: '/pages/my/my-autonym/my-autonym'
				},
				error: {
					type: 'error',
					message: '请确认输入内容是否正确'
				}
			},
			attestation: false
		};
	},
	onReady() {
		this.getCertify();
	},
	beforeMount() {
		this.attestation = this.$store.state.$userInfo.attestation;
	},
	methods: {
		showError() {
			if (this.inputID.length > 0 && this.inputName.length > 0) {
				if (this.isSubmit.isID || this.isSubmit.isName) {
					this.showToast(this.list.error);
				}
			}
		},
		checkID() {
			this.checkID_text.test(this.inputID) ? (this.isSubmit.isID = false) : (this.isSubmit.isID = true);
		},
		checkName() {
			/^[\u4e00-\u9fa5]{2,6}$/.test(this.inputName) ? (this.isSubmit.isName = false) : (this.isSubmit.isName = true);
		},
		async submitBtn() {
			const { data } = await http.request({
				method: 'POST',
				url: '/api/certify',
				params: { ID: this.inputID, Name: this.inputName, user: this.$store.state.$userInfo }
			});
			if (data.success) {
				this.$store.commit('editAttestation');
				await this.showToast(this.list.success);
			}
		},
		showToast(params) {
			this.$refs.uToast.show({
				...params,
				complete() {
					console.log('aa');
					params.url &&
						uni.redirectTo({
							url: params.url
						});
				}
			});
		},
		async getCertify() {
			const { data } = await http.request({
				method: 'GET',
				url: '/api/realname',
				params: { user: this.$store.state.$userInfo }
			});
			if (data.success) {
				this.$store.commit('editAttestation');
				this.attestation = this.$store.state.$userInfo.attestation;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	text-align: center;
	.autonym_icon {
		display: block;
		margin-top: 80rpx;
		color: $main-color;
		font-size: 150rpx;
	}
	&_notice_top {
		margin: 50rpx 0 20rpx 0;
	}
	&_input_name,
	&_input_id {
		display: flex;
		margin: 1rpx 0;
		padding: 20rpx;
		background-color: $uni-bg-color-grey;
		.container_input_text {
			line-height: 72rpx;
			font-size: 36rpx;
		}
		.container_input_write {
			padding-left: 50rpx !important;
		}
	}
	&_submit_btn {
		width: 100%;
		color: $uni-bg-color-grey;
		background-color: $main-color;
	}
	&_row_box {
		margin-top: 50rpx;
		color: #a2a2a2;
	}
	.Block_text {
		display: block;
		margin-top: 30rpx;
		color: $uni-bg-color-white;
	}
	.ok_text_one {
		color: $main-color;
		font-size: 50rpx;
	}
}
</style>
