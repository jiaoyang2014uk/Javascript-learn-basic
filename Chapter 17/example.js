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