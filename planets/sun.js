class Sun{
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.radius);
    }
}