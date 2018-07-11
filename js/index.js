//收藏本站
function AddFavorite(title, url) {
  try {
      window.external.addFavorite(url, title);
  }catch (e) {
     try {
       window.sidebar.addPanel(title, url, "");
    	}catch (e) {
         alert("抱歉，您所使用的浏览器无法完成此操作。加入收藏失败，请使用Ctrl+D进行添加");
     }
  }
}

$("#gotop").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
}); 
//选中导航 加样式
$('.actTabLink').removeClass('actTabLink');
$('.tabLink>a').each(function(){
	if($.trim($(this).text()) == $('title').attr('adct')){
		$(this).addClass('actTabLink');
	}
})


