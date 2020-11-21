const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var divisionHeight = 300
var particle=[]
var plinkos = []
var divisios= []
function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(250,700,500,20)
    for (var k =0;k<=width;k=k+80){
      divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
    }
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    divisions = new Divisions(0,500,20,400)
    pinko = new Pinko(200,200,20,20)
    particle = new Particle(300,300,20,20)
}


function draw() {
  background(56,44,44);  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  particle.display()
  pinko.display()
  ground.display()
  divisions.display()

  drawSprites();
}
