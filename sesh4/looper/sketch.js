function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    let x = 0;
    let y = 0;
    while (x <= 500) {
        ellipse(x, height / 2, 50);
        ellipse(height / 2, x, 50);
        x += 50;
    }
    
    for(let i = 0; i < 10, i++){
        
    }
}


