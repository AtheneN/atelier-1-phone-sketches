  // defining variables
let redValue;
let blueValue;
let greenValue;
let x;
let y;
let speed = 0.4;
let friction = 0.5;
let vx = 0;
let vy = 0;
let restX = null;

// set-up
async function setup() {
  createCanvas(windowWidth, windowHeight);
  lockGestures();

  if (location.protocol === 'https:' && window.self === window.top) {
    showDesktopQr();
  }

  imageMode(CENTER);
  enableGyroTap('Tap to turn on motion');
  // enableVibrationTap('Tap to turn on vibration');
  angleMode(DEGREES);

  // assigning values to variables
  redValue = 137;
  blueValue = 196;
  greenValue = 247;
  x = width/2;
  y = height/2;
  speed = 20;

}

// repeating function
function draw(){
  // clearing background
  background('#fff4d1')

  // variables
  let pushX = 0;
  let pushY = 0;

  // movement control
  if (window.sensorsEnabled) {
    if (restX === null) {
      restX = rotationX;
    }
    pushX = constrain(rotationY, -45, 45) / 45;
    pushY = constrain(rotationX - restX, -45, 45) / 45;
  } else {
    if (mouseIsPressed) {
      pushX = constrain((mouseX - x) / 200, -1, 1);
      pushY = constrain((mouseY - y) / 200, -1, 1);
  }
  }

  // changing position
  vx = (vx + pushX * speed) * friction;
  vy = (vy + pushY * speed) * friction;
  x = constrain(x + vx, 0, width);
  y = constrain(y + vy, 0, height);

  // out-of-bounds controls
  if (x > width){
    x = 0;
    // vibrate(50);
  } else if (x < 0){
    x = width;
    // vibrate(50);
  } else if (y > height){
    y = 0;
    // vibrate(50);
  } else if (y < 0){
    y = h;
    // vibrate(50);
  }

  // drawing circle
  noStroke();
  for(let i = 0; i < 4; i++){
    fill(redValue - i*10, blueValue - i*25, greenValue);
    circle(x, y, width/4 - (i*(width/4)/4));
  }

  // changing color 
  if (mouseIsPressed){
    redValue = random(40, 255);
    blueValue = random(100,255);
    greenValue = random(0,255);
  }
}

// extra functions
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}