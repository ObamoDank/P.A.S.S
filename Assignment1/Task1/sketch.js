function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    pie();
}

function pie(){
    angleMode(DEGREES);
    fill('green');
    arc(250, 250, 100, 100, 0, 72, PIE);
    fill('purple');
    arc(250, 250, 100, 100, 72, 162, PIE);
    fill('red');
    arc(250, 250, 100, 100, 162, 270, PIE);
    fill('yellow');
    arc(250, 250, 100, 100, 270, 288, PIE);
    fill('blue');
    arc(250, 250, 100, 100, 288, 360, PIE);
    
}

//function degrees(x){
//    return (360 / 20) * x;
//}