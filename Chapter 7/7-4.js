window.onload = function(){
	document.forms[0].onsubmit = validForm;
}

function validForm(){
	var allGood = true;
	var allTags =  document.forms[0].getElementsByTagName("*");

	for(var i=0; i<allTags.length; i++){
		if(!validTag(allTags[i])){
			allGood = false;
		}
	}
	return false;

	function validTag(thisTag){
		var outClass = "";
		var allClasses = thisTag.className.split(" ");

		for(var j=0; j<allClasses.length; j++){
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}
		thisTag.className = outClass;

		if(outClass.indexOf("invalid")>-1){
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if(thisTag.nodeName == "INPUT"){
				thisTag.select();
			}
			return false;
		}
		return true;

		function validBasedOnClass(thisClass){
			var classBack = "";

			switch(thisClass){
				case "":
				case "invalid":
					break;
				case "imgURL":
				if(allGood && !setImgURL(thisTag.value)){
					classBack = "invalid "
				}
				default:
					classBack += thisClass;
			}
			return classBack;
		}

		 function setImgURL(newURL){
		 	var re = /^(file|http):\/\/\S+\/\S+\.(gif|jpg|png)$/i;

		 	if(re.test(newURL)){
		 		document.getElementById("chgImg").src =  newURL;
		 		return true;
		 	}
		 	return false;
		 }

		 function invalidLabel(parentTag){
		 	if(parentTag.nodeName == "LABEL"){
		 		parentTag.className += "invalid";
		 	}
		 }
	}
}