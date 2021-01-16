class Slingshot {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 50
        }  
        this.bodyB=bodyB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    
    fly () {
        this.sling.bodyA = null;
    }
    
    display(){
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.bodyB.position;
            strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
