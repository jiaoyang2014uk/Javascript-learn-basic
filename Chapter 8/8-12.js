window.onload = initImage;


function initImage(){
	for(var i=0; i<document.images.length;i++){
		document.images[i].ondblclick = newWindow;
	}
}

function newWindow(){
	var Image =  "images/" + this.id + ".jpg";
	var imgWindow =  window.open(Image, "newImage","height= 320px, height = 180px, scrollbar = no");

}