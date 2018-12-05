function preload(){
  character = loadImage("./assets/fox2.png");
  fruit = loadImage("./assets/uva.png");

}
var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
    background(255);

fill('purple');
noStroke();

var myText = 'Sing aloud to let the fox reach the grapes';
textFont('garamond');
textAlign(CENTER);
textSize(18);
text(myText, windowWidth/2, windowHeight/9);
imageMode(CENTER);
rectMode(CENTER);
console.log(-vol*1000);
  fill('pink');
  var vol = mic.getLevel();
rect(windowWidth/2, windowHeight/8*6, windowWidth/70, -vol*1000)
  fox = image(character, windowWidth/2*1.01, windowHeight/8*7, image.width, image.height);

grapes = image(fruit, windowWidth/2, windowHeight/8*2, image.width, image.height);
}
