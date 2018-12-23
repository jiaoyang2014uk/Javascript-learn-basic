window.addEventListener("load", initAll, false)

function initAll(){
	var adBox = "ad";

	document.getElementById(adBox).style.display = "block";
	document.getElementById("closebox").addEventListener("click",myfunction) 
	function myfunction(){
		document.getElementById(adBox).style.display = "none";
	}
	false
}