let x = 'hello';
let z = x.length;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    text(z, width/2, height/2);
}