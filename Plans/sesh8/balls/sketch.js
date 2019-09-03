let balls = [];

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 10; i++) {
        balls.push({
            x: floor(random(0, width)),
            y: floor(random(0, height)),
            r: floor(random(1, 80)),
            velX: floor(random(1, 10)),
            velY: floor(random(1, 10)),
        });
    }
    console.log(balls);

}

function draw() {
    background("purple");
    fill("orange");
    makeBalls();
    moveBalls();
}

function makeBalls() {
    for (let i = 0; i < balls.length; i++) {
        ellipse(balls[i].x, balls[i].y, balls[i].r);
    }
}

function moveBalls() {
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].x + balls[i].r / 2 >= width) {
            balls[i].velX = random(-20, -1);
        }
        if (balls[i].x - balls[i].r / 2 <= 0) {
            balls[i].velX = random(1, 20);
        }
        balls[i].x += balls[i].velX;

        if (balls[i].y + balls[i].r / 2 >= height) {
            balls[i].velY = random(-20, -1);
        }
        if (balls[i].y - balls[i].r / 2 <= 0) {
            balls[i].velY = random(1, 20);
        }
        balls[i].y += balls[i].velY;
    }
}


function mouseClicked() {
    balls.push({
        x: floor(random(0, width)),
        y: floor(random(0, height)),
        r: floor(random(1, 80)),
        velX: floor(random(1, 10)),
        velY: floor(random(1, 10)),
    });
}
