//热门推荐------------------------------------------------------
var token ="b49ead51-240b-4c70-9044-ba266afd0799";

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
		        console.log(data);
		        var releasetime = data.userDityMsg.releasetime;
				var newDate1    = new Date();
				    newDate1.setTime(releasetime);
				var shijian     = document.getElementById("releasetime").innerHTML=newDate1.toLocaleString();
				var releasetime = newDate1.toLocaleString();
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
				var commment    = data.commentMsg.commment;
				var pingjiaList = "";
				var pingjiaAll = "";
				var lunboStr="",lunboArr="",lunborol="",lunborols="";
				console.log(data);
		        
		        //轮播图
		        var result=lunboimg.split(",");
				for(var i=0;i<result.length;i++){
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
		        };
		        //收藏
		        //http://192.168.1.11:8080/salsa/commdity/clickByCollec.do
		        dianzan_num.addEventListener('tap',function(){
		        	console.log('id:'+id+'token:'+token+'ditydemand:'+2);
		        	 $.ajax({
					        	type:"post",
					        	url : apiRoot+"/commdity/clickByCollec.do",
					        	data : {
					        		 	 	   id : id,
					        		        token : token,
					        	       ditydemand : 2
					        		},
					        	dataType : 'json',
					        	success : function(data){
					        		//plus.nativeUI.closeWaiting();
					        		console.log("收藏"+JSON.stringify(data));
					        		if(data.info=="增加评论成功"){
					        			//plus.nativeUI.toast('已提交后台审核');
					        			mui.toast("评论成功，感谢评论！");
					        			//location.reload();
					        		}else{ 
					        			//plus.nativeUI.toast('提交失败');
					        			mui.toast("评论失败");
					        		}
					        	},
					        	error : function(e){
					        		//plus.nativeUI.closeWaiting();
					        		//plus.nativeUI.toast('提交失败');
					        		console.log(JSON.stringify(e));
					        	}
					        });
		        })
		        //回复
		       console.log(commment);	
		        //  var newDate = new Date();
				// newDate.setTime(1501324383000 * 1000);
				// console.log(newDate.toLocaleDateString());
				// console.log(newDate.toJSON());
				// console.log(newDate.toLocaleTimeString());
		        for(var i=0;i<commment.length;i++){
		        	var timestamp = commment[i].commtime;
					var newDate = new Date();
					newDate.setTime(timestamp);
					console.log(commment[i].replyContent.length);

		        	var pingjiaList ="<ul class=\"mui-table-view biankuang\">"+
										"<li class=\"mui-table-view-cell mui-media\">"+
											"<a href=\"javascript:;\">"+
												"<img class=\"mui-media-object mui-pull-left\" src=\""+commment[i].img+"\">"+
													"<div class=\"mui-media-body\">"+
														"<p class=\"yonghu_name\">"+
															"<span>"+commment[i].nickname+"</span>"+
															"<span class=\"mui-pull-right huifu"+commment[i].id+"\" onclick=\"huifu(this,"+commment[i].uid+","+data.userDityMsg.id+","+commment[i].pcommid+")\">回复</span>"+
														"</p>"+
														"<p class=\"mui-ellipsis\">  "+
															"<span class=\"fatie_time\">"+newDate.toLocaleString()+"</span>"+
														"</p>"+
													"</div>"+
												"<p class=\"juli_left\">"+commment[i].commcontent+"</p>"
												for(var j=0;j<commment[i].replyContent.length;j++){
													console.log("帖子id"+data.userDityMsg.id);
													pingjiaList+= "<p class=\"juli_left huida\">"+commment[i].replyContent[j].content+"</p>";
												}
											pingjiaList+="</a>"+
										"</li>"+
									"</ul>";
						pingjiaAll+=pingjiaList;

				};
		        document.getElementById("pingjia_list").innerHTML= pingjiaAll;
		       
		        
				// mui(".pingjia_list").on('tap','.yonghu_name .mui-pull-right',function(){	
				//   	document.getElementsByClassName("tanchuang")[0].style.display = "block";
				// });

				

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
			   				var commcontent = document.getElementById("commcontent").value; 
			   				console.log("回复内容为："+commcontent);
			   				console.log("id为："+data.userDityMsg.id);
			   				console.log(commcontent+token+data.userDityMsg.id)
			   				//清空input框
			   				document.getElementById('commcontent').value="";
			   				//评论接口
			   				 $.ajax({
					        	type:"post",
					        	url : apiRoot+"/posts/postsComment.do",
					        	data : {
					        		  commcontent : commcontent,
					        		        token : token,
					        	          postsid : data.userDityMsg.id
					        		},
					        	dataType : 'json',
					        	success : function(data){
					        		//plus.nativeUI.closeWaiting();
					        		console.log("评论结果"+JSON.stringify(data));
					        		if(data.info=="增加评论成功"){
					        			//plus.nativeUI.toast('已提交后台审核');
					        			mui.toast("评论成功，感谢评论！");
					        			//location.reload();
					        		}else{ 
					        			//plus.nativeUI.toast('提交失败');
					        			mui.toast("评论失败");
					        		}
					        	},
					        	error : function(e){
					        		//plus.nativeUI.closeWaiting();
					        		//plus.nativeUI.toast('提交失败');
					        		console.log(JSON.stringify(e));
					        	}
					        });

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
		console.log(apiRoot+"/posts/postsShare.do?id="+id+"&token="+token);
		xmlhttp.open("GET",apiRoot+"/posts/postsShare.do?id="+id+"&token="+token,true);
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
//回复接口
function huifu(obj,pid,postsid,pcommid){
	document.getElementsByClassName("tanchuang")[0].style.display = "block";
	mui(".mui-popup-buttons").on('tap','.mui-popup-button',function(){
		var index = this.getAttribute("name");
		if (index == 2) {
			var commcontent1 = document.getElementById("commcontent").value;
		//清空input框
		document.getElementById('commcontent').value="";
		console.log(commcontent1+","+postsid+","+token +","+ pid+","+pcommid);
		 $.ajax({
	        	type:"post",
	        	url : apiRoot+"/posts/postsReply.do",
	        	data : {
	        		  commcontent : commcontent1,
	        		        token : token,
	        	          postsid : postsid,
	        	              pid : pid,
	        	          pcommid : pcommid
	        		},
	        	dataType : 'json',
	        	success : function(data){
	        		//plus.nativeUI.closeWaiting();
	        		console.log("回复结果"+JSON.stringify(data));
	        		if(data.info=="回复成功"){
	        			//plus.nativeUI.toast('已提交后台审核');
	        			mui.toast('回复成功');
	        			//location.reload();
	        		}else{ 
	        			//plus.nativeUI.toast('提交失败');
	        			mui.toast("回复失败");
	        		}
	        	},
	        	error : function(e){
	        		//plus.nativeUI.closeWaiting();
	        		//plus.nativeUI.toast('提交失败');
	        		console.log(JSON.stringify(e));
	        	}
	        });
		}else {
			mui.toast('你点了取消按钮');
		};
		document.getElementsByClassName("tanchuang")[0].style.display = "none";
		//document.getElementById("pingjia_list").collapsibleset().trigger("treat");//刷新
	});
	
} 