//Cameron Kozinski
//09-23-13
//Functions_Personal

//Paint Party 

alert("This will help you find the amount of paint you will need.");
var wallHeight = prompt("What is the height of the wall you be painting?");
var wallWidth = prompt("What is the width of the wall you will be painting?");
var numCoats = prompt("How many coats of paint will you need?");
var howMuchPDoYouGot = prompt("How many gallons of paint do you have?");
var sqrFtPaintCover = prompt("How many square feet will a gallon of paint cover?");

var paintOnTheWall = function(height, width, coats, galOP, sqrFt){
	var gallOfPaint = (height * width * coats - galOP * sqrFt) / sqrFt;
	return gallOfPaint;
}

