window.addEventListener("load", initDate, false)

function initDate(){
	var now =  new Date();
	console.log(now);
	document.getElementById("dtField").innerHTML = timeString(now.getHours());

	function timeString(theHours){
		if(theHours < 5){
			return "What are you doing up so late?";
		}
		if(theHours < 9){
			return "Good Morning!";
		}
		if(theHours < 17){
			return "No surfing during working time!";
		}
		return "Good Evening!";
	}
}