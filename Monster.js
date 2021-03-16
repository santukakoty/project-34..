class Monster{
    constructor(x,y,r){
        var options={
            //isStatic: true,
            density:2,
            
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Monster-01.png");
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body)
            }
            display(){
                var monsterPos=this.body.position;		
                push()
                translate(monsterPos.x, monsterPos.y-10);
                rectMode(CENTER)
                fill(255,0,255)
                imageMode(CENTER);
                image(this.image, 0,0,this.r+15, this.r)
                pop()
              
            }
        }