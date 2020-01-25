$(document).on("click", "#submit", function () {

    var input = $("#pointA").val();

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=fe2767efcdc5875e488e5fcdeb27a943&units=imperial"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("THIS SHOULD SHOW UP IN THE CONSOLE")
        console.log(response)
        console.log(response.city.name)
        var sunrise = response.city.sunrise;
        var sunset = response.city.sunset;
        console.log("+++++++")
        convertedMorning = timeConverter(sunrise)
        console.log("+++++++")
        convertedNight = timeConverter(sunset)
        console.log("+++++++")
        console.log("___________")
        console.log("___________")
        $(".table").append(
        $("<tr>").append(
        $("<td>").text(response.city.name),
        console.log(response.list[1].wind),
        $("<td>").text(response.list[1].wind.speed),
        $("<td>").text(response.list[1].main.humidity),
        $("<td>").text(response.list[1].main.temp),
        $("<td>").text(convertedMorning),
        $("<td>").text(convertedNight),
        console.log(response.list[1].weather[0].description),
        $("<td>").text(response.list[1].weather[0].description)

            ))

    })
    var input1 = $("#pointB").val();

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + input1 + "&appid=fe2767efcdc5875e488e5fcdeb27a943&units=imperial"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("THIS SHOULD SHOW UP IN THE CONSOLE")
        console.log(response)
        console.log(response.city.name)
        var sunrise = response.city.sunrise;
        var sunset = response.city.sunset;
        console.log("+++++++")
        convertedMorning = timeConverter(sunrise)
        console.log("+++++++")
        convertedNight = timeConverter(sunset)
        console.log("+++++++")
        console.log("___________")
        console.log("___________")
        $(".table").append(
        $("<tr>").append(
        $("<td>").text(response.city.name),
        console.log(response.list[1].wind),
        $("<td>").text(response.list[1].wind.speed),
        $("<td>").text(response.list[1].main.humidity),
        $("<td>").text(response.list[1].main.temp),
        $("<td>").text(convertedMorning),
        $("<td>").text(convertedNight),
        console.log(response.list[1].weather[0].description),
        $("<td>").text(response.list[1].weather[0].description)
            ))

    })
})

hive> select; from_unixtime(timeConverter("convertedMorning", 'HH:mm:ss'),"hh:mm:ss a");




function timeConverter(a) {
    let unix_timestamp = a
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log("this is the formatted time: ", formattedTime);
    return formattedTime
}