<template>
	<view class="box">
		<form>
			<view class="imgBox">
				<image class="logo" src="../../static/logo-B.png"></image>
			</view>
			<view class="font14 ml10 inputText">输入账号名称</view>
		    <uinput class="inputStyle" v-model="test" placeholder="请输入账号名称"></uinput>
			<!-- <view class="font14 ml10 inputText">输入验证码</view>
			<uinput class="inputStyle"  @getValue="v" type="msgcode" :send="true" ></uinput> -->
			
			<view class="font14 ml10 inputText">输入密码</view>
			<uinput class="inputStyle"  @getValue="v" type="tel" placeholder="请输入密码"></uinput>
			<view class="textBox">
				<text class="verify" >验证码登陆</text>
				<!-- <view class="update-input">
					<input class="uni-input" maxlength="6" type="number" placeholder="" />
					<input class="code" @click="getVerification" v-model="code" disabled>
				</view> -->

			</view>
		    <view class="buttonBox">
				<button @click="submit" class="button1">注册</button>
				<button @click="submit" class="button2">登陆</button>
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
	                pass:true,
					code:"获取验证码"
	            }
	        },
			method:{
				// getVerification(){
				// 				if(this.code!="获取验证码"){
				// 					uni.showToast({
				// 						title:'请稍后再试',
				// 						icon:"none"
				// 					})
				// 				}else{
				// 					this.code=60;
				// 					var jian=setInterval(()=>{
				// 						this.code--
				// 						if(this.code==0){
				// 							clearInterval(jian)
				// 							this.code="获取验证码"
				// 						}
				// 					},1000)   
				// 				}   
				// 			}
				// 			,
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
		margin-top: -30rpx;
	}
	.buttonBox{
		height: 88px;
		width: 520px;
		margin-top: -40rpx;
	}
	.button1{
		border: none;
		margin-left: 170rpx;
		margin-top: 180rpx;
		height: 88rpx;
		width: 520rpx;
		background-color: #98e9d5;
		line-height: 88rpx;
		text-align: center;
		font-size: 40rpx;
		color: #FFFFFF;
	}
	.button2{
		border: none;
		margin-left: 170rpx;
		margin-top: 40rpx;
		height: 88rpx;
		width: 520rpx;
		background-color: #98e9d5;
		line-height: 88rpx;
		text-align: center;
		font-size: 40rpx;
		color: #FFFFFF;
	}
	.imgBox{
		margin-top: -100rpx;
	}
	.logo{
		height: 144rpx;
		width: 144rpx;
		margin: 100rpx 0;
		margin-left: 360rpx;
	}
	.textBox{
		margin-left: 570rpx;
		margin-top: -115rpx;
		
	}
	.verify{
		font-size:28rpx ;
		color: #1FCCA2;
	}
/* 	.update-input{
		
	} */
</style>
