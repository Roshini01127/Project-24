class PlayerArcher{
    constructor(x,y,width,height){
        var options = {
            isStatic:true 
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width = width
        this.height = height 
        //Matter.Body.setAngle(this.body,-PI/2)
        this.image = loadImage("assets/playerArcher.png")
    }
    display(){
        var angle=this.body.angle 
        if(keyIsDown(DOWN_ARROW)
        && angle<-1.2
        ){
            angle+=0.01
            Matter.Body.setAngle(this.body,angle)
        }
        if(keyIsDown(UP_ARROW) 
        && angle>-1.9
        ){
            angle-=0.01
            Matter.Body.setAngle(this.body,angle)
        }
        push()
        rotate(angle)
        imageMode(CENTER) 
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
    }
}