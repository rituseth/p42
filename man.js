class Man {
    constructor(x,y){
    var options = {
        isStatic:true
       
    }


    this.body=Bodies.circle(x,y,20,  options) 
    this.image = loadImage("walking_1.png ")
this.r=20
    World.add(world,this.body);

    }  

display(){
  
    fill ("blue")
    imageMode(RADIUS);
    image(this.image , this.body.position.x , this.body.position.y+90 ,110,110)
  
}};
