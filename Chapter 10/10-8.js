window.addEventListener("load", initAll, false);
var nodeChg;

function initAll(){
	document.getElementById("theForm").addEventListener("submit", nodeChanger,false);
	nodeChg = document.getElementById("motifiable");
}

function addNode(){
	var inText = document.getElementById("textarea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	nodeChg.appendChild(newGraf);
}

function deleteNode(){
	var grafChoice = document.getElementById("grafcount").selectedIndex;
	var allGrafs = nodeChg.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);

	nodeChg.removeChild(oldGraf);

}
function insertNode(){
	var grafChoice = document.getElementById("grafcount").selectedIndex;
	var inText = document.getElementById("textarea").value;
	
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
	
	var allGrafs = nodeChg.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);

	nodeChg.insertBefore(newGraf,oldGraf);
}

function nodeChanger(evt){
	var countType = -1;
	var pGrafCt = nodeChg.getElementsByTagName("p").length;
	var radioButtonSet = document.getElementById("theForm").nodeAction;


	for(var i = 0;i<radioButtonSet.length; i++){
		if(radioButtonSet[i].checked){
			countType = i;
		}
	}

	switch(countType){
		case 0:
			addNode();
			break;
		case 1:
			if(pGrafCt > 0){
				deleteNode();
				break;
			}
		case 2:
			if(pGrafCt > 0){
				insertNode();
				break;
			}
		default:
			alert("No one has been chosen");
	}

	document.getElementById("grafcount").options.length = 0;

	for(var i=0;i<nodeChg.getElementsByTagName("p").length;i++){
		document.getElementById("grafcount").options[i] = new Option (i+1);
	}

	evt.preventDefault();

}