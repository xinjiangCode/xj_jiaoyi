
//物流跳交易

// var url = "http://127.0.0.1/e/action/ShowInfo.php?classid=9&id=2";
var url = window.location.href;
/**
 * @desc 获取url参数
 * @param {String} _url  url路径
 */
function parse_url(_url){
    var pattern = /(\w+)=(\w+)/ig;
    var parames = {};
    url.replace(pattern, function(a, b, c){
    parames[b] = c;
    });
    return parames;
}
var parames = parse_url(url);

// console.log(parames.classid);

if (parames.type || sessionStorage.getItem('cys_type') == '2') {

	if (parames.type == 2 || sessionStorage.getItem('cys_type') == '2') { //承运商

		if (parames.token) {
			localStorage.setItem('token', parames.token);
			location.replace(location.href.replace(location.search, ''));

		}


		// window.location.reload();

		sessionStorage.setItem('cys_type', '2');


		var adct = document.getElementsByTagName('title')[0].getAttribute('adct');

		document.writeln("<link href=\"../img/icon_logo.jpg\" rel=\"SHORTCUT ICON\">");
		document.writeln("<div class=\"maxWidth headBox\">");
		document.writeln("<div class=\"mianCont\">");
		document.writeln("<div class=\"Lf\">");
		document.writeln("<span class=\"collect\"><a href=\"javascript:void(0);\" onclick=\"AddFavorite('新疆化学品经营服务平台',location.href)\">收藏本站</a></span>");
		document.writeln("<span id='hello'>你好，游客</span>");
		document.writeln("<span id='logout'>退出</span>");
		document.writeln("<span id='denglu'>登录</span>");
		document.writeln("</div>");
		document.writeln(" <div class=\"Rt\">");
		document.writeln("<div>");


		// if(adct == '首页' ){
		// 	document.writeln('<a onclick="sessionStorage.setItem(\'cf_showPage\',\'0\',\'hzf_showPage\',\'\');sessionStorage.setItem(\'hzf_showPage\',\'\')" href="account/account.html">');
		// }else{
		// 	document.writeln('<a onclick="sessionStorage.setItem(\'cf_showPage\',\'0\',\'hzf_showPage\',\'\');sessionStorage.setItem(\'hzf_showPage\',\'\')" href="../account/account.html">');
		// }

		if(adct == '首页' ){
			document.writeln('<a class="user_center" href="##">');
		}else{
			document.writeln('<a class="user_center" href="##">');
		}

		document.writeln("<div class=\"icon userIcon\"></div>");
		document.writeln("用户中心");
		document.writeln("</a>");
		document.writeln("</div>");
		document.writeln("<div class=\"fontI\">|</div>");
		document.writeln("<div style='position:relative;' id='objTypeHover'>");
		document.writeln("<a href=\"##\">");
		document.writeln("<div class=\"icon objIcon\"></div>");
		document.writeln("产品分类");

		if(adct == '首页' ){
			document.writeln("</a><div class='headObjType'><a href='##'>日用化学品 </a>");
			document.writeln("<a href='##'>有机化学品 </a>");
			document.writeln("<a href='##'>无机化学品 </a>");
			document.writeln("<a href='##'>农药化学品 </a>");
			document.writeln("<a href='##'>食品及饲料添加剂 </a>");
			document.writeln("<a href='##'>催化剂及化工助剂 </a>");
			document.writeln("<a href='##'>燃料及颜料 </a></div>");
		}else{
			document.writeln("</a><div class='headObjType'><a href='##'>日用化学品 </a>");
			document.writeln("<a href='##'>有机化学品 </a>");
			document.writeln("<a href='##'>无机化学品 </a>");
			document.writeln("<a href='##'>农药化学品 </a>");
			document.writeln("<a href='##'>食品及饲料添加剂 </a>");
			document.writeln("<a href='##'>催化剂及化工助剂 </a>");
			document.writeln("<a href='##'>燃料及颜料 </a></div>");
		}

			
		document.writeln("</div>");
		document.writeln("<div class=\"fontI\">|</div>");
		document.writeln("<div>");

		if(adct == '首页' ){
			document.writeln('<a href="##">');
		}else{
			document.writeln('<a href="##">');
		}

		document.writeln("<div class=\"icon webIcon\"></div>");
		document.writeln("网站导航");
		document.writeln("</a>");
		document.writeln("</div>");
		document.writeln("<div class=\"fontI\">|</div>");
		document.writeln("<div>");

		if(adct == '首页' ){
			document.writeln('<a href="##">');
		}else{
			document.writeln('<a href="##">');
		}

		document.writeln("<div class=\"icon ssIcon\"></div>");
		document.writeln("供应商入驻");
		document.writeln(" </a>");
		document.writeln("</div>");
		document.writeln("</div>");
		document.writeln("</div>");
		document.writeln("</div>");
		document.writeln("<div class=\"mianCont_box\">");
		document.writeln("<div class=\"mianCont\">");
		if(adct == '首页' ){
			document.writeln("<a href=\"##\" class=\"logo\"></a>");
		}else{
			document.writeln("<a href=\"##\" class=\"logo\"></a>");
		}
		//document.writeln("<a href=\"../index.html\" class=\"logo\"></a>");
		document.writeln(" <div class=\"seachBox\">");
		document.writeln("<div class=\"schType\">");
		document.writeln("<span class=\"actSchType\">产&nbsp;&nbsp;品</span><span>供应商</span>");
		document.writeln("</div>");
		document.writeln("<div class=\"seachDiv\">");
		document.writeln("<input type=\"text\" id='seachIpt' placeholder=\"可输入CAS号、化合物、分子式等条件进行搜索\" />");


		document.writeln("<button>搜&nbsp;&nbsp;索</button>");
		document.writeln(" </div>");
		document.writeln("<div class=\"hotSch\">");
		document.writeln("热门搜索：");
		document.writeln("<span class=\"hotSch_span\">");
		
		document.writeln("<span><a href='##'></a></span>");
		document.writeln("<span><a href='##'></a></span>");
		document.writeln("<span><a href='##'></a></span>");
		document.writeln("<span><a href='##'></a></span>");
		document.writeln("<span><a href='##'></a></span>");
		document.writeln("<span><a href='##'></a></span>");
		document.writeln("<span><a href='##'></a></span>");
		
		document.writeln("</span>");
		document.writeln("</div>");
		document.writeln("</div>");
		document.writeln("<div class=\"phoneNum\"/></div>");
		document.writeln("</div>");
		document.writeln("</div><div class='seachListDp'></div>");
		var headLink = '<div class="maxWidth tabLinkMaxBox"><div class="mianCont tabLink">\
							<div>\
								<span>全部商品目录</span>\
								<div class="leftTabBox  menu">\
								</div>\
							</div>';

			headLink +=	'<a href="##" class="actTabLink"><span>首页</span></a>\
				<a href="##"><span>现货商城</span></a>\
				<a href="##"><span>试剂商城</span></a>\
				<a href="##"><span>免费找货</span></a>\
				<a href="##"><span>金融服务</span></a>\
				<a target="_blank" href="'+wuliuIP+'" class="wuliu"><span>物流服务</span></a>\
				<a href="##"><span>抢购</span></a>\
				<a href="##"><span>抢货</span></a>\
				<a href="##"><span>行业资讯</span></a>\
				<a href="../memberOfTheMall/memberOfTheMall.html" class="notPd"><span>会员商城</span></a>\
			</div></div>';

		document.writeln(headLink);

		tokenFun();

		// var headerip = 'http://api.xjv56.com/service/';
		// var headerip = 'http://api.test.xjv56.com/service/';
		var headerip = 'http://192.168.1.80:7777/service/';
		// var headerip = 'http://192.168.1.166:7777/service/';
		// var headerip = 'http://192.168.1.34:7777/service/';
		// var headerip = 'http://192.168.1.105:7777/service/';


		window.onload = function(){
			  
		       // hotSch_span
		       $.ajax({ 
			      	type:"get",
			      	url:headerip+"productApi/selectTopSearch",//v1.0
			      	headers: {
			      		token: token
			      	},
			      	cache:false,
			      	dataType: "json",
			      	data: {
			      		index: 5
			      	},
			      	success: function(json){
				        console.log(json);
				        if (json.code == 1) {
				        	// $('.hotSch_span').
				        	var str = '';
				        	for (var i = 0; i < json.data.length; i++) {
				        		if (adct == '首页') {
				        			$('.hotSch_span').addClass('shouye_flag');
				        		} else {
				        			$('.hotSch_span').addClass('feishouye_flag');
				        		// 	str += '<span><a href="../search/productNameSearch_precise.html" data-searchId="'+json.data[i].id+'">'+json.data[i].names+'</a></span>';
				        		}

				        		str += '<span><a href="##">'+json.data[i].names+'</a></span>';

				        		
				        	}
				        	$('.hotSch_span').html(str);
				        }
				    },
				    error:function(xhr,statues,error){
				    	      
				    }
			  });


				var url = window.location.href;
				if (url.indexOf('result') != -1) {  //供应商搜索页面，供应商加样式
					$('.actSchType').removeClass('actSchType');
					$('.schType span').eq(1).addClass('actSchType');
					$('#seachIpt').val('');
					$('#seachIpt').prop('placeholder','输入供应商名称');
				}

			   $(document).on('click','.schType>span',function(){
					$('.actSchType').removeClass('actSchType');
					$(this).addClass('actSchType');
					$('#seachIpt').val('');
					if($.trim($('.actSchType').text()) == '供应商'){
						$('#seachIpt').prop('placeholder','输入供应商名称');
						$('.seachListDp').html('').hide();
					}else{
						$('#seachIpt').prop('placeholder','可输入CAS号、化合物、分子式、品牌、货号等条件进行搜索');
					}
				});
				
			  var tokeni = 0	;	
			  var timeToken = setInterval(function(){
			  	if(!token){
			  		tokeni++;
			  		if(tokeni == 12){
			  			clearInterval(timeToken);
			  		}
			  	}else{
			  		clearInterval(timeToken);
			  		$.ajax({ 
				      type:"post",
				      url:headerip+"user/getUserInfoByToken",//v1.0
				      cache:false,
				      dataType: "json",
				      async:false,
					  headers: {
					  	token: token
					  },
				      success: function(json){
				        console.log(json);
				        	if(json.code == '1'){
				        		$('#hello').html('你好，'+json.data.loginName); 
				        		$('.userBox>p').html('欢迎，'+json.data.loginName+'登录');
				        		if (json.logo) {
				        			$('.userBox .cpImgLogo').css({
					        			'background': 'url("'+json.logo+'") no-repeat center center',
					        			
					        		});
				        		} else {
				        			$('.userBox .cpImgLogo').css({
					        			'background': 'url("")'
					        		});
				        		}
				        		
					        if(adct == '首页' ){
					        		$('.hsUser').show();
					        		$('.ntUser').hide();
					        }
				        	}
				      },
				      error:function(xhr,statues,error){
				          
				      }
				  });
			  	}
			  },1000);
		  
			  
			  if (window.localStorage.getItem('data-logout') == 'true') {
			  	$('#logout').css('display', 'none');
			  } else {
			  	$('#logout').css('display', 'inline-block');
			  }



			  if (window.localStorage.getItem('isOld') == 1 || window.localStorage.getItem('isOld') == 0) { //未登录
			  	$('#logout').css('display', 'none');
			  	if (adct == 'login') {
			  		$('#denglu').css('display', 'none');
			  	} else {
			  		$('#denglu').css('display', 'inline-block');
			  	}
			  	
			  } else {
			  	
			  	$('#logout').css('display', 'inline-block');
			  	$('#denglu').css('display', 'none');
			  }

				
			  $(document).on('click', '#denglu', function() {
			  		if (adct == '首页') {
			  			location.href="./login/login.html";
			  		} else {
			  			location.href="../login/login.html";
			  		}
			  });


			  $(document).on('click', '#logout', function() {

			  	$.ajax({
			  		type:"get",
				    url:headerip+"user/logoutByToken",//v1.0
				    cache:false,
				    dataType: "json",
					headers: {
					  	token: token
					},
				    success: function(data){
				    	console.log(data);

				    	// if (data.code == 1) {
				    		window.localStorage.removeItem('token');
				    		console.log(window.localStorage.getItem('isOld'));
				    		// window.localStorage.setItem('data-logout', 'true');
							$('#logout').hide();
						  	if(adct == '首页' ){
								location.href = 'login/login.html';
							}else{
								location.href = '../login/login.html';
							}
				    	// }

				    },
				    error: function (err) {
				    	console.log(err);
				    }
			  	});

			  	
			  });


		}

	} else {
		sessionStorage.setItem('cys_type', '');
		if (parames.token) {
			localStorage.setItem('token', parames.token);
			location.replace(location.href.replace(location.search, ''));
		}
		// window.location.reload();
		zheng();
	}
} else {


	sessionStorage.setItem('cys_type', '');

	if (parames.token) {
		localStorage.setItem('token', parames.token);
		location.replace(location.href.replace(location.search, ''));
	}

	// window.location.reload();
	zheng();

}

// function find(str,cha,num){
// 	var x=str.indexOf(cha);
// 	for(var i=0;i<num;i++){
// 	    x=str.indexOf(cha,x+1);
// 	}
// 	return x;
// }

function tokenFun() {
	// 公共头
	var href = location.href; 

	if (href.substring('26') == '' || href.indexOf('index.html') != -1 || href.indexOf('freeSearch') != -1 || href.indexOf('buying') != -1 || href.indexOf('flashSale') != -1 || href.indexOf('industryInformation') != -1 || href.indexOf('memberOfTheMall') != -1 || href.indexOf('reagentMall') != -1 || href.indexOf('spotGoods') != -1 || href.indexOf('memberOfTheMall') != -1 || href.indexOf('obj') != -1) {
		var token1 = localStorage.getItem('token');

		// var wuliuIP = 'http://192.168.1.159:8080/allWuliu/';
		// var wuliuIP = 'http://127.0.0.1:8020/allWuliu/index.html?token='+token1;
		var wuliuIP = 'http://web.test.hdlsuper.com/?token='+token1;
		// var wuliuIP = 'http://www.test.hdlsuper.com/?token='+token1;
		// var wuliuIP = 'http://web.hdlsuper.com/?token='+token1;
		// var wuliuIP = 'http://www.hdlsuper.com/?token='+token1;

	}
}


function zheng() {
	// 公共头
	var href = location.href; 
	if (href.substring('26') == '' || href.indexOf('index.html') != -1 || href.indexOf('freeSearch') != -1 || href.indexOf('buying') != -1 || href.indexOf('flashSale') != -1 || href.indexOf('industryInformation') != -1 || href.indexOf('memberOfTheMall') != -1 || href.indexOf('reagentMall') != -1 || href.indexOf('spotGoods') != -1 || href.indexOf('memberOfTheMall') != -1 || href.indexOf('obj') != -1) {
		var token1 = localStorage.getItem('token');

		// var wuliuIP = 'http://192.168.1.159:8080/allWuliu/';
		// var wuliuIP = 'http://127.0.0.1:8020/allWuliu/index.html?token='+token1;
		var wuliuIP = 'http://web.test.hdlsuper.com/?token='+token1;
		// var wuliuIP = 'http://www.test.hdlsuper.com/?token='+token1;
		// var wuliuIP = 'http://web.hdlsuper.com/?token='+token1;
		// var wuliuIP = 'http://www.hdlsuper.com/?token='+token1;

	}



	var adct = document.getElementsByTagName('title')[0].getAttribute('adct');

	document.writeln("<link href=\"../img/icon_logo.jpg\" rel=\"SHORTCUT ICON\">");
	document.writeln("<div class=\"maxWidth headBox\">");
	document.writeln("<div class=\"mianCont\">");
	document.writeln("<div class=\"Lf\">");
	document.writeln("<span class=\"collect\"><a href=\"javascript:void(0);\" onclick=\"AddFavorite('新疆化学品经营服务平台',location.href)\">收藏本站</a></span>");
	document.writeln("<span id='hello'>你好，游客</span>");
	document.writeln("<span id='logout'>退出</span>");
	document.writeln("<span id='denglu'>登录</span>");
	document.writeln("</div>");
	document.writeln(" <div class=\"Rt\">");
	document.writeln("<div>");


	// if(adct == '首页' ){
	// 	document.writeln('<a onclick="sessionStorage.setItem(\'cf_showPage\',\'0\',\'hzf_showPage\',\'\');sessionStorage.setItem(\'hzf_showPage\',\'\')" href="account/account.html">');
	// }else{
	// 	document.writeln('<a onclick="sessionStorage.setItem(\'cf_showPage\',\'0\',\'hzf_showPage\',\'\');sessionStorage.setItem(\'hzf_showPage\',\'\')" href="../account/account.html">');
	// }

	if(adct == '首页' ){
		document.writeln('<a class="user_center" href="account/account.html">');
	}else{
		document.writeln('<a class="user_center" href="../account/account.html">');
	}

	document.writeln("<div class=\"icon userIcon\"></div>");
	document.writeln("用户中心");
	document.writeln("</a>");
	document.writeln("</div>");
	document.writeln("<div class=\"fontI\">|</div>");
	document.writeln("<div style='position:relative;' id='objTypeHover'>");
	document.writeln("<a href=\"##\">");
	document.writeln("<div class=\"icon objIcon\"></div>");
	document.writeln("产品分类");

	if(adct == '首页' ){
		document.writeln("</a><div class='headObjType'><a href='obj/objList.html'>日用化学品 </a>");
		document.writeln("<a href='obj/objList.html'>有机化学品 </a>");
		document.writeln("<a href='obj/objList.html'>无机化学品 </a>");
		document.writeln("<a href='obj/objList.html'>农药化学品 </a>");
		document.writeln("<a href='obj/objList.html'>食品及饲料添加剂 </a>");
		document.writeln("<a href='obj/objList.html'>催化剂及化工助剂 </a>");
		document.writeln("<a href='obj/objList.html'>燃料及颜料 </a></div>");
	}else{
		document.writeln("</a><div class='headObjType'><a href='../obj/objList.html'>日用化学品 </a>");
		document.writeln("<a href='../obj/objList.html'>有机化学品 </a>");
		document.writeln("<a href='../obj/objList.html'>无机化学品 </a>");
		document.writeln("<a href='../obj/objList.html'>农药化学品 </a>");
		document.writeln("<a href='../obj/objList.html'>食品及饲料添加剂 </a>");
		document.writeln("<a href='../obj/objList.html'>催化剂及化工助剂 </a>");
		document.writeln("<a href='../obj/objList.html'>燃料及颜料 </a></div>");
	}

		
	document.writeln("</div>");
	document.writeln("<div class=\"fontI\">|</div>");
	document.writeln("<div>");

	if(adct == '首页' ){
		document.writeln('<a href="helpCenter/helpCenter.html">');
	}else{
		document.writeln('<a href="../helpCenter/helpCenter.html">');
	}

	document.writeln("<div class=\"icon webIcon\"></div>");
	document.writeln("网站导航");
	document.writeln("</a>");
	document.writeln("</div>");
	document.writeln("<div class=\"fontI\">|</div>");
	document.writeln("<div>");

	if(adct == '首页' ){
		document.writeln('<a href="supplierEntry/supplierEntry.html">');
	}else{
		document.writeln('<a href="../supplierEntry/supplierEntry.html">');
	}

	document.writeln("<div class=\"icon ssIcon\"></div>");
	document.writeln("供应商入驻");
	document.writeln(" </a>");
	document.writeln("</div>");
	document.writeln("</div>");
	document.writeln("</div>");
	document.writeln("</div>");
	document.writeln("<div class=\"mianCont_box\">");
	document.writeln("<div class=\"mianCont\">");
	if(adct == '首页' ){
		document.writeln("<a href=\"index.html\" class=\"logo\"></a>");
	}else{
		document.writeln("<a href=\"../index.html\" class=\"logo\"></a>");
	}
	//document.writeln("<a href=\"../index.html\" class=\"logo\"></a>");
	document.writeln(" <div class=\"seachBox\">");
	document.writeln("<div class=\"schType\">");
	document.writeln("<span class=\"actSchType\">产&nbsp;&nbsp;品</span><span>供应商</span>");
	document.writeln("</div>");
	document.writeln("<div class=\"seachDiv\">");
	document.writeln("<input type=\"text\" id='seachIpt' placeholder=\"可输入CAS号、化合物、分子式等条件进行搜索\" />");


	document.writeln("<button>搜&nbsp;&nbsp;索</button>");
	document.writeln(" </div>");
	document.writeln("<div class=\"hotSch\">");
	document.writeln("热门搜索：");
	document.writeln("<span class=\"hotSch_span\">");
	if(adct == '首页' ){
		document.writeln("<span><a href='search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='search/productNameSearch_precise.html'></a></span>");
	}else{
		document.writeln("<span><a href='../search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='../search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='../search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='../search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='../search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='../search/productNameSearch_precise.html'></a></span>");
		document.writeln("<span><a href='../search/productNameSearch_precise.html'></a></span>");
	}

	document.writeln("</span>");
	document.writeln("</div>");
	document.writeln("</div>");
	document.writeln("<div class=\"phoneNum\"/></div>");
	document.writeln("</div>");
	document.writeln("</div><div class='seachListDp'></div>");
	var headLink = '<div class="maxWidth tabLinkMaxBox"><div class="mianCont tabLink">\
						<div>\
							<span>全部商品目录</span>\
							<div class="leftTabBox  menu">\
								<ul>\
							      <li> ';		
	if(adct == '首页' ){
	headLink +=	'<h3><a href="obj/objList.html"></a> </h3>';
	}else{
	headLink +=	'<h3><a href="../obj/objList.html"></a> </h3>';
	}
							      
	headLink +=  '<span><a herf="javascript:;" class="one"></a> </span>\
							      	<span><a herf="javascript:;" class="two">\</a> </span>\
							        <div class="submenu">\
							          <div class="subleft">\
							           	<div class="subTit">\</div>\
							           	<div class="objType">\
							           		<a href="##">\</a>\
							           		<a href="##">\</a>\
							           		<a href="##">\</a>\
							           	</div>\
							           	<div>\
							           		<p></p>\
							           		<div class="hotObj">\
							           			<a href="##">\
							           				<div></div>\
								           			<p></p>\
								           			<span></span>\
							           			</a>\
							           		</div>\
							           		<div class="hotObj">\
							           			<a href="##">\
							           				<div></div>\
								           			<p></p>\
								           			<span></span>\
							           			</a>\
							           		</div>\
							           	</div>\
							          </div>\
							        </div>\
							      </li>\
							      <li> \
							      	<h3><a herf="javascript:;"></a> </h3>\
							      	<span><a herf="javascript:;"></a> </span>\
							      	<span><a herf="javascript:;"></a> </span>\
							      	<span><a herf="javascript:;"></a> </span>\
							        <div class="submenu">\
							          <div class="subleft">\
							           	<div class="subTit"></div>\
							           	<div class="objType">\
							           		<a href="##"></a>\
							           		<a href="##"></a>\
							           		<a href="##"></a>\
							           	</div>\
							           	<div>\
							           		<p></p>\
							           		<div class="hotObj">\
							           			<a href="##">\
							           				<div></div>\
								           			<p></p>\
								           			<span></span>\
							           			</a>\
							           		</div>\
							           		<div class="hotObj">\
							           			<a href="##">\
							           				<div></div>\
								           			<p></p>\
								           			<span></span>\
							           			</a>\
							           		</div>\
							           	</div>\
							          </div>\
							        </div>\
							      </li>\
							      <li> \
							      	<h3><a herf="javascript:;"></a> </h3>\
							      	<span><a herf="javascript:;"></a> </span>\
							      	<span><a herf="javascript:;"></a> </span>\
							        <div class="submenu">\
							          <div class="subleft">\
							           	<div class="subTit"></div>\
							           	<div class="objType">\
							           		<a href="##"></a>\
							           		<a href="##"></a>\
							           		<a href="##"></a>\
							           	</div>\
							           	<div>\
							           		<p></p>\
							           		<div class="hotObj">\
							           			<a href="##">\
							           				<div></div>\
								           			<p></p>\
								           			<span></span>\
							           			</a>\
							           		</div>\
							           		<div class="hotObj">\
							           			<a href="##">\
							           				<div></div>\
								           			<p></p>\
								           			<span></span>\
							           			</a>\
							           		</div>\
							           	</div>\
							          </div>\
							        </div>\
							      </li>\
								</ul>\
							</div>\
						</div>';
	if(adct == '首页' ){
		headLink +=	'<a href="index.html" class="actTabLink"><span>首页</span></a>\
			<a href="spotGoods/spotGoods.html"><span>现货商城</span></a>\
			<a href="spotGoods/reagentMall.html"><span>试剂商城</span></a>\
			<a href="freeSearch/freeSearch.html"><span>免费找货</span></a>\
			<a href="##"><span>金融服务</span></a>\
			<a target="_blank" href="'+wuliuIP+'" class="wuliu"><span>物流服务</span></a>\
			<a href="flashSale/buying.html"><span>抢购</span></a>\
			<a href="flashSale/flashSale.html"><span>抢货</span></a>\
			<a href="industryInformation/industryInformation.html"><span>行业资讯</span></a>\
			<a href="memberOfTheMall/memberOfTheMall.html" class="notPd"><span>会员商城</span></a>\
		</div></div>';
	}else{
		headLink +=	'<a href="../index.html" class="actTabLink"><span>首页</span></a>\
			<a href="../spotGoods/spotGoods.html"><span>现货商城</span></a>\
			<a href="../spotGoods/reagentMall.html"><span>试剂商城</span></a>\
			<a href="../freeSearch/freeSearch.html"><span>免费找货</span></a>\
			<a href="##"><span>金融服务</span></a>\
			<a target="_blank" href="'+wuliuIP+'" class="wuliu"><span>物流服务</span></a>\
			<a href="../flashSale/buying.html"><span>抢购</span></a>\
			<a href="../flashSale/flashSale.html"><span>抢货</span></a>\
			<a href="../industryInformation/industryInformation.html"><span>行业资讯</span></a>\
			<a href="../memberOfTheMall/memberOfTheMall.html" class="notPd" ><span>会员商城</span></a>\
		</div></div>';
	}

	document.writeln(headLink);

	// var headerip = 'http://api.xjv56.com/service/';
	// var headerip = 'http://api.test.xjv56.com/service/';
	var headerip = 'http://192.168.1.80:7777/service/';
	// var headerip = 'http://192.168.1.166:7777/service/';
	// var headerip = 'http://192.168.1.34:7777/service/';
	// var headerip = 'http://192.168.1.105:7777/service/';

	// var headerip = 'http://127.0.0.1:7777/service/';


	//var headerip = 'http://192.168.1.223:7777/service/';
		

	//header ip


	window.onload = function(){
		   //全部分类
	       $.ajax({ 
	          type:"get",
	          url:pubIP+"product/getAllCategory",//v1.0
	          cache:false,
	          dataType: "json",
			  headers: {
			  	token: token
			  },
	          success: function(json){
	            console.log(json);
	            var dorpBox = '';
	            var leftTy = '';
	            //return false;
	            $.each(json.data, function(i,t) {
	            		dorpBox += '<a href="##" typeId="'+t.categoryId+'">'+t.categoryName+'</a>';
	            		var tht = t;
	            		leftTy += '<li> \
						      	<h3><a herf="javascript:;" typeId="'+t.categoryId+'" class="category one">'+t.categoryName+'</a><i class="rightIcon"></i> </h3>';
					$.each(t.categoryList, function(i,t) {
						if(i >= 2){
							return
						}
						leftTy +=	'<span><a herf="javascript:;" typeId="'+t.categoryId+'" class="category two">'+t.categoryName+'</a> </span>';
					});
					leftTy +=	'<div class="submenu">\
						          <div class="subleft">\
						           	<div class="subTit">'+t.categoryName+'</div>\
						           	<div class="objType">';
					$.each(t.categoryList, function(i,t) {
						leftTy +=	'<a href="##" typeId="'+t.categoryId+'" class="category">'+t.categoryName+'</a>';
					});
						           		
					leftTy +=	   '</div><div><p>热销商品</p>';
					
					var productSpecUnit = null;
					
					if(t.hotProductList.length != 0){
						$.each(t.hotProductList,function(i,t){
							
							leftTy += '<div class="hotObj" objid="'+t.supplyId+'" comid="'+t.companyId+'">\
						           			<a href="##" >\
						           				<div style="background:url('+t.productPic.split(',')[0]+') no-repeat;background-position:center;background-size:cover;"></div>\
							           			<p>'+t.unitPrice+'元/'+t.productSpecName+'</p>\
							           			<span>'+t.categoryName+'</span>\
						           			</a>\
						           		</div>';
						})
					}
					leftTy +=	  '</div></div>\
						        </div>\
						      </li>';
	            });
	            $('.headObjType').html(dorpBox);
	            $('.leftTabBox ul').html(leftTy);
	          },
	          error:function(xhr,statues,error){
	              
	          }
	       });


	       $.ajax({
				type:"post",
				url:pubIP+"companyCertification/getCompanyWriteStateByUserToken",//v1.0
				cache:false,
				dataType: "json",
				headers: {
				    Accept: "application/json; charset=utf-8",
				    token: token
				},
				success: function(data){
				    console.log(data);

				    if (data.data) {
				    	if (data.data.type == 1) { //未提交
				  
							sessionStorage.setItem('cf_showPage','0');
							sessionStorage.setItem('hzf_showPage','');
							
					    } else if (data.data.type == 2) { //审核中
							sessionStorage.setItem('cf_showPage','0');
							sessionStorage.setItem('hzf_showPage','flag_qyrz');
							 
					    } else {
					    	sessionStorage.setItem('cf_showPage','0');
							sessionStorage.setItem('hzf_showPage','');
					    }
				    }
				    



				    
				},
				error: function(err) {
					console.log(err);
				}
				});

	       
	       $(document).on('click','.hotObj',function(){
	       		localStorage.setItem('thisCompanyId',$(this).attr('comid'));
	       		localStorage.setItem('objid',$(this).attr('objid'));
	       		if(adct == '首页' ){
		       	  	location.href = 'obj/objDetails.html';
		       	}else{
		       	  	location.href = '../obj/objDetails.html';
		       	}
	       })

	       // hotSch_span
	       $.ajax({ 
		      	type:"get",
		      	url:headerip+"productApi/getNetArticle",//v1.0
		      	headers: {
		      		token: token
		      	},
		      	cache:false,
		      	dataType: "json",
		      	data: {
		      		index: 5
		      	},
		      	success: function(json){
			        console.log(json);
			        if (json.code == 1) {
			        	// $('.hotSch_span').
			        	var str = '';
			        	for (var i = 0; i < json.data.length; i++) {
			        		if (adct == '首页') {
			        			$('.hotSch_span').addClass('shouye_flag');
			        		} else {
			        			$('.hotSch_span').addClass('feishouye_flag');
			        		// 	str += '<span><a href="../search/productNameSearch_precise.html" data-searchId="'+json.data[i].id+'">'+json.data[i].names+'</a></span>';
			        		}

			        		str += '<span><a href="##">'+json.data[i].names+'</a></span>';

			        		
			        	}
			        	$('.hotSch_span').html(str);
			        }
			    },
			    error:function(xhr,statues,error){
			    	      
			    }
		  });



	       $(document).on('click', '.hotSch_span span a', function() {

	       		window.localStorage.setItem('seachName', $(this).text());

	       		if ($('.hotSch_span').hasClass('feishouye_flag')) {
	       			window.location.href = '../search/fuzzySearch.html';

	       		} else {
	       			window.location.href = 'search/fuzzySearch.html';
	       			
	       		}
	       })
	       
	       $(document).on('click','.headObjType a,.category',function(){
	       	  localStorage.setItem('categoryId',$(this).attr('typeId'));
	       	  if(adct == '首页' ){
	       	  	location.href = 'obj/objList.html';
	       	  }else{
	       	  	location.href = '../obj/objList.html';
	       	  }
	       	  
	       })

	       $(document).on('mouseenter','.headObjType a',function(){
	       	  	$(this).css('color', '#056ee0');
	       }).on('mouseleave', '.headObjType a', function () {
	       		$(this).css('color', '#282828');
	       })


			
		   $('.seachListDp').css('left',(($(window).width()-1230)/2+294+56)+'px');
			
			
			var url = window.location.href;
			if (url.indexOf('result') != -1) {  //供应商搜索页面，供应商加样式
				$('.actSchType').removeClass('actSchType');
				$('.schType span').eq(1).addClass('actSchType');
				$('#seachIpt').val('');
				$('#seachIpt').prop('placeholder','输入供应商名称');
			}

		   $(document).on('click','.schType>span',function(){
				$('.actSchType').removeClass('actSchType');
				$(this).addClass('actSchType');
				$('#seachIpt').val('');
				if($.trim($('.actSchType').text()) == '供应商'){
					$('#seachIpt').prop('placeholder','输入供应商名称');
					$('.seachListDp').html('').hide();
				}else{
					$('#seachIpt').prop('placeholder','可输入CAS号、化合物、分子式、品牌、货号等条件进行搜索');
				}
			});
			
		  var tokeni = 0	;	
		  var timeToken = setInterval(function(){
		  	if(!token){
		  		tokeni++;
		  		if(tokeni == 12){
		  			clearInterval(timeToken);
		  		}
		  	}else{
		  		clearInterval(timeToken);
		  		$.ajax({ 
			      type:"post",
			      url:headerip+"user/getUserInfoByToken",//v1.0
			      cache:false,
			      dataType: "json",
			      async:false,
				  headers: {
				  	token: token
				  },
			      success: function(json){
			        console.log(json);
			        	if(json.code == '1'){
			        		$('#hello').html('你好，'+json.data.loginName); 
			        		$('.userBox>p').html('欢迎，'+json.data.loginName+'登录');
			        		if (json.logo) {
			        			$('.userBox .cpImgLogo').css({
				        			'background': 'url("'+json.logo+'") no-repeat center center',
				        			
				        		});
			        		} else {
			        			$('.userBox .cpImgLogo').css({
				        			'background': 'url("")'
				        		});
			        		}
			        		
				        if(adct == '首页' ){
				        		$('.hsUser').show();
				        		$('.ntUser').hide();
				        }
			        	}
			      },
			      error:function(xhr,statues,error){
			          
			      }
			  });
		  	}
		  },1000);
	      $('.seachBox button').click(function(){
	      		//处理供应商搜索
				if($('#seachIpt').val() == ''){
					return;
				}
	      		if($.trim($('.actSchType').text()) == '供应商'){
	      			localStorage.setItem('seachSupplier',$('.seachDiv input').val());
	      			$('#seachIpt').val('');
	      			if(location.href.indexOf('result') != -1){
	      				location.reload();
	      			}else{
	      				if(adct == '首页' ){
	      					location.href = 'result.html';
	      				}else{
	      					location.href = '../result.html';
	      				}
	      			}
	      		}else{
	      			localStorage.setItem('seachName',$('.seachDiv input').val());
	      			$('#seachIpt').val('');
	      			if(location.href.indexOf('fuzzySearch') != -1){
	      				location.reload();
	      			}else{
	      				if(adct == '首页' ){
	      					location.href = 'search/fuzzySearch.html';
	      				}else{
	      					location.href = '../search/fuzzySearch.html';
	      				}
	      			}
	      		}
	      })
	      //模糊搜索下拉
	     
		  $('#seachIpt').bind('input propertychange',function () {
		  		if($.trim($('.actSchType').text()) == '供应商'){
		  			return false;
		  		}
		  		if($('#seachIpt').val() == ''){
		  			$('.seachListDp').hide();
		  			return
		  		}
			  	var seachStr = '';
		   		$.ajax({ 
			      type:"get",
			      url:headerip+"product/glabolSearch",//v1.0
			      cache:false,
			      dataType: "json",
				  headers: {
				  	token: token
				  },
				  data:{
				  	name:$('#seachIpt').val()
				  },
			      success: function(json){
			      	if(!json){
			      		$('.seachListDp').html('').hide();
			        		return;
			      	}
			      	if(json.data.length == 0  ){
			        		$('.seachListDp').html('').hide();
			        		return;
			        }
			        console.log(json);
			        if(!json.data){
			        		$('.seachListDp').html('').hide();
			        		return false;
			        }
			        
			        $.each(json.data,function(i,t){
			        		seachStr += '<p  chemicalId="'+t.chemicalId+'">'+t.chemicalCas+'('+t.chemicalAlias+')</p>'
			        })
			        $('.seachListDp').html(seachStr).show();
			      },
			      error:function(xhr,statues,error){
			          
			      }
			  });
		  })
		  
		  $(document).on('click','.seachListDp p',function(){
		  	localStorage.setItem('jzSeachName',$(this).attr('chemicalId'));	
		  	$('#seachIpt').val('');
		  	if(location.href.indexOf('productNameSearch_precise') != -1){
				location.reload();
			}else{
				if(adct == '首页' ){
					location.href = 'search/productNameSearch_precise.html';
				}else{
					location.href = '../search/productNameSearch_precise.html';
				}
			}
		  })


		  
		  if (window.localStorage.getItem('data-logout') == 'true') {
		  	$('#logout').css('display', 'none');
		  } else {
		  	$('#logout').css('display', 'inline-block');
		  }



		  if (window.localStorage.getItem('isOld') == 1 || window.localStorage.getItem('isOld') == 0) { //未登录
		  	$('#logout').css('display', 'none');
		  	if (adct == 'login') {
		  		$('#denglu').css('display', 'none');
		  	} else {
		  		$('#denglu').css('display', 'inline-block');
		  	}
		  	
		  } else {
		  	
		  	$('#logout').css('display', 'inline-block');
		  	$('#denglu').css('display', 'none');
		  }

			
		  $(document).on('click', '#denglu', function() {
		  		if (adct == '首页') {
		  			location.href="./login/login.html";
		  		} else {
		  			location.href="../login/login.html";
		  		}
		  });


		  $(document).on('click', '#logout', function() {

		  	$.ajax({
		  		type:"get",
			    url:headerip+"user/logoutByToken",//v1.0
			    cache:false,
			    dataType: "json",
				headers: {
				  	token: token
				},
			    success: function(data){
			    	console.log(data);

			    	// if (data.code == 1) {
			    		window.localStorage.removeItem('token');
			    		console.log(window.localStorage.getItem('isOld'));
			    		// window.localStorage.setItem('data-logout', 'true');
						$('#logout').hide();
					  	if(adct == '首页' ){
							location.href = 'login/login.html';
						}else{
							location.href = '../login/login.html';
						}
			    	// }

			    },
			    error: function (err) {
			    	console.log(err);
			    }
		  	});

		  	
		  });


	}
}



