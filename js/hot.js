//热门推荐------------------------------------------------------
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
       		var informStr="<div class=\"swiper-slide\" style=\"opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;\" onclick=\"shijian(this,"+data[i].dityprice+")\">"+
							"<img src=\""+data[i].dityimg+"\" class=\"main-img\">"+
							"<p class=\"tent\"><span>"+data[i].dityname+"</span><span>￥<i>"+data[i].dityprice+"</i></span></p>"+
						  "</div>";
			informArr+=informStr;
		};
		document.getElementById("hotimg").innerHTML=informArr;
    }
}
//console.log(apiRoot+"/commdity/getMore.do?token="+token);
xmlhttp.open("GET",apiRoot+"/commdity/getMore.do?token="+token,true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send();