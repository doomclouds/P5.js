var mic;
function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background(51);
  var level = mic.getLevel();
  var vol = map(level, 0, 1, 20, 200);
  ellipse(width / 2, height / 2, 200, vol);
}
