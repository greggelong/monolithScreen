let cnv;
let bard;
let cbard;
let lasttouch = 0;
let vids =[]
let tIndex=0
let instructions = ["A, to, B", "Study the ape"]


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
  vid2 = createVideo("ape.mp4");
  vid2.size(640, 288);
  vid2.volume(0);
  vid2.loop();
  vid2.hide();
  vids = [vid,vid2];
  bard = new p5.Speech(); // speech synthesis object
  cbard = new p5.Speech();
  cbard.setLang("zh-CN");
  //bard.listVoices()
  bard.onLoad = loaded;

  cbard.onLoad = loaded;
  
}

function draw() {
  background(220);
  let img = vids[tIndex].get();
  image(img, 0, 0, width, height);
  cbard.setLang("zh-CN");

  //bard.setVoice("Microsoft YaoYao - Chinese (Simplified, PRC)")

  cbard.speak("猩猩必须觉醒，通过劳作变得更加睿智。");
  //bard.setVoice("Microsoft Mark - English (United States)")
  bard.setLang("en-US");
  bard.speak(
    "Apes must awaken, growing wiser through labor. "+instructions[tIndex]
  );
}

function loaded() {
  print("loaded");
  //bard.listVoices();
}



function touchStarted() {
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  if (timesincelasttouch > 500) {
    /// toggle mix
    tIndex++
    if(tIndex>instructions.length-1){
      tIndex =0;
    }
  }

  lasttouch = currenttime;
}

function mouseClicked() {
  touchStarted();
}
