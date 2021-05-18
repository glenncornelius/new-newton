class cable{
    constructor(bodyA, pointB){

var options = {
        'bodyA' : bodyA,
        'pointB' : pointB,
        'stiffness': 0.04,
        'length' : 160
    }

        this.pointB = pointB
        this.cable = Constraint.create(options);
        World.add(world, this.cable);

    }
    display(){
        var pointA = this.cable.bodyA.position;
        var pointB = this.bodyB;
        strokeWeight(4);
        line(pointA,pointB);
    }
}