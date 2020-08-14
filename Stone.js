class Stone {
  constructor(x,y,r){

    this.radius = r


   var options= {
       isStatic:false,
       restitution:0,
       friction:1,
       density:1.2
   } 

   this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
  } 
  display() {
  
    this.body.radius = this.radius;
   
    rectMode(CENTER);

    push();
    translate(this.body.position.x,this.body.position.y);
    fill("black");
    ellipse(0,0,this.radius);
    pop();


  }  
}