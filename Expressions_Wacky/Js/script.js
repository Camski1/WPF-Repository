//Cameron Kozinski 
//09-09-2013
//WPF sec 01
// Expressions_Wacky

//Really fun story time. 
alert("The information you give will write an amazing story. Have fun!");
var userName= prompt("What is your name?");
var yearBorn= prompt("What is your birthyear? Example 1988");
var pizzaTopping= prompt("What is your favorite pizza topping?");
var favNumber= prompt("What is your favorite number?");
var favAuthor= prompt("Who is your favorite author?");
var storyLineNumOne= yearBorn / favNumber;
var storyLineNumTwo= yearBorn - favNumber - 40;

alert("Okay, that is all I need. Get ready for story time.");
alert("The evil War Lord "+userName+ " was the master of the entire world.");
alert("Since the year " +yearBorn+" " +userName+ " has destroyed " +storyLineNumTwo+ " towns and cities.");
alert("But all that was about to change.");
alert("The brave " +favAuthor+ " was secretly forming a plan to take power for the terrible " +userName);
alert("Our hero " +favAuthor+ " has found " +userName+ "‘s weakness.");

