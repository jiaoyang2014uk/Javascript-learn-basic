window.onload = initLinks;
var pageCount = new Array(0,0,0,0);

function initLinks(){
	for(var i=0; i<document.links.length; i++){
		document.links[i].onclick = writeContent;
		document.links[i].thisPage = i + 1;
	}
}

function writeContent(){
	pageCount[this.thisPage]++;

	var newText = "<h2>You are looking at Example " +this.thisPage + "<\/h2>";
	newText += "<br /><h2>You have reviewed this page ";
	newText += pageCount[this.thisPage] + " times <\/h2>";

	document.getElementById("icontent").contentWindow.document.body.innerHTML = newText;
	return false;
	 

}