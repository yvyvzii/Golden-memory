export default {
	data() {
		return {
			//导航
			menuList: [{
				name: "我的亲人"
			}, {
				name: "亲人心意"
			}],
			tabScroll: 0,
			currentTab: 0,
			//文字笑话
			list: [],
			list_xh:[
				{
					title:'段子'
				},
				{
					title:'段子'
				},
				{
					title:'段子'
				},
				{
					title:'段子'
				}
				
			],
			//图片笑话
			list_img: [	{
					title:'图文'
				},
				{
					title:'图文'
				},
				{
					title:'图文'
				},
				{
					title:'图文'
				}],
			//加载条数
			pages: 0,
			pages_all: false,
		}
	},
	onLoad() {
		uni.getSystemInfo({ // 获取当前设备的宽高，文档有
			success: (res) => {
				this.windowHeight = res.windowHeight;
				this.windowWidth = res.windowWidth;
			},
		});
	

	},
	methods: {
		//点击tab menu
		clickMenu: function(e) {
			var current = e.currentTarget.dataset.current; //获取当前tab的index
			// 导航tab共2个，获取一个的宽度
			var tabWidth = this.windowWidth / 2;
			this.tabScroll = (current - 2) * tabWidth; //使点击的tab始终在居中位置
			if (this.currentTab == current) {
				return false
			} else {
				this.currentTab = current;
			};

		},
		//活动menu 内容
		changeContent: function(e) {
			var current = e.detail.current; // 获取当前内容所在index,文档有
			var tabWidth = this.windowWidth / 2;
			this.currentTab = current;
			this.tabScroll = (current - 2) * tabWidth;
		},

		//放大图片
		chooseImage: function(e) {
			var urls = [e];
			console.log(urls)
			uni.previewImage({
				urls: urls
			})
		},
		//加载数据
		jz() {
			if (this.pages < this.list.length) {
				var pages = this.pages + 5;
				var list = this.list.slice(this.pages, pages);
				for (var i = 0; i < list.length; i++) {
					this.list_img.push(list[i]);
				};
				this.pages = pages;
			} else {
				this.pages_all = false;
			}
		},

	}
}
