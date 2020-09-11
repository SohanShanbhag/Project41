class Drop{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            friction: 0.1
        }

        this.drop = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        this.color = "blue";
        this.drop.lifetime = height;
        World.add(world, this.drop);
    }

    // updateDrops(){     
    //     if(this.drop.position.y > height){

    //         Matter.Body.setPosition(this.drop, {x:random(0,400), y:random(0,400)})
    //     }
    // }

    display(){
        var pos = this.drop.position;
        var angle = this.drop.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }

    update(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop, {x: random(0,500), y: random(0,100)})
        }
    }
}