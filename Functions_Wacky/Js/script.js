//Cameron Kozinski
//09-24-2013
//Function_Personal

//A new spin on holiday pounds.

alert("This page will add a new spin to added holiday pounds.");//This alert is informing the user of what the page is for.

var preHolidayLb = prompt("What did you weigh before the holidays?");//This var is holding the users weight pre holidays. The prompt is taking the info from the user
var curWeight = prompt("And what the you weigh now?");//this var is holding the users current weight. the prompt is taking the info from the user.
var maleOrFe = prompt("Are you a Boy or Girl?");//This var is holding the sex of the user. Tis info is needed because the % of water in the human body is not the same in guys and gals
var userAge = prompt("How old are you?");//This var is holding the age of the user this info is needed because infants have more water in the body then adults
var malePercent = .65;//This var is holding the average water% for guys
var fePercent = .55;//This var is holding the average water% for girls.
var underOne = .75;//This var is holding the average water% for children under the age of one


var userWaterWeight = function(newW, oldW, percent){
	var waterWeight = (newW - oldW) * percent;
	return waterWeight;
}

var maleWaterW = userWaterWeight(curWeight, preHolidayLb, malePercent);
var feWaterW = userWaterWeight(curWeight, preHolidayLb, fePercent);
var underOneW = userWaterWeight(curWeight, preHolidayLb, underOne);

if(maleOrFe === "Boy" && Number(userAge) >= 2){
	alert("You will be happy to know that humans need water to live and you have added an extra " +maleWaterW+ " pounds of water to your body this holiday season!");

}else if(maleOrFe === "Girl" && Number(userAge) >= 2){
	alert("You will be happy to know that humans need water to live and you have added an extra " +feWaterW+ " pounds of water to your body this holiday season!");

}else{
	alert("What? You are a baby you don't need to think about this stuff, but you did added an extra " +underOneW+ " pounds of water to your body this holiday season!");
}
