function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(100);
    part1();
    part2();
    part3();
}

function part1(){
    fill('red');
    stroke('black');
    rect(0, 0, width/3, height/2);
    stroke('blue');
    for(let i = 50; i < width/3; i += 50){
        line(0, i, width/3, i);
    }
    stroke('yellow');
    ellipse((width/3)/2, height/4, 150);
    line(100, 95, 100, 205);
    line((width/3)/2, 76, (width/3)/2, 225);
    line((width/3)/2 + 50, 95, (width/3)/2 + 50, 205);
}

function part2(){
    fill('yellow');
    stroke('black');
    rect(width/3, 0, width/3, height/2);
    stroke('red');
    for(let i = 50; i < width/3; i += 50){
        line(width/3, i, (width/3)*2, i);
    }
    rectMode(CENTER);
    stroke('blue')
    rect(width/2, height/4, 150, 150);
    rectMode(CORNER);
    for(let i = (width/2 - 37.5); i <= (width/2 + 37.5); i += 37.5){
        line(i, 75, i, 225);
    }
}

function part3(){
    fill('blue');
    stroke('black');
    rect((width/3) * 2, 0, width, height/2);
    stroke('yellow');
    for(let i = 50; i < width/3; i += 50){
        line((width/3) * 2, i, width, i);
    }
    stroke('red');
    triangle(750, 75, 675, 225, 825, 225);
    line(712.5, 150, 712.5, 225);
    line(750, 75, 750, 225);
    line(787.5, 150, 787.5, 225);
}

function part4(){
    
}
