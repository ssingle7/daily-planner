// $(document).ready(function(){
console.log("Hello World");
//sets Today's date using moment.js application
var todaysDate = $("#currentDay");
todaysDate.text(moment().format("dddd, MMMM, Do YYYY"));

//create time blocks for each hour 9-5pm and style there
var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

var currentTime = moment().format("H");

//create an element
for (var i=0; i < timeOfDay.length; i++){
    var row = $("<div>");
    row.addClass("row time-block");
    
    var hour = $("<div>");
    hour.addClass("hour col-1");
    row.append(hour);
    var eventHour = moment().set("hour", parseInt(timeOfDay[i])).format("hA");
    hour.text(eventHour);
    
    var textArea = $("<textarea>");
    textArea.addClass("past description col-lg-8");
    row.append(textArea);
    
    var button = $("<button>");
    button.addClass("saveBtn col-1 fas fa-save");
    row.append(button);
    
    $(".container").append(row);
}


