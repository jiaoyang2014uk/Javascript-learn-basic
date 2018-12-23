window.addEventListener("load",initDate, false)

function initDate(){
	var spanTags =  document.getElementsByTagName("span");
	
	for(var i=0; i< spanTags.length; i++){
		if(spanTags[i].className.indexOf("tz") == 0){
			showTime(spanTags[i], spanTags[i].className.substring(2));
		}
	}
}

function showTime(currElem, tzOfFset){
	var dayName =  new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	

	var thatTZ = new Date();
	var dataST = thatTZ.toUTCString();

	dataST = dataST.substr(0,dataST.length -3);
	thatTZ.setTime(Date.parse(dataST));
	thatTZ.setHours(thatTZ.getHours() + parseInt(tzOfFset));

	currElem.innerHTML = showHours(thatTZ.getHours()) + showZeroFilled(thatTZ.getMinutes()) + showAMPM(thatTZ.getHours()) + dayName[thatTZ.getDay()];

	function showHours(theHours){
		if(theHours == 0){
			return 12;
		}
		if(theHours < 13){
			return theHours;
		}
		return theHours -12;
	}

	function showZeroFilled(theMinutes){
		if(theMinutes > 9 ){
			return ":" + theMinutes;
		}
		return ":0" + theMinutes;
	}

	function showAMPM(theTime){
		if(theTime < 12 ){
			return " AM  ";
		}
		return " PM ";
	}
}