var currImg = 0;
var allText =  new Array ("Before","Now","After");
window.addEventListener("load", initAll,false)

function initAll(){
	document.getElementById("imgText").innerHTML = allText[currImg];
	document.getElementById("prevLink").addEventListener("click", function(){newSlice(-1);}, false);
	document.getElementById("nextLink").addEventListener("click", function(){newSlice(1);}, false);
}


function newSlice(direction){
	var imgCt = allText.length;
	currImg = currImg + direction;

	if(currImg < 0 ){
		currImg = imgCt - 1 ;
	}
	if(currImg == imgCt){
		currImg = 0;
	}

	document.getElementById("sliceChange").src = "images/" + currImg + ".jpg";
	document.getElementById("imgText").innerHTML = allText[currImg];
}