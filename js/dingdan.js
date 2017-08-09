	var token = "b49ead51-240b-4c70-9044-ba266afd0799";
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
	       	console.log(s);
	        var data = s.data.addressid;
	        //console.log(xmlhttp.responseText+00000);
	        console.log(data);
	            for(var i=0;i<data.length;i++){ 
	            	//console.log(data[i].statusid);
	            	var dingdan="<ul class=\"mui-table-view\" onclick=\"javascript:window.location.href='dingdan_inform.html?id="+data[i].id+"\">"+
								"<li class=\"mui-table-view-cell mui-media border_right\">"+
									"<a href=\"javascript:;\">"+
										"<img class=\"mui-media-object mui-pull-left\" src=\""+data[i].dityimg+"\">"+
										"<div class=\"mui-media-body\">"+
											"<p class=\"mui-ellipsis\">"+
												"<span class=\"mui-pull-left mingcheng\">"+data[i].dityname+"</span><span class=\"mui-pull-right jiage\">￥"+data[i].dityprice+"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis\">"+
												"<span class=\"mui-pull-right shuliang\">×"+data[i].purchase+"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis all_img\">"+
												"<span>"+
													"<i class=\"mui-icon\"><img style=\"width:18px;\" src=\"../images/baoyou@3x.png\"></i>"
													if(data[i].directmail == 0){
														dingdan+="<em>直邮</em>"
													}else{
														dingdan+="<em>直邮</em>"
													}
												dingdan+="</span>"+
												"<span style=\"text-align: center;\">"+
													"<i class=\"mui-icon\"><img src=\"../images/zhiyou@3x.png\"></i>"
													if(data[i].freeshipping == 1){
														dingdan+="<em>包邮</em>"
													}else{
														dingdan+="<em>不包邮</em>"
													}
												dingdan+="</span>"+
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
												"<span class=\"mui-pull-right heji\">合计：￥<span class=\"red\">"+data[i].totalprice+"</span></span>"+
											"</p>"+
										"</div>"+
									"</a>"+
								"</li>"+
								"<li class=\"mui-table-view-cell mui-media border_none\">"+
									"<p class=\"mui-ellipsis\">"+
										"<span class=\"shenfen\">买手</span>"
										if(xmlhttp){
											var releasetime = data[i].releasetime;
											var newDate    = new Date();
										    newDate.setTime(releasetime);
										   // console.log(newDate.toLocaleString());
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
																	dingdan+="<h4 class=\"oa-contact-name Cshouhuo\" id=\"shouhuo"+data[i].dityid+"\" onclick=\"shouhuo(this,"+data[i].dityid+")\">待收货</h4>"
																}else if(data[i].statusid == 2){
																	dingdan+="<h4 class=\"oa-contact-name Cwancheng\" id=\"wancheng"+data[i].dityid+"\" onclick=\"wancheng(this,"+data[i].dityid+")\">已收货</h4>";
																}else if(data[i].statusid == 3){
																	dingdan+="<h4 class=\"oa-contact-name Cpingjia\" id=\"pingjia"+data[i].dityid+"\" onclick=\"pingjia(this,"+data[i].dityid+")\">待评价</h4>";
																}else if(data[i].statusid == 4){
																	dingdan+="<h4 class=\"oa-contact-name Ctuihuotuikuan\" id=\"tuihuotuikuan"+data[i].dityid+"\" onclick=\"tuihuotuikuan(this,"+data[i].dityid+")\">退货退款</h4>";
																}
															dingdan+="</div>"+
														"</div>"+
													"</div>"+
												"</div>"+
											"<li>"+
										"</ul>";
							dingdanList+=dingdan;
	            };
	            document.getElementById("item1").innerHTML= dingdanList;
	   }
	};
	console.log(apiRoot+"/order/oderAll.do?statusid="+01+"&token="+token);
	xmlhttp.open("GET",apiRoot+"/order/oderAll.do?statusid="+01+"&token="+token,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();


	mui.init({  
		swipeBack:true //启用右滑关闭功能
	});


	 //确认收货
		// document.getElementById("shouhuo").addEventListener('tap', function() {
		// 	document.getElementsByClassName("shouhuo")[0].style.display = "block";
		// });
		function shouhuo(obj,id){
			var shouhuo="<div class=\"mui-popup mui-popup-in\">"+
							"<div class=\"mui-popup-inner\">"+
								"<div class=\"mui-popup-title\">确认收货</div>"+
								"<div class=\"mui-popup-text\">"+
										"您确认已经收到货物了吗？"+
								"</div>"+
							"</div>"+
							"<div class=\"mui-popup-buttons\">"+
								"<span class=\"mui-popup-button\" name=\"1\">"+
								"取消"+
								"</span>"+
								"<span class=\"mui-popup-button mui-popup-button-bold\" name=\"2\">"+
								"确认"+
								"</span>"+
							"</div>"+
						"</div>"+
						"<div class=\"mui-popup-backdrop mui-active\"></div>";
				document.getElementsByClassName("shouhuo")[0].innerHTML= shouhuo;
				document.getElementsByClassName("shouhuo")[0].style.display = "block";
		}
		mui(".mui-popup-buttons").on('tap','.mui-popup-button',function(){
			var index = this.getAttribute("name");
			if (index == 2) {
				mui.toast('收货成功');
			}else if(index == 1) {
				mui.toast('你取消了确认收货');
			};
			document.getElementsByClassName("shouhuo")[0].style.display = "none";
		});
		//已完成
		function wancheng(obj,id){
			console.log("此订单已完成"+id);
		};
		//申请退款
		function tuihuotuikuan(obj,id){

			var tuikuan="<div class=\"mui-popup mui-popup-in\">"+
						"<div class=\"mui-popup-inner\">"+
							"<div class=\"mui-popup-title\">退货退款"+
								"<span id=\"tuikuanbutton\" class=\"mui-icon mui-icon-closeempty mui-pull-right\" href=\"javascript:;\" onclick=\"close()\"></span>"+
							"</div>"+
							"<div class=\"mui-popup-text\" style=\"padding: 0;\">"+
							"</div>"+
							"<ul class=\"mui-table-view\">"+
								"<li class=\"mui-table-view-cell mui-media\">"+
									"<a href=\"javascript:;\" class=\"\">"+
										"<img class=\"mui-media-object mui-pull-left\" src=\"http://www.jq22.com/demo/jQueryWaterfallFlow20160830/img/02.jpg\">"+
										"<div class=\"mui-media-body\">"+
											"<p class=\"mui-ellipsis all_img\">"+
												"<span id=\"\">"+
													"<i class=\"mui-icon\"><img src=\"../images/pinpai@3x.png\"></i>"+
													"<em>商品</em>"+
												"</span>"+
												"<span id=\"\">"+
													"<i class=\"mui-icon\"><img src=\"../images/yanse@3x.png\"></i>"+
													"<em>颜色</em>"+
												"</span>"+
												"<span id=\"\">"+
													"<i class=\"mui-icon\"><img src=\"../images/ccun@3x.png\"></i>"+
													"<em>尺寸</em>"+
												"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis\" style=\"text-align: left\">￥<span class=\"red\" href=\"javascript:;\">222</span></p>"+
										"</div>"+
									"</a>"+
								"</li>"+
							"</ul>"+
							"<form class=\"mui-input-group\">"+
								"<div class=\"mui-input-row\">"+
									"<label>退款原因</label>"+
									"<p class=\"tuikuanyuanyin\">"+
										"<span>"+
											"<select name=\"\" id=\"\">"+
												"<option value=\"\">拍错了、多拍，不想要了</option>"+
												"<option value=\"\">信息填写错误</option>"+
												"<option value=\"\">缺货</option>"+
											"</select>"+
										"</span>"+
										"<span class=\"mui-icon mui-icon-arrowdown mui-pull-right\"></span>"+
									"</p>"+
								"</div>"+
								"<div class=\"mui-input-row\">"+
									"<label>退款金额</label>"+
									"<p class=\"tuikuanjine\">￥<span class=\"red\">222</span></p>"+
								"</div>"+
							"</form>"+
							"<div class=\"mui-content-padded shuoming\">"+
								"<div class=\"mui-inline\">退款说明</div>"+
							"</div>"+
							"<div class=\"row mui-input-row\" style=\"padding: 0 11px;background: #fff;\">"+
								"<textarea id=\"question\" class=\"mui-input-clear question\" placeholder=\"请详细描述你的问题和意见...\"></textarea>"+
							"</div>"+
						"</div>"+
						"<div class=\"mui-popup-buttons\">"+
							"<span class=\"mui-popup-button mui-popup-button-bold\">"+
								"<button id=\"tuikuan\" onclick=\"tuikuan()\">申请退款</button>"+
							"</span>"+
						"</div>"+
					"</div>"+
					"<div class=\"mui-popup-backdrop mui-active\"></div>";
					document.getElementsByClassName("tuikuan")[0].innerHTML= tuikuan;
					document.getElementsByClassName("tuikuan")[0].style.display = "block";
		};

		//评价
		function pingjia(obj,id){
			var pingjia="<div class=\"mui-popup mui-popup-in\">"+
							"<div class=\"mui-popup-inner\">"+
								"<div class=\"mui-popup-title\">"+
									"评价订单<a id=\"pingjiabutton\" href=\"javascript:;\" class=\"mui-icon mui-icon-closeempty mui-pull-right\" onclick=\"close()\"></a>"+
								"</div>"+
							"<div class=\"mui-popup-text\" style=\"padding: 0;\">"+
							"</div>"+
							"<ul class=\"mui-table-view\">"+
								"<li class=\"mui-table-view-cell mui-media\">"+
									"<a href=\"javascript:;\" class=\"\">"+
										"<img class=\"mui-media-object mui-pull-left\" src=\"http://www.jq22.com/demo/jQueryWaterfallFlow20160830/img/02.jpg\">"+
										"<div class=\"mui-media-body\">"+
											"<p class=\"mui-ellipsis all_img\">"+
												"<span id=\"\">"+
													"<i class=\"mui-icon\"><img src=\"../images/pinpai@3x.png\"></i>"+
													"<em>商品</em>"+
												"</span>"+
												"<span id=\"\">"+
													"<i class=\"mui-icon\"><img src=\"../images/yanse@3x.png\"></i>"+
													"<em>颜色</em>"+
												"</span>"+
												"<span id=\"\">"+
													"<i class=\"mui-icon\"><img src=\"../images/ccun@3x.png\"></i>"+
													"<em>尺寸</em>"+
												"</span>"+
											"</p>"+
											"<p class=\"mui-ellipsis\" style=\"text-align: left\">￥<span class=\"red\">222</span></p>"+
										"</div>"+
									"</a>"+
								"</li>"+
							"</ul>"+
							"<form class=\"mui-input-group\">"+
								"<div class=\"mui-input-row\">"+
									"<label>给卖家打分</label>"+
									"<p class=\"tuikuanjine\">"+
										"<div class=\"icons mui-inline\" style=\"margin-left: 6px;\">"+
											"<i data-index=\"1\" class=\"mui-icon mui-icon-star\"></i>"+
											"<i data-index=\"2\" class=\"mui-icon mui-icon-star\"></i>"+
											"<i data-index=\"3\" class=\"mui-icon mui-icon-star\"></i>"+
											"<i data-index=\"4\" class=\"mui-icon mui-icon-star\"></i>"+
											"<i data-index=\"5\" class=\"mui-icon mui-icon-star\"></i>"+
										"</div>"+
									"</p>"+
								"</div>"+
							"</form>"+
							"<div class=\"mui-content-padded shuoming\">"+
								"<div class=\"mui-inline\">评价</div>"+
								"</div>"+
								"<div class=\"row mui-input-row\" style=\"padding: 0 11px;background: #fff;\">"+
									"<textarea id=\"question\" class=\"mui-input-clear question\" placeholder=\"请输入评价内容...\"></textarea>"+
								"</div>"+
							"</div>"+
							"<div class=\"mui-popup-buttons\">"+
								"<span class=\"mui-popup-button\" value=\"1\">下次再说</span>"+
								"<span class=\"mui-popup-button mui-popup-button-bold\" value=\"2\">确定评价</span>"+
							"</div>"+
						"</div>"+
					"<div class=\"mui-popup-backdrop mui-active\"></div>";
					document.getElementsByClassName("pingjia")[0].innerHTML= pingjia;
					document.getElementsByClassName("pingjia")[0].style.display = "block";
		}

		

		// document.getElementById("tuihuotuikuan").addEventListener('tap', function() {
		// 	  document.getElementsByClassName("tuikuan")[0].style.display = "block";
		// });
		
		document.getElementById("tuikuanbutton").addEventListener('tap', function() {
			alert(2);
			document.getElementsByClassName("tuikuan")[0].style.display = "none";
		});
		document.getElementById("tuikuan").addEventListener('tap', function() {
			mui.toast('申请退款成功');
			document.getElementsByClassName("tuikuan")[0].style.display = "none";
		});
		 //评价
		// document.getElementById("pingjia").addEventListener('tap', function() {
		// 	document.getElementsByClassName("pingjia")[0].style.display = "block";
		// });
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
//关闭退货退款弹窗
		function tuikuan(){
			alert(1);
			document.getElementsByClassName("tuikuan")[0].style.display = "none";
		}