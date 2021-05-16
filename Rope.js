class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250

        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
     fly(){
    this.chain.bodyA=null;
     }
    display(){
        if(this.chain.bodyA){


        
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        stroke("white")
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
    
}