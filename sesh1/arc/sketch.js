function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    fill(0)
    notch(10, 50);
    fill('green');
    arc(250, 250, 400, 400, PI, QUARTER_PI);
    
}


function notch(n, d) {
    for(var i = 1; i <= n; i++) {
        line(i * d, 0, i * d, 20);
        line(0, i * d, 20, i * d);
        text(i * d, 25, i * d);
        text(i * d, i * d, 30);
    }
}