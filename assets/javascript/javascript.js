
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

//-------------------------------------------------------------------------------

// map functions
function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom:4,
    center: {lat: 38, lng: -96}
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);
  directionsRenderer.setPanel(document.getElementById('directions'));
}

function calcRoute() {
  var request = {
    origin: startPoint,
    destination: endPoint,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(response);
    }
  });
}



// Put USA map on screen onload:
$(document).ready(function () {
// initMap();
  /*
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38, lng: -96},
    zoom: 4.1
  });
*/

})





//AJAX call to map api

$("#submit").on("click", function (event) {
  event.preventDefault();
  startPoint = $("#pointA").val();
  endPoint = $("#pointB").val();
  console.log("Point A: " + startPoint);
  console.log("Point B: " + endPoint)

 calcRoute();

/*
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
          var distanceValue = 0;
        for (var i = 0; i < response.routes[0].legs[0].steps.length; i++) {
          var steps = $("<h6>");
          steps.addClass("card-title");
          steps.html(response.routes[0].legs[0].steps[i].html_instructions);
          $("#directions").append(steps);
          distanceValue = distanceValue + response.routes[0].legs[0].steps[i].distance.value;
          console.log(distanceValue);
          // distanceValue will be used to determine locations for which to check weather
        }
      }
    })

*/

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