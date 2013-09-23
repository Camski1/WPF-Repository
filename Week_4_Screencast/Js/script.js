//Cameron Kozinski

//while Loop
/*
var b = 10;
while(b > 0 ){
	console.log(b + " kegs on the wall.");
	b--;
}


//do while

var c = 10;
do{
	console.log(c + " kegs on the wall.")
	c--;
}while(c > 0);


//for loop

for(var i = 10; i > 0; i--){
	console.log(i + " kegs on the wall.");
}


//basic function

function outptMsg(){
	console.log("Hello World");

}

var width = 5;

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

console.log(width);
calcArea();


function dogYears(age){
	var dogYears = age * 7;
	console.log("Spaky is " +dogYears+ " years old.");
}
dogYears(4);
dogYears(5);


//returning val

var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	console.log(area);
	return area;
}
console.log(total);
*/
var calcArea = function(width, height){
	var area = width * height;
	return area;
}
var a = calcArea(20, 30);
console.log(a);




