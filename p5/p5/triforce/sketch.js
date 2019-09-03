function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    notch(10, 50);
    triangle(100, 400, 250, 150, 400, 400);
    triangle(183, 265, 317, 265, 250, 400);
    text('183, 265', 130, 265);
    text('317, 265', 320, 265);

}

function notch(n, d) {
    for(var i = 1; i <= n; i++) {
        line(i * d, 0, i * d, 20);
        line(0, i * d, 20, i * d);
        text(i * d, 25, i * d);
        text(i * d, i * d, 30);
    }
}