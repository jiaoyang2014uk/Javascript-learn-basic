$(document).ready(function(){
	$("a").click(function(evt){
		$("#color").css({
			"color": $(this).attr("id")
		});
		evt.preventDefault();
	});
});