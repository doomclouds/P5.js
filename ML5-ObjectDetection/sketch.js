let img;
let detector;

function preload() {
  img = loadImage("../ML5-ImageClassifier/images/dog.jpg");
  detector = ml5.objectDetector('cocossd');
}

function setup() {
  createCanvas(img.width, img.height);
  console.log(detector);
  image(img, 0, 0, width, height);
  detector.detect(img, gotDetections)
}

function gotDetections(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    for (let i = 0; i < results.length; i++) {
      const object = results[i];
      stroke(0, 255, 0);
      strokeWeight(4);
      noFill();
      rect(object.x, object.y, object.width, object.height);
    }
  }
}

function draw() {
}
