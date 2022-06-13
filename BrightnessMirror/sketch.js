var video;
var pScale = 16;
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, ready);
  video.size(width / pScale, height / pScale);
  pixelDensity(1);
}

function ready() {
  init = true;
}

var init = false;

function draw() {

  background(51);
  if (init) {
    video.loadPixels();
    loadPixels();
    for (var y = 0; y < video.height; y++) {
      for (var x = 0; x < video.width; x++) {
        var index = (video.width - x + 1 + y * video.width) * 4;
        var r = video.pixels[index + 0];
        var g = video.pixels[index + 1];
        var b = video.pixels[index + 2];
        var brightness = (r + g + b) / 3
        var size = map(brightness, 0, 255, 0, pScale);
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(x * pScale, y * pScale, size, size);

      }
    }
  }
  // updatePixels();
}
