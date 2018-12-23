addEventListener("load",resetPage, false);
addEventListener("orientationchange",resetPage, false);

function resetPage(){
	if(Math.abs(window.orientation)==90){
		classVal = "landscape";
	}else{
		classVal = "portrait";
	}
	document.getElementsByTagName("main")[0].setAttribute("class", classVal);
}