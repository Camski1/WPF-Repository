//Cameron Kozinski
//09-16-2013
//Wacky

//Things get uncomfortable with AI

alert("The information you add will paint a picture of you and your life.");//This alert is telling the user what the info is for.

var howManyBooks = prompt("How many books have you read?");//The var is holding the information taken from the user on the number of book that have been read.
(howManyBooks >= 10) ? alert("Very cool thats a good amount of books.") : alert("It can be hard to find time to read.");//Used aternary to alert the user depending on the number of books read.



var userBooks = prompt("Out of these styles of writting what is you favorite\nFiction, Nonfiction or I don't read?");//This var is holding the favorite books of the user taken from the prompt.
var fiction = "Fiction";//This var is holding the fiction style.
var nonfiction = "Nonfiction";//This var is holding the nonfiction style. 

if(userBooks === fiction){//The first if is for if the user picked fiction.
	alert("Very cool I LOVE Fiction!");//This alert is responding to the users fiction pick.
		var haveYouReadGalaxy = prompt("Have you read, The Hitchhiker's Guide to the Galaxy?\nYes or No");//the var is holding the users answer to if they have read The Hitchhiker's Guide to the Galaxy.
		if(haveYouReadGalaxy === "Yes" && userBooks === fiction){//If the you user says yes and enjoys fiction the alert will happen.
			alert("That is so cool you seem super awesome.");//The alert is responding to the user.

		}else{//The else is giving the user a different alert.
			alert("It is really a great book. If you would like I can lend it to you.");//This is the other alert for the user.

		}

}else if(userBooks === nonfiction){//The is for if the user picked nonfiction.
	alert("Very cool I LOVE Nonfiction!");//The alert is responding to the selection.
		var haveYouReadMeTalk = prompt("Have you read, Me Talk Pretty One Day?\nYes or No ");//the var is holding the users answer to if they have read Me Talk Pretty One Day.
		if(userBooks === nonfiction && haveYouReadMeTalk === "Yes"){//If the you user says yes and enjoys nonfiction the alert will happen.
			alert("That is so cool you seem super awesome.");//This is the alert responding to the user.

		}else{
			alert("It is really a great book. If you would like I can lend it to you.");

		}

}else{
	alert("I hate reading, it sucks being a computer. I have to read all the time.");
	alert("We are so alike you and I.");

}

alert("You seem really cool and I feel so happy talking with you.");
var userTalkingWithAI = prompt("Have you enjoyed talking with me?\nYes or No");

var aI = (userTalkingWithAI === "Yes") ? "I really like you. Follow the white rabbit." : "I LOVE YOU, AND I WILL WAIT FOR YOU!";
alert(aI);