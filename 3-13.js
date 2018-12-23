var buzzwords =  new Array ("Apple","Peach","Grape","WaterMelen","Orange","Banana","Pineapple","Palm","Milk","Meat","Ice Cream","Chicken","Duck","Cow","Sheep","Mouse","Tiger","Rabit","Dragon","Snake","Horse","Monkey","Dog","Pig");
var usedWords = new Array(buzzwords.length);

window.onload = initAll;

function initAll(){
	if(document.getElementById){
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}else{
		alert("Sorry, your brower does not support script!");
	}
}

function newCard(){
	for(var i=0; i<24; i++){
		setSquare(i);
	}
}

function setSquare(thisSquare){
	do{
		var randomWord = Math.floor(Math.random() * buzzwords.length);
	}while(usedWords[randomWord]);

	usedWords[randomWord] = true;
	var currSquare = "square" + thisSquare;
	document.getElementById(currSquare).innerHTML = buzzwords[randomWord];
	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
}

function anotherCard(){
	for( var i=0; i<buzzwords.length; i++){
		usedWords[i] = false;
	}
	newCard();
	return false;
}

function toggleColor(evt){
	if(evt){
		var thisSquare = evt.target;

	}else{
		var thisSquare = window.event.srcElement;
	}

	if(thisSquare.className == ""){
		thisSquare.className = "pickedBG";
	}else{
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin(){
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array (1,31);

	for(var i=0; i<24; i++){
		var currSquare = "square" + i;
		if(document.getElementById(currSquare).className != ""){
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
			}
	}

	

	for(var i=0; i<winners.length; i++){
		if((winners[i] & setSquares) == winners[i]){
			winningOption = i;
		}
	}

	
	if(winningOption > -1){
		for(var i=0; i<24; i++) {
			if(winners[winningOption] & Math.pow(2,i)){
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";

			}
		}
		
	}
}