//Cameron Kozinski
//WPF sec 01
// 09-09-2013
//Industry-specific


//Project time estimation calculator 

alert("The information you give will give you an estimate of how long a project takes you to complete. This will be helpful in estimating the time needed for future projects"); //This is an alert letting the user know what the info will be for.
var linesOfCode = prompt("How many lines of code did you write?"); //This var is for storing the numer of lines of code. the prompt is asking the user for the information. 
var timeSpentOnCode = prompt("How long did you spend writing your code?"); //This var is for the time spent writting the code. The prompt is asking the user for the information.
var timeSpentInRes = prompt("How much time did you spend on research?"); //This var is for time spent on research. The prompt is asking the user for the info. 
var timeSpentOnBreaks = prompt("How much time did you spend taking breaks? I wont tell your boss."); // This var is for tome spent taking breaks. The prompt is asking the user for the info

var timespentArray= [timeSpentOnBreaks, timeSpentInRes, timeSpentOnCode,]; //This array is for storing the three timeSpent var's
var totalTimeSpen= Number(timespentArray[0]) + Number(timespentArray[1]) + Number(timespentArray[2]); //This var is storing the total time spent. The array was added by casting the strings as numbers

var timePerLine= totalTimeSpen / linesOfCode; //This var is holding time spent per line of code. This number comes frome deviding totalTimeSpen by linesOfCode;

alert("Your project took " + totalTimeSpen +"min to complete, and your time per line of code was " +timePerLine+"min." )

