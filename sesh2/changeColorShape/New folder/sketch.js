//let quadX = width / 2; Will fail.

function setup() {
    createCanvas(500, 500);
}

function draw() {
    
    //Why can't we initialise quadX previously
    
    let quadX = width / 2
    background(130);
    rectMode(CENTER);
    strokeWeight(4);
    

    if(mouseX < quadX && mouseY < quadX){
        fill('pink');
        rect(quadX, quadX, 50, 50);
    }
    else if(mouseX > quadX && mouseY < quadX){
        fill('purple');
        ellipse(quadX, quadX, 50);
    }
    else if(mouseX < quadX && mouseY > quadX){
        fill('pink');
        ellipse(quadX, quadX, 50, 50);
    }
    else if(mouseX > quadX && mouseY > quadX){
        fill('purple');
        rect(quadX, quadX, 50, 50);
    }
    else{
        fill('green');
        rect(quadX, quadX, 50, 50);
        ellipse(quadX, quadX, 50, 50);
    }
}