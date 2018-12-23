window.addEventListener("load", initAll,false);
var xhr = false;

function initAll(){
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			try{
				xhr =  new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
			}
		}
	}

	if(xhr){
		xhr.addEventListener("readystatechange", getContent, false);
		xhr.open("GET", "13-8.xml", true);
		xhr.send(null);
	}else{
		alert("I can not create an XMLHttpRequest");
	}
}

function getContent(){
	var tempText =  document.createElement("div");
	var theText;

	if(xhr.readyState == 4){
		if(xhr.status == 200){
			var allImg = xhr.responseXML.getElementsByTagName("content");

			for(var i=0; i<allImg.length; i++){
				tempText.innerHTML = getPix(allImg[i]);
				theText = tempText.getElementsByTagName("p")[1].innerHTML;
				
				theText = theText.replace(/180/g,"75");
				theText = theText.replace(/250/g,"75");
				theText = theText.replace(/_m/g,"_s");

				document.getElementById("pictureBar").innerHTML += theText;
			}
		}else{
			alert("There is sth wrong with your request" + xhr.status);
	}
}
		

function getPix(inVal){
	return (inVal.textContent)? inVal.textContent : inVal.text;
 	}
}