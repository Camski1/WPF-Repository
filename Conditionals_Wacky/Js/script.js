//Cameron Kozinski
//09-16-2013
//Wacky

//Things get uncomfortable with AI

alert("The information you add will paint a picture of you and your life.");
var userBooks = prompt("Out of these styles of writting what is you favorite\nFiction, Nonfiction or I dont read?");
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
		

}else{

}