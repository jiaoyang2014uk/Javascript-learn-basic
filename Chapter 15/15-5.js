$(document).ready(function(){
	$("#theMenu").accordion({
		animated:false,
		collapsible:true,
		header: ".menuLink",
		heightStyle: "content",
		event:"mouseover",
		active:false
	});
});