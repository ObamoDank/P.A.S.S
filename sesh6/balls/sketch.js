let ballX = [];
let ballY = [];
let ballR = [];

let velocityX = [];
let velocityY = [];

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 5; i++) {
        ballX.push(random(0, width));
        ballY.push(random(0, height));
        ballR.push(random(1, 150));
        velocityX.push(random(1, 10));
        velocityY.push(random(1, 10));
        r.push(random(0, 255));
        g.push(random(0, 255));
        b.push(random(0, 255));
    }
}

function draw() {
    background("purple");
    fill("orange");
    makeBalls();
    moveBalls();
    logEverything();
}

function makeBalls() {
    for(let i = 0; i < ballX.length; i++){
        ellipse(ballX[i], ballY[i], ballR[i]);
    }
}

function moveBalls() {
    for (let i = 0; i < ballX.length; i++) {
        if (ballX[i] + ballR[i] / 2 >= width) {
            velocityX[i] = random(-20, -1);
        }
        if (ballX[i] - ballR[i] / 2 <= 0) {
            velocityX[i] = random(1, 20);
        }
        ballX[i] += velocityX[i];

        if (ballY[i] + ballR[i] / 2 >= height) {
            velocityY[i] = random(-20, -1);
        }
        if (ballY[i] - ballR[i] / 2 <= 0) {
            velocityY[i] = random(1, 20);
        }
        ballY[i] += velocityY[i];
    }
}


function mouseClicked() {
    ballX.push(random(0, width));
    ballY.push(random(0, height));
    ballR.push(random(1, 150));
    velocityX.push(random(1, 10));
    velocityY.push(random(1, 10));
    r.push(random(0, 255));
    g.push(random(0, 255));
    b.push(random(0, 255));
}