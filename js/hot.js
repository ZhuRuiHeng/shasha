//热门推荐------------------------------------------------------
plus.nativeUI.showWaiting('请稍等...');
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
        
        var informArr="";
        var s = JSON.parse(xmlhttp.responseText);
        var data = s.data;
        console.log(data);
		for(var i=0;i<data.length;i++){
    		//console.log(data[i].dityimg)
    		var num=i+1;
       		var informStr="<div class=\"swiper-slide\" style=\"opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;\" onclick=\"shijian(this,"+data[i].id+")\">"+
							"<img src=\""+data[i].dityimg+"\" class=\"main-img\">"+
							"<p class=\"tent\"><span>"+data[i].dityname+"</span><span>￥<i>"+data[i].dityprice+"</i></span></p>"+
						  "</div>";
			informArr+=informStr;
		};
        plus.nativeUI.closeWaiting();
		document.getElementById("hotimg").innerHTML=informArr;
    }
}
//console.log(apiRoot+"/commdity/getMore.do?token="+token);
xmlhttp.open("GET",apiRoot+"/commdity/getMore.do?token="+token,true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send();

//交互js
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.className = 'new';
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}
function shijian(obj,id) {
    setupWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('getHotImg', {'blogURL': id}, function(response) {

        })
    })
}