class cage{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = 200;
        this.height = 200;
        this.image=loadImage("download.png")
        World.add(world,this.body)
}
display(){
   
    imageMode(CENTER);
    fill('red')
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  
}
 } 