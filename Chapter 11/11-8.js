window.addEventListener("load",initDate, false)

function initDate(){
	var now = new Date();

	document.getElementById("showTime").innerHTML = showTheTime(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAMPM();
	setTimeout(initDate, 1000);

	function showTheTime(theHours){
		if(show24() || (theHours > 0 && theHours <13)){
			return theHours;
		}
		if(theHours == 0){
			return 12;
		}
		return theHours - 12;
	}

	function showZeroFilled(theValue){
		if(theValue > 9 ){
			return ":" + theValue;
		}
		return ":0" + theValue;
	}

	function show24(){
		return(document.getElementById("show24").checked);
	}

	function showAMPM(){
		if(show24()){
			return "";
		}
		if(now.getHours() < 12){
			return " AM ";
		}
		return " PM "
	}

}