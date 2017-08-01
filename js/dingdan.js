	
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
	        var dingdan   = "";
	        var dingdanList = "";
	       	var s = JSON.parse(xmlhttp.responseText);
	        var data = s.data;
	        console.log(data);
	            for(var i=0;i<data.length;i++){ 
	            	console.log(data[i].statusid);
	            	var dingdan="<ul class=\"mui-table-view\" onclick=\"javascript:window.location.href='dingdan_inform.html?id='"+data[i].id+"'\">"+
								"<li class=\"mui-table-view-cell mui-media border_right\">"+
									"<a href=\"javascript:;\">"+
										"<img class=\"mui-media-object mui-pull-left\" src=\""+data[i].dityimg+"\">"+
										"<div class=\"mui-media-body\">"+
											"<p class=\"mui-ellipsis\">"+
												"<span class=\"mui-pull-left mingcheng\">"+data[i].dityname+"</span><span class=\"mui-pull-right jiage\">￥"+data[i].dityprice+"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis\">"+
												"<span class=\"mui-pull-right shuliang\">×"+data[i].transaumber+"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis all_img\">"+
												"<span>"+
													"<i class=\"mui-icon\"><img style=\"width:18px;\" src=\"../images/baoyou@3x.png\"></i>"+
													"<em>"+data[i].freight+"</em>"+
												"</span>"+
												"<span style=\"text-align: center;\">"+
													"<i class=\"mui-icon\"><img src=\"../images/zhiyou@3x.png\"></i>"+
													"<em>"+data[i].freight+"</em>"+
												"</span>"+
												"<span style=\"text-align: right;\">"+
													"<i class=\"mui-icon\"><img style=\"width:11px;\" src=\"../images/dingwei@3x.png\"></i>"+
													"<em>"+data[i].position+"</em>"+
												"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis all_img\">"+
												"<span>"+
													"<i class=\"mui-icon\"><img src=\"../images/ttiaoma@3x.png\"></i>"+
													"<em>"+data[i].singlenum+"</em>"+
												"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis\">"+
												"<span class=\"mui-pull-right heji\">合计：￥<span class=\"red\">"+data[i].total+"</span></span>"+
											"</p>"+
										"</div>"+
									"</a>"+
								"</li>"+
								"<li class=\"mui-table-view-cell mui-media border_none\">"+
									"<p class=\"mui-ellipsis\">"+
										"<span class=\"shenfen\">买手</span>"
										if(xmlhttp){
											var dealtime = data[i].dealtime;
											var newDate    = new Date();
										    newDate.setTime(dealtime);
										    dingdan+="<span class=\"mui-pull-right shijain\">"+newDate.toLocaleString()+"</span>"
										}
									dingdan+="</p>"+
												"<div class=\"mui-slider-cell\">"+
													"<div class=\"oa-contact-cell mui-table mui-navigate-right\">"+
														"<div class=\"oa-contact-avatar mui-table-cell cell-one dingdan_user\">"+
															"<img src=\""+data[i].img+"\">"+
															"<p class=\"dingwei_name\">"+data[i].nickname+"</p>"+
														"</div>"+
														"<div class=\"oa-contact-content mui-table-cell mui-pull-right\">"+
															"<p class=\"oa-contact-email mui-h6\">成交时间</p>"+
															"<div class=\"mui-clearfix\">"
																if(data[i].statusid == 1){
																	dingdan+="<h4 class=\"oa-contact-name\" id=\"shouhuo\">待收货</h4>"
																}else if(data[i].statusid == 2){
																	dingdan+="<h4 class=\"oa-contact-name\" id=\"\">已收货</h4>";
																}else if(data[i].statusid == 3){
																	dingdan+="<h4 class=\"oa-contact-name\" id=\"pingjia\">待评价</h4>";
																}else if(data[i].statusid == 4){
																	dingdan+="<h4 class=\"oa-contact-name\" id=\"tuihuotuikuan\">退货退款</h4>";
																}
															dingdan+="</div>"+
														"</div>"+
													"</div>"+
												"</div>"+
											"<li>"+
										"</ul>";
							dingdanList+=dingdan;
	            };
	            //document.getElementById("item1").innerHTML= dingdanList;
	    }
	};
	//console.log(apiRoot+"/order/oderAll.do");
	xmlhttp.open("GET",apiRoot+"/order/oderAll.do?token="+token,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();








		mui.init({  
			swipeBack:true //启用右滑关闭功能
		});
		//确认收货
		document.getElementById("shouhuo").addEventListener('tap', function() {
			document.getElementsByClassName("shouhuo")[0].style.display = "block";
		});
		mui(".mui-popup-buttons").on('tap','.mui-popup-button',function(){
			var index = this.getAttribute("name");
			if (index == 2) {
				mui.toast('收货成功');
			}else if(index == 1) {
				mui.toast('你取消了确认收货');
			};
			document.getElementsByClassName("shouhuo")[0].style.display = "none";
		});
		//申请退款
		document.getElementById("tuihuotuikuan").addEventListener('tap', function() {
			document.getElementsByClassName("tuikuan")[0].style.display = "block";
		});
		document.getElementById("tuikuanbutton").addEventListener('tap', function() {
			document.getElementsByClassName("tuikuan")[0].style.display = "none";
		});
		document.getElementById("tuikuan").addEventListener('tap', function() {
			mui.toast('申请退款成功');
			document.getElementsByClassName("tuikuan")[0].style.display = "none";
		});
		 //评价
		document.getElementById("pingjia").addEventListener('tap', function() {
			document.getElementsByClassName("pingjia")[0].style.display = "block";
		});
		document.getElementById("pingjiabutton").addEventListener('tap', function() {
			document.getElementsByClassName("pingjia")[0].style.display = "none";
		});
		mui(".mui-popup-buttons").on('tap','.mui-popup-button',function(){
			var index = this.getAttribute("value");
			if (index == 2) {
				mui.toast('评价成功');
			}else if(index == 1) {
				mui.toast('你取消了评价');
			};
			document.getElementsByClassName("pingjia")[0].style.display = "none";
		});
		mui('.icons').on('tap','i',function(){
		  	var index = parseInt(this.getAttribute("data-index"));
		  	var parent = this.parentNode;
		  	var children = parent.children;
		  	if(this.classList.contains("mui-icon-star")){
		  		for(var i=0;i<index;i++){
	  				children[i].classList.remove('mui-icon-star');
	  				children[i].classList.add('mui-icon-star-filled');
		  		}
		  	}else{
		  		for (var i = index; i < 5; i++) {
		  			children[i].classList.add('mui-icon-star')
		  			children[i].classList.remove('mui-icon-star-filled')
		  		}
		  	}
		  	starIndex = index;
	  	});
		  	
	