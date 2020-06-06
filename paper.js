class Paper {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.5,
          'friction':0.5,
          'density': 1.2
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius=radius;
      World.add(world, this.body);
     
      this.img=loadImage("crumpled paper.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      //imageMode(CENTER);
      image(this.img,0,0, this.radius,this.radius);
      
      
      

      fill(255);
      pop();
      
    }
    
  };
  
  


 