var wave;
var evn;

function setup() {
  createCanvas(100, 100);

  env = new p5.Envelope();
  //A--Attack D--Decay(衰减) S--Sustain(维持) R--Release
  env.setADSR(0.05, 0.1, 0.5, 1); 
  env.setRange(1, 0);
  var btn = createButton("播放");
  btn.mouseClicked(clickplay);
  wave = new p5.Oscillator();
  wave.setType('sine');
  // wave.amp(0.1, 1);
  wave.freq(400);
  wave.amp(evn)
}

function clickplay(){
  wave.start();
  env.play(wave);
}

function draw() {
  background(51);
}
