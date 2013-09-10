//Cameron Kozinski 
//09-09-2013
//WPF sec 01
// Expressions_Wacky

//Really fun story time. 
alert("The information you give will write an amazing story. Have fun!"); //alert leting the user know what the info will be for.
var userName= prompt("What is your name?");//This var is for the user's name. The prompt is getting the info from the user.
var yearBorn= prompt("What is your birthyear? Example 1988");//This var is for the users birthyear. the prompt is asking the user for the info.
var pizzaTopping= prompt("What is your favorite pizza topping?");//This var is for the users favorite pizza topping. the prompt is asking the user for the info.
var favNumber= prompt("What is your favorite number?");//This var is for the users favorite number. the prompt is asking the user for the info.
var favAuthor= prompt("Who is your favorite author?");//This var is for the users favorite author. The prompt is asking the user for the info.
var storyLineNumOne= yearBorn / favNumber;//This var is holding a random number that was reated by deviding the users birthyear by the favorite number.
var storyLineNumTwo= yearBorn - favNumber - 40;// This var is holding a random number. the number was created by doing yearBorn - favNumber - 40.

alert("Okay, that is all I need. Get ready for story time.");
alert("The evil War Lord "+userName+ " was the master of the entire world.");
alert("Since the year " +yearBorn+" " +userName+ " has destroyed " +storyLineNumTwo+ " towns and cities.");
alert("But all that was about to change.");
alert("The brave " +favAuthor+ " was secretly forming a plan to take power from the terrible " +userName);
alert("Our hero " +favAuthor+ " has found " +userName+ "s weakness.");
alert("You see " +favAuthor+ " new that " +userName+ " loved " +pizzaTopping+ " pizza and would eat " +storyLineNumOne+ " of them a week.");
alert("Late one night as " +userName+ " was playing xbox " +userName+ " called out for his servant to bring the next " +pizzaTopping+ " pizza");
alert("But " +favAuthor+ " had taken the servants place and slowly walked into the room with the " +pizzaTopping+ " pizza.");
alert(favAuthor+" walked behind " +userName+ " and hit " +userName+ " on the head with the pizza killing the War Lord and saved the world.");
alert("The people of the world were so happy that they gave " +favAuthor+ " " +storyLineNumOne*storyLineNumTwo+ " " +pizzaTopping+ " pizzas.");
alert("END");
