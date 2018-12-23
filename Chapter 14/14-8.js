$(document).ready(function(){
	$("a").hover(function(){
		$(this).css({
			"color":$(this).attr("id"),
			"background-color":"silver"
		});
	});

	$("a").mouseout(function(){
		$(this).css({
			"color": "white",
			"background-color":"gray"
		});
	});

	$("a").click(function(evt){
		$("#color").css({
			"color": $(this).attr("id")
		});
		evt.preventDefault();
	});
});