var bgimg;
var lost,won;
var player1img, player2img;
var w1img , w2img,w3img,w4img, w5img, w6img;
var powerupimg;


function preload()
{
  bgimg = loadImage("images/bg.jpg");
  lost = loadImage("images/lost.png");
  won = loadImage("images/won.png");
  player1img = loadImage("images/player1.png");
  player2img = loadImage("images/player2.png");
  powerupimg = loadImage("images/medkit.png");
  w1img = loadImage("images/weapon1.png");
  w2img = loadImage("images/weapon2.png");
  w3img = loadImage("images/weapon3.png");
  w4img = loadImage("images/weapon4.png");
  w5img = loadImage("images/weapon5.png");
  w6img = loadImage("images/weapon6.png");
  bullet1img = loadImage("images/bullet1.png");
  bullet2img= loadImage("images/bullet2.png");

}

function setup()
{
  createCanvas(1440,690);

  bg = createSprite(750,325,1500,750);
  bg.addImage(bgimg);
  bg.scale = 7;
  
  player1 = createSprite(100,300,60,40);
  player1.addImage(player1img);
  player1.scale = 0.05;

  
  player2 = createSprite(1200,300,60,40);
  player2.addImage(player2img);
  player2.scale = 0.05;

  

  

}
function draw()
{
  background(0);

  if(keyDown("space"))
  {
    createbullet1()
       
}
if(keyDown("Z"))
  {
    createbullet2()
    
}
  if(keyDown("a"))
  {
    player1.x -= 3;
  }

  if(keyDown("d"))
  {
    player1.x += 3;
  }

  if(keyDown("w"))
  {
    player1.y -= 3;
  }

  if(keyDown("s"))
  {
    player1.y += 3;
  }

  if(keyDown("left"))
  {
    player2.x -= 3;
  }

  if(keyDown("right"))
  {
    player2.x += 3;
  }

  if(keyDown("up"))
  {
    player2.y -= 3;
  }

  if(keyDown("down"))
  {
    player2.y += 3;
  }

  


  
  drawSprites();
}

function createbullet1(){
  bullet1 = createSprite(1500,100,5,10)
  bullet1.y = player2.y
  bullet1.x = player2.x
  bullet1.velocityX=-6
  bullet1.addImage(bullet2img)
  bullet1.scale=0.03
}

function createbullet2(){
  bullet2 = createSprite(0,100,5,10)
  bullet2.y = player1.y
  bullet2.x = player1.x
  bullet2.velocityX=6
  bullet2.addImage(bullet1img)
  bullet2.scale=0.03
}