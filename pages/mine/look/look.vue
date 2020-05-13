<template>
	<view>
		<!-- <image class="add1" src="../../../static/加.png" mode=""></image> -->
		 <dragSort :list="list" :props="props" @change="onDragSortChange"></dragSort>
	</view>
 
  <!-- <dragSort v-for="(item,index) in objectArray" :key="item.id" @change="onDragSortChange">
	 {{index +':'+ item.name}}
  </dragSort> -->
</template>

<script>
	import dragSort from '../../../components/drag-sort/index.vue'
	export default {
	  components: {
	    dragSort
	  },
	  data () {
	    return {
			
	      // 对应需要显示的标题
	      props: {
	        label: 'label',
			name:'name'
	      },
	      list: [
	        {
	          label: '妈妈',
			  name:'11'
	        },
	        {
	          label: '标题2',
			  name:'11'
	        },
	        {
	          label: '标题3'
	        },
	        {
	          label: '标题4'
	        },
	        {
	          label: '标题5'
	        }
	      ]
	    }
	  },
	  methods: {
	    onDragSortChange (e) {
	      console.log(e)
	      // frontData 插到谁后面
	      // data 操作的数据
	    }
	  }
	}
</script>

<style lang="less">
.add1{
	height: 36rpx;
	width: 36rpx;
	margin-top: -100rpx;
	margin-left: 680rpx;
}
</style>