document.onmousemove = moveHandler; 

function moveHandler (evt){
	if(!document.evt){
		evt = window. event;
	}

	animateEye(evt.clientX, evt.clientY);
}

function animateEye(xPos, yPos){

	var leftEye = document.getElementById("lEye");
	var rightEye = document.getElementById("rEye");
	var leftEyeBall = document.getElementById("lDot").style;
	var rightEyeBall = document.getElementById("rDot").style;

	leftEyeBall.left = newEyeBallPos(xPos, leftEye.offsetLeft);
	leftEyeBall.top = newEyeBallPos(yPos,leftEye.offsetTop);
	rightEyeBall.left =  newEyeBallPos(xPos, rightEye.offsetLeft);
	rightEyeBall.top = newEyeBallPos(yPos, rightEye.offsetTop);
    
	function newEyeBallPos(currPos, eyePos){
	return Math.min(Math.max(currPos, eyePos+10), eyePos+60) + "px";
	}
}