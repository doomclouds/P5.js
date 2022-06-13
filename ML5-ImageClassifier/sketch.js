// console.log('ml5 version:', ml5.version);
let mobilenet;
let dog;

function setup() {
  createCanvas(400, 400);
  background(0);

  dog = createImg('images/dog.jpg', imageReady);
  dog.hide();
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady() {
  console.log("Model is ready");
  mobilenet.predict(dog, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
  }
}

function imageReady() {
  console.log("Show dog")
  image(dog, 0, 0, width, height);
}

function draw() {
}
