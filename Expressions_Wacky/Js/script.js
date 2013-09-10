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

alert("Okay, that is all I need. Get ready for story time.");//this is an alert letting the user know that the story is about to start.
alert("The evil War Lord "+userName+ " was the master of the entire world.");//this alert is starting the story with th users name.
alert("Since the year " +yearBorn+" " +userName+ " has destroyed " +storyLineNumTwo+ " towns and cities.");//This is more of the story using the users birthyear, name,and the 2nd random number.
alert("But all that was about to change.");//This is an alert giving the user more of the story.
alert("The brave " +favAuthor+ " was secretly forming a plan to take power from the terrible " +userName);//This is more of the story with the favorite author being added and again the user name. 
alert("Our hero " +favAuthor+ " has found " +userName+ "s weakness.");//This is more of the story with the favorite author and again the user name. 
alert("You see " +favAuthor+ " new that " +userName+ " loved " +pizzaTopping+ " pizza and would eat " +storyLineNumOne+ " of them a week.");//more story with users name, favorite author, pizza topping, and random number one again.
alert("Late one night as " +userName+ " was playing xbox " +userName+ " called out for his servant to bring the next " +pizzaTopping+ " pizza");//more story with user name and pizza topping.
alert("But " +favAuthor+ " had taken the servants place and slowly walked into the room with the " +pizzaTopping+ " pizza.");//more story with author, and pizza topping added.
alert(favAuthor+" walked behind " +userName+ " and hit " +userName+ " on the head with the pizza killing the War Lord and saved the world.");//more story with author, and user name.
alert("The people of the world were so happy that they gave " +favAuthor+ " " +storyLineNumOne*storyLineNumTwo+ " " +pizzaTopping+ " pizzas.");//more story with author. A third random number has been mad by storyLineNumOne * storyLineNumTwo pizza was also added.
alert("END");//alert telling the user the story is over.
