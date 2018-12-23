window.addEventListener("load",initAll,false);
var xhr=false;
var xPos, yPos;

function initAll(){
	var allLinks  = document.getElementsByTagName("a");
 	
 	for(var i=0; i<allLinks.length;i++){
 		allLinks[i].addEventListener("mouseover", getPix,false);
 	}
	
}

function getPix(evt){
	if(evt){
		var url = evt.target;
	}else{
		evt = window.event;
		var url = evt.srcElement;
	}

	xPos = parseInt(evt.clientX);
	yPos = parseInt(evt.clientY);

	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			try{xhr = new ActiveXObject("Microsoft.XMLHTTP");}
			catch(e){}
		}
	}

	if(xhr){
		xhr.addEventListener("readystatechange",getContent,false);
		xhr.open("GET", url,true);
		xhr.send(null);
	}else{
		alert("We can not create your request");
	}
}

function getContent(){
	var preview = document.getElementById("preview");

	if(xhr.readyState == 4){
		if(xhr. status == 200){
			preview.innerHTML = xhr.responseText;
		}else{
			preview.innerHTML = " There is sth wrong with your request"+ xhr.status;
		}
		preview.style.top = yPos+ 2 + "px";
		preview.style.right = xPos+ 2 + "px";
		preview.style.visibility = "visible";

		preview.addEventListener("mouseout", function(){preview.style.visibility = "hidden";},false);
	}
}