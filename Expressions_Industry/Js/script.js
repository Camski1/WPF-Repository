//Cameron Kozinski
//WPF sec 01
// 09-09-2013
//Industry-specific


//Project time estimation calculator 

alert("The information you give will give you an estimate of how long a project takes you to complete. This will be helpful in estimating the time needed for future projects");
var linesOfCode = prompt("How many lines of code did you write?");
var timeSpentOnCode = prompt("How long did you spend writing your code?");
var timeSpentInRes = prompt("How much time did you spend on research?");
var timeSpentOnBreaks = prompt("How much time did you spend taking breaks? I wont tell your boss.");

var timespentArray= [timeSpentOnBreaks, timeSpentInRes, timeSpentOnCode,];
var totalTimeSpen= Number(timespentArray[0]) + Number(timespentArray[1]) + Number(timespentArray[2]);


console.log(totalTimeSpen);
