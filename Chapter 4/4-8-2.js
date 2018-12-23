window.onload = rolloverInit;

function rolloverInit(){
	for(var i=0; i<document.links.length;i++){
		var linkObj = document.links[i];
		if(linkObj){
			var imgObj = document.getElementById(linkObj.id + "Img")
		}
		if(imgObj){
			setupRollover(linkObj,imgObj);
		}
	}
}

function setupRollover(theLink,theImage){
	theLink.imgToChange = theImage;

	theLink.onmouseout = function (){
		this.imgToChange.src = this.outImage.src;
	}
	theLink.onmouseover =  function (){
		this.imgToChange.src = this.overImage.src;
	}

	theLink.outImage = new Image();
	theLink.outImage.src = theImage.src;

	theLink.overImage =  new Image();
	theLink.overImage.src = "images/" +theLink.id + "_on.gif";

}