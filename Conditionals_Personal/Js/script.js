//Cameron Kozinski
//09-16-2013
//Conditionals_Personal

//Math Quiz 

alert("This short quiz will help you with simple math skills!");//This alert will let the user know what the page info will be for.

var userAnswerOne = prompt("Find The Answer. \n9 * 9 = ?");//The var will hold the user answer, and the promped will take the info. I used the new line to seperate the question.
var trueAnswer = 9 * 9;//This var is holding the true answer to this question. 

if(Number(userAnswerOne) === trueAnswer){//This if is for when the user get the first question correct. I used the two vars to see if they match. I also used casting to set the user answer as a number.
	alert("Woohoo! Lets try somthing harder.");//This alert is telling the user they got the first question right.

		var userAnswerTwoIf = prompt("Find The Answer. \n1/2 + 3/4 = ?");//This var will hold the user answer for the second question. The prompt will get the info from the user. 
		var trueAnswerTwoIf = "1 1/4";//This var is holding the true answer to the second questio. I set it up as a string to fit the form that the user will answer with.

		if(userAnswerTwoIf===trueAnswerTwoIf){//This if is for finding out if the user got the question right.
			alert("Well done!");//This alert is for when the user get the first and second question right.
			var userAnswerThreeIf = prompt("If X * 10 = 100\nwhat is 'X'?");//This var will hold the user's answer to the last question. The prompt will get the info from the user.
			var trueAnswerThreeIf = 10;//This var is holding the true answer to the last uestion.
			if(Number(userAnswerThreeIf) ===trueAnswerThreeIf){//This if is finding if the user got the question right or wrong. Casting was used to convert the user's string into a number.
				alert("High Five you got all three!");//This alert is telling the user they got every question right.
			}else{//This else is if the user get the first to correct but misses the last one.
				alert("Sorry missed the last one. The answer was " +trueAnswerThreeIf+ ", but you got two out of three!");//This alert is telling the user what the correct answer was to the third question, and the total score. 
			}
		}else{//this else if for if the user get the first question right but misses the second answer. 
			alert("Nope, the correct answer was 1 1/4");//This alert is for telling the user what the answer was to the second question.
			var userAnswerThreeIf = prompt("If X * 10 = 100\nwhat is 'X'?");//This var will hold the user's answer to the last question. The prompt will get the info from the user.
			var trueAnswerThreeIf = 10;//This var is holding the true answer to the last uestion.
				if(Number(userAnswerThreeIf) ===trueAnswerThreeIf){//This if is finding if the user got the question right or wrong. Casting was used to convert the user's string into a number.
				alert("Not bad, you got two of three!");//This alert tells the user that they got the last question right and what the score was. 
				}else{//This else is for if the user gets the last two questions wrong.
				alert("Sorry missed the last one. The answer was " +trueAnswerThreeIf+ ", you got one out of three.");//This alert is telling the user the answer to the third question, and gives the user the score. 
			

			}

		}

}else{//This else is for if the user gets the first question wrong. 
	alert("Sorry, the correct answer is " +trueAnswer+ ". Lets try again.");//This alert is telling the user the answer to the first question.
		var userAnswerTwoIf = prompt("Find The Answer. \n1/2 + 3/4 = ?");//This var will hold the user answer for the second question. The prompt will get the info from the user. 
		var trueAnswerTwoIf = "1 1/4";//This var is holding the true answer to the second questio. I set it up as a string to fit the form that the user will answer with.
		if(userAnswerTwoIf === trueAnswerTwoIf){//This if is for finding out if the user got the question right.
			alert("Well done!");//This alert tells the user they got the second question right.
			var userAnswerThreeIf = prompt("If X * 10 = 100\nwhat is 'X'?");//This var will hold the user's answer to the last question. The prompt will get the info from the user.
			var trueAnswerThreeIf = 10;//This var is holding the true answer to the last uestion.
			if(Number(userAnswerThreeIf) === trueAnswerThreeIf){//This if is finding if the user got the question right or wrong. Casting was used to convert the user's string into a number.
				alert("Not bad, you got two of three.");//This alert tells the user that they got the last question right and what the score was. 

			}else{//this else is for if the user gets the last question wrong.
				alert("Sorry, the answer was " +trueAnswerThreeIf+ ", you got one out of three.");//This alert is telling the user the answer to the third question, and gives the user the score. 

			}


		}else{//This else is for if the user gets the first two wrong.
			alert("Nope, the answer was 1 1/4. Lets try one more.");//This alert is for telling the user what the answer was to the second question.
			var userAnswerThreeIf = prompt("If X * 10 = 100\nwhat is 'X'?");//This var will hold the user's answer to the last question. The prompt will get the info from the user.
			var trueAnswerThreeIf = 10;//This var is holding the true answer to the last uestion.
			if(Number(userAnswerThreeIf) === trueAnswerThreeIf){//This if is finding if the user got the question right or wrong. Casting was used to convert the user's string into a number.
				alert("That's correct, you finished strong with one out of three.");//This alert tells the user that they got the last question right and what the score was. 
			}else{//this else is for if the user gets the last question wrong.
				alert("Nope, the answer was " +trueAnswerThreeIf+ ". You missed every question.");//This alert is telling the user the answer to the third question, and gives the user the score. 
			}

		}
}