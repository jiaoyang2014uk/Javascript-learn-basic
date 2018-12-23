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
	
	if(evt){
		evt.preventDefault();

		if(typeof evt.target == "string"){
			triggerMenu(evt,evt.target);
		}else{
		triggerMenu(evt,evt.target.toString());
		}
	}else{
		triggerMenu(evt,window.event.srcElement.href);
	}
}

function triggerMenu(evt,currElem){
	if(triggerMenu.arguments.length < 2){
		currElem = this.href;
	}

	var startMenu = currElem. lastIndexOf("/") +1;
	var stopMenu = currElem. lastIndexOf(".");
	var thisMenuName = currElem.substring(startMenu,stopMenu);

	var menuParent = document.getElementById(thisMenuName).parentNode;
	var Menu = document.getElementById(thisMenuName).style;
	Menu.display = "block";

	menuParent.addEventListener("mouseout",function(){Menu.display = "none";},false);
	menuParent.addEventListener("mouseover",function(){Menu.display = "block";},false);



}