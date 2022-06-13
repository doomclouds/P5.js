// console.log('ml5 version:', ml5.version);
let mobilenet;
let dog;
let video;
let train;
let lab;
let slider;
let predictor;
let addBtn;
let saveBtn;

function setup() {
  createCanvas(320, 240);
  background(0);

  lab = createP("test");

  slider = createSlider(0, 1, 0.5, 0.01);

  saveBtn = createButton("save");
  saveBtn.mousePressed(function(){
    // predictor.load('model.json');
    predictor.save();
  });

  addBtn = createButton("add");
  addBtn.mousePressed(function (){
    predictor.addImage(slider.value());
  });

  train = createButton("train");
  train.mousePressed(function () {
    predictor.train(whileTraining);
  });
  video = createCapture(VIDEO);
  video.hide();
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  predictor = mobilenet.regression(video, videoReady);
}

function whileTraining(loss) {
  if (loss == null) {
    console.log("train completed");
    predictor.predict(gotResults);
  } else {
    console.log(loss);
  }
}

function gotResults(error, res){
  if(error){
    console.error(error);
  }else{
    // console.log(res)
    lab.html(res.value);
    predictor.predict(gotResults);
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
