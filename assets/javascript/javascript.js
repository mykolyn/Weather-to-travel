//js test
$(".test").on("click", function () {
    alert("jquery works yay :)")
})


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




//retrieve input and store into variables

var startPoint;
var endPoint;

// On click event
$("#submit").on("click", function (event) {
    event.preventDefault();
    var startPoint = $("#pointA").val();
    var endPoint = $("#pointB").val();
    console.log("Point A: " + startPoint);
    console.log("Point B: " + endPoint)
})



// Put USA map on screen onload:
$(document).ready(function () {    
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38, lng: -98},
        zoom: 4.5
      });

})



//AJAX call to map api

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