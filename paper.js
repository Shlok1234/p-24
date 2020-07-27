class Paper {
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 20, options);
        World.add(world, this.body);
    }
        display(){
        //var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20,20);
        pop();
}
}