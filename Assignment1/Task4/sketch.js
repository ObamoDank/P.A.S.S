let angle1 = 1;
let angle2 = 2;
let localX = [];
let localY = [];

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    
    angleMode(DEGREES);
    
    let centreX = width/2; // Centre of the movement X axis 
    let centreY = height/2 // Centre of the movement Y axis
    let radius = 100; // Radius of movement
    let x = radius * cos(angle1); // Actual X & Y value of ellipse, Constantly
    let y = radius * sin(angle2); // Changes as angle increases/decreases.
    localX.push(centreX + x);
    localY.push(centreY + y);
    print(localX);
    print(localY);
    ellipse(centreX + x, centreY + y, 20, 20);
//    line(centreX + x, centreY + y, centreX, centreY);
    
    angle1+=1; //Increase of angle 1
    angle2+=3; // increase of angle 2
}

function sinEx(){
    
    let x = 0
    let offset = 100;
    let height = 100;
    
    let y = offset + height * sin(x);
    
    
    ellipse(x, y, 20, 20);
    
    x++;
}

function workIt(){
    let angle1 = 1;
    let angle2 = 2
    
    angleMode(DEGREES);
    
    let centreX = width/2;
    let centreY = height/2
    let radius = 100;
    let x = radius * cos(angle1);
    let y = radius * sin(angle2);
    
    ellipse(centreX + x, centreY + y, 20, 20);
    
    angle1++;
    angle2+=3;
}