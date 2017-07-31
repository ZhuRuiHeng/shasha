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
        var data = s.data.shopUser;
        console.log(s);
		for(var i=0;i<data.length;i++){
    		//console.log(data[i].dityimg)
    		var num=i+1;
       		var informStr="<div class=\"swiper-slide\" style=\"opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;\">"+
							"<img src=\""+data[i].dityimg+"\" class=\"main-img\">"+
							"<p class=\"tent\"><span>"+data[i].dityname+"</span><span>￥<i>"+data[i].dityprice+"</i></span></p>"+
						  "</div>";
			informArr+=informStr;
		};
		document.getElementById("hotimg").innerHTML=informArr;
    }
}
xmlhttp.open("GET",apiRoot+"/commdity/CommByIntereid.do?token="+token,true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send();