let speed = 4; //Why might we use Const here?
let x = 50;

function setup() {
    createCanvas(500, 500); //Why not add background here?
}

function draw() {
    background(130);
    ellipse(x, height/2, 100);
    
    x+=speed;
    
    
    //Why would we not use an if/else statement here?
//    if(x > width - 50) {
//        speed = -4;
//    }else{
//        speed = 4;
//    }
    
    if(x > width - 50) {
        speed = -4;
    }
    
    if(x < 50) {
        speed = 4;
    }
}