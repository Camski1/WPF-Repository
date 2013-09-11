//Cameron Kozinski
// 09-11-2013

/*
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


//Grade Letter Calculator

alert("The information you give will convert your number grade into a letter grade!");//This alert is letting the user know what the info given is for
var gradePercent = prompt("What was your grade? Example 100"); //The prompt is asking the user for the grade number, and the var is holding the info given by the user.
var gradeAPluss = 95; //this var is holding the min grade for a A+
var gradeA = 90;//this var is holding the min grade for a A
var gradeBPluss = 85;//this var is holding the min grade for a B+
var gradeB = 80;//this var is holding the min grade for a B
var gradeC = 73;//this var is holding the min grade for a C
var gradeD = 70; //this var is holding the min grade for a D
//I had no need for a var with the min grade for an F

if(gradePercent >= gradeAPluss){ //if the user grade is greater than or equal to grade A+ aka 95. The alert will print out A+
	alert("You have a " +gradePercent+ "%, which means you have earned a(n) A+ in the class!")
 
}else if(gradePercent >= gradeA){//if the user grade is greater than or equal to grade A aka 90. The alert will print out A
	alert("You have a " +gradePercent+ "%, which means you have earned a(n) A in the class!");
}else if(gradePercent >= gradeBPluss){//if the user grade is greater than or equal to grade B+ aka 85. The alert will print out B+
	alert("You have a " +gradePercent+ "%, which means you have earned a(n) B+ in the class!");
}else if(gradePercent >= gradeB){//if the user grade is greater than or equal to grade B aka 80. The alert will print out B
	alert("You have a " +gradePercent+ "%, which means you have earned a(n) B in the class!");
}else if(gradePercent >= gradeC){//if the user grade is greater than or equal to grade C aka 73. The alert will print out C
	alert("You have a " +gradePercent+ "%, which means you have earned a(n) C in the class!");
}else if (gradePercent >= gradeD){//if the user grade is greater than or equal to grade D aka 70. The alert will print out D
	alert("You have a " +gradePercent+ "%, which means you have earned a(n) D in the class!");
}else{//if the user grade is equal to anything else. The alert will print out F
	alert("You have a " +gradePercent+ "%, which means you have earned a(n) F in the class!");
}
*/

//Tire pressure I

alert("The information you give will let you know if you need to have your tires checked.");//This is an alert telling the user what the info is for.
var fruntLeft = prompt("What is the psi of your frunt left tire?");//This prompt is asking the user for the psi of the frunt left tire, and the var is storing the info.
var fruntRight = prompt("What is the psi of your frunt right tire?");//This prompt is asking the user for the psi of the frunt right tire, and the var is storing the info.
var backLeft = prompt("What is the psi of your back left tire?");//This prompt is asking the user for the psi of the back left tire, and the var is storing the info.
var backRight = prompt("What is the psi of you back right tire?");//This prompt is asking the user for the psi of the back right tire, and the var is storing the info.

var carTires =[fruntLeft, fruntRight, backLeft, backRight];// This var is holding an array that has all the tire info taken from the user

if(carTires[0] === carTires[1] && carTires[2] === carTires[3]){//As long as the tires in the front of the car match and the tires in the back of the car match the user will see you pass
	alert("The tires pass spec!");
}else{
	alert("Get you tires checked out!");//if the above coment isnt true the user will not pass
}















