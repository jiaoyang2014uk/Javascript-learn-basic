$(function(){
	var nameList = "zhao*qian*sun*li*zhou*wu*zheng*wang*";

	$("#searchField").autocomplete({
		source:nameList.split("*")
	});
});