//Cameron Kozinski 09/06/2013 Expression Worksheet
//Dog years

/*
var sparky= 4; 
var dogYears= 7;
//multiply sparky's age by the dog years
var sparkyDogAge= sparky*dogYears;
//printout for converting human years into dog years
console.log("Sparky is", sparky, "human years old which is", sparkyDogAge, "in dog years");


//Slice of pie one. 
var pizzaSlices= 8;
var peopleParty= 35;
var pizzasOrdered= 100;
//multiply pizzaSlices by pizzasOrdered and devide by peopleParty
var slicesPP= pizzaSlices * pizzasOrdered / peopleParty;
//Printout number of slices of pizza per person.
console.log("Each person ate",slicesPP,"slices of pizza at the party.");
*/
//slices of pie part two
var pizzaSlices= 8;
var peopleParty= 35;  //number of people at the party
var pizzasOrdered= 100;
var totalSlices= pizzaSlices * pizzasOrdered; //total number of slices when *ing pizzaSlices by pizzaOrdered
var slicesPP= pizzaSlices * pizzasOrdered / peopleParty;
var sparkyPizza=  totalSlices % peopleParty ; //remander of pizza 
//the amount of pizza sparky eats print out
console.log("Sparky got",sparkyPizza,"slices of pizza.");
