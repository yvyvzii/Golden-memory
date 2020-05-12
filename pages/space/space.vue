<template>
	<view class="box">
		<view class="imageSize">
			<view style="margin-left: 30rpx;">
				<view class="yuan1"></view>
				<view class="yuan2"></view>
				<view class="man"></view>
				<!-- <image src="../../static/去别人家看看/photo_4.png" style="width:96rpx;height:96rpx;"></image> -->
				<button class="buttonSize" type="default">万年青的空间</button>
			</view>
		</view>
		<view class="box2">
			<button class="buttonSize1" plain="true">普通会员</button>
			<view class="box3">
				<text >个人简介：</text>
				<textarea style="font-size: 24rpx;margin-top: 5rpx;" placeholder="      编辑内容..."></textarea>
			</view>
		</view>
		<!-- 滑块列表 -->
		<view class="content">
			<view class="tba_contain">
				<!-- 导航栏 -->
				<scroll-view class="tab" scroll-x :scroll-left="tabScroll" scroll-with-animation="true">
					<block v-for="(item,index) in menuList" :key="index" >
						<view :class="['tab-item','border2',currentTab == index ? 'active' : ''] " :data-current="index"  @click='clickMenu'>{{item.name}}</view>
					</block>
				</scroll-view>
				<!-- 页面 -->
				<swiper class="list_content"duration="500" :current="currentTab" @change="changeContent">
					<swiper-item class="content-item">
						<block v-for="item in list_img">
							<view class="list_img">
								<view>{{item.title}}</view>
							</view>
						</block>
						<view v-if="pages_all" class="tips" @click="jz">加载更多</view>
						<view  v-if="pages_all==false" class="tips2">暂无更多数据~</view>
					</swiper-item>
					<!--段子-->
					<swiper-item class="content-item" >
						<block v-for="item in list_xh">
							<view class="list">
								<view>{{item.title}}</view>
							</view>
						</block>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>

</template>

<script src="pages/space/rm_01.js"></script>

<style lang="less">
	@import "rm_01.css";
	.box{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		
	}
	.imageSize{
		button::after{ border: none;}
		width: 750rpx;
		height: 530rpx;
		background-image: url(../../static/去别人家看看/我的-个人信息3-恢复的.png);
		.buttonSize{
			width: 284rpx;
			height: 64rpx;
			margin-top: 80rpx;
			margin-left: 60rpx;
			border-radius: 30rpx;
			background-color: #f7c062;
		    font-size: 24rpx;
			color: #FFFFFF;
		}
	}
	.yuan1{
		margin-left: 50rpx;
		height: 320rpx;
		width: 320rpx;
		border-radius: 50%;
		border: 2rpx solid #fff;
	}
	.yuan2{
		margin-top: -265rpx;
		margin-left: 105rpx;
		height: 200rpx;
		width: 200rpx;
		border-radius: 50%;
		border: 4rpx solid #fff;
	}
	.man{
		margin-top: -150rpx;
		margin-left: 160rpx;
		height: 96rpx;
		width:96rpx;
		background: url("../../static/去别人家看看/photo_4.png") no-repeat;
	}
	.box2{
		
		.buttonSize1{
			margin-top: -450rpx;
			margin-left: 430rpx;
			width: 160rpx;
			height: 40rpx;
			line-height: 38rpx;
			text-align: center;
			color:#f7c062;
			font-size:20rpx;
			border: 2rpx solid #f7c062;
			border-radius: 30rpx;
		}
	}
	.box3{
		margin-left: 440rpx;
		margin-top: 40rpx;
		font-size: 24rpx;
		color: #666;
	}
	.fontColor{
		color: #1FCCA2;
	}
</style>
