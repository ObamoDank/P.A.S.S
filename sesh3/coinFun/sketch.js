function setup() {
    createCanvas(500, 500); //Why not add background here?
}

function draw() {
    background(130);
    coin(100, 100, 100, '30c', 'red');
    coin(150, 300, 50, '$2', 'gold');
}

function coin(x, y, size, amount, col){
    textAlign(CENTER);
    fill(col);
    ellipse(x, y, size);
    fill('black');
    text(amount, x, y);
}