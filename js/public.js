var webRoot = "http://api.gdswww.com";
var apiRoot = webRoot+"/salsa";
var token = "7fc2ca72-7a94-4154-baf1-223741660d74";

//页面跳转
function openNewPage(id){
	mui.openWindow({
		id: id,
		url: id,
		show:{
//			aniShow: 'fade-in-left',
			duration: '300'			
		},
		waiting:{
			autoShow:false
		}
	});
}



