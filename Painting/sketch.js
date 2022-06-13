var video;
var vScale = 16;
var delta = 10;
var particles = [];
var slider;
function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  slider = createSlider(0, 255, 127)
  video.size(width / vScale, height / vScale);
  for (var i = 0; i < 200; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
  background(51);
}

function draw() {
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.update();
    p.show();
  }
}

function Particle(x, y) {
  this.x = x || 100;
  this.y = y || 100;

  this.show = function () {
    video.loadPixels();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);

    var color = video.get(px, py);
    var r = color[0];
    var g = color[1];
    var b = color[2];

    // var index = (px + video.width * py) * 4;
    // var r = video.pixels[index + 0];
    // var g = video.pixels[index + 1];
    // var b = video.pixels[index + 2];
    noStroke();
    fill(r, g, b, slider.value());
    ellipse(this.x, this.y, 24, 24);
  }

  this.update = function () {
    this.x += random(-delta, delta);
    this.y += random(-delta, delta);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}