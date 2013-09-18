//Cameron Kozinski
//09-17-2013
//Industry

//How much time do you have to finish a project?

alert("This will help you find out how many hour you have left to finish your project!");

var timeLine = prompt("How many days do you have to complete your project?");
var hrsPerDay = prompt("How many hours per day do you work?");
var daysPerWeek = prompt("How many days per week do you work?");
var extraHrsYesNo = prompt("Are you willing to add extra hours each day to get the job finished more quickly? Yes or No.")

if(extraHrsYesNo === "Yes"){
	var extraHrs = prompt("How many hours per day will you add?");
	var totalHrsPerDay = Number(extraHrs) + Number(hrsPerDay);
	var hrsNeededForProj = Number(hrsPerDay) * Number(timeLine);
	 

}else{

}