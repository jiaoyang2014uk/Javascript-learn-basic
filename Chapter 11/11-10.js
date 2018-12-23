window.addEventListener("load", initDate, false)

function initDate(){
	var spanTags =  document.getElementsByTagName("span");

	for(var i=0; i< spanTags.length; i++){
		if(spanTags[i].className.indexOf("daysTill") > -1){
			spanTags[i].innerHTML = dayCount(spanTags[i].id);
		}
	}

	function dayCount(date){
		var days;

		switch(date){
			case "birthday" :
				days = daysTill(8,4)
				break;
			case "xmas" :
				days = daysTill(12,25)
				break;
			case "anniversity" :
				days = daysTill(3,1)
				break;
			default:
		}
		return  days + " ";
	}

	function daysTill(mm,dd){
		var now =  new Date();
		var inDate =  new Date(now.getFullYear(), mm -1, dd);

		if(now.getTime() > inDate.getTime()){
			inDate.setYear(inDate.getFullYear() +1);
		}
		return Math.ceil(dayToDay(inDate) - dayToDay(now));
	}

	function dayToDay(value){
		return  value.getTime()/(1000 * 60 * 60 *24);
	}
}