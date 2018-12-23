window.addEventListener("load",initAll, false)
window.addEventListener("unload",unloadStyle,false)

function initAll(){
	var thisCookie = cookieVal("style");

	if(thisCookie){
		var title = thisCookie;
	}else{
		var title = getPreferredStylesheet();
	}
	setActiveStylesheet(title);

	var allButtons = document.getElementsByTagName("input");
	for(var i=0; i< allButtons.length;i++){
		if(allButtons[i].type == "button"){
			allButtons[i].addEventListener("click",setActiveStylesheet,false);
		}
	}
}

function unloadStyle(){
	var expireDate = new Date();

	expireDate.setYear(expireDate.getFullYear()+1);
	document.cookie = "style=" + getActiveStylesheet() + ";expires=" + expireDate.toGMTString() + ";path=/";
}

function getPreferredStylesheet(){
	var thisLink, relAttribute;
	var linkFound =  document.getElementsByTagName("link");

	for(var i=0; i< linkFound.length;i++){
		thisLink = linkFound[i];
		relAttribute = thisLink.getAttribute("rel");
		if(relAttribute.indexOf("style") > -1 && relAttribute.indexOf("alternate") == -1 && thisLink.getAttribute("title")){
			return thisLink.getAttribute("title");
		}
	}
	return "";
}

function getActiveStylesheet(){
	var thisLink, relAttribute;
	var linkFound =  document.getElementsByTagName("link");

	for(var i=0; i< linkFound.length;i++){
		thisLink = linkFound[i];
		relAttribute = thisLink.getAttribute("rel");
		if(relAttribute.indexOf("style") > -1 && !thisLink.disabled && thisLink.getAttribute("title")){
			return thisLink.getAttribute("title");
		}
	}
	return "";
}

function setActiveStylesheet(inVal){
	var thisLink, relAttribute;
	var linkFound =  document.getElementsByTagName("link");

	if(inVal){
		if(typeof inVal == "string"){
			var title = inVal;	
	}else{
		var title = inVal.target.id;
	}
}else{ 
		var title =  window.event.srcElement.id;
	}

	for(var i=0; i< linkFound.length;i++){
		thisLink = linkFound[i];
		relAttribute = thisLink.getAttribute("rel");
		if(relAttribute.indexOf("style") > -1  && thisLink.getAttribute("title")){
			if(thisLink.getAttribute("title") == title){
				thisLink.disabled = false;
			}else{
				thisLink.disabled = true;
			}
		}
	}
}

function cookieVal(cookieName){
	var thisCookie = document.cookie.split("; ");

	for(var i=0; i< thisCookie.length;i++){
		if(cookieName == thisCookie[i].split("=")[0]){
			return thisCookie[i].split("=")[1];
		}
	}
	return "";
}