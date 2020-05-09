<template>
	<view class="container flex">
		<view style="text-align: center;">
			<image class="avatar" @tap="upload"></image>
			<!-- <image src="../../../static/camera.png" class="avatar" @tap="upload"></image> -->
			<view class="item flex uploadText" @tap="upload">上传头像
				
			</view>
		</view>
		<view class="box">
			<text class="textStyle boxSize">姓名：</text>
			<input class="boxSize" focus="true"></input>
			<text class="textStyle textSize" space="emsp">ID ：</text>
			<input class="boxSize" focus="true"></input>
			<text class="textStyle">性别：
				<image class="sex " src="../../../static/icon-man-1.png" mode="" @click=""></image>
				<image class="sex " src="../../../static/icon-woman-1.png"></image>
			</text>
		</view>
		<view class="box box2">
			<text >个人介绍：</text>
			<textarea class="margin1" style="margin-top: 10rpx; padding-top: 5rpx;" name="" id="" cols="30" rows="10" placeholder=" 编辑内容..."></textarea>
		</view>
		<view class="box box2" style="margin-top:30rpx;">
			<text >家族介绍：</text>
			<textarea class="margin1" style="margin-top: 10rpx; padding-top: 5rpx;" name="" id="" cols="30" rows="10" placeholder=" 编辑内容..."></textarea>
		</view>
		<button type="default">提交</button>
	</view>
</template>

<script>
export default {
	data(){
		 return{
			// src: '../../../static/camera.png',
			 imgUrl:'../../../static/camera.png'//头像 
		 }

	},
	methods:{
		upload() {
			uni.chooseImage({
				count: 1, // 默认9
				sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success(res) {
					const src = res.tempFilePaths[0];
		
					uni.redirectTo({
						url: '../upload/upload?src=' + src
					});
				}
			});
		},
	},
	onLoad(option) {
		let { avatar } = option;
		if (avatar) {
			this.src=avatar;
		}
	}
};
</script>

<style lang="less">
.container{
    width: 100%;
    height: 100%;
}

.avatar-container{
    position: relative;
    text-align: center;
    padding-top: 50%;
}


.avatar{
    width: 5rem;
    height: 5rem;
    background-color: #97e8d4;
    border-radius: 50%;
	margin: 20px;
	height: 120rpx;
	width:120rpx;
}

.item{
    line-height: 3rem;
	margin-top: -80rpx;
	font-size: 20rpx;
}
//姓名/ID
.box{
	width: 100%;
	height: 100%;
	margin-left: 40rpx;
	margin-top: 80rpx;
	box-sizing: border-box;
	.textStyle{
		font-size: 28rpx;
	}
	.textSize{
		padding-top: 40rpx;
	}
	input{
		height: 28rpx;
		margin-right: 80rpx;
	 	margin-left: 80rpx;
		margin-top: -38rpx;
		border-bottom: 1rpx #ececec solid;
	}
	.boxSize{
		margin-bottom: 40rpx;
	}

	
}
.sex{
	margin-left: 70rpx;
	height: 44rpx;
	width: 44rpx;
}
//文本编辑
.box2{
	margin-top: 120rpx;
	.margin1{
		border: 1rpx solid #ececec;
		height: 220rpx;
		width: 660rpx;
	}
}
button{
	margin-top: 30rpx;
	height: 80rpx;
	width: 460rpx;
	font-size: 36rpx;
	// font-family: '';//平方中黑/思源黑体
	color: #ffffff;
	background-color: #98e9d5;
	margin-bottom: 60rpx;
}
</style>
