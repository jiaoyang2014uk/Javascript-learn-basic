window.addEventListener("load", initPage, false);

function initPage(){
	console.log(parseInt('xcvx'));
	var now =  new Date ();
	var expireDate = new Date ();
	expireDate.setMonth(expireDate.getMonth() + 6);

	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;

	var lastVisit = cookieVal("pageVisit");
	if(lastVisit == 0){
		lastVisit = "";
	}
	document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString();
	document.cookie = "pageVisit=" + now + ";expires=" + expireDate.toGMTString();

	var outMsg = "You have visited this page " + hitCt + "times" + "<br>"
	if(lastVisit !=""){
		outMsg += "You last visit is on " + lastVisit;
	}
	 document.getElementById("nameField").innerHTML = outMsg ;
}

function cookieVal(cookieName){
	var thisCookie = document.cookie.split("; ");

	for(var i=0; i<thisCookie.length;i++){
		if(cookieName == thisCookie[i].split("=")[0]){
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}