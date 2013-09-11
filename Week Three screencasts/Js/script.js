//Cameron Kozinski

var kidHeight = 47;
var minHeight = 48;
var wParentHeight= 45;
//If the child is is old enough, print to the console "you can ride!"
//if the kid is over 48in in height
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else if (kidHeight>wParentHeight){
	console.log("You can ride, but only with a parent present.")
}
else{
	console.log("Sorry kid, you've got some growing to do first!");
}
