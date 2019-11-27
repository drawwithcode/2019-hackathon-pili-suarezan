var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var mySound;
var analyzer;


function preload() {
  mySound = loadSound("./assets/TG1_bumper.mp3");
  myImage1 = loadImage("./assets/dance1.jpg");
  myImage2 = loadImage("./assets/dance2.jpg");
  myImage3 = loadImage("./assets/dance3.jpg");
  myImage4 = loadImage("./assets/dance4.jpg");
  myImage5 = loadImage("./assets/dance5.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  imageMode(CENTER);

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySound);

  mySound.pause();
  mySound.playMode('restart');


}

function draw() {
//Image
if (frameCount < 10){
  image(myImage1, width / 2, height / 2, myImage1.With / 1.2, myImage1.height / 1.2);
} else if (frameCount < 20) {
  image(myImage2, width / 2, height / 2, myImage2.With / 1.2, myImage2.height / 1.2);
} else if (frameCount < 30){
  image(myImage3, width / 2, height / 2, myImage3.With / 1.2, myImage3.height / 1.2);
} else if(frameCount < 40){
  image(myImage4, width / 2, height / 2, myImage4.With / 1.2, myImage4.height / 1.2);
}

//image(myImage1, width / 2, height / 2, myImage1.With / 1.2, myImage1.height / 1.2);

//Sound map
    var volume = 0;

    volume = analyzer.getLevel();
    volume = map(volume,0,1,0, height);
    fill(255,230,0,100);
    noStroke();
    ellipse(width / 2+220, height / 5+430, volume);

    //text
    fill("gray");
    textFont("Arial");
    textSize(30);
    text("Push the play button", width /2+135, height /5+650 );
}

  function mouseClicked() {
    if (mySound.isPlaying() == false) {
      mySound.play();
    } else {
      mySound.pause();
    }
  }



  //WINDOW RESIZED
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
