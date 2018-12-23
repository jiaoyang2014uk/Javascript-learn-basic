document.addEventListener("keydown", keyHit,false);
var thisPic = 0;

function keyHit(evt){
	var myPix = new Array("images/circle.jpg","images/eyeball.jpg","images/bg.gif","images/redFlash.gif");
	var imgCt= myPix.length -1;

	var ltArrow = 37;
	var rtArrow = 39;

	if(evt){
		var thisKey = evt.which;
	}
	else {
		var thisKey = window.event.KeyCode;
	}

	if(thisKey = ltArrow){
		chgSlice(-1);
	}
	else if(thisKey = rtArrow){
		chgSlice(1);
	};

	function chgSlice(direction){
		thisPic = thisPic + direction;
		if(thisPic > imgCt){
			thisPic =0;
		}
		if(thisPic < 0 ){
			thisPic = imgCt;
		}

		document.getElementById("myPicture").src = myPix[thisPic];
	}
}