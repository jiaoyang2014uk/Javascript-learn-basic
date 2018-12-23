window.onload = initLinks;

function initLinks (){
	for(var i=0; i<document.links.length; i++){
		if(document.links[i].className == "newWin"){
			document.links[i].onclick = writeContent;
		}
	}
}

function writeContent(){
	var catWindow = window.open(this.href,"Cat")
	catWindow.focus();
	return false;
}