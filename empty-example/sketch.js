let button;
let button0;
let button1;

let mainScreen = 1;
let squareScreen = 2;
let circleScreen = 3;
let currentScreen = mainScreen;

function setup() {
    createCanvas(500, 500);
//    button = createButton('go to square');
//    button0 = createButton('go to Circle');
    button1 = createButton('go to Main');
}

function draw() {

    if (currentScreen == mainScreen){
        drawMain();
    }
    if (currentScreen == squareScreen) {
        drawSquare();
    }
    if (currentScreen == circleScreen){
        drawCircle();
    }

}

function goSquare() {
    currentScreen = squareScreen;
    console.log(currentScreen);
}

function goCircle() {
    currentScreen = circleScreen;
    console.log(currentScreen);

}

function goMain() {
    currentScreen = mainScreen;
    console.log(currentScreen);
    button1.hide();

}

function drawMain() {
    background(130);
    fill(130);

    button = createButton('go to square');
    button0 = createButton('go to Circle');
    button.position(250, 250);
    button0.position(150, 250);
    button.mousePressed(goSquare);
    button0.mousePressed(goCircle);
}

function drawSquare() {
    background(130);
    fill(130);

    button1.position(150, 150);
    button1.mousePressed(goMain);
    rect(250, 250, 80, 80);

}

function drawCircle() {
    background(130);
    fill(130);

    button1.position(400, 400);
    button1.mousePressed(goMain);

    ellipse(250, 250, 80);
}
