function setup() {
    createCanvas(700, 500);
}

function draw() {
    background(130);
    burger();
    ralph();
}

function burger(){
    let x = mouseX;
    rectMode(CENTER);
    rect(x, mouseY, 80, 40, 20);
    ('black');
    rect(x, mouseY, 90, 10, 5);
    if(mouseX < 295){
        x = 295;
        print(x);
    }
}

function ralph(){
    rectMode(CORNER);
    rect(50, 50, 200, 300, 20);
}