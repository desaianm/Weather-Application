var cityArray = new Array();
var latArray = new Array();
var lngArray = new Array();
var rowID;

$(document).ready(function() {
  console.log("in doc ready");

  $.getJSON("dataFiles/cities.json", function(data) {
    console.log("in cities.json");
    $("#cityList").html("");
    $("#content").append(`
    <section class="grid1"> 
    <span>Enter City To Know Weather</span>&nbsp &nbsp &nbsp &nbsp 
    <input type="text" id="cityinput"/><br> 
    <input type="button" id="cbutton" value="Submit"/><br> 
    </section>
    `);
    for (let x=0; x < data.cities.length; x++) {
      cityArray[x] = data.cities[x].cityName;
      latArray[x] = data.cities[x].cityLat;
      lngArray[x] = data.cities[x].cityLng;

      $("#content").append(
        `<section class="card${x}">
          <br>
            <a href='weather.html' id='${x}' class="cities">
              ${data.cities[x].cityName}
            </a>
            <section>
        <br>
        `      
      );
    }
    localStorage.setItem("cityArray", JSON.stringify(cityArray));
    localStorage.setItem("latArray", JSON.stringify(latArray));
    localStorage.setItem("lngArray", JSON.stringify(lngArray));

  }); // end of .getJSON
});  //end of doc ready;

$(document).on("click", ".cities", function() {
  localStorage.setItem("check","lat");
  localStorage.setItem(
    "rowID",
    $(this).attr("id")
  );
});

$(document).on("click", "#cbutton", function() {
  var city = $("#cityinput").val();
  console.log(city);
  localStorage.setItem("check","city");
  localStorage.setItem("city",city);
  window.location.href="weather.html";

});

