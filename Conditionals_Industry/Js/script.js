//Cameron Kozinski
//09-17-2013
//Industry

//Employee Lunch

alert("This page will help you find what you can spend on your employee's for lunch!");

var budgetTot = prompt("What is your budget for lunch?");
var empoyeeNum = prompt("How many employees will be going with you to lunch?");
var ppaBudget = budgetTot / (Number(empoyeeNum) + 1); 
var greatLunch = 20;
var goodLunch = 10;

if(ppaBudget >= greatLunch){
	alert("You gave plenty to spend per person! You can spend $" +ppaBudget+ " per person.");
}else if(ppaBudget >= goodLunch){
	alert("You can take a nice lunch. You have $" +ppaBudget+ " per person.")
}else{
	
}

