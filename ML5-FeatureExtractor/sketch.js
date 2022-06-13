// console.log('ml5 version:', ml5.version);
let mobilenet;
let dog;
let classifier;
let video;
let oBtn;
let lineBtn;
let train;
let lab;

function setup() {
  createCanvas(320, 240);
  background(0);

  lab = createP("test");
  oBtn = createButton("o");
  oBtn.mousePressed(function () {
    classifier.addImage("o");
    console.log("add o");
  });
  lineBtn = createButton("line");
  lineBtn.mousePressed(function () {
    classifier.addImage("line");
    console.log("add line");
  });
  train = createButton("train");
  train.mousePressed(function () {
    classifier.train(whileTraining);
  });
  video = createCapture(VIDEO);
  video.hide();
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);
}

function whileTraining(loss) {
  if (loss == null) {
    console.log("train completed");
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}

function gotResults(error, res){
  if(error){
    console.error(error);
  }else{
    // console.log(res)
    lab.html(res[0].label + res[0].confidence);
    classifier.classify(gotResults);
  }
}

function modelReady() {
  console.log("Model is ready");
}

function videoReady() {
  console.log("Video is ready")
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240)
}
