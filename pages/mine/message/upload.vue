<template>
		<view style="text-align: center;">
			<view class="box">
			</view>
			<!-- <image src="../../../static/camera.png" class="avatar" @tap="upload"></image> -->
			<view class="buttonSie">
				<button style="font-family: ;color: #FFFFFF;width: 460rpx;height: 80rpx;margin-top: 80rpx;line-height80rpx;text-align: center;background-color:#98e9d5;" @tap="upload">拍照</button>
				<button style="font-family: ;color: #FFFFFF;width: 460rpx;height: 80rpx;margin-top: 40rpx;line-height80rpx;text-align: center;background-color: #98e9d5;" @tap="uploadTow">相册</button>
			</view>
		</view>
</template>

<script>
export default {
	data(){
		 return{
			src: '../../../static/camera.png'
			 // imgUrl:'../../../static/camera.png'//头像 
		 }

	},
	methods:{
		upload() {
			uni.chooseImage({
				count: 1, // 默认9
				sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
				success(res) {
					const src = res.tempFilePaths[0];
		
					uni.redirectTo({
						url: '../upload/upload?src=' + src
					});
				}
			});
		},
		uploadTow(){
			uni.chooseImage({
				count:1,
				sizeType:['compressed'],
				sourceType:['album'],
				success(res) {
					const src=res.tempFilePaths[0];
					uni.redirectTo({
						url:'../upload/upload?src='+src
					})
				}
			})
		}
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
	.box{
		height:600rpx;
		width: 600rpx;
	    margin-top: 60rpx;
	    margin-left: 74rpx;
		background-color: #999999;
		.buttonSie{
			margin-top: 40rpx;
			height: 80rpx;
		}
	}
	
</style>

