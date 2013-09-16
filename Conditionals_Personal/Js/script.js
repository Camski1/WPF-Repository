//Cameron Kozinski
//09-16-2013
//Conditionals_Personal

//Math Quiz 

alert("This short quiz will help you with simple math skills!");

var userAnswerOne = prompt("Find The Answer. \n9 * 9 = ?");
var trueAnswer = 9 * 9;

if(Number(userAnswerOne) === trueAnswer){
	alert("Woohoo! Lets try somthing harder.");

		var userAnswerTwoIf = prompt("Find The Answer. \n1/2 + 3/4 = ?");
		var trueAnswerTwoIf = "1 1/4";

		if(userAnswerTwoIf===trueAnswerTwoIf){
			alert("Well done!")
			
		}else{
			alert("It's cool lets try again.");

		}

}else{
	alert("nope");
}