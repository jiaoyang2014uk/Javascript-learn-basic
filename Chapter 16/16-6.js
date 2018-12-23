$.getJSON("16-6-3.php?jsoncallback=?", function(data){
	creatPage(data);
});

function creatPage(imgData){
	console.log(imgData);
	console.log(window);
	var imgs ="";
	$("#head").html(imgData.title);
	$("#subhead").html(imgData.description);

	$.each(imgData.items, function(i, item){
		imgs += "<li class='ui-state-default'> <a href = '#'><img src='" ;
		imgs += item.media.m.replace(/_m/g, "_s") + "' alt='" + item.title + "'></a></li>"
	});

	$("#sortable").append(imgs);
	$("#sortable").sortable().disableSelection();
}

// $(function() {
// 	var url = "16-6-3.php?jsoncallback=?";
// 	head = document.getElementsByTagName('head')[0];
// 	script = document.createElement('script');
// 	script.type = 'text/javascript'	;
// 	script.src = url;
// 	head.appendChild(script);
// });

