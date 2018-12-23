window.onload = function (){
	document.forms[0].onsubmit = validForm;
}


function validForm(){
	var allGood = true;
	var allTags = document.forms[0].getElementsByTagName("*");

	for(var i=0; i<allTags.length; i++){
		if(!validTag(allTags[i])){
			allGood = false;
		}
	}
	return allGood;

	function validTag(thisTag){
		var outClass = "";
		var allClasses =  thisTag.className.split(" ");

		for (var j=0; j<allClasses.length; j++){
			outClass += vaildBasedOnClass(allClasses[j]) + " ";
		}
		thisTag.className = outClass;

		if(outClass.indexOf("invalid") > -1){
			thisTag.focus();
			if(thisTag.nodeName == "INPUT"){
				thisTag.select();
			}
			return false;
		}
		return true;

		function vaildBasedOnClass(thisClass){
			var classBack = "";

			switch(thisClass){
				case "":
				case "invalid":
					break;
				case "reqd":
					if(allGood && thisTag.value == ""){
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				default:
					if(allGood && !crossCheck(thisTag,thisClass)){
						classBack = "invalid ";
					}
					classBack += thisClass;
			}
			return classBack;

			function crossCheck(inTag,otherFieldID){
				if(!document.getElementById(otherFieldID)){
					return false;
				}
				return (inTag.value == document.getElementById(otherFieldID).value);
			}
		}
	}
}