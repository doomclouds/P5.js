var sketch = function (p) {
  p.x = 100;
  p.y = 100;

  p.setup = function () {
    p.createCanvas(200, 200);
    p.background(51);
  }

  p.draw = function () {
    p.fill(255, 0, 200, 25);
    p.noStroke();
    p.ellipse(p.x, p.y, 48, 48);

    p.x += p.random(-10, 10);
    p.y += p.random(-10, 10);
  }
}

var myp5 = new p5(sketch);
setInterval(() => {
  myp5.background(51);
}, 3000);