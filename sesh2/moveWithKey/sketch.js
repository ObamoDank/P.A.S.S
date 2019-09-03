var ground = 450;
var gravity = 2;
var x = 100;
var y = 100;

//Can anyone think of any other variable we might be able to use?
//Is there any other constant?
    
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    line(0, ground, width, ground);
    rect(x, y, 50, 50);
    
    y += gravity;
    
    if(y >= ground - 50) {
        gravity = 0;
        y = ground - 50;
    }else{
        gravity = 4;
    }
    
    if(keyIsDown(LEFT_ARROW)){
        x -= 4;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += 4;
    }
    
    
    if(mouseIsPressed){
        y -= 10;
    }
    
}