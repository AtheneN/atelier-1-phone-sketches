let circleWidth;
let repitions;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  lockGestures();

  if (location.protocol === 'https:' && window.self === window.top) {
    showDesktopQr();
  }

  imageMode(CENTER);
  enableGyroTap('Tap to turn on motion');
  angleMode(DEGREES);
  
}

function draw(){
  circleWidth = width/4;
  repitions = 4;

  noStroke();

  for(let i = 0; i< repitions; i++){
    fill(255 - i*10, 135 - i*25, 5);
    circle(width/2, height/2, (circleWidth - i*(circleWidth/repitions)))
  }
}