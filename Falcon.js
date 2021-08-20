//contains code for player character 
class Falcon {
    constructor(){
         this.spriteWidth = 200; // width of object when the sprite is added  
        this.spriteHeight = 200; // length of object  when the sprite is added 
        this.width = this.spriteWidth/5; // width of the square essentially without the sprite added =40
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2  - this.width/2; // where the objeect first appears on the x axis, canvas width = 600 /2 = 300, this.width = 200/5 = 40 /2 = 20. = 280 is starting point 
        this.y = canvas.height - this.height - 5;// canvas.height  =  600 - 200/5 - 560 starting point on the y axis 
        this.moving  = false; // this is to prevent the frog from mving too fast when holding down arrow key 
        //this.frameX = 0;
        //this.frameY = 0;

    }
    update(){
        //console.log('update');
        if(keys[38]){ //up key/arrow
            if(this.moving === false){ // this is to prevent the object from continuously moving while holding the key down 
                this.y -=grid; // grid is set to 80 / so the object will move 80 pixels up when up key is pressed / this.y = 560 which is the remainder of the canvas from the y starting point 
                this.moving  = true; // object will only move onve everytime you press the arrow 
            }
        }  
        if(keys[40]){ //down key
            if(this.moving === false){ // set to false 
                if(this.y <canvas.height - this.height *2 && this.moving === false){ // 560 is starting point if less than 1080
                    this.y += grid; // this is plus equals because you are moving up the grid and you are moving 80 pixels per input 
                    this.moving = true;
                } ;
                //this.moving  = true;
     
            } 
        }
        if(keys[37]){ //left
            if(this.moving === false && this.x > this.width){
                if(this.y <canvas.height - this.height *2 && this.moving === false){
                    this.x -= grid;
                    this.moving = true;
                } ;
            }



        }

if(keys[39]){ //right
            if(this.moving === false && this.x < canvas.width - this.width * 2){ //this.x  = 280 which is less than 600 - 40 * 2 =540 * 2 = 1080
                
                    this.x += grid;
                    this.moving = true;
                
            }
        }
        if(this.y < 0 )scored(); // y is less than 0 when object crosees the canvas border 


    }
    draw(){
        ctx3.fillStyle = 'gray'; // gives the object color grey 
        ctx3.fillRect(this.x, this.y,this.width, this.height);// creates rectangles and implements arguments to shape the rectangle/object 
    }
jump(){
    //console.log('jump')
}

}

const falcon = new Falcon();// creates object 