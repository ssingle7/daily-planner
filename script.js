// $(document).ready(function(){
 console.log("Hello World");   
//sets Today's date using moment.js application 
var todaysDate = $("#currentDay");
todaysDate.text(moment().format( "dddd, MMMM, Do YYYY")); 

//create time blocks for each hour 9-5pm and style there 
var timeOfDay = ["9", "10", "11", "12", "13", "14", "15","16", "17"];

var currentTime = moment().format("Hmm");
console.log(currentTime);
if(parseInt(timeOfDay[0]) < parseInt(currentTime)){
    console.log("This time is in the past");
    else()
}
//create an element 
var row = $("<div>");
row.addClass("row time-block"); 

var hour = $("<div>");
hour.addClass("hour col-1");
row.append(hour);

var textArea = $("<textarea>");
textArea.addClass("description col-lg-8");
row.append(textArea);

var button = $("<button>");
// button.addClass("saveBtn col-1 far fa-save");
row.append(button);

$(".container").append(row);
    

// var arrayOfHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    
//     for (var i = 0; i < arrayOfHours.length; i++){

//         var timeBlock = $("row");
//     }
// });
