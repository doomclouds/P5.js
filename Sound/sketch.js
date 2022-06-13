var song;
var btn;
var b = 255;
var g = 0;
var amp;

function preload() {
  song = loadSound("test.mp3");
}

function setup() {
  createCanvas(400, 400);
  song.setVolume(0.5);
  song.rate(1);
  btn = createButton("play");
  btn.mouseClicked(play);
  var jumpBtn = createButton("跳转");
  jumpBtn.mouseClicked(jumpToSomeTime)
  song.addCue(5, changedBlueChannel);

  amp = new p5.Amplitude();//Get the current volume of a sound.
}

function jumpToSomeTime() {
  var len = song.duration();
  console.log(len);

  song.jump(random(len));
}

function play() {
  if (!song.isPlaying()) {
    btn.html("pause");
    console.log("播放");
    song.play();
  } else {
    btn.html("play");
    console.log("暂停");
    song.pause();
  }

}

function changedBlueChannel() {
  b = random(255);
}

function draw() {
  // console.log(song.currentTime());
  background(song.currentTime() * 10, g, b);

  var vol = amp.getLevel();
  // console.log(vol);
  var diam = map(vol, 0, 1, 0, 400);
  fill(255, 0, 255);
  noStroke();
  ellipse(width / 2, height / 2, diam, diam);
}
