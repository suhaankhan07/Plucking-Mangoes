
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;


function preload()
{
  boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

   boy = createSprite(160,600,20,20);
   boy.addImage(boyImage);
   boy.scale = 0.08;
	 


	stone = new Stone(200,200,40);
	ground = new Ground(400,670,800,20);
  
  mango1 = new Mango(550,100,50);
  mango2 = new Mango(630,160,50);
  mango3 = new Mango(610,210,50);
  mango4 = new Mango(540,280,50);
  mango5 = new Mango(550,200,50);


  tree = new Tree(400,50,1,1); 
  

  launcher = new Launcher(stone.body,{x:100,y:500});

  keyPressed();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  detectcollision(stone,mango1);

  stone.display();
  ground.display();

  

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  launcher.display();
 

  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  launcher.fly();
}

 function detectcollision(stone,mango) {
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   
  if (distance <= mango.radius + stone.radius) {
     Matter.Body.setStatic(mango.body,false);
   }
}

function keyPressed() {
  if(keyCode === 32) {
   Matter.Body.setPosition(stone.body,{x:200,y:200});
    launcher.attach(stone.body);
  }

}


