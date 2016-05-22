var creatBtn=document.querySelector('.creat');
var thing=document.querySelector('.thing');
var todoList=document.querySelector('.todoList');
var readyList=document.querySelector('.readyList');
var todoNum=document.querySelector('.todoNum');
var readyNum=document.querySelector('.readyNum');
var clearBtn=document.querySelector('.clear');

/* 
	函数工具部分：
		1、获取数据
		2、保存数据
		3、完成事项函数
		4、编辑事项
		5、删除事项
		6、页面重绘数据
*/

//获取数据函数
function getData () {
	var data=JSON.parse(localStorage.getItem("todo"));
	return data||[];
}
//保存到后台数据函数
function saveData (data) {
	localStorage.setItem("todo",JSON.stringify(data));
}
//完成事项函数
function changeState (id,state) {
	var data=getData();
	data[id].done=state;
	saveData(data);
	reWrite();
}
//编辑事项
function changeThing (id,text) {
	var data=getData();
	if (text==data[id].title) {
		return;
	};
	data[id].title=text;
	saveData(data);
	reWrite();
}
//删除事项
function delThing (id) {
	var data=getData();
	data.splice(id,1);
	saveData(data);
	reWrite();
}
//重绘函数，添加数据到页面
reWrite();//调用一次,获取一次数据，插入到页面，要不刷新后页上的数据会消失
function reWrite () {  
	var todoStr='';
	var readyStr='';
	var tnum=0;
	var rnum=0;
	var data=getData();
	data.forEach(function(obj,i){
		if (obj.done==false) {
			todoStr+='<li><input type="checkbox" class="todoCheck" onclick="changeState('+i+',true)"><button class="del" onclick="delThing('+i+')"></button><span contenteditable=true onblur="changeThing('+i+',this.innerHTML)">'+obj.title+'</span></li>';
			tnum++;
		}else if(obj.done==true) {
			readyStr+='<li><input type="checkbox"class="readyCheck" checked><button class="del" onclick="delThing('+i+')"></button><span class="readyThing" contenteditable=true onblur="changeThing('+i+',this.innerHTML)">'+obj.title+'</span></li>';
			rnum++;
		}
	});
	todoList.innerHTML=todoStr;
	readyList.innerHTML=readyStr;
	todoNum.innerHTML=tnum;
	readyNum.innerHTML=rnum;
}

/* 
	功能部分：
		1、点击创建待办事项
		2、实现完成事项功能
		3、编辑事项功能
		4、删除事项功能
*/
creatBtn.onclick=function(){
	if (thing.value=="") {
		alert("请输入待办事项");
		return;
	};
	var data=getData();
	data.push({"title":thing.value,"done":false});
	thing.value="";
	saveData(data);
	reWrite ();
}
clearBtn.onclick=function(){
	localStorage.clear();
	var data=getData();
	saveData(data);
	reWrite();
}