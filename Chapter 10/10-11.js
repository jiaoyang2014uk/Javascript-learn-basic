window.addEventListener("load", initAll, false);

function initAll(){
	document.getElementById("theForm").addEventListener("submit", nodeChanger,false);
	chgNodes.init();
}

function nodeChanger(evt){
	return chgNodes.doAction(evt);
}

var chgNodes ={
	countType: function(){
	var radioButtonSet = document.getElementById("theForm").nodeAction;
	for(var i = 0;i<radioButtonSet.length; i++){
		if(radioButtonSet[i].checked){
			return i;
		}
	}
	return -1;
	},

	allGrafs: function(){
		return this.nodeChg.getElementsByTagName("p");
	},
	
	pGrafCt: function(){
		return this.allGrafs().length;
	},

	inText:function(){
		return document.getElementById("textarea").value;
	},

	newText: function(){
		return document.createTextNode(this.inText());
	},

	grafChoice: function(){
		return document.getElementById("grafcount").selectedIndex;
	},

	newGraf: function(){
		var myNewGraf = document.createElement("p");
		myNewGraf.appendChild(this.newText());
		return myNewGraf;
	},

	oldGraf: function(){
		return this.allGrafs().item(this.grafChoice());
	},

	doAction: function(evt){
		switch(this.countType()){
		case 0:
			this.nodeChg.appendChild(this.newGraf());
			break;
		case 1:
			if(pGrafCt > 0){
				this.nodeChg.removeChild(this.oldGraf());;
				break;
			}
		case 2:
			if(pGrafCt > 0){
				this.nodeChg.insertBefore(this.newGraf(),this.oldGraf());
				break;
			}
		case 3:
			if(pGrafCt > 0){
				this.nodeChg.replaceChild(this.newGraf(),this.oldGraf());
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

	},
	init: function(){
		this.nodeChg = document.getElementById("motifiable");
	}
}
