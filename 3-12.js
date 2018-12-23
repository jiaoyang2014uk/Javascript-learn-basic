window.onload = initAll;
var usedNums = new Array(76);

function initAll(){
	if(document.getElementById){
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}else{
		alert("Sorry, your brower doed not support script!");
	}
}

function newCard(){
	for(var i=0; i<24;i++){
		setSquare(i);
	}
}

function setSquare(thisSquare){
var currSquare = "square" + thisSquare;
var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
var colBasis = colPlace[thisSquare] * 15;
var newNum;

	do{
	newNum = colBasis + getNewNum() + 1;
	}while(usedNums[newNum]);

	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum(){
	return Math.floor(Math.random() * 15);
}
  
function anotherCard(){
	for(var i=0;i<usedNums.length;i++){
		usedNums[i]=false;
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
	var winners = new Array(31, 8912913);

	for(var i=0; i<24; i++){
		var currSquare = "square" + i;
		if(document.getElementById(currSquare).className != ""){
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}

	console.log(setSquares);

	for (var i=0;i<winners.length;i++){
		if(winners[i] & setSquares == winners[i]){
			winningOption = i;
		}
	}

	console.log(winningOption);

	if(winningOption > -1){
		for (var i=0;i<24;i++){
			if (winners[winningOption] & Math.pow(2,i)){
				currSquare =  "square" + i;
				document.getElementById(currSquare).className = "winningBG";

			}
		}
	}

}