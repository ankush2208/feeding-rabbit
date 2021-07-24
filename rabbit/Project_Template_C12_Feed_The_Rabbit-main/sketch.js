var gardenImg , rabbitImg , applei , leafi , orangeleafi , redleafi ;
var  garden , rabbit , apple , leaf , leaf2 , leaf3 ,score ;

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  leafi = loadImage("leaf.png");

  applei = loadImage("apple.png");

  
  orangeleafi = loadImage("orangeLeaf.png");

  redleafi = loadImage("redimage.png");
}

function setup(){
  
  createCanvas(420,500);
  
// Moving background
garden=createSprite(200,250);
garden.addImage(gardenImg);
garden.x = garden.width/2;
garden.velocityX=-2
garden.scale = 1.2

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

score = 0;


}


function draw() {
  background("light green");
  fill(0)
  textSize(25)
  text("SCORE "+score,200,100)
  garden.depth = text.depth;
  text.depth = text.depth+1
  edges= createEdgeSprites();                              
  rabbit.collide(edges);
  rabbit.x = World.mouseX

  if(rabbit.isTouching(leaf)  ||
  rabbit.isTouching(leaf2)  ||
  rabbit.isTouching(leaf3)  ||
  rabbit.isTouching(apple)){
 leaf.visible = false
 leaf2.visible = false
 leaf3.visible = false
 apple.visible = false

 score = score+1

  }
   
 
if(garden.x <120 ){
  garden.x =  garden.width/2;
}
spawnfood();
  drawSprites();
}
function spawnfood(){
if(frameCount % 200 === 0){
apple = createSprite(100,200,10,10)
apple.addImage(applei)
apple.velocityY = 3
apple.scale = 0.09
}
if(frameCount % 150 === 0){
 leaf  = createSprite(380,200,10,10)
 leaf.velocityY = 2
 leaf.scale = 0.1
leaf.addImage(leafi)
}
if(frameCount % 120 === 0){
  leaf2  = createSprite(200,200,10,10)
  leaf2.velocityY = 2
  leaf2.scale = 0.08
 leaf2.addImage(redleafi)

 }if(frameCount % 100 === 0){
  leaf3  = createSprite(300,200,10,10)
  leaf3.velocityY = 2
  leaf3.scale = 0.1
 leaf3.addImage(orangeleafi)
 }
}