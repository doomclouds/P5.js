var song;
var amp;
var volhistory = [];

function preload() {
  song = loadSound("test.mp3");
}

function setup() {
  var btn = createButton("播放");
  btn.mouseClicked(playSong);
  createCanvas(400, 400);
  amp = new p5.Amplitude();
}

function playSong() {
  if (!song.isPlaying()) {
    song.play();
    console.log("play");
  } else {
    console.log("other");
  }
}

function draw() {
  background(0);
  push();
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  var currentY = map(vol, 0, 1, height, 0);
  translate(0, height - currentY);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height / 2, 0)
    vertex(i, y);
  }
  endShape();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }
  stroke(255, 0, 0);
  line(volhistory.length, 0, volhistory.length, width);
}
