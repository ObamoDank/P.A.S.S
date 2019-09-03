let year = 2018;
let age = 21;
let words = "In " + year + " You will be " + age;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("purple");
    fill("orange");
    textAlign(CENTER);
    textSize(40);
    text("In " + year + " you will be " + age, 250, 250);
}

function mouseClicked() {
    year++;
    age++;
}
