let angle1 = 1;
let angle2 = 2;
let pointX = [];
let pointY = [];
let al = 1;

function setup() {
    createCanvas(500, 500);
    background('black');

}

function draw() {
    grid();
    angleMode(DEGREES);
    fill('black');
    let centreX = width / 2;
    let centreY = height / 2 - 5;
    let radius = 195;
    let x = radius * cos(angle1);
    let y = radius * sin(angle2);

    ellipse(centreX + x, centreY + y, 5, 5);

    angle1++;
    angle2+=3;
    
    if(!pointX.includes(centreX + x)){
        pointX.push(centreX + x);
    }
    if(!pointY.includes(centreY + y)){
    pointY.push(centreY + y);
    }
    
    for(let l = 0; l < pointX.length; l++){
        al -= 0.01;
        stroke("rgba(0, 255, 0, al)");
        line(pointX[l], pointY[l], pointX[l+1], pointY[l+1]);
    }
    
    console.log(pointX);
    console.log(!pointX.includes(centreX + x));
    console.log(centreX + x);
}

function grid() {
    fill(130);
    rect(10, 5, 480, 480, 20);
    fill('blue');
    rect(30, 25, 440, 440, 10);
    stroke('black')
    for (let i = 50; i < 450; i += 40) {
        for (let j = 45; j < 445; j += 40) {
            rect(i, j, 40, 40);
        }
    }
}

function theSine() {
    angleMode(DEGREES);
    fill('black');
    let centreX = width / 2;
    let centreY = height / 2 - 5;
    let radius = 195;
    let x = radius * cos(angle1);
    let y = radius * sin(angle2);

    ellipse(centreX + x, centreY + y, 2, 2);

    angle1++;
    angle2 += 3;
}

function smallGuy() {
    let angle1 = 1;
    let angle2 = 2

    angleMode(DEGREES);
    fill('black');

    let centreX = width / 2;
    let centreY = height / 2
    let radius = 400;
    let x = radius * cos(angle1);
    let y = radius * sin(angle2);

    ellipse(centreX + x, centreY + y, 1, 1);

    angle1++;
    angle2 += 3;

}
