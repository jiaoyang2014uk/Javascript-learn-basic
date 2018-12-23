window.addEventListener("load", getLocation, false);

function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(position){
				document.getElementById("lat").value = position.coords.latitude;
				document.getElementById("lng").value = position.coords.longitude;

				document.getElementById("mapQuery").href += position.coords.latitude + "," +  position.coords.longitude;
			}
		);
	}
}  