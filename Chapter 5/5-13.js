window.onload = initLinks;
var bannerArray = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");

function initLinks (){

	for(var i=0; i<parent.document.links.length; i++){
		console.log(parent);
		parent.document.links[i].onclick = setBanner;
	}
	setBanner ();
}

function setBanner(){
	var randomNum = Math.floor(Math.random() * bannerArray.length);
	parent.document.getElementById("adBanner").src =  bannerArray[randomNum];
	return false;
}