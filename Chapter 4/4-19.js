window.onload = initLinks;

var thePic = 0;
var myPix = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");

function initLinks(){
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processPrevious(){
	if(thePic == 0){
		thePic = myPix.length;
	}
	thePic--;
	document.getElementById("myPicture").src = myPix[thePic];
	return false;
}

function processNext() {
	thePic++;
	if(thePic == myPix.length){
		thePic = 0;
	}
	document.getElementById("myPicture").src = myPix[thePic];
	return false;
}