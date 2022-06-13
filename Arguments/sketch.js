var particles = [];
function setup() {
  createCanvas(200, 200);
  particles[0] = new Particle(20, 50);
  particles[1] = new Particle("20", "120");
  particles[2] = new Particle(createVector(180, 180));
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.show();
  }
}

function Particle(a, b) {

  if (a instanceof p5.Vector) {
    console.log(typeof(a))
    this.x = a.x;
    this.y = a.y;
  } else {
    this.x = a || 100;
    this.y = b || 100;
  }

  this.show = function () {
    ellipse(this.x, this.y, 16, 16);
  }
}