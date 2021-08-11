
function processNumber(number){
    var num = number.toString();
    num = num.split("");
    // var arrayText = list(num);
    var newNum = 0;
    for (var i = 0; i < num.length; i++){
        if (i % 2 === 1){
            num[i] = num[i] * 2;
        }
    }
    for (var i = 0; i < num.length; i++){
        newNum += parseFloat(num[i]);
    }
    console.log(num);
    var input = document.getElementById("input");
    input.innerHTML = "<h1>" + newNum + "</h1>";
}

processNumber(176248);