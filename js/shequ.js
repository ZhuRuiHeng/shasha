
//社区------------------------------------------------------
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
        //console.log(data);
            for(var i=0;i<data.length;i++){ 
                var chtml = '<li>'
                                +'<a href="fenxiang.html?id='+data[i].id+'">'
                                    +'<p class="product_picture"><img src="'+data[i].imgs+'"></p>' 
                                    +'<p class="product_np"><span>'+data[i].titles+'</span>'
                                    if(data[i].state == 1){
                                        chtml+='<span>找货成功订单</span></p>';
                                    } else{
                                        chtml+='<span></span></p>';
                                    }
                                    chtml+='<p class="product_caozuo">'
                                        +'<span class="guanzhu"><img src="../images/xin.png">'+data[i].PostsNumber+'</span><span class="pingjia"><img src="../images/pinglun.png">￥'+data[i].CommenNumber+'</span>'
                                    +'</p>'
                                +'</a>'
                            +'</li>';
             
                if($('.BoxLeft').height() < $('.BoxRight').height()){ 
                    $('.BoxLeft').append(chtml); 
                }else{ 
                    $('.BoxRight').append(chtml); 
                } 
            };
    }
};
//console.log(apiRoot+"/posts/getpostsAll.do?token=b49ead51-240b-4c70-9044-ba266afd0799&postsid=1");
//?id="+id
xmlhttp.open("GET",apiRoot+"/posts/getpostsAll.do?token=b49ead51-240b-4c70-9044-ba266afd0799&postsid=1",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send();
