const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world

var pentagon;
var ground1,ground2,ground3;
var backgroundImg
var block1,block2,block3,block4,block5,
    block6,block7,block8,block9,block10,
    block11,block12,block13,block14,block15,
    block16,block17,block18,block19,block20,
    block21,block22,block23,block24,block25;

var bg="bg.png"
var score = 0

var gameState = "onSling";

function preload(){ 
time1();
}

function setup(){
createCanvas(1400,400);
engine = Engine.create();
world = engine.world;

pentagon = new Polygon(55,190,30,30);

sling = new SlingShot(pentagon.body,{x:150,y:160});

ground1 = new Ground(600,285,200,10);
ground2 = new Ground(900,195,200,10);
ground3 = new Ground(750,400,1500,20);

block1 = new Block(600,260,30,40);
block2 = new Block(570,260,30,40);
block3 = new Block(540,260,30,40);
block4 = new Block(630,260,30,40);
block5 = new Block(660,260,30,40);

block6 = new Block(585,220,30,40);
block7 = new Block(555,220,30,40);
block8 = new Block(615,220,30,40);
block9 = new Block(645,220,30,40);

block10 = new Block(600,170,30,40);
block11 = new Block(570,180,30,40);
block12 = new Block(630,180,30,40);

block13 = new Block(600,140,30,40);

block14 = new Block(900,170,30,40);
block15 = new Block(930,170,30,40);
block16 = new Block(870,170,30,40);
block17 = new Block(840,170,30,40);
block18 = new Block(960,170,30,40);

block19 = new Block(900,140,30,40);
block20 = new Block(930,140,30,40);
block21 = new Block(870,140,30,40);
block22 = new Block(900,110,30,40);

}

function draw(){
if(backgroundImg)
background(backgroundImg);
Engine.update(engine);
noStroke()
textSize(35)
fill("red")
text("Score = " + score,width-250,80)

Engine.update(engine);
push();
//strokeWeight(4);
textSize(30);
fill(255,0,0)
textFont("Arial")
text("Drag the Hexagonal Stone and Release it,to launch it towards blocks,Press SPACE For Another Turn",10,40);
pop();

fill(rgb(135,205,236));
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

block1.score()
block2.score()
block3.score()
block4.score()
block5.score()

fill("lightBlue");
block6.display();
block7.display();
block8.display();
block9.display();

block6.score()
block7.score()
block8.score()
block9.score()

fill(rgb(140,140,225));
block10.display();
block11.display();
block12.display();

block10.score()
block12.score()
block12.score()

fill(rgb(170,190,225));
block13.display();

block13.score()

fill("lime");
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();

block14.score()
block15.score()
block16.score()
block17.score()
block18.score()

fill("lightGreen");
block19.display();
block20.display();
block21.display();

block19.score()
block20.score()
block21.score()

fill("green");
block22.display();

block22.score()

ground1.display();
ground2.display();
ground3.display();
sling.display();

fill("brown");
pentagon.display();
}

function mouseDragged(){
Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
sling.fly();
}

function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(pentagon.body,{x:100,y:200});
sling.attacher(pentagon.body);
}
}

async function time1(){
var ty = await fetch ("https://worldtimeapi.org/api/timezone/Asia/kolkata")
var yt = await ty.json();
var date = yt.datetime
var hour = date.slice(11,13)
if(hour>= 06 && hour<=19){
bg="bg.png"
    
}else{
bg="bg2.jpg"
}
backgroundImg = loadImage(bg)
}
