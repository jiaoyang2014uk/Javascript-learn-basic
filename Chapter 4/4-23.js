window.onload = choosePic;

var theAd = 0;
var myPix = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");

function choosePic () {
	theAd = Math.floor(Math.random() * myPix.length);
	document.getElementById("adBanner").src = myPix[theAd];

	rotate();
}

function rotate(){
	theAd++;
	if(theAd == myPix.length){
		theAd = 0;
	}
	document.getElementById("adBanner").src =  myPix[theAd];

	setTimeout(rotate, 1*1000);
}