let redValue;
let blueValue;
let greenValue;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  lockGestures();

  if (location.protocol === 'https:' && window.self === window.top) {
    showDesktopQr();
  }

  imageMode(CENTER);
  enableGyroTap('Tap to turn on motion');
  enableVibrationTap('Tap to turn on vibration');
  angleMode(DEGREES);

  redValue = 137;
  blueValue = 196;
  greenValue = 247;
}

function draw(){
  noStroke();

  for(let i = 0; i < 4; i++){
    fill(redValue - i*10, blueValue - i*25, greenValue);
    circle(width/2, height/2, width/4 - (i*(width/4)/4));
  }

  if (mouseIsPressed){
    redValue = random(40, 255);
    blueValue = random(100,255);
    greenValue = random(0,255);
  }
}