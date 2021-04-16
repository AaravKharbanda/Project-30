const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var background_img
function preload(){
  polygon_img=loadImage("polygon.png");
  backgroundImg = loadImage("sky.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,220,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //second stack//
  //level 1
  block17 = new Block(630,155,30,40)
  block18 = new Block(660,155,30,40)
  block19 = new Block(690,155,30,40)
  block20 = new Block(720,155,30,40)
  block21 = new Block(750,155,30,40)
  block22 = new Block(780,155,30,40)
  
  //level 2
  block23 = new Block(660,115,30,40)
  block24 = new Block(690,115,30,40)
  block25 = new Block(720,115,30,40)
  block26 = new Block(750,115,30,40)

  //level 3
  block27 = new Block(690,70,30,40)
  block28 = new Block(720,70,30,40)

  //level 4
  block29 = new Block(706,30,30,40)

  polygon1 = new Polygon(100,200,50,50)
  sling = new Slingshot(polygon1.body,{x:100, y:200});




  

}
function draw() {
  background(56,44,44); 
  background(backgroundImg);
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  
  fill("grey");
  block16.display();
  
  fill("#83f52c")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  fill("#4D4DFF")
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  fill("#FFAD00")
  block27.display();
  block28.display();

  fill("#E0E722")
  block29.display();

  polygon1.display();
  sling.display();
}
function mouseReleased(){
    sling.fly()
}

function mouseDragged(){       
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y: mouseY})
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon1.body)
  }
}
    
