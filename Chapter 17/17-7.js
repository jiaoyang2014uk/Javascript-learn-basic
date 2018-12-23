window.addEventListener(
	"load",
	function(){
		document.getElementById("draggable").addEventListener("touchmove",moved,false);
		androidSS();
	},
	false
);

function androidSS(){
	if(navigator.userAgent.match(/android/i)){
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("href", "17-8.css");
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}

function moved(evt){
	evt.preventDefault();
	var dragBox =  document.getElementById("draggable");

	dragBox.style.left = (evt.changedTouches[0].pageX -100) + "px";
	dragBox.style.top = (evt.changedTouches[0].pageY -100) + "px";
	document.getElementById("boxLocation").innerHTML = "Top:" + dragBox.style.top + "<br /> Left: " + dragBox.style.left;
}



 
