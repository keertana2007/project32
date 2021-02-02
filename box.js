class Box {
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
    //console.log(this.body.speed)
    push();
    if(this.body.speed<3){
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
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
    //console.log(this.Visibility)
    if(this.Visibility<250 && this.Visibility>145){
      score++;
    }
  }
};
