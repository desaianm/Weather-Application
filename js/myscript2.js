/* myscript2.js */
$(document).ready(function() {
	console.log("in jsonOut");
	var d = new Date();
	
	$("#cdate").html(d);

	// get data from local storage
	rowID = localStorage.getItem("rowID");
	cityArray = JSON.parse(localStorage.getItem("cityArray"));
	latArray = JSON.parse(localStorage.getItem("latArray"));
	lngArray = JSON.parse(localStorage.getItem("lngArray"));
	var check  =  localStorage.getItem("check");
	var lat = latArray[rowID];
	var lon = lngArray[rowID];	
	var city = localStorage.getItem("city");
	console.log(check);
	if(check == "lat"){
		var apiURI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=484e47e5a69dfcd6d1d089e84051d0d5`;
	}
	else if(check == "city"){
		var apiURI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=484e47e5a69dfcd6d1d089e84051d0d5`;
	}
  
	// ajax call
	$.ajax({
		type: "GET", url: apiURI,
		dataType: "jsonp",
		success: function (response) {
			console.log(response);
			$(".dataCity").html(`City : ${response.name}`);
			let temp = (response.main.temp - 273.15).toFixed(2);
			$(".dataTemp").html(`Temperature :${temp} C`);			
			//$(".dataTemp").html((response.main.temp - 273.15).toFixed(2) + " C");
			$(".dataWind").html(`Wind : ${response.wind.speed} m/s`);
			$(".dataHum").html(`Humidity : ${response.main.humidity} %`);
			$(".dataPress").html(`Pressure: ${response.main.pressure} hPa`);
		}

	});
		 
	}); // end of document ready

/*
 The Kelvin scale is an absolute, thermodynamic temperature scale 
 using as its null point absolute zero, the temperature at which 
 all thermal motion ceases in the classical description of thermodynamics.
	To get Celsius, subtract 273.15 from Kelvin temp
	
	hPa - hectopascal
	m/s - metre per second
*/

// clouds.all (%)
// main.humidity, pressure, temp
// name
// syst.country, sunrise, sunset
// weather[x].description
// wind.deg, speed


