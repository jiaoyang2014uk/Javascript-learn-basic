window.onload =  function (){
	document.forms[0].onsubmit = validForm;
}

function validForm(){
	var allTags = document.forms[0].getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++){
		validTag(allTags[i]);
	}
	return false;

	function validTag(thisTag){
		var allClasses = thisTag.className.split(" ");

		for(var j=0; j<allClasses.length; j++){
			if(allClasses[j] == "nameList"){
				thisTag.value =  setNameList(thisTag.value);
			}
		}

		function setNameList(inNameList){
			var newNames = new Array;
			var newNameField = "";

			var re = /\s*\n\s*/;
			var nameList =  inNameList.split(re);

			re = /^(\S)(\S+)\s(\S)(\S+)$/;

			for(var k=0; k<nameList.length; k++){
				if(nameList[k]){
					re.exec(nameList[k]);
					newNames[k] = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() 
					+ RegExp.$4.toLowerCase();
				}
			}

			for(k=0; k<newNames.length; k++){
				newNameField += newNames[k] + "\n";
			}
			return newNameField;
		}
	}
}