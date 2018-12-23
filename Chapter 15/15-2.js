$(document).ready(function(){
	$("#bodyText").hide();

	$("#Text").click(function(){
		$("#bodyText").toggle("highlight",{},2000);
		return false
	});
});