class Box_2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      if(this.body.speed<3){
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0, this.width, this.height);
      }
      else{
        World.remove(world,this.body)
        push()
        this.Visibility = this.Visibility - 1;
        tint(255,this.Visibility)
        pop()
      }
      pop();
    }
    score(){
      if(this.Visibility<250 && this.Visibility>145){
        score++;
      }
    }
  };
  