

// -------------------------code for video playing in background---------------
function deferVideo() {

  //defer html5 video loading
$("video source").each(function() {
  var sourceFile = $(this).attr("data-src");
  $(this).attr("src", sourceFile);
  var video = this.parentElement;
  video.load();
  // uncomment if video is not autoplay
  //video.play();
});

}
window.onload = deferVideo;

//-------------------------------------------------------------------------------


//retrieve input and store into variables

var startPoint;
var endPoint;

// array to hold coordinates to check weather for
var convertedCoords = [];


// Put USA map on screen onload:
$(document).ready(function () {    
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38, lng: -96},
    zoom: 4.1
  });
})



// Google Geocoding API to convert coordinates to address/city:
function getGeocodeCity(coordinates) {

  var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +coordinates+ "&key=AIzaSyAmLr5yU5_SJ5Jx1AA-T59scJF4xuLvLEc";
  $.ajax({
    url: geocodeURL,
    method: "GET"
  })
    .then(function(response) {
      // console.log("---------------geocode response-------------")
      // console.log(response)
      var geocodedCity = response.results[4].formatted_address
      console.log("City from Geocode: " + geocodedCity)
      convertedCoords.push(geocodedCity)
      console.log("Array of converted cities: " + convertedCoords)

    })

}

// example run of geocode API
// getGeocodeCity("29.76043,-95.3698084");

//AJAX call to map api

$("#submit").on("click", function (event) {
  event.preventDefault();
  var coordsToCheck = [];
  var convertedCoords = [];
  $("#directions").empty();
  var startPoint = $("#pointA").val();
  var endPoint = $("#pointB").val();
  console.log("Point A: " + startPoint);
  console.log("Point B: " + endPoint)


    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var mapOptions = {
      zoom:4,
      center: {lat: 38, lng: -96}
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
  
  
    var request = {
      origin: startPoint,
      destination: endPoint,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
  

  var directionsURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=" + startPoint + "&destination=" + endPoint + "&key=AIzaSyAmLr5yU5_SJ5Jx1AA-T59scJF4xuLvLEc";
  $.ajax({
    url: directionsURL,
    method: "GET"
  })
    
    .then(function(response) {
        var results = response.data;
        console.log(response)
        if (response.status == "NOT_FOUND"){
          $("#pointA").val("Invalid Adress");
          $("#pointB").val("Please Try Again");
        }
        else{
          console.log(response.routes[0].legs[0].steps[0].html_instructions)
          var distanceValue;
        for (var i = 0; i < response.routes[0].legs[0].steps.length; i++) {
          var steps = $("<h6>");
          steps.addClass("card-title");
          steps.html(response.routes[0].legs[0].steps[i].html_instructions);
          $("#directions").append(steps);
          distanceValue = response.routes[0].legs[0].steps[i].distance.value;
          // console.log(response.routes[0].legs[0].steps[i].distance); 
          // distanceValue will be used to determine locations for which to check weather
          var startLat = response.routes[0].legs[0].start_location.lat;
          var startLong = response.routes[0].legs[0].start_location.lng;
          var originCoords = startLat + "," + startLong;
          

          if (distanceValue >= 80000) {
            var lat = response.routes[0].legs[0].steps[i].end_location.lat;
            var lng = response.routes[0].legs[0].steps[i].end_location.lng;
            var latLong = lat + "," + lng;
            coordsToCheck.push(latLong)
            // return(coordsToCheck)
          }

          var endLat = response.routes[0].legs[0].end_location.lat;
          var endLong = response.routes[0].legs[0].end_location.lng;
          var endCoords = endLat + "," + endLong;
          
        }
      }
      console.log("Origin: " + originCoords)
      console.log("Destination: " + endCoords)

      getGeocodeCity(originCoords);
      
      for (var i = 0; i < coordsToCheck.length; i++) {
        getGeocodeCity(coordsToCheck[i])
      }

      getGeocodeCity(endCoords);
      console.log("coordsToCheck array: " + coordsToCheck)
    })
})



//AJAX call to convert locations into coordinates

// function to find location every 50 miles from starting point:
// 

//AJAX call to weather api with coordinates

//render route list and append weather forecast to list



// AJAX call reference code snippet below

     /*
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    anime + "&api_key=TnrUMe7wuNGbQa9QnDgl0GHC3ahMdl6q&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    
    .then(function(response) {
        var results = response.data;
        console.log(results)
    })
*/