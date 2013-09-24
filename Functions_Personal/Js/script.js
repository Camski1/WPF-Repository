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

var paintYouNeed = paintOnTheWall(wallHeight, wallWidth, numCoats, howMuchPDoYouGot, sqrFtPaintCover);
alert("It looks like you need " +paintYouNeed+ " gallons of paint.");

alert("Now lets find what the paint will cost.");

var paintBugdet = prompt("What is the budget you have for paint?");
var costPerGal = prompt("What is the price of your paint per gallon?");

function costForPaint(cpg, pyn){
	var paintTotal = cpg * pyn;
	return paintTotal;
}

var paintTotal = costForPaint(costPerGal,paintYouNeed);

var total = (paintTotal <= paintBugdet) ? "You can get the pait the total was only $" +paintTotal+"!" : "Sorry the paint is more then your budget of $" +paintBugdet+ " it is $" +paintTotal+".";

alert(total);
