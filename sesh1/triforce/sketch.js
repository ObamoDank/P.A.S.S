let x = 1;



function setup() {
    createCanvas(500, 500);
//    print(n);
//    print(add(1, 2));
}

function draw() {
    background(130);
    notch(10, 50);
    triangle(100, 400, 250, 150, 400, 400);
    triangle(183, 265, 317, 265, 250, 400);
    text('183, 265', 130, 265);
    text('317, 265', 320, 265);
    
//    for(let x = 0; x <= 10; x++){
//        ellipse(x * 50, 100, 50);
//    }
}

function notch(n, d) {
    for(var i = 1; i <= n; i++) {
        line(i * d, 0, i * d, 20);
        line(0, i * d, 20, i * d);
        text(i * d, 25, i * d);
        text(i * d, i * d, 30);
    }
}

//function add(x, y) {
//    var x = 2;
//    return x + y;
//    
//}
//