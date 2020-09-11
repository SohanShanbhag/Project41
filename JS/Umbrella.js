class Umbrella {
    constructor(x,y,width, height){
        var options = {
            isStatic: true
        }

        this.umbrella = Bodies.rectangle(x,y,width, height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Batman.png");
        World.add(world, this.umbrella);
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}