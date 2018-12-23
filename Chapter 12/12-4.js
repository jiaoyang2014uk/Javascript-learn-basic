window.addEventListener("load",initAll,false);

function initAll(){
	var allLinks = document.getElementsByTagName("a");

	for(var i=0; i< allLinks.length; i++){
		if(allLinks[i].className.indexOf("menuLink") > -1){
			allLinks[i].addEventListener("mouseover", triggerMenu, false);
			allLinks[i].addEventListener("click", clickHandler, false);
		}
	}
}

function clickHandler(evt){
	evt.preventDefault();
}

function triggerMenu(){
	var startMenu = this.href. lastIndexOf("/") +1;
	var stopMenu = this.href. lastIndexOf(".");
	var thisMenuName = this.href.substring(startMenu,stopMenu);

	var menuParent = document.getElementById(thisMenuName).parentNode;
	var Menu = document.getElementById(thisMenuName).style;
	Menu.display = "block";

	menuParent.addEventListener("mouseout",function(){Menu.display = "none";},false);
	menuParent.addEventListener("mouseover",function(){Menu.display = "block";},false);



}