window.addEventListener("load",initAll,false);

function initAll(){
	var allLinks =  document.getElementsByName("a");

	for(var i = 0; i< allLinks.length; i++){
		if(allLinks[i].className.indexOf("menuLink") > -1){
			allLinks[i].addEventListener("click", triggerMenu,false);
		}
	}

	function triggerMenu(){
		var startMenu = this.href.lastIndexOf("/") +1;
		var stopMenu =  this.href.lastIndexOf(".");
		var thisMenuName = this.href.substring(startMenu,stopMenu);

		var Menu = document.getElementById(thisMenuName).style;
		if(Menu.style == "none"){
			Menu.style = "block";
		}else{
			Menu.style = "none";
		}
	}
	evt.preventDafult();
}