class Falcon {
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2  - this.width/2;
        this.y = canvas.height - this.height;
        this.moving  = false;
        this.frameX = 0;
        this.frameY = 0;

    }
    update(){
        //console.log('update');
        if(keys[38]){
            if(this.moving=== false){
                this.y -=grid;
                this.moving  = true;
            }
        }   //up key/arrow
    }
    draw(){
        ctx3.fillStyle = 'gray';
        ctx3.fillRect(this.x, this.y,this.width, this.height);
    }
jump(){
    //console.log('jump')
}

}

const falcon = new Falcon();