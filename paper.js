class paper{
 
    constructor(x,y,width,height){

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5, 
		density:1.2
	}
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 40;
        this.height =40;
        World.add(world,this.body)
        this.image=loadImage("crumpled-paper-n1KArDA-600.png")
}
display(){
   
    imageMode(CENTER);
    fill('red')
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  
}
 }  