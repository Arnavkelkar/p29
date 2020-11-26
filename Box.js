class Box{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.width = 30;
        this.height = 50;
        World.add(world, this.body);

        this.visibility = 255
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world ,this.body);
          push();
          this.Visibility = this.Visibility - 0.000001;
          tint(255,this.Visibility);
          rect( 0, 0, this.width, this.height);
          pop();
        }
      }
}