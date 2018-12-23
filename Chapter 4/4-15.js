
window.onload = rotate ;

var theAd = 0;
var adImage = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");

function  rotate(){
	theAd++;
	if(theAd == adImage.length){
		theAd = 0;
	}
	document.getElementById("adBanner").src = adImage[theAd];
	setTimeout(rotate, 3*1000);
}