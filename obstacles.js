class Obstacle {
    constructor(x,y, width , height, speed , type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type - type;
    }

    draw(){
        ctx1.fillStyle = 'red';
        ctx1.fillRect(this.x,this.y, this.width, this.height);
    }
    update(){
        this.x += this.speed * gameSpeed;
        if(this.x > canvas.width + this.width){
            this.x = 0 - this.width;
        }
    }
}

function createObjects(){
    // this is for the first lane of cars 
    for(let i = 0 ; i < 2 ; i++){
        let x = i * 350;
        carsArray.push(new Obstacle(x,canvas.height - grid * 2, grid * 2,grid,1))
    }

}

//lane 2 
for(let i = 0 ; i < 2 ; i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height - grid * 3, grid * 2,grid,2))

} 

//lane 3 
for(let i = 0 ; i < 2 ; i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height - grid * 4, grid * 2,grid,1))

}



//lane 4 
for(let i = 0 ; i < 2 ; i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height - grid * 5, grid * 2,grid,0.5))
}

//lane 4 
for(let i = 0 ; i < 2 ; i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height - grid * 6, grid * 2,grid,1))




    createObjects()

    function cycleObjects(){
        for(let i = 0 ; i < carsArray.length ; i++){
            carsArray[i].update();
            carsArray[i].draw();
        }
    }
        
}
