// $("#hide-btn").click(()=> {
//     $("#paragraph").toggle();
// })
var button = document.getElementById("hide-btn");
var paragraph = document.getElementById("paragraph");
var words = paragraph.innerText;
button.addEventListener("click", ()=>{
    paragraph.style.display = "none";
});