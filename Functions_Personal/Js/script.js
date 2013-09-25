//Cameron Kozinski
//09-23-13
//Functions_Personal

//Paint Party 

alert("This will help you find the amount of paint you will need.");//This alert is informing the user of what the page will be for
var wallHeight = prompt("What is the height of the wall you be painting?");//This var is holding information taken from the prompt about the height of the wall that wiil be painted.
var wallWidth = prompt("What is the width of the wall you will be painting?");//This var is holding information taken from the prompt about the width of the wall.
var numCoats = prompt("How many coats of paint will you need?");//This var is holding info taken from the prompt about number of coats of paint.
var howMuchPDoYouGot = prompt("How many gallons of paint do you have?");//This var is holding info taken from the propmt about the amount of paint the user already has.
var sqrFtPaintCover = prompt("How many square feet will a gallon of paint cover?");//This var holding info taken from the prompt as to how many square feet the paint can cover.

var paintOnTheWall = function(height, width, coats, galOP, sqrFt){//This var is holding the function. inside of the brackets are the value parameters of the function.
	var gallOfPaint = (height * width * coats - galOP * sqrFt) / sqrFt;//This var is holding the math of the function. The answer put out will be the amount of paint the user will need to buy
	return gallOfPaint;// The return in pushing out the information from the var in the function.
}

var paintYouNeed = paintOnTheWall(wallHeight, wallWidth, numCoats, howMuchPDoYouGot, sqrFtPaintCover);//This var in now holding the info taken from the function. The info in the brackets is giving the values to the math of the function.
alert("It looks like you need " +paintYouNeed+ " gallons of paint.");//This alert is telling the user the number of gallons to buy.

alert("Now lets find what the paint will cost.");//This alert is telling the user that we will be finding the cost of the paint.

var paintBugdet = prompt("What is the budget you have for paint?");//This var is holding info taken from the prompt.
var costPerGal = prompt("What is the price of your paint per gallon?");//This var is holding info taken from the prompt.

function costForPaint(cpg, pyn){//this is a normal function. the items in the brackets are the things that will need to be given a value later.
	var paintTotal = cpg * pyn;
	return paintTotal;
}

var paintTotal = costForPaint(costPerGal,paintYouNeed);

var total = (paintTotal <= paintBugdet) ? "You can get the paint the total was only $" +paintTotal+"!" : "Sorry the paint is more then your budget of $" +paintBugdet+ " it is $" +paintTotal+".";

alert(total);
