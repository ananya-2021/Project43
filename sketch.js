var bg,bg2,form,system,code,security;
var score=0;


function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("aladdin_cave2.jpg")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 900, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    
      security.access1.hide();
      security.button1.hide();
     
      security.access2.hide();
      security.button2.hide();

      security.access3.hide();
      security.button3.hide();
   
  }

  drawSprites()
}