# 本地存储
JavaScript中  cookie

日期
> 获取当前的时间
var obj=new Date();   

> 设定时间
. 字符串的方式
var obj=new Date(“时:分:秒 月/日/年” || “月/日/年 时:分:秒");
. 函数传递多个参数
var obj=new Date(年，月，日，时，分，秒);(不能加引号)

## 获取日期信息的方法
> 时间戳
obj.getTime()  (1970年至今的毫秒数)
> 返回月份(0-11)
obj.getMonth()
> 返回星期
obj.getDay()
> 返回日
obj.getDate()

## 设置日期信息的方法
> 设置月份
obj.setMonth(5) 记得减一  eg:要设置为6月份，写5


# cookie
cookie 存储用户电脑的一个字符串(.txt文件)

> 获取当前域名下的cookie内容 
document.cookie

> 设置当前域名下的cookie内容 
document.cookie="key-val;";   //key=val;
document.cookie="key-val1;";  //key=val1;
**需要在服务器环境下访问
. 存储大小4kb

> 生存周期
1.浏览器打开的时候存在
2.设定一个过期时间

> 操作cookie存储数据信息
增删改查  CRUD

增加   document.cookie="key-val;";
查询   document.cookie=             user:zhangsan   pwd:123456
修改   document.cookie="user=lisi;";
删除   document.cookie   生存周期过期



CTRL+5强制刷新


## HTML5本地存储
cookie  4k   发送请求的时候，cookie是包含在请求中的

localStorage 、sessionStorage、globalStorage(火狐支持)、WebSql Database。
	5M              5M               5M                     大数据    

> 遍历存储
– localStorage.length 获得storage中的个数
– localStorage .key(n) 获得storage中第n个键值对的键

> 存储键值对
– localStorage.key = value
– localStorage.setItem(key, value) 添加

> 获取键值
– localStorage.getItem(key)获取

> 删除数据
– localStorage.removeItem(key) 移除
– localStorage.clear() 清除







练习  待办事项列表  todolist
1.创建待办事项
2.未完成事项
	
3.按钮  clearAll

数据模型
var todolist=[
	{title:"今天上午要去邮局送一个包裹",done:false},
	{title:"今天上午要去邮局送一个包裹",done:false},
	{title:"今天上午要去邮局送一个包裹",done:false},
	{title:"今天上午要去邮局送一个包裹",done:false},
	{title:"今天上午要去邮局送一个包裹",done:false}
]

创建一条数据
function create(context){
	{title:context,done:false}
	1.给数据库中插入一条数据
	2.给页面也插入一条数据
}

修改数据
function changeDate(id){
	1.修改数据库
	2.修改页面
}

function changestate(id){
	1.修改数据库  done:true || false
	2.修改页面 数据结构
}

删除一条数据
function del(id){
	1.删除数据库
	2.删除页面	
}

清除所有数据
function clearAll(){
	1.清除页面
	2.清除数据库
}




修改数据库

数据的重绘  function (读取数据库中的数据，重新写入到页面中)