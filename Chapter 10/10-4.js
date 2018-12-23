window.addEventListener("load", initAll, false);

function initAll(){
	document.getElementById("theForm").addEventListener("submit", addNote,false);
	document.getElementById("deletenote").addEventListener("click", deleteNote,false);
}

function addNote(evt){
	var inText = document.getElementById("textarea").value;
	var newText =  document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	var docBody =  document.getElementsByTagName("body")[0];
	docBody.appendChild(newGraf);

	evt.preventDefault();
}

function deleteNote(evt){
	var allGrafs =  document.getElementsByTagName("p");
	
	if(allGrafs.length > 1 ){
		var lastGraf=allGrafs[allGrafs.length-1];
		var docBody = document.getElementsByTagName("body")[0];
		docBody.removeChild(lastGraf);
	}
	else{
		alert("Nothing to remove!");
	}

	evt.preventDefault();
}