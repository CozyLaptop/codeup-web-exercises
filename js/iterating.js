(function() {
    "use strict"
    var names = ["Albert", "Kyle", "Chris", "OJ"];
    console.log(names.length);
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    names.forEach(function (element) {
        console.log(element);
    });
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    function first(array) {
        console.log(array[0])
        return array[0];
    }

    function second(array) {
        console.log(array[1])
        return array[1];
    }

    function last(array) {
        console.log(array[array.length - 1])
        return array[array.length - 1];
    }
    first([1,2,3,4,5]);
    second([1,2,3,4,5]);
    last([1,2,3,4,5]);
})();