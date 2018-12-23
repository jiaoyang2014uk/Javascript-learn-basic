window.addEventListener("load", showCookie,false);

function showCookie(){
	var outMsg = "";

	if(document.cookie = ""){
		outMsg = "There are no cookie here!";
	}
	else{
		var thisCookie = document.cookie.split(";");
		console.log(document.cookie);

		for(var i=0; i< thisCookie.length; i++){
			outMsg += "Cookie name is '" + thisCookie[i].split("=")[0];
			outMsg += "', and  the value is '" + thisCookie[i].split ("=")[1] + " '<br>";
		}
	}
	document.getElementById("nameField").innerHTML = outMsg;
}