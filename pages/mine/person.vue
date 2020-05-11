<template>
  <view>
    <view class="person-head">
      <!-- <cmd-avatar class="imageSize" src="https://avatar.bbs.miui.com/images/noavatar_small.gif" @click="fnInfoWin" size="lg" :make="{'background-color': '#fff'}"></cmd-avatar> -->
      <cover-image class="imageSize" @click="fnInfoWin" size="lg" :make="{'background-color': '#fff'}" v-bind:src="imgUrl"></cover-image>
      <view class="person-head-box">
        <view class="person-head-nickname" >{{title}}</view>
        <view class="person-head-username">ID：{{idName}}</view>
		<text class="person-text person-margin-top">个人简介:</text>
	    <text class="person-text">家族简介:</text>
      </view>
		<image @click="skip" src="../../static/edit.png" class="image-size" ></image>
    </view>
	<view class="icon-box">
	<!-- 去别人家看看 -->
	<view class="icon-left">
		<image class="icon-left-1" src="../../static/去别人家看看.png" mode="">
			<text class="icon-text1">去别人家看看</text>
		</image>
		<image class="icon-right-1" v-bind:src="chevronRight" mode=""></image>
		<!-- <cover-image class="icon-right-1" @click="fnInfoWin" size="lg" :make="{'background-color': '#fff'}" src="../../static/chevron-right.png"></cover-image> -->
	</view>
	<!-- 个人空间 -->
	<view class="icon-left">
		<image class="icon-left-1" src="../../static/个人空间.png" mode="">
			<text class="icon-text1">个人空间</text>
		</image>
		<image class="icon-right-2" v-bind:src="chevronRight" mode=""></image>
	</view>
	<!-- 钱包管理 -->
	<view class="icon-left">
		<image class="icon-left-3" src="../../static/wallet.png" mode="">
			<text class="icon-text1">钱包管理</text>
		</image>
		<image class="icon-right-3" v-bind:src="chevronRight" mode=""></image>
	</view>
	<!-- 显示隐藏 -->
	<view class="icon-left">
		<image class="icon-left-4" src="../../static/编组.png" mode="">
			<text class="icon-text1">显示隐藏</text>
		</image>
		<image class="icon-right-4" v-bind:src="chevronRight" mode=""></image>
	</view>
	<!-- 设置 -->
	<view class="icon-left" style="border: none ;">
		<image class="icon-left-5" src="../../static/setting.png" mode="">
			<text class="icon-text1">设置</text>
		</image>
		<image class="icon-right-5" v-bind:src="chevronRight" mode=""></image>
	</view>
	</view>
 
  </view>
</template>

<script>
  import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
  import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"
  import cmdCellItem from "@/components/cmd-cell-item/cmd-cell-item.vue"

  export default {
    components: {
      cmdAvatar,
      cmdCellItem,
      cmdIcon
    },
    data() {
      return {
		   title: 'Hello',
		   idName:'123456',
		   imgUrl:'../../static/photo.png',//头像
		   chevronRight:'../../static/更多.png'
	  };
    },
    methods: {
		
		// 跳转到编辑个人信息页
		skip(){
			//测试完成之后改成uni.redirectTo
			uni.navigateTo({
				url: '../../pages/mine/message/index'
			})
		},
      /**
       * 打开用户信息页
       */
      fnInfoWin() {
        uni.navigateTo({
          url: '/pages/user/info/info'
        })
      }
    }
  }
</script>

<style>
  .person-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 330rpx;
	margin-bottom: 46rpx;
	background-color: #98e9d5;
  }

  .person-head-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
	margin-top: 70rpx;
  }

  .person-head-nickname {
    font-size: 34rpx;
    font-weight: 500;
    color: #fff;
  }

  .person-head-username {
    font-size: 20rpx;
    font-weight: 500;
    color: #fff;
  }

  .person-list {
    line-height: 0;
  }
  .imageSize{
	  height:120rpx ;
	  width: 120rpx;
	  margin-left: 40rpx;
	  border-radius: 120rpx;
	  background-color: #FFFFFF;
  }
	.person-text{
		font-size: 24rpx;
		color: #414d4a;
	}
	.person-margin-top{
		margin-top: 30rpx;
	}
	.image-size{
		height: 48rpx;
		width: 48rpx;
		margin-left: 360rpx;
		margin-top: -74rpx;
	}
	/* .icon-box{
		margin: 0 30rpx 0 30rpx;
	} */
	.icon-left{
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100rpx;
		width: 100%;
		padding:0 30rpx;
		border-bottom: 1rpx #e2e2e2 solid;
	}
	/* 看看 */
	.icon-left-1{
		width: 48rpx;
		height:50rpx;
	}
	.icon-right-1{
		height: 36rpx;
		width: 36rpx;
		margin-left: 380rpx;
	}
	.icon-text1{
		font-size: 34rpx;
		padding-left: 25rpx;
		color: #212121;
	}
	/* 空间 */
	.icon-left-2{
		width: 48rpx;
		height: 48rpx;
	}
	.icon-right-2{
		height: 36rpx;
		width: 36rpx;
		margin-left: 445rpx;
	}
	/* 钱包 */
	.icon-left-3{
		width: 40rpx;
		height: 30rpx;
	}
	.icon-right-3{
		height: 36rpx;
		width: 36rpx;
		margin-left: 448rpx;
	}
	/* 显示 */
	.icon-left-4{
		width: 42rpx;
		height: 28rpx;
	}
	.icon-right-4{
		height: 36rpx;
		width: 36rpx;
		margin-left: 448rpx;
	}
	/* 设置 */
	.icon-left-5{
		width: 44rpx;
		height:44rpx;
		
	}
	.icon-right-5{
		height: 36rpx;
		width: 36rpx;
		margin-left: 512rpx;
		
	}
</style>
