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
			var userAnswerThreeIf = prompt("If X * 10 = 100\nwhat is 'X'?");
			var trueAnswerThreeIf = 10;
			if(Number(userAnswerThreeIf) ===trueAnswerThreeIf){
				alert("High Five you got all three!" )
			}else{
				alert("Sorry missed the last one. The answer was " +trueAnswerThreeIf+ ", but you got two out of three!");
			}
		}else{
			alert("Nope, the correct answer was 1 1/2");
			var userAnswerThreeIf = prompt("If X * 10 = 100\nwhat is 'X'?");
			var trueAnswerThreeIf = 10;
				if(Number(userAnswerThreeIf) ===trueAnswerThreeIf){
				alert("Not bad, you got two of three.")
				}else{
				alert("Sorry missed the last one. The answer was " +trueAnswerThreeIf+ ", you got one out of three.");
			

			}

		}

}else{
	alert("Sorry, the correct answer is " +trueAnswer+ ". Lets try again.");
		var userAnswerTwoIf = prompt("Find The Answer. \n1/2 + 3/4 = ?");
		var trueAnswerTwoIf = "1 1/4";
		if(){
			

		}else{

		}
}