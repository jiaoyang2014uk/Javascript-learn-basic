window.onload = choosePic;

var myPix = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");

function choosePic(){
	var randomNum = Math.floor(Math.random() * myPix.length);
	document.getElementById("myPicture").src = myPix[randomNum];
}