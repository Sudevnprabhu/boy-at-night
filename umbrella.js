class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.r = 300
        this.body = Bodies.circle(x, y, this.r/2 - 35, options);
        World.add(world, this.body);
        this.image1 = loadImage("walking_1.png");
       
    }
    display() {
        imageMode(CENTER);
        image(this.image1, this.body.position.x, this.body.position.y, this.r, this.r);
        /*image(this.image2, this.body.position.x, this.body.position.y, this.r, this.r);
        image(this.image3, this.body.position.x, this.body.position.y, this.r, this.r);
        image(this.image4, this.body.position.x, this.body.position.y, this.r, this.r);
        image(this.image5, this.body.position.x, this.body.position.y, this.r, this.r);
        image(this.image6, this.body.position.x, this.body.position.y, this.r, this.r);
        image(this.image7, this.body.position.x, this.body.position.y, this.r, this.r);
        image(this.image8, this.body.position.x, this.body.position.y, this.r, this.r);
        image(this.image9, this.body.position.x, this.body.position.y, this.r, this.r);
        */


    }
}


