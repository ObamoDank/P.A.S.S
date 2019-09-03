function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(130);
    fill(130);
    ellipse(mouseX, mouseY, 30);
    line (mouseX - 5, mouseY - 5, mouseX - 22, mouseY - 22);
    line (mouseX + 5, mouseY + 5, mouseX + 22, mouseY + 22);
    line (mouseX + 5, mouseY - 5, mouseX + 22, mouseY - 22);
    line (mouseX - 5, mouseY + 5, mouseX - 22, mouseY + 22);
    text (mouseX + "," + mouseY, mouseX + 25, mouseY + 25);
}