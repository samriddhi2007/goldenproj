var bg
var pc
var w1,w2,w3
var r1,r1img
var a1,a2

function preload(){
r1img = loadImage("mathriddle.jpg")
bg = loadImage("bluemoon.png")
}
function setup() {
  createCanvas(800,600);
  bg1 = createSprite(400,300)
  bg1.addImage(bg)
  pc = createSprite(50,50,50,50);
  w1 = createSprite(90,130,10,400);
  //w2 = createSprite(135,330,100,10);
 w3 = createSprite(90,510,10,200);
  w4 = createSprite(135,465,100,10)
w5 = createSprite(190,280,10,370)
  d1 = createSprite(92,370,10,80) 
  d1.shapeColor = "red"
  r1 = createSprite(400,300,50,50)
  a1 = createSprite(347,360,25,25)
  a2 = createSprite(460,360,25,25)
  d2 = createSprite(186,43,10,91)
  d2.shapeColor = "red"
  w7 = createSprite(280,210,10,500)
  w8 = createSprite(350,455,130,10)
  w9 = createSprite(420,294,10,330)
 // w10 = createSprite(470,130,90,10)
  w11 = createSprite(510,355,10,520)
  d3 = createSprite(279,528,10,130)
  d3.shapeColor = "red"
  d4 = createSprite(509,52,10,90)
  d4.shapeColor = "red"
  d5 = createSprite(417,65,10,120)
  d5.shapeColor = "red"
  w12 = createSprite(610,255,10,520)
  d6 = createSprite(556,508,100,10)
  d6.shapeColor = "red"
  //wallgroup = new Group()
 
}

function draw() {
  background(0); 
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(keyDown(UP_ARROW)){
    pc.y = pc.y-5
  }
  if(keyDown(DOWN_ARROW)){
    pc.y = pc.y+5
  }
  if(keyDown(LEFT_ARROW)){
    pc.x = pc.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    pc.x = pc.x+5
  }
  if(pc.isTouching(d1)){
    r1.scale = 0.5
    pc.bounce(d1)
r1.addImage("riddle1",r1img)
  }
  if(mousePressedOver(a1)){
    pc.x = 50
    pc.y = 50
  }
  if(mousePressedOver(a2)){
    d1.destroy();
    d1.visible = false
    
  }
  if(pc.isTouching(d2)){

  }
  if(pc.isTouching(d3)){

  }
  if(pc.isTouching(d4)){

  }
  if(pc.isTouching(d5)){

  }
  if(pc.isTouching(d6)){

  }
  
 // pc.bounceOff(w1)
 // pc.bounceOff(w2)
  //pc.bounceOff(w3)
 // pc.bounceOff(w4)
  //pc.bounceOff(w5)
 // pc.bounceOff(w6)
 // pc.bounceOff(w7)
 // pc.bounceOff(w8)
 // pc.bounceOff(w9)
 // pc.bounceOff(w10)
 // pc.bounceOff(w11)
 // pc.bounceOff(w12)
  createEdgeSprites();
  //pc.collide(edges)
  drawSprites();
}