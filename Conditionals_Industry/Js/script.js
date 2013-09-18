//Cameron Kozinski
//09-17-2013
//Industry

//Employee Lunch

alert("This page will help you find what you can spend on your employee's for lunch!");//This alert is telling the user what the info they give is for.

var budgetTot = prompt("What is your budget for lunch?");//That var is going to hold the budget total, and the prompt is getting the info from the user.
var empoyeeNum = prompt("How many employees will be going with you to lunch?");//The var is holding the number of employees going to lunch, and the prompt is getting the info from the user.
var ppaBudget = budgetTot / (Number(empoyeeNum) + 1); //PPA stands for per person average and that is the var holding that info 
var greatLunch = prompt("Hom much money do you have to spend per person if are going to have a great lunch?"); //The var is holding what the user thinks will = a great lunch and the prompt is getting the info from the user.
var goodLunch = prompt("Hom much money do you have to spend per person if are going to have a good lunch?"); //The var is holding what the user thinks will = a good lunch and the prompt is getting the info from the user.

if(ppaBudget >= Number(greatLunch)){//The is is finding if the budget = a great lunch or better. 
	alert("You have plenty to spend per person! You can spend $" +ppaBudget+ " per person.");//the alert is giving the user a total and letting the user know they can have a great lunch.
}else if(ppaBudget >= Number(goodLunch)){//The is is finding if the budget = a good lunch or better. 
	alert("You can take a nice lunch. You have $" +ppaBudget+ " to spend per person.")//the alert is giving the user a total and letting the user know they can have a good lunch.
}else{//This else is for anything lower then what the user calls a good lunch.
	alert("You will have to spend your money wisely. You have $" +ppaBudget+ " to spend per person.")//the alert is giving the user a total and letting the know they do not have the cash for a good or great lunch.
	
}

