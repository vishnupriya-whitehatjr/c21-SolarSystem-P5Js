class Sun{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image = loadImage("images/sun.png");
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.radius);
    }
}