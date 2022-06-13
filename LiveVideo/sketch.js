var video;
var snapshots = [];
var head = 0;
var total = 32;
function setup() {
  createCanvas(640, 240);
  background(51);
  video = createCapture(VIDEO, ready);
  video.size(320, 240);
  video.hide();
  pixelDensity(1);
}

var init = false;
function ready() {
  init = true;
}

function draw() {
  // tint(255, 0, 150);//对dom元素染色
  // image(video, 0, 0);
  if (init) {
    snapshots[head] = video.get();
    head++;
    if (head == total) {
      head = 0;
    }
  }

  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;

  for (let i = snapshots.length - 1; i >= 0; i--) {
    var index = (i + head) % (snapshots.length);
    const e = snapshots[index];
    image(e, x, y, w, h);
    x += w;
    if (x >= width) {
      x = 0;
      y += h;
    }
  }

  // loadPixels();
  // for (var y = 0; y < height / 2; y++) {
  //   for (var x = 0; x < width; x++) {
  //     var index = (x + y * width) * 4;
  //     pixels[index + 0] = x;
  //     pixels[index + 1] = 0;
  //     pixels[index + 2] = y;
  //     pixels[index + 3] = 255;
  //   }
  // }
  // updatePixels();
}
