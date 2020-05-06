
## 插件安装
#### 自定义输入框  待更完善 

##### 导入
> import uinput from "@/components/my-components/uinput.vue"

----------------------------------		
#### *注意 修改width时 可以使用一个块级元素包裹起来 因为内部插件是100%宽度

> using:
#### 属性 attribute
1. **name** 和原生一样的name属性 用于表单
2. **onlyInput** 是否仅仅是一个输入框 默认为false
3. **type** 输入框类型。默认为text 
>>> 可选值 text|tel|email|number|digit(带小数点类型)|idcard(身份证类型)|password|bankcard(银行卡号)|msgcode(短信验证码)|textarea
4. **disabled** 是否禁用 默认为false
5. **label** 标题文本 
6. **labelPosition** 标题文本位置 默认为 right 可选值 right|left|center|top
7. **placeholder** 输入框提示语
8. **maxlength** 最大长度  默认为70 可以自行输入 注意：长度会根据不同输入框类型自动更换长度
9. **mustFill** 不做验证 默认为false

----------------------------------	

#### textarea专属属性
* **tlposition** 可选值 top|center|bottom|none 与  *labelPosition* 不冲突 默认为top 
* **height** 只需要给大小 自带upx单位

----------------------------------	

#### 短信验证码专属属性  
*  **send** 是否能发送 可以先判断号码框是否填写后传入 用于触发倒计时功能  true 默认值为false
*  **codeText** 发送验证码的文本文字  例如：发送验证码  默认为获取验证码
*  **countDown** 倒计时秒数 默认为60s 

----------------------------------	

#### 方法 method 
*  *input*    > 输入时触发得到Input框的值
*  *getValue* > 失去焦点触发得到Input框的值可返回当前输入框的状态 是否通过验证
>>> 返回值为 status：true|false 判断是否通过验证 ; value 返回输入框的值 ; el 当前输入框的元素对象 **用于做提交按钮是不用再去做一次验证**
*  *focus*    > 获取焦点回调
		
* 短信验证码框专属方法 counting 已开始倒计时回调方法 没有返回值

----------------------------------	

### 示范代码 
##### 如下 使用v-model正常获取输入框数据

```<template>
		<view>
		  <form>
			<uinput label="输入框1" @getValue="v" v-model="test" placeholder="请输入输入框1"></uinput>
			<view class="font14 ml10">输入框1的结果:{{test}}</view>
			<uinput label="输入框2"  @getValue="v" v-model="test2" placeholder="请输入输入框2"></uinput>
			<view class="font14 ml10">输入框2的结果:{{test2}}</view>
			<uinput label="手机号"  @getValue="v" type="tel" placeholder="请输入手机号"></uinput>
			<uinput label="验证码"  @getValue="v" type="msgcode" :send="true" placeholder="请输入验证码"></uinput>
			<view class="font14 ml10">邮箱输入框</view>
			<uinput :onlyInput="true" placeholder="请输入输入框2" type="email" ></uinput>
			<botton @click="submit"></botton>
		  </form>
		</view>
	</form>

	</template>
	<script>
	import uinput from "@/components/my-components/uinput.vue";
	export default {
		components: {
			uinput
		},
		data(){
			return{
				test:'测试数据',
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
</style>
```

##### 发现问题请及时在评论区给我反馈，谢谢大家的指正，如果好用请给个好评哦~

	