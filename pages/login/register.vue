<template>
	<view class="box">
		 <form>
			<view class="font14 ml10 inputText">输入账号名称</view>
		    <uinput class="inputStyle" v-model="test"  placeholder="输入账号名称"></uinput>
			<view class="font14 ml10 inputText">输入手机号</view>
		    <uinput   @getValue="v" type="tel" placeholder="请输入手机号"></uinput>
			<view class="font14 ml10 inputText">输入验证码</view>
		    <uinput   @getValue="v" type="msgcode" :send="true" placeholder="请输入验证码"></uinput>
		    <view class="bottonBox">
				<button @click="submit" class="button1 mini-btn">注册</button>
			</view>
		</form>
	</view>
</template>

<script>
	import uinput from "@/components/poiuy-uinput/uinput.vue"
	 export default {
	        components: {
	            uinput
	        },
	        data(){
	            return{
	                // test:'测试数据',
	                test2:'输入框2的数据',
	                pass:true
	            }
	        },method:{
	            v(e){
	                if(!pass){
	                    pass = false;
	                    return;
	                }
	            },
	            submit(){
	                if(!pass){
	                    return;
	                }
	            }
	        }
	    }
</script>

<style>
	.box{
		width: 100%;
		height: 100%;
		margin-top:118rpx ;
		margin-right: 60rpx;
		margin-left: -60rpx;
	
	}
	.inputText{
		font-size: 36rpx;	
		margin-left: 150rpx;
	}
	.inputStyle{
		color: #e8e8e8;
	}
/* 	.buttonBox{
		height: 88px;
		width: 520px;
	} */
	.button1{
		border: none;
		margin-left: 170rpx;
		margin-top: 100rpx;
		height: 88rpx;
		width: 520rpx;
		background-color: #98e9d5;
		line-height: 88rpx;
		text-align: center;
		font-size: 40rpx;
	}
</style>
