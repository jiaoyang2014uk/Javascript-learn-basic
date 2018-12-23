window.addEventListener("load",initAll, false);

function initAll(){
	var radioButtons = document.getElementsByTagName("input");

	for(var i=0; i< radioButtons.length; i++){
		if(radioButtons[i].type == "radio"){
			radioButtons[i].addEventListener("click",chgChart,false);
		}
	}
	chgChart();
}

function chgChart(){
	var bChart = {
		name : "Desktop brower usage by year",
		years:[2010,2011,2012,2013,2014],
		fieldnames:["IE","Firefox","Chrome"],
		fields: [
		[1,2,3,4,5],
		[4,3,5,3,2],
		[7,3,2,1,5]
		]
	}

	var mChart = {
		name : "Mobile device vendors by year",
		years:[2010,2011,2012,2013,2014],
		fieldnames:["Nokia","Apple","Samsung","RIM"],
		fields: [
		[1,2,3,4,5],
		[4,3,5,3,2],
		[7,3,2,1,5],
		[4,8,9,6,5]
		]
	}

	var radioButtons = document.getElementsByTagName("input");
	var currDirection = getButton("direction");
	var getColor = getButton("color");

	if(getButton("type") == "brower"){
		var thisChart = bChart;
	}
	else{
		var thisChart = mChart;
	}

	var chartBody = "<h2>" + thisChart.name + "</h2><table>";


	for(var i=0; i< thisChart.years.length; i++){
		if(currDirection == "horizontal"){
			chartBody += "<tr class= 'horiz'><th rowspan=" + (thisChart.fieldnames.length+1);
			chartBody += ">" +thisChart.years[i]+ "</th> <td colspan=2></td></tr>";
			for(var j=0; j<thisChart.fieldnames.length; j++){
				chartBody += "<tr class= 'horiz'><td>" + thisChart.fieldnames[j];
				chartBody += "</td><td> <span style='background: " + getColor;
				chartBody +=  ";width: "+thisChart.fields[j][i]*20 + "px;'></span>";
				chartBody += thisChart.fields[j][i] +"</td></tr>"

			}
		}
		else{
			chartBody += "<tr class= 'vert'> <th rowspan=2>"+ thisChart.years[i]+"</th>";
			for(var j=0; j< thisChart.fieldnames.length; j++){
				chartBody += "<td> <span style='background: " + getColor;
				chartBody +=  ";height:"+thisChart.fields[j][i]*20 + "px;'></span></td>";
			}
			chartBody += "</tr><tr class='vert'>";
			for(j=0; j<thisChart.fieldnames.length; j++){
				chartBody += "<td>" + thisChart.fields[j][i]+ "<br>";
				chartBody += thisChart.fieldnames[j]+ "</td>";
			}
			chartBody += "</tr>";
		}
	}
	chartBody += "</table>";
	document.getElementById("chartArea").innerHTML = chartBody;

	function getButton(buttonSet){
		for(var i=0; i< radioButtons.length; i++){
			if(radioButtons[i].name == buttonSet && radioButtons[i].checked){
				return radioButtons[i].value;
			}
		}
		return -1;
	}
}