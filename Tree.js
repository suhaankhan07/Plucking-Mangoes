class Tree {
    constructor(x,y,width,height) {
    
       width = this.width;
       height = this.height;

        var options = {
         isStatic:true,
         friction:1    
    }  

    this.body = Bodies.rectangle(x,y,width,height,options);
     this.image = loadImage("tree.png");
      
     World.add(world,this.body);
    
   }
  
    display() {
     var pos = this.body.position;

    rectMode(CENTER)

    push();
    fill("green")
    translate(pos.x,pos.y);
    image(this.image,0,0,400,600);
    pop();
    this.body.scale = 0.2;

   }
}