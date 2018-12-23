window.onload = rolloverInit;

function rolloverInit(){
	for(var i=0; i<document.images.length; i++){
		if(document.images[i].parentNode.tagName.toLowerCase() == "a"){
			setupRollover(document.images[i]);
		}
	}
}

function setupRollover(theImage){
	var re = /\s*_off\s*/;

	theImage.outImage = new Image();
	theImage.outImage.src = theImage.src;
	theImage.onmouseout =  function (){
		this.src = this.outImage.src;
	}

	theImage.overImage = new Image();
	theImage.overImage.src =  theImage.src.replace(re, "_on");
	theImage.onmouseover = function (){
		this.src = this.overImage.src;
	}

	theImage.clickImage =  new Image();
	theImage.clickImage.src =  theImage.src.replace(re, "_click");
	theImage.onclick = function (){
		this.src = this.clickImage.src;
	}

	theImage.parentNode.childImg = theImage;

	theImage.parentNode.onblur = function (){
		this.childImg.src = this.childImg.outImage.src;
	}

	theImage.parentNode.onfocus =  function (){
		this.childImg.src = this.childImg.overImage.src;
	}
}
