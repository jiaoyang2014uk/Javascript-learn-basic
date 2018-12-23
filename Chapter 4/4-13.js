window.onload = rolloverInit;

function rolloverInit(){
	for(var i=0; i<document.links.length; i++){
		var linkOjb = document.links[i];
		if(linkOjb.className){
			var imgOjb = document.getElementById(linkOjb.className);
			if(imgOjb){
				setupRollover(linkOjb,imgOjb);
			}
		}
	}
}

function setupRollover(theLink, textImage){
	theLink.imgToChange = new Array;
	theLink.outImage = new Array;
	theLink.overImage =  new Array;

	theLink.imgToChange[0] = textImage;
	theLink.onmouseout = rollOut;
	theLink.onmouseover = rollOver;

	theLink.outImage[0] = new Image();
	theLink.outImage[0].src = textImage.src;

	theLink.overImage[0] = new Image();
	theLink.overImage[0].src = "images/" + theLink.id + "Text.gif";

	var rolloverOjb = document.getElementById(theLink.id + "Img");
	if(rolloverOjb){
		theLink.imgToChange[1] = rolloverOjb;

		theLink.outImage[1] = new Image();
		theLink.outImage[1].src = rolloverOjb.src;

		theLink.overImage[1] = new Image();
		theLink.overImage[1].src = "images/" + theLink.id + "_on.gif";

	}
}

function rollOut (){
	for(var i=0; i<this.imgToChange.length; i++){
		this.imgToChange[i].src = this.outImage[i].src;
	}
}

function rollOver (){
	for(var i=0; i<this.imgToChange.length; i++){
		this.imgToChange[i].src = this.overImage[i].src;
	}
}