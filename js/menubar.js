$(function(){
	//Change style of selected page
	var menubar = $("#menuBar")
	var links = menubar.find("a");
	links.each(function (){
  	if (this.href == window.location.href){
  		$(this).addClass("selectedMenuItem");
  	}
  	else {
  		$(this).addClass("menuItem");
  	}
  });
});