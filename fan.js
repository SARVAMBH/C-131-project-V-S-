img = "";

function preload() {
    img = loadImage("fan.jpeg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
}

function back() {
    window.location = "mainscreen.html"
}