//Cameron Kozinski
//09-24-2013
//Function_Personal

//A new spin on holiday pounds.

alert("This page will add a new spin to added holiday pounds.");

var preHolidayLb = prompt("What did you weigh before the holidays?");
var curWeight = prompt("And what the you weigh now?");
var maleOrFe = prompt("Are you a Boy or Girl?");
var userAge = prompt("How old are you?");
var malePercent = .65;
var fePercent = .55;
var underOne = .75;

var userWaterWeight = function(oldW, newW, percent){
	var waterWeight = oldW + newW - oldW / percent;
	return waterWeight;
}

var maleWaterW = userWaterWeight(preHolidayLb,curWeight,malePercent);
var feWaterW = userWaterWeight(preHolidayLb, curWeight, fePercent);
var underOneW = userWaterWeight(preHolidayLb, curWeight, underOne);

