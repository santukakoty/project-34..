const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Body=Matter.Body;
var ground,block;
var GamingBackgroundImage;
var superhero;
var MonsterImage;
var mouseDragged;
var slingshot;
function preload() {
//preload the images here
GamingBackgroundImage=loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(2000,700);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(200,480,1200,10);
  superhero=new Superhero(40,30,150,150);
  slingshot=new Slingshot(superhero.body, { x: 500, y: 50 });

  block1=new Block(560,418,60,60);
  block2=new Block(560,358,60,60);
  block3=new Block(560,298,60,60);
  block4=new Block(560,238,60,60);
  block5=new Block(560,178,60,60);
  block6=new Block(560,118,60,60);
  block7=new Block(560,58,60,60);
  block8=new Block(630,418,60,60);
  block9=new Block(630,358,60,60);
  block10=new Block(630,298,60,60);
  block11=new Block(630,238,60,60);
  block12=new Block(630,178,60,60);
  block13=new Block(630,118,60,60);
  block14=new Block(700,418,60,60);
  block15=new Block(700,358,60,60);
  block16=new Block(700,298,60,60);
  block17=new Block(700,238,60,60);
  block18=new Block(700,178,60,60);
  block19=new Block(700,118,60,60);
  block20=new Block(700,58,60,60);
  block21=new Block(770,418,60,60);
  block22=new Block(770,358,60,60);
  block23=new Block(770,298,60,60);
  block24=new Block(770,238,60,60);
  block25=new Block(770,178,60,60);
  block26=new Block(770,118,60,60);

  
 monster=new Monster(800,30,130,160);
  
}


function draw() {
   background(GamingBackgroundImage);  
  Engine.update(engine);

  ground.display();

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 superhero.display();
 monster.display();
 slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX,y:mouseY});
}