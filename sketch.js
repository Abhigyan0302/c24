const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1=new Pig(800,350);
    log1=new Log(800,250,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);
    pig2=new Pig(800,220);
    log2=new Log(800,180,300,PI/2);

    box5=new Box(800,160,70,70);
    log3=new Log(750,120,150,PI/4);
    log4=new Log(850,120,140,-PI/4);

    bird1=new Bird(30,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}