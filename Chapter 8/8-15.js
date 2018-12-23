window.onload =  initForm;

function initForm(){
	var allTags = document.forms[0].getElementsByTagName("*")

	for(var i=0; i<allTags.length; i++){
		if(allTags[i].className.indexOf("reqd")>-1){
			allTags[i].onblur = fieldCheck;
		}
	}
}

function fieldCheck(){
	if(this.value == ""){
		this.className += " highlight"
		this.focus();
	}
	else{
		this.className = "reqd";
	}
}