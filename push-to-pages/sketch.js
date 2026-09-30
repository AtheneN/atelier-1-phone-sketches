async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("rgb(187,228,241)");
  
    fill("yellow");
    stroke("orange");
    strokeWeight(20);   
    
    circle(width - 1*width/10, height - 4 * height/5, height/3);
    
    fill("white");
    stroke("white");
    strokeWeight(1);   
    
    circle(width/4, height/4, height/3);
    circle(width/3, height/4, height/4);
    circle(width/5, height/4, height/4);
    
    stroke(0);
    strokeWeight(1);
    stroke("green");
    
    fill("green");
    rect(0, height - (height/5 + height/10), width, height/10);
    
    fill("rgb(30,91,30)");
    rect(0, height - height/5, width, height/5);
    
    textSize(50);
    text("🐝", mouseX-25, mouseY+30);
}