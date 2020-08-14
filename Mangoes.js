class Mango{
  constructor(x,y,r) {
      var options = {
        isStatic:true,
        friction:1,
        restitution:1
      }

      this.radius = r;


      this.body = Bodies.circle(x,y,r,options);
      this.image = loadImage("mango.png");
      World.add(world,this.body);
    
  }
display() {
 

 rectMode(CENTER)
  push();
  translate(this.body.position.x,this.body.position.y)
  fill("yellow")
  image(this.image,0,0,this.radius);
  pop();

}



}