let index = [0, 1, 2, 3, 4];
let numbers = [1, 5, 7, 9, 10];
let words = ['water', 'fire', 'earth', 'wind', 'heart'];


let yLocation = [100, 150, 200, 250, 300];

let yLocation0 = 100;
let yLocation1 = 150;
let yLocation2 = 200;
let yLocation3 = 250;
let yLocation4 = 300;


function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
}

function showIndex(){
    textSize(20);
    text(index[0], width / 2, yLocation0);
    text(index[1], width / 2, yLocation1);
    text(index[2], width / 2, yLocation2);
    text(index[3], width / 2, yLocation3);
    text(index[4], width / 2, yLocation4);
}

function showNumbers(){
    textSize(20);
    text(numbers[0], width / 2, yLocation0);
    text(numbers[1], width / 2, yLocation1);
    text(numbers[2], width / 2, yLocation2);
    text(numbers[3], width / 2, yLocation3);
    text(numbers[4], width / 2, yLocation4);
}

function showWords() {
    textSize(20);
    textAlign(CENTER);
    text(words[0], width / 2, yLocation0);
    text(words[1], width / 2, yLocation1);
    text(words[2], width / 2, yLocation2);
    text(words[3], width / 2, yLocation3);
    text(words[4], width / 2, yLocation4);
}

function showInLoop(){
    for(let i = 0; i < 5; i++){
        text(words[i], width / 2, yLocation[0 + i * 50]);
    }
}