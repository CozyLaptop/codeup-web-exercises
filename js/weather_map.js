"use strict";
var placeName;
mapboxgl.accessToken = MAPBOX_API_TOKEN;

//This adds the mapbox to our file
//Set center to San Antonio, TX on start.
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.491142, 29.424349] ,
    zoom: 3,
    pitch: 60
});
//This adds the geocoder function to the map
//Remove default marker for proper functionality
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: false,
    mapboxgl: mapboxgl
});
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
//Adds marker to map to replace the default marker
var marker = new mapboxgl.Marker({
    draggable: true,
})
    .setLngLat([-98.48358471539157, 29.418933660422695])
    .addTo(map);
//On 'result' from the geocoder search box
geocoder.on('result', function(data) {
    console.log(data);
    marker.setLngLat([data.result.center[0],data.result.center[1]]).addTo(map)
    $(".place").html(data.result.place_name);
    refreshCards();
});
//On dragend from our marker
marker.on('dragend', function() {
    var coord = {
        lat: marker.getLngLat().lat,
        lng: marker.getLngLat().lng }
    reverseGeocode(coord, MAPBOX_API_TOKEN).then(function (data){
        $(".place").html(data.features[0].place_name);
        refreshCards();
    });
});
//This function clears and inputs the cards using data from geocoder
function refreshCards(){
    $(".insert-cards").html("");
    //Gets weather data using the openweathermap API
    //Marker lon, lat can be changed by either dragging the marker,
    //or by using the search box
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: WEATHER_MAP_API_TOKEN,
        lat: marker.getLngLat().lat,
        lon: marker.getLngLat().lng,
        units: 'imperial'
    }).done(function (data) {
        //Grabs the full 8 days from the API
        data.daily.forEach(function (day, index) {
            var displayDay;
            if (index === 0) {
                displayDay = "Today";
            } else if (index === 1) {
                displayDay = "Tomorrow"
            } else {
                var dayOfWeek = new Date(day.dt * 1000);
                displayDay = (new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(dayOfWeek));
            }
            console.log(data);
            var card =
                "          <div class=\"col-12 mb-2\">\n" +
                "            <div class=\"card ml-2 mr-2 text-white bg-info\">\n" +
                "               <h5 class='text-center m-1 font-weight-light'>" + displayDay + "</h5>" +
                "               <div class=\"row\">\n" +
                "                 <div class=\"col-6 d-flex flex-column text-center align-items-center justify-content-center\">\n" +
                "                   <h1 class=\"font-weight-bold centered\">" + day.temp.day.toFixed(1) + "&#730" + "F" + "</h1>\n" +
                "                   <h5 class=\"font-weight-light\">" + day.weather[0].description + `<img class="icon-image" src="http://openweathermap.org/img/w/` + day.weather[0].icon + `.png">` + "</h5>\n" +
                "                 </div>\n" +
                "                 <div class=\"col-6 text-center mt-auto mb-auto\">\n" +
                "                   <h6 class=\"mr-3 font-weight-light align-self-end\">" + "Humidity: " + day.humidity + "</h6>\n" +
                "                   <h6 class=\"mr-3 font-weight-light align-self-end\">" + day.wind_speed + " mph" + "</h6>\n" +
                "                   <h6 class=\"mr-3 align-self-end\">" + windCardinalDirection(day.wind_deg) +
                "                   <h6 class=\"mr-3 font-weight-light align-self-end\">" + "Pressure: " + day.pressure + "</h6>\n" +
                "                 </div>\n" +
                "               </div>\n" +
                "            </div>\n" +
                "          </div>"
            $(".insert-cards").append(card);
        });
    }).fail(function (error) {
        console.log(error);
    });
}
// Initialization of marker and refresh cards
reverseGeocode({
        lat: marker.getLngLat().lat,
        lng: marker.getLngLat().lng
    },
    MAPBOX_API_TOKEN).then(function (data){
    $(".place").html(data.features[0].place_name);
    refreshCards();
});

// Geocode and reverseGeocode functions
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
}
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
}

//Functions for correct formatting of strings

// This function takes a number between 0 and 360 and returns a
// wind direction abbreviation. the MapBox API gives us a "wind degrees" datum
// this takes the "wind degrees" and converts it into a familiar abbreviation

function windCardinalDirection(degrees){
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees  <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else  if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25)  {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}
function getTime(){
    var d = new Date( );
    d.setHours( d.getHours() + 2 ); // offset from local time
    var h = (d.getHours() % 12) || 12; // show midnight & noon as 12
    return (
        ( h < 10 ? '0' : '') + h +
        ( d.getMinutes() < 10 ? ':0' : ':') + d.getMinutes() +
        ( d.getHours() < 12 ? ' AM' : ' PM' )
    );
}