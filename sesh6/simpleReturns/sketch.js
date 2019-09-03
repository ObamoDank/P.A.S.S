let x = 1;
let y = 2;

let pi = 3.14159;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);

    print(x);
    print(multi(x, y));
    x = addIt(x, 1);
    
    if(x == y) {
        print("x = y");
    }else{
        print("x !=y ");
    }
    
    y = multi(x, y);
    
    print(y);
    
}

function multi(a, b){
    return a * b;
}

function addIt(a, b){
    return a + b;
}

function pythagoras(a, b){
    let cSquared = a**2 + b**2;
    let c = sqrt(cSquared); 
    return(c);
}

function circ(r){
    let circumference = pi * (r ** 2);
    return(circumference);
}