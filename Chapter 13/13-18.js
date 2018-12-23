window.addEventListener("load",initAll,false);
var xhr = false;
var nameArray =  new Array();

function initAll(){
	document.getElementById("search").addEventListener("keyup",setSuggestion,false);

	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		if(window.ActiveXObject){
			try{xhr = new ActiveXObject("Microsoft.XMLHTTP");}
			catch(e){}
		}
	}

	if(xhr){
		xhr.addEventListener("readystatechange",setName,false);
		xhr.open("GET", "13-18.xml",true);
		xhr.send(null);
	}else{
		alert("We can not create your request");
	}
}

function setName(){
	if(xhr.readyState == 4){
		if(xhr.status == 200){
			if(xhr.responseXML){
				var allNames = xhr.responseXML.getElementsByTagName("item");
				for(var i = 0; i<allNames.length; i++){
					nameArray[i] = allNames[i].getElementsByTagName("label")[0].firstChild;
				}
			}
		}
		else{
			alert("There are sth wrong with your request" + xhr.status);
		}
	}
}

function setSuggestion(evt){
	var str = document.getElementById("search").value;
	document.getElementById("search").className = "";
	if(str != ""){
		document.getElementById("popups").innerHTML = "";

		for(var i = 0; i<nameArray.length; i++){
			var thisName = nameArray[i].nodeValue;

			if(thisName.toLowerCase().indexOf(str.toLowerCase()) ==0){
				var tempDiv =  document.createElement("div");
				tempDiv.innerHTML = thisName;
				tempDiv.addEventListener("click",getChoice,false)
				tempDiv.className = "suggestion";
				document.getElementById("popups").appendChild(tempDiv);
			}
		}
		var foundCt =  document.getElementById("popups").childNodes.length;
		if(foundCt == 0){
			document.getElementById("search").className = "error";
		}
		if(foundCt == 1 && evt.keyCode != 8){ //屏蔽backspace
			document.getElementById("search").value = document.getElementById("popups").firstChild.innerHTML;
			document.getElementById("popups").innerHTML = "";
		}
	}
}

function getChoice(evt){
	if(evt){
		var thisDiv = evt.target;
	}else{
		evt = window.event;
		var thisDiv = evt.srcElement;
	}

	document.getElementById("search").value = thisDiv.innerHTML;
	document.getElementById("popups").innerHTML = "";
}