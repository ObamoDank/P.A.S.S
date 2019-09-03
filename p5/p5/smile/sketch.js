function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    fill(0);
    notch(10, 50);
    fill(255, 204, 0);
    ellipse(width/2, height/2, 300, 300);
    line(200, 150, 200, 250);
    line(300, 150, 300, 250);
    line(200, 300, 300, 300);
}

function notch(n, d) {
    for(let i = 1; i <= n; i++) {
        line(i * d, 0, i * d, 20);
        line(0, i * d, 20, i * d);
        text(i * d, 25, i * d);
        text(i * d, i * d, 30);
    }
}