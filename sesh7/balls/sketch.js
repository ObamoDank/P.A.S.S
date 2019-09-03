let balls = [];

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 10; i++) {
        balls.push({
            x: floor(random(0, width)),
            y: floor(random(0, height))
        });
    }

    console.log(balls);
}

function draw() {
    background("purple");
    fill("orange");
    for (let i = 0; i < balls.length; i++) {
        ellipse(balls[i].x, balls[i].y, 50);
    }
}

function mouseClicked() {
    balls.push({
        x: floor(random(0, width)),
        y: floor(random(0, height))
    });
}


//let ball0 = { x: 250, y: 250, r: 50 };
////----------------------------------
//let ball1 = { x: 130, y: 380, r: 30 };
////----------------------------------
//let ball2 = { x: 420, y: 130, r: 15 } ;


//    balls.push({ x: 250, y: 250, r: 50 });
//    balls.push({ x: 130, y: 380, r: 30 });
//    balls.push({ x: 420, y: 130, r: 15 });
