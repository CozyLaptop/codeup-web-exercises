var className, startTime, endTime, classSize;
var classes = [
    {name: "math", startTime: "8", endTime: "12", classSize: "4"},
    {name: "science", startTime: "12", endTime: "14", classSize: "3"},
]

function isClassFull(selectedClass){
    if (selectedClass.classSize > 5){
        return true;
    }
    else {
        return false;
    }
}
function checkSchedule(selectedClass) {
    for (var i = 0, l = classes.length; i < l; i++) {
        var thisClassStartTime = classes[i].startTime;
        var thisClassEndTime = classes[i].endTime;
        if (selectedClass.startTime >= thisClassStartTime && selectedClass.startTime < thisClassEndTime) {
            return true;
        }
    }
    return false;
}
function addClass() {
    className = prompt("Enter new class name: ")
    startTime = prompt("Enter start time(4pm is 16): ")
    endTime = prompt("Enter end time(4pm is 16): ")
    classSize = prompt("Enter current class size: ")
    let newClass = {name: className, startTime: startTime, endTime: endTime, classSize: classSize}

    if (isClassFull(newClass)) {
        console.log("Class is full")
    } else if (checkSchedule(newClass)) {
        console.log("Class conflicts with current schedule")
    } else {
        classes.push(newClass)
        console.log("Successfully added class")
    }
}