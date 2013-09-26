//Cameron Kozinski
//09-24-13
//Functions_Industry

//Vacation Days
//The two alerts are informing the user of how to use the page
alert("This page will help you find the number of Vacation Days you have this year. On your first year you get 7 day. After that you get 3 extra days for each year of work!");
alert("If you don't use the vacation time you can role it over to the next year, but if the time is not used the following year that time will be lost. ")

var numOfYears = prompt("How many years have you been with the company?");//This var is holding the number of years the user has been with the company
var roleOverDays = prompt("How many vacation days do you have left from last year?");//This var is holding the number of role over day the user has from last year. The information is taken withe the prompt
var yearOne = 7;
var extraYears = numOfYears - 1;
var yearsAfter = 3;

var vacationDays = function(extraYears, yearsAfter, roleOverDays, yearOne){
	var numOfDays = extraYears * yearsAfter + roleOverDays + yearOne;
	return numOfDays;
}

var finishedAnswer = vacationDays(Number(extraYears), yearsAfter, Number(roleOverDays), yearOne);

alert("You should be happy to know that you have " +finishedAnswer+ " days of vacation this year!");