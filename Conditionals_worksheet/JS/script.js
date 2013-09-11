//Cameron Kozinski
// 09-11-2013
//Celsius to Fahrenheit converter

//This alert will let the user known what the information is for
alert("Are you having truble converting Fahrenheit or Celsius? Let me help.");

var fahrOrCels = prompt("Will you be using Fahrenheit or Celsius? Please type C or F."); //This var is for storing the C or F inputed by the user
var currentTemp = prompt("What is the temperature you would like to convert? Please only type the number. Example 76."); // This var is storing the number added by the user.
var celsiusConverter = currentTemp * 1.8 + 32;//This formula will convert C to F. X times 1.8 pluss 32.
var fahrenheitConverter = (currentTemp - 32) * .555;//This formula will convert F to C. (X - 32) times .555
 
if(fahrOrCels === "C"){
	alert("The temperature in Fahrenheit is " +celsiusConverter+ " degrees!");
}else{
	alert("The temperature in Celsius is " +fahrenheitConverter+ " degrees!");
}