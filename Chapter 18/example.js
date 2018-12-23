javascript:(function(){
	var styles='*{background:#fff !important; color: #000 !important} :link, :link *{color: #00f !important} :visited : visited *{color: #93C !important}';
	var newSS= document.createElement("link");
	newSS.rel = 'stylesheet';
	newSS.href = 'data:text/css,' + escape(styles);
	document.getElementsByTagName('head')[0].appendChild(newSS);
})();

javascript:(function(){
	var inText = window.getSelection()+ '';
	if(!inText){
		inText =  prompt('Word:','');
	}
	if(inText){
		window.open('http://www.answers.com/topic/' + escape(inText)+ '#Ameircan_Heritage_Dictionary_ds','dictWin','width= 800,height=500,left=75,top=175,scrollbars=yes');
	}
})();

javascript:(function(){
	var inText = window.getSelection()+ '';
	if(!inText){
		inText =  prompt('Word:','');
	}
	if(inText){
		window.open('http://www.answers.com/topic/' + escape(inText)+ '#Roget\'sThesaurus_ds','thesWin','width= 800,height=500,left=75,top=175,scrollbars=yes');
	}
})();


javascript:(function(){
	var iWin,i,t='',di= document.images;
	for(i=0; i<di.length; i++){
		if(t.indexOf(di[i].src)<0){
			t+='<tr><td><img src=' + di[i].src+' /></td><td>'+ di[i].height+'</td><td>'+di[i].width + '</td><td>'+ di[i].src + '</td></tr>';
		}
	}
	if(t==''){
		alert('No images!');
	}
	else{
		iWin =  window.open('','IW', 'width=800, height=600, scrollbar=yes');
		iWin.document.body.innerHTML = '<table border=1 cellpadding=10 cellspacing=0><tr><th>Image</th><th>Height</th><th>Width</th><th>URL</th></tr>'+ t + '</table>';
	}
})();

javascript:(function(){
	var eWin,n,i,j,w,t= '<table border=1 cellpadding=20 cellspacing=0>', l=document.createElement('p'),
	v= 'aAeEiIoOuUyY', s=new Array('acute','circ','Elig','grave','ring', 'slash','tilde', 'uml');

	for(i=0; i<v.length;i++){
		for(j=0;j<s.length;j++){
			w = v.charAt(i) + s[j] + ';';
			l.innerHTML = '&' + w;
			n= l.innerHTML;

			if(n.length==1){
				t += '<tr><td>&' + w + '</td><td>&'+ 'amp&;' + w +  '</td><td>&' + 'amp;#' + n.charCodeAt(0)+ ';</td></tr>';
			}
		}
	}


	eWin = window.open('','EW','scrollbar=yes,width=300, height=' + screen.height);
	eWin.document.body.innerHTML =  t + '</table>';
})();

javascript:(function(){
	var s,i,n,h='#',x='0123456789ABCDEF',c=prompt('R,G,B:','');
	if(c){
		s=c.split(',');

		for(i=0; i<3; i++){
			n=parseInt(s[i]);
			h += x.charAt(n>>4) + x.charAt(n&15);
		}
		prompt('Hexcolor',h);
	}
})();

javascript:(function(){
	var t, expr =  prompt('Length in Kilometers:', '');
	if(isNaN(parseFloat(expr))){
		t=expr + ' is not a number';
	}
	else{
		t= 'Lengh in mile is ' + Math.round(expr*6214)/10000;
	}
	alert(t);
})();


javascript:(function(){
	var evl,expr= prompt('Formula...(e.g: 2*2 + 7/8)');
	with(Math)
	try{
		evl = parseFloat(eval(expr));
		if(isNaN(evl)){
			throw('Not a number');
		}
		prompt('Result of ' + expr + ':',evl);
	}
	catch(evl){
		alert(evl);
	}
})();


javascript:(function(){
	window.open('http://tinyurl.com/create.php?url=' + location.href, '','width=750,height=500,scrollbar=yes');
})();


javascript:(function(){
	window.open('http://validator.w3.org/check?url=' + location.href, '','width=800,height=900,resizable=yes,scrollbar=yes');
})();

javascript:(function(){
	location.href = 'mailto:?SUBJECT=' + document.title + '&BODY=' + escape(location.href) + '\r' + window.getSelection();
})();


javascript:(function(){
	window.resizeTo(640,480);window.moveTo(0,0);
})();

javascript:(function(){ 
	window.resizeTo(700,screen.availHeight);window.moveTo(0,0); 
})();

javascript:(function(){ 
	window.resizeTo(700,screen.availHeight);window.moveTo(screen.availWidth-700,0); 
})();