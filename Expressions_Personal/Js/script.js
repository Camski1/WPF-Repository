
//Expressions_Personal
//Cameron Kozinski
//WPF sec 01
// 09-08-2013


//Annual fuel cost calculator


alert("The information you add will calculate your annual fuil cost!"); //This alert is for informing the user of the information needed
var milesPerWeekHI = prompt("How many miles do you drive per week on the highway/interstate?"); //This var is for the Mile driven per week. The prompt is asking the user for the information.
var avrHIMpg = prompt("What is your average MPG on the highway/interstate?"); //This var is for average MPG on the highway. The prompt is asking the user for the information
var milesPerWeekCity = prompt("How many would you say you drive in the City?"); //This var is for miles driven per week in the city. The prompt is asking the user for the information.
var avrCityMpg = prompt("What is your average MPG in the City?"); //This var is for average MPG in the city. The prompt is asking the user for the information.
var avrFuelPrice = prompt("On average, how much do you spend on gas per gallon?"); //This var is for average fuel price per gallon. The prompt is asking the user for the information.
var hIFuelPrice = milesPerWeekHI / avrHIMpg * avrFuelPrice; //This var is how much the user spend per week in gas on the highway. I did this by dividing milesPerWeekHI by avrHIMpg and multiplying that by avrFuelPrice
var cityFuelPrice = milesPerWeekCity / avrCityMpg * avrFuelPrice; //This var is how much the user spend per week in gas in the city. I did this by dividing milesPerWeekCity by avrCityMpg and multiplying that by avrFuelPrice
var totalFuelCost = hIFuelPrice + cityFuelPrice; //This var is for total fuel cost per week. I did this by adding hIFuelPrice and cityFuelPrice
var annualFuelCost = totalFuelCost * 52; //This var is for annual fuel cost. I did this by multiplying totalFuelCost by the 52 weeks in a year.
alert("Your weekly fuel cost is $" +totalFuelCost+ ", and your annual fuel cost is $" +annualFuelCost); //This alert lets the user know the weekly and yearly fuel cost



