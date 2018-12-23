$(document).ready(function(){
	$("#example").dialog({
		modal:true,
		resizable:false,
		buttons:[{
			text: "OK",
			click: function(){
				$(this).dialog("close");
			}
		}]
	});
});