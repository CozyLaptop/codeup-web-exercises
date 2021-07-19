(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var newString = planetsArray.join("<br>");
    console.log(newString);

    var tempPlanet;
    var planetList = [];
    for(var i = 0; i < planetsArray.length; i++){
        tempPlanet = ("<li>" + planetsArray[i] + "</li>");
        planetList.push(tempPlanet);
    }
    planetList.unshift("<ul>");
    planetList.push("</ul>");
    var planetListString = planetList.join("");
    console.log(planetListString);
})();