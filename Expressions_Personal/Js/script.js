
//Expressions_Personal
//Cameron Kozinski
//WPF sec 01
// 09-08-2013


//Annual fuel cost calculator


alert("The information you add will calculate your annual fuil cost!");
var milesPerWeekHI = prompt("How many miles do you drive per week on the highway/interstate?");
var avrHIMpg = prompt("What is your average MPG on the highway/interstate?");
var milesPerWeekCity = prompt("How many would you say you drive in the City?");
var avrCityMpg = prompt("What is your average MPG in the City?");
var avrFuelPrice = prompt("On average, how much do you spend on gas per gallon?");
var hIFuelPrice = milesPerWeekHI / avrHIMpg * avrFuelPrice;
var cityFuelPrice = milesPerWeekCity / avrCityMpg * avrFuelPrice;
var totalFuelCost = hIFuelPrice + cityFuelPrice;
var annualFuelCost = totalFuelCost * 52;
alert("Your weekly fuel cost is $" +totalFuelCost+ ", and your annual fuel cost is $" +annualFuelCost);



