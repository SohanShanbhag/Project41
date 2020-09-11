const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunderCreatedFrame = 0;

var engine, world;

var umbrella, drop;

var thunder1, thunder2, thunder3;

var drops = [];

var maxDrops = 100;

function preload(){
    thunder1 = loadImage("Images/Thunder1.jpg");
    thunder2 = loadImage("Images/Thunder2.jpg");
    thunder3 = loadImage("Images/Thunder3.jpg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(500, 700);

    umbrella = new Umbrella(250, 600, 100, 200);

    if(frameCount % 100 === 0){
        for(var i = 0; i < maxDrops; i++){
            drops.push(new Drop(random(0,500), random(0,100), 3));
        }
    }
}

function draw(){
    Engine.update(engine);
    background("black");

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    rand = Math.round(random(1,3));
    if(frameCount % 80 === 0){
        thunder = createSprite(random(30,500),random(40,50),10,10);
        thunderCreatedFrame = frameCount;
        switch(rand){
            case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     default : break;
        }
        thunder.scale = random(1.2, 1.4);
    }

    if(thunderCreatedFrame + 20 === frameCount && thunder){
        thunder.destroy();
     }

    umbrella.display();

    drawSprites();
}