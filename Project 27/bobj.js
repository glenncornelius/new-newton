class bobj{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':80,
            'friction':0,
            'density':0
        }
        this.body = Bodies.circle(x, y, radius, [options]) 
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        fill("grey");
        circle(pos.x, pos.y, this.radius);
        rotate(angle);
        pop();
      }
}