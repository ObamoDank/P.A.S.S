let offset = 0;
let velocityX;
let velocityY;
let counter = 0;

let hairX = 50;
let hairY = 50;
let hairW = 100;
let hairH = 30;

let headX = 50;
let headY = 80;
let headW = 100;
let headH = 100;

let mouthX = 75;
let mouthY = 150;
let mouthW = 75;
let mouthH = 1;

let burgerX;
let burgerY;
let burgerW = 50;
let burgerH = 30;
let pattyW = 60;
let pattyH = 10;

let headM = 80;
let mouthM = 150;
let headAdd;
let mouthAdd;
let eyeMX;
let eyeMy;

let eyeX = 125;
let eyeY = 100;
let eyeR = 25;

let pupilX = 125;
let pupilY = 100;
let pupilR = 10;

function setup() {
    createCanvas(500, 500);
    burgerX = random(150, 450);
    burgerY = random(150, 450);
    velocityX = random(-3, 3);
    velocityY = random(-3, 3);
}

function draw() {
    background(130);
    drawRalph();
    burger();
//    eatBurger();
    drawScore();
}

function drawScore() {
    textSize(100);
    textAlign(CENTER);
    text(counter, 250, 250);
}

function drawRalph() {
    mapFace();
    rectMode(CORNER);
    fill('black');
    rect(hairX, hairY + offset, hairW, hairH, 20, 20, 0, 0);
    fill('white');
    rect(headX, headY + offset, headW, headH + headAdd, 0, 0, 20, 20);
    fill(130);
    noStroke();
    rect(mouthX, mouthY + offset, mouthW, mouthH + mouthAdd);
    fill('white');
    moveRalph();
    stroke(1);
    ellipse(eyeX, eyeY + offset, eyeR);
    fill('black');
    ellipse(pupilX + eyeMX, pupilY + eyeMY + offset, pupilR);
    noStroke();
}

function mapFace() {
    headAdd = map(burgerX, 300, 200, 0, 50, true);
    mouthAdd = map(burgerX, 300, 200, 0, 50, true);
    eyeMX = map(burgerX, 400, 200, 5, 2, true);
    eyeMY = map(burgerY, 0, height, -5, 5, true);
}

function burger() {
    rectMode(CENTER);
    fill('white');
    rect(burgerX, burgerY, burgerW, burgerH, 20, 20, 20, 20);
    fill('black');
    rect(burgerX, burgerY, pattyW, pattyH, 20, 20, 20, 20);
    moveBurger();
}

function moveBurger() {
    burgerX += velocityX;
    burgerY += velocityY;
    if (burgerX - pattyW / 2 <= headX + headW + 10 && burgerY - burgerH / 2 > mouthY + offset && burgerY + burgerH / 2 < mouthY + offset + mouthAdd) {
        if(burgerY - burgerH/2 <= mouthY + offset + 6){
            velocityY = 3;
        }
        if(burgerY + burgerH/2 >= mouthY + offset + mouthAdd - 6){
            velocityY = -3;
        }
        if(burgerX - pattyW/2 <= mouthX){
            eatBurger();
        }
    } else {
        if (burgerX - pattyW / 2 < headX + headW) {
            velocityX = 3;
        }
        if (burgerX + pattyW / 2 > width) {
            velocityX = -3;
        }
        if (burgerY - burgerH / 2 < 0) {
            velocityY = 3;
        }
        if (burgerY + burgerH / 2 > height) {
            velocityY = -3;
        }
    }
}


function moveRalph() {
    if (keyIsDown(DOWN_ARROW)) {
        offset += 3;
    }
    if (keyIsDown(UP_ARROW)) {
        offset -= 3;
    }
}

function eatBurger() {
//    if (burgerX - pattyW / 2 <= headX + headW + 10 && burgerY - burgerH / 2 > mouthY + offset && burgerY + burgerH / 2 < mouthY + offset + mouthAdd) {
        counter++;
        burgerX = random(200, 450);
        burgerY = random(50, 450);
//    }
}
