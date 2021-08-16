var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var mainHeader = document.getElementById('header1');
btn1.addEventListener('click', function (){
    if (mainHeader.innerHTML === "Good Afternoon, Draco!"){
        mainHeader.innerHTML = "Good Morning, Draco!";
    } else {
        mainHeader.innerHTML = "Good Afternoon, Draco!";
    }
});