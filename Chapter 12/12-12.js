window.addEventListener("load",initAll, false);

function initAll(){
	document.getElementById("submit").addEventListener("click",function(){document.getElementById("msg").innerHTML = sillyName()},false);
}

function sillyName(){
 var firstName = new Array ("Runny","Buttercup","Dinky");
 var lastName1 =  new Array("Snicker","Burrito","Bumpy");
 var lastName2 = new Array("face","dip","nose");

 var upFirstName = document.getElementById("fname").value.toUpperCase();
 var upLastName = document.getElementById("lname").value.toUpperCase();
 var validName = true;

 if(upFirstName == ""){
 	validName =  false;
 }else{
 	var useFirstName = upFirstName.charCodeAt(0) -65;
 	if(useFirstName < 0 || useFirstName > 25){
 		validName =  false;
 	}
}
if(!validName){
	document.getElementById("fname").focus();
	document.getElementById("fname").select();
	return "This is not valid first name!";
}

if(upLastName == ""){
 	validName =  false;
 }else{
 	var useLastName = upLastName.charCodeAt(0) -65;
 	var useLastName2 = upLastName.charCodeAt(upLastName.length -1 ) -65;
 	if(useLastName < 0 || useLastName > 25 || useLastName2 < 0 || useLastName2 > 25){
 		validName =  false;
 	}
}
if(!validName){
	document.getElementById("lname").focus();
	document.getElementById("lname").select();
	return "This is not valid LAST name!";
}
return "Your silly name is " + firstName[useFirstName] + " " + lastName1[useLastName] + lastName2[useLastName2];

}