

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

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery





//retrieve input and store into variables

var startPoint;
var endPoint;



//--------------------------------------------------Styling the map--------------------------------------------------------------//
//------------------------------------------------dont touch code below-------------------------------------------------------------  

// Put USA map on screen onload:
function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
[
 {
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#ebe3cd"
     }
   ]
 },
 {
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#523735"
     }
   ]
 },
 {
   "elementType": "labels.text.stroke",
   "stylers": [
     {
       "color": "#f5f1e6"
     }
   ]
 },
 {
   "featureType": "administrative",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#c9b2a6"
     }
   ]
 },
 {
   "featureType": "administrative.land_parcel",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#dcd2be"
     }
   ]
 },
 {
   "featureType": "administrative.land_parcel",
   "elementType": "labels",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "featureType": "administrative.land_parcel",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#ae9e90"
     }
   ]
 },
 {
   "featureType": "landscape.natural",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#dfd2ae"
     }
   ]
 },
 {
   "featureType": "poi",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#dfd2ae"
     }
   ]
 },
 {
   "featureType": "poi",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#93817c"
     }
   ]
 },
 {
   "featureType": "poi.business",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "featureType": "poi.park",
   "elementType": "geometry.fill",
   "stylers": [
     {
       "color": "#a5b076"
     }
   ]
 },
 {
   "featureType": "poi.park",
   "elementType": "labels.text",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "featureType": "poi.park",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#447530"
     }
   ]
 },
 {
   "featureType": "road",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#f5f1e6"
     }
   ]
 },
 {
   "featureType": "road.arterial",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#fdfcf8"
     }
   ]
 },
 {
   "featureType": "road.highway",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#f8c967"
     }
   ]
 },
 {
   "featureType": "road.highway",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#e9bc62"
     }
   ]
 },
 {
   "featureType": "road.highway.controlled_access",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#e98d58"
     }
   ]
 },
 {
   "featureType": "road.highway.controlled_access",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#db8555"
     }
   ]
 },
 {
   "featureType": "road.local",
   "elementType": "labels",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "featureType": "road.local",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#806b63"
     }
   ]
 },
 {
   "featureType": "transit.line",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#dfd2ae"
     }
   ]
 },
 {
   "featureType": "transit.line",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#8f7d77"
     }
   ]
 },
 {
   "featureType": "transit.line",
   "elementType": "labels.text.stroke",
   "stylers": [
     {
       "color": "#ebe3cd"
     }
   ]
 },
 {
   "featureType": "transit.station",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#dfd2ae"
     }
   ]
 },
 {
   "featureType": "water",
   "elementType": "geometry.fill",
   "stylers": [
     {
       "color": "#b9d3c2"
     }
   ]
 },
 {
   "featureType": "water",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#92998d"
     }
   ]
 }
],
      {name: 'Styled Map'});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38, lng: -96},
    zoom: 4.1,
   
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

//-------------------------------------------- Dont touch this code above--------------------------------
// ---------------------------------------------------------------------------------------------------------


//event listener for submit bttn
$("#submit").on("click", function (event) {
  event.preventDefault();
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
  

  var directionsURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=" + startPoint + "&destination=" + endPoint + "&key=AIzaSyCmO6P7Y2Y9EvIOikraIRNFo-hsXum_SNw";
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