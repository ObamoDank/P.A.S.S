//Scenario
//If/else statement

//I’m thinking about going to the beach in the morning depending on the wind. 
//If it is too windy I’ll go, if there is little wind I’ll stay in bed.

If (wind is high){
	Stay in bed;
}else {
	Go to the beach;
}

// Could be expressed as follows

let wind = high;
let goToBeach;
let stayInBed;

If (wind = ‘high’){
	stayInBed = true;
}else {
	goToBeach = true;
}

//Nested If Statement
//The wind is low so I’ve decided to get out of bed and go down to the beach. When I get to the beach, 
//I may go out for a surf if there is a wave. Otherwise I’ll just have a swim.

If(There are waves){
	Surf;
}else{
	Swim;
}

//This is a situation in which you can nest the if statement as the execution is reliant
//on a previous statement.

If (wind is high){
	Stay in bed;
}else {
	Go to the beach;
	If(There are waves){
		Surf;
	}else{
		Swim;
	}
}

//could be expressed

let wind = 'low';
let waves = true;

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(130);
if(wind == 'high'){
	text("I'm staying in Bed", 50, 50);
}else{
	text("I'll go to the beach", 50, 50);
	if(waves == true){
		text("Yeeeeeah, I'll go out", 50, 100);
	}else{
		text("Think I'll just swim", 50, 100);
	}
}
}
	