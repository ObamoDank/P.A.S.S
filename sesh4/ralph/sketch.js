//let ralph;
let pattyX;
let pattyY;
let pattylX = 120;
let pattylY = 60;


let hairX = 200;
let hairY = 60;
let hairXY = 50;

let headX = 50;
let headY = 100;
let headlX = 200;
let headlY = 200;
let headlYmap = 200;

let eyeHoleX = 210;
let eyeHoleY = 140;
let eyeHoleR = 50;

let pupilX;
let pupilY;
let pupilR = 20;

let mouthY = 250;
let mouthlY = 1;
let mouthlX = 151;
let mouthlYmap = 1;

function setup() {
    createCanvas(700, 500);
}

function draw() {
    background(130);
    ralph();
    burger();
    mapMouth();
    
}

function burger() {
    rectMode(CENTER);
    fill('white');
    collision();
    rect(pattyX, pattyY, 100, 60, 20);
    fill('black');
    rect(pattyX, pattyY, 120, 10, 5);
    fill('white');
}

function ralph() {
    rectMode(CORNER);
    let eyeX = map(pattyX, 195, 235, 200, 215, true);
    let eyeY = map(pattyY, 125, 155, 130, 145, true);
    fill('black');
    rect(hairXY, hairXY, hairX, hairY, 30, 30, 0, 0);
    fill('white');
    rect(headX, headY, headlX, headlY, 0, 0, 30, 30);
    ralphMouth();
    triangle(250, 140, 250, 200, 290, 200);
    ellipse(eyeHoleX, eyeHoleY, eyeHoleR);
    fill('black');
    ellipse(eyeX, eyeY, 20);
}

function mapMouth(){
    headlY = map(mouseX, 500, 300, headlYmap, headlYmap + 100, true);
    mouthlY = map(mouseX, 500, 300, mouthlYmap, mouthlYmap + 100, true);
}

function ralphMouth(){
    fill(130);
    noStroke();
    rect(headX + 50, 250, mouthlX, mouthlY);
    stroke(1);
    line(headX + 50, mouthY, headX + 50 + mouthlX, mouthY);
    line(headX + 50, mouthY, headX + 50, mouthY + mouthlY);
    line(headX + 50, mouthY + mouthlY, headX + 50 + mouthlX, mouthY + mouthlY);
    fill('white');
    stroke(1);
}

function collision(){
    if(mouseX < headX + headlX + pattylX/2 && mouseY < mouthY + pattylY/2 && mouseY > hairXY - pattylY/2){
        pattyX = headX + headlX + pattylX/2;
        pattyY = mouseY;
    }else if(mouseX < (headX + 50) + pattylX/2 && mouseY > mouthY + pattylY/2 && mouseY < mouthy + mouthlY){
        pattyX = headX + 50 + pattylX/2;
        pattyY = mouseY;
        }
    else{
        pattyX = mouseX;
        pattyY = mouseY;
    }
}