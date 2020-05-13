<template>
	<view class="box">
		<!-- 头像部分 -->
		<view class="box2">
			<image class="image-size" src="../../static/photo.png" mode=""></image>
			<view class="font-min">我的空间</view>
		</view>
		<!-- 分类部分 -->
		<view class="box3">
			<view class="across">
				<image class="Record" src="../../static/roombig/icon-record@2x.png" mode=""></image>
				<view class="Record-font">记录记忆</view>
			</view>
			<view class="across">
				<image class="Record" src="../../static/roombig/icon-video@2x.png" mode=""></image>
				<view class="Record-font">视频记忆</view>
			</view>
				<view class="across">
				<image class="Record" src="../../static/roombig/icon-photo@2x.png" mode=""></image>
			<view class="Record-font">亲人相册</view>
			</view>
				<view class="across">
				<image class="Record" src="../../static/roombig/icon-heart@2x.png" mode=""></image>
			<view class="Record-font">亲人心意</view>
			</view>
		</view>
		<!-- 内容显示 -->
		<view class="box4">
			<view class="time1">
				<view class="font-class1">4-15</view>
				<view class="font-class2">12:00</view>
			</view>
			<view class="card1">
				<view class="card-box">
					<textarea style="width: 480rpx;padding: 10rpx 10rpx;">
					</textarea>
				</view>
			</view>
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
		justify-content: center;
		align-items: flex-start;
		margin-left: 68rpx;
		box-sizing: border-box;
		margin-top: 40rpx;
		display:flex;
		margin-bottom: 40rpx;
		.Record{
			flex-direction:row-reverse;
			height: 90rpx;
			width: 90rpx;
		}
		.Record-font{
			font-size: 10rpx;
		}
	}
	.across{
		width: 100%;
		flex-wrap:wrap-reverse;
	}
	.box4{
		width: 750rpx;
		height: 100%;
		margin-left: 40rpx;
		// background-color: #0066CC;
		display:flex;
		box-sizing: border-box;
		.time1{
			flex: 10%;
			color: #666;
			.font-class1{
				font-size: 36rpx;
			}
			.font-class2{
				margin-top: 20rpx;
				font-size: 24rpx;
			}
		}
		.card1{
			flex: 80%;
			.card-box{
				// height: 400rpx;
				width: 540rpx;
				border-radius: 30rpx;
				box-shadow: 3rpx 3rpx 5rpx 3rpx #DDDDDD;
			}
		}
	}
</style>
