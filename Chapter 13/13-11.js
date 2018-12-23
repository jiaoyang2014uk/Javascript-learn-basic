window.addEventListener("load",initAll, false);
var imgDiv = "";

function initAll(){
	document.getElementById("pictureBar").innerHTML = imgDiv;
}

function jsonFeed(Data){
	for(var i=0; i<Data.items.length;i++){
		imgDiv += "<img src='";
		imgDiv += Data.items[i].media.m.replace(/_m/g,"_s");
		imgDiv += "' alt =  '" + Data.items[i].title + "'>";
	}
}