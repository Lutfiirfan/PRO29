class Box{
  constructor(x, y){
    var options={
      restitution:0.2,
      density:1.2,
      friction:1.5,
    }
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    
    this.Visiblity=255;
    World.add(world,this.body)
  }
  display(){
   // if(this.body.speed<3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop();
   
  }
}