var myImage1;
var mySound;
var analyzer;


function preload() {
  mySound = loadSound("./assets/TG1_bumper.mp3");
  myImage1 = loadImage("./assets/dance1.jpg");
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
image(myImage1, width / 2, height / 2, myImage1.With / 1.2, myImage1.height / 1.2);

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
