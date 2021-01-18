class SLINGSHOT{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            stiffness:0.1,
            length:10

        }
        this.pointB = b;
        this.body = Constraint.create(options);
        World.add(world,this.body)
    }
    fly(){
        this.body.bodyA = null;
    }

    display(){
        if(this.body.bodyA){
        var posA = this.body.bodyA.position;
        var poiB = this.pointB;

        strokeWeight(3);
        line(posA.x,posA.y,poiB.x,poiB.y);}
    }

}