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
		getXhr();
	}else{
		alert("I can not create an XMLHttpRequest");
	}
}

function getXhr(){
		xhr.open("GET", "13-8.xml", true);
	    xhr.addEventListener("readystatechange", getContent, false);
		xhr.send(null);

		setTimeout(getXhr, 5*1000);
}

 

function getContent(){
	var tempText =  document.createElement("div");

	if(xhr.readyState == 4){
		if(xhr.status == 200){
			var allImg = xhr.responseXML.getElementsByTagName("content");
			var randomImg = Math.floor(Math.random()*allImg.length);

			
				tempText.innerHTML = getPix(allImg[randomImg]);
				var thisImg = tempText.getElementsByTagName("p")[1];

				document.getElementById("pictureBar").innerHTML = thisImg.innerHTML;
		
		}else{
			alert("There is sth wrong with your request" + xhr.status);
	}
}
		

function getPix(inVal){
	return (inVal.textContent)? inVal.textContent : inVal.text;
 	}
}