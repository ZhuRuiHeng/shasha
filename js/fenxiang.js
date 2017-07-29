//热门推荐------------------------------------------------------

var getParam = function () {
   	 try{
        var url = window.location.href;
        var result = url.split("?")[1];
        var id = result.split("=")[1];
        

		var xmlhttp;
		if (window.XMLHttpRequest){
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();	
		}
		else{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
		    if (xmlhttp.readyState==4 && xmlhttp.status==200){
		    	var informArr   = "";
		        var s           = JSON.parse(xmlhttp.responseText);
		        var data        = s.data;
		        var releasetime = document.getElementById("releasetime").innerHTML=data.userDityMsg.releasetime;
		        var nickname    = document.getElementById("nickname").innerHTML=data.userDityMsg.nickname;
		    	var nice_img    = document.getElementById("nice_img").setAttribute("src",data.userDityMsg.img);
		    	var postReleasetime = document.getElementById("postReleasetime").innerHTML=data.userDityMsg.postReleasetime;
		    	var dityname    = document.getElementById("dityname").innerHTML=data.userDityMsg.dityname;
		    	var brand       = document.getElementById("brand").innerHTML=data.userDityMsg.brand;
		    	var colour      = document.getElementById("colour").innerHTML=data.userDityMsg.colour;
		    	var position    = document.getElementById("position").innerHTML=data.userDityMsg.position;
		    	var dityprice   = document.getElementById("dityprice").innerHTML="￥"+data.userDityMsg.dityprice+"";
		    	var specification = document.getElementById("specification").innerHTML=data.userDityMsg.specification;
		    	var pnum        = data.commentMsg.CommenNumber;
				var pinglun     = document.getElementById("pinglun");
				var pinglun_num = document.getElementById("pinglun_num");
				var znum        = data.commentMsg.PostsNumber;
				var dianzan     = document.getElementById("dianzan");
				var dianzan_num = document.getElementById("dianzan_num");
				var samePerson  = data.userDityMsg.specification;
				var lunboimg    = data.userDityMsg.dityimg;
				var lunboStr="",lunboArr="",lunborol="",lunborols="";
				console.log(data);
		        
		        //轮播图
		        var result=lunboimg.split(",");
		        console.log(result.length);
				for(var i=0;i<result.length;i++){
				  	console.log(result[i]);
				  	var first  ="<div class=\"mui-slider-item mui-slider-item-duplicate\">"+
									"<a href=\"#\">"+
										"<img src=\""+result[0]+"\">"+
									"</a>"+
								"</div>";
					var last  ="<div class=\"mui-slider-item mui-slider-item-duplicate\">"+
									"<a href=\"#\">"+
										"<img src=\""+result[result.length]+"\">"+
									"</a>"+
								"</div>";
				  	var lunboStr  =	"<div class=\"mui-slider-item\">"+
										"<a href=\"#\">"+
											"<img src=\""+result[i]+"\">"+
										"</a>"+
									"</div>";
					var lunborol  = "<div class=\"mui-indicator\"></div>";
					lunboArr+=lunboStr;
					lunborols+=lunborol;
				}
				document.getElementById("lunboimg").innerHTML=last+lunboArr+first;
				document.getElementById("lunborol").innerHTML=lunborols;
				var zhuangtai = document.getElementsByClassName("mui-indicator")[0].classList.add("mui-active");
				//卖家信息
		        if(samePerson == 1){
		        	var level = document.getElementById("level").setAttribute("src","../images/star"+data.userDityMsg.level+".png");
		        }else{
		        	document.getElementById("maijia").style.display="none";
		        }	
		        //回复
				mui(".pingjia_list").on('tap','.yonghu_name .mui-pull-right',function(){
				  	document.getElementsByClassName("tanchuang")[0].style.display = "block";
				});
				mui(".mui-popup-buttons").on('tap','.mui-popup-button',function(){
					var index = this.getAttribute("name");
					if (index == 2) {
						mui.toast('回复成功');
					}else {
						mui.toast('你点了取消按钮');
					};
					document.getElementsByClassName("tanchuang")[0].style.display = "none";
				});

				//评论
				pinglun_num.innerHTML = "（"+pnum+"）";
				pinglun.addEventListener('tap',function(){
					document.getElementsByClassName("tanchuang")[0].style.display = "block";
					mui(".mui-popup-buttons").on('tap','.mui-popup-button',function(){
						var index = this.getAttribute("name");
						if (index == 2) {
							if (pinglun.getAttribute('class')) {  // 存在class属性
							    // 方式1
							    if (pinglun.getAttribute('class').indexOf('active') > -1) {
							        console.log('包含 active 这个class');   
							   		mui.toast("您已经评论过了，不能再评论");
			    					document.getElementsByClassName("tanchuang")[0].style.display = "none";return;
			   					};	
			   				};
							mui.toast('回复成功');
							var sum = pnum +1;
							pinglun.classList.add("active");
							pinglun_num.innerHTML="（"+sum+"）";
							
						}else {
							mui.toast('你点了取消按钮');
						};
						document.getElementsByClassName("tanchuang")[0].style.display = "none";
					});
				});
				//点赞
				dianzan_num.innerHTML = "（"+znum+"）";
				dianzan.addEventListener('tap',function(){
					if(dianzan.getAttribute("class").indexOf('active') > -1){
					    dianzan.classList.remove("active");
					    dianzan_num.innerHTML="（"+znum+"）"; 
					}else{
						var sum = znum +1;
						dianzan.classList.add("active");
						dianzan_num.innerHTML="（"+sum+"）";
					}
				});
				
		    }
		};
		xmlhttp.open("GET",apiRoot+"/posts/postsShare.do?id="+id,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send();

}catch(e){
        console.warn("none");
    }
};
/**
 * 页面加载完毕打印键值对对象
 */
window.onload = function () {
    console.log(getParam());
}