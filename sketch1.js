let cnv;

function setup() {
  cnv = createCanvas(640, 288); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
  //let cx = windowWidth / 2 - cnv.width / 2;
  //let cy = windowHeight / 2 - cnv.width / 2;
  //cnv.position(cx, cy);
  cnv.parent("canvas-container");
  vid = createVideo("bone.mp4");
  vid.size(640, 288);
  vid.volume(0);
  vid.loop();
  vid.hide();
}

function draw() {
  background(220);
  let img = vid.get()
  image(img, 0, 0, width, height);
}
