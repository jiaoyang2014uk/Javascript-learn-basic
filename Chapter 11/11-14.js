window.addEventListener("load",initAll,false)

function initAll(){
	var adBox = "ad";

	document.getElementById(adBox).style.display = "block";
	document.getElementById(adBox).addEventListener("mouseover",slide,false);
	document.getElementById("closebox").addEventListener("click", myFunction);
	function myFunction(){
		document.getElementById(adBox).style.display = "none";
	}
	false
}

function slide(){
	var adBox = "ad";

	if(nextPos(adBox) <= (document.body.clientWidth - 150)){
		document.getElementById(adBox).style.left = nextPos(adBox) + "px";
		setTimeout(slide, 100);
	}

	function nextPos(elem){
		return document.getElementById(elem).offsetLeft + 1 ;
	}
}