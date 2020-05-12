<template>
	<view class="box">
		<view class="box2">
			<image class="image-size" src="../../static/photo.png" mode=""></image>
			<view class="font-min">我的空间</view>
		</view>
		<view class="box3">
			<image class="Record" src="../../static/个人空间/icon-record@2x.png" mode=""></image>
			<view class="Record-font">记录记忆</view>
			<image class="Record" src="../../static/个人空间/icon-video@2x.png" mode=""></image>
			<view class="Record-font">视频记忆</view>
			<image class="Record" src="../../static/个人空间/icon-photo@2x.png" mode=""></image>
			<view class="Record-font">亲人相册</view>
			<image class="Record" src="../../static/个人空间/icon-heart@2x.png" mode=""></image>
			<view class="Record-font">亲人心意</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.box2{
		width: 100%;
		height: 180rpx;
		background-color: rgb(166, 237, 220);
		.image-size{
			height: 120rpx;
			width: 120rpx;
			margin-left: 320rpx;
		}
		.font-min{
			// margin-top: 5rpx;
			font-size: 20rpx;
			margin-left: 330rpx;
		}
	}
	.box3{
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin-left: 50px;
		box-sizing: border-box;
		margin-top: 40rpx;
		.Record{
			float: right;
			height: 90rpx;
			width: 90rpx;
			// border-radius: 50%;
			// border: 2rpx solid  rgb(166, 237, 220);
		}
		.Record-font{
			margin-left: -5rpx;
			margin-top: 5rpx;
			font-size: 10rpx;
		}
	}
</style>
