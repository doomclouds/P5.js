var fft;
var song;
var w;

function preload() {
  var btn = createButton("播放");
  btn.mouseClicked(playSong);
  song = loadSound("test.mp3");
}

function playSong() {
  if (!song.isPlaying()) {
    song.play();
  }
}

function setup() {
  colorMode(HSB);
  angleMode(DEGREES);
  createCanvas(256, 256);
  fft = new p5.FFT(0.9, 512);
  w = width / 64;
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  // effect1(spectrum);
  effect2(spectrum);
}

function effect1(spectrum) {
  noStroke();
  // console.log(spectrum.length);
  for (var i = 0; i < spectrum.length; i++) {
    fill(i, 255, 255);
    var amp = spectrum[i];
    var y = map(amp, 0, 255, height, 0);
    rect(i * w, y, w - 2, height - y);
  }
}

function effect2(spectrum) {
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    fill(i, 255, 255);
    var amp = spectrum[i];
    var r = map(amp, 0, 255, 40, 200);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y); 
  }
  endShape();
}
