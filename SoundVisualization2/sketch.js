var song;
var amp;
var volhistory = [];

function preload() {
  song = loadSound("test.mp3");
}

function setup() {
  angleMode(DEGREES);
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
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 70, 200);
    x = r * cos(i);
    y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
}
