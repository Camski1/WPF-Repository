//Cameron Kozinski
//09-16-2013
//Wacky

//Things get uncomfortable with AI

alert("The information you add will paint a picture of you and your life.");//This alert is telling the user what the info is for.

var howManyBooks = prompt("How many books have you read?");//The var is holding the information taken from the user on the number of book that have been read.
(howManyBooks >= 10) ? alert("Very cool thats a good amount of books.") : alert("It can be hard to find time to read.");//Used aternary to alert the user depending on the number of books read.



var userBooks = prompt("Out of these styles of writting what is you favorite\nFiction, Nonfiction or I don't read?");
var fiction = "Fiction";
var nonfiction = "Nonfiction";

if(userBooks === fiction){
	alert("Very cool I LOVE Fiction!");
		var haveYouReadGalaxy = prompt("Have you read, The Hitchhiker's Guide to the Galaxy?\nYes or No");
		if(haveYouReadGalaxy === "Yes" && userBooks === fiction){
			alert("That is so cool you seem super awesome.");

		}else{
			alert("It is really a great book. If you would like I can lend it to you.");

		}

}else if(userBooks === nonfiction){
	alert("Very cool I LOVE Nonfiction!");
		var haveYouReadMeTalk = prompt("Have you read, Me Talk Pretty One Day?\nYes or No ");
		if(userBooks === nonfiction && haveYouReadMeTalk === "Yes"){
			alert("That is so cool you seem super awesome.");

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