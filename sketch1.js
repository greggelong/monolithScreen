let cnv;
let bard;
let cbard;

function setup() {
  cnv = createCanvas(640, 288); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
  //let cx = windowWidth / 2 - cnv.width / 2;
  //let cy = windowHeight / 2 - cnv.width / 2;
  //cnv.position(cx, cy);
  cnv.parent("canvas-container");
  vid = createVideo("cabMove.mp4");
  vid.size(640, 288);
  vid.volume(0);
  vid.loop();
  vid.hide();
  bard = new p5.Speech(); // speech synthesis object
  cbard = new p5.Speech();
  cbard.setLang("zh-CN");
  //bard.listVoices()
  bard.onLoad = loaded;

  cbard.onLoad = loaded;
}

function draw() {
  background(220);
  let img = vid.get();
  image(img, 0, 0, width, height);
  cbard.setLang("zh-CN");

  //bard.setVoice("Microsoft YaoYao - Chinese (Simplified, PRC)")

  cbard.speak("猩猩必须觉醒，通过劳作变得更加睿智。");
  //bard.setVoice("Microsoft Mark - English (United States)")
  bard.setLang("en-US");
  bard.speak(
    "Apes must awaken, growing wiser through labor.  A, to, B"
  );
}

function loaded() {
  print("loaded");
  //bard.listVoices();
}
