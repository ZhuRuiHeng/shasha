	
	var xmlhttp;
	var dingdan
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
	        var informArr="";
	        var s = JSON.parse(xmlhttp.responseText);
	        var data = s.data;
	        console.log(data);
	            for(var i=0;i<data.length;i++){ 
	                var dingdan="<ul class=\"mui-table-view\">"+
								"<li class=\"mui-table-view-cell mui-media border_right\">"+
									"<a href=\"javascript:;\">"+
										"<img class=\"mui-media-object mui-pull-left\" src=\"http://www.jq22.com/demo/jQueryWaterfallFlow20160830/img/02.jpg\">"+
										"<div class=\"mui-media-body\">"+
											"<p class=\"mui-ellipsis\">"+
												"<span class=\"mui-pull-left mingcheng\">限量</span><span class=\"mui-pull-right jiage\">￥222</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis\">"+
												"<span class=\"mui-pull-right shuliang\">×2</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis all_img\">"+
												"<span>"+
													"<i class=\"mui-icon\"><img style=\"width:18px;\" src=\"../images/baoyou@3x.png\"></i>"+
													"<em>包邮</em>"+
												"</span>"+
												"<span style=\"text-align: center;\">"+
													"<i class=\"mui-icon\"><img src=\"../images/zhiyou@3x.png\"></i>"+
													"<em>直邮</em>"+
												"</span>"+
												"<span style=\"text-align: right;\">"+
													"<i class=\"mui-icon\"><img style=\"width:11px;\" src=\"../images/dingwei@3x.png\"></i>"+
													"<em>地址</em>"+
												"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis all_img\">"+
												"<span>"+
													"<i class=\"mui-icon\"><img src=\"../images/ttiaoma@3x.png\"></i>"+
													"<em>11111111111</em>"+
												"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis\">"+
												"<span class=\"mui-pull-right heji\">合计：￥<span class=\"red\">222</span></span>"+
											"</p>"+
										"</div>"+
									"</a>"+
								"</li>"+
								"<li class=\"mui-table-view-cell mui-media border_none\">"+
									"<p class=\"mui-ellipsis\">"+
										"<span class=\"shenfen\">买手</span>"+
										"<span class=\"mui-pull-right shijain\">2017-2-2</span>"+
									"</p>"+
									"<div class=\"mui-slider-cell\">"+
										"<div class=\"oa-contact-cell mui-table mui-navigate-right\">"+
											"<div class=\"oa-contact-avatar mui-table-cell cell-one dingdan_user\">"+
												"<img src=\"https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/dmas/pic/item/18899e510fb30f241f91f995c095d143ad4b0318.jpg\">"+
												"<p class=\"dingwei_name\">张三</p>"+
											"</div>"+
											"<div class=\"oa-contact-content mui-table-cell mui-pull-right\">"+
												"<p class=\"oa-contact-email mui-h6\">成交时间</p>"+
												"<div class=\"mui-clearfix\">"+
													"<h4 class=\"oa-contact-name\" id=\"tuihuotuikuan\">退货退款</h4>"+
												"</div>"+
											"</div>"+
										"</div>"+
									"</div>"+
								"<li>"+
							"</ul>";
	            };
	            document.getElementById("item1").innerHTML(item1);
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
		  	
	