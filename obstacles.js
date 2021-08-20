// this will handle the obstacles in the ships way while crossing the path

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
        ctx1.fillStyle = 'red'; // gives the moving rectangles the color red 
        ctx1.fillRect(this.x,this.y, this.width, this.height); // arguments that is giving the moving rectangles their shape 
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
    for(let i = 0 ; i < 2 ; i++){ // created a for loop for the objects that are going across the scren 
        let x = i * 350; // this variable is used to create spacing between the two cars in the lane 
        carsArray.push(new Obstacle(x,canvas.height - grid * 2, grid * 2,grid,1)) // we are pushing the obtstacle into the cars.array 
        // these are the arguments in the obstacle that give the obstacles their properties (its 4:30am help me )
        // x = 350 
        // canvas height =  600 - grid which is 80 * 2 = 160 = 440 
        // width = grid which is 80 *2 = 160 
        // speed = 1, you can change speed by increasing or decreasing  
        // 
    }

}

//lane 2 
for(let i = 0 ; i < 2 ; i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height - grid * 3, grid * 2,grid,0.7))

} 

//lane 3 
for(let i = 0 ; i < 2 ; i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height - grid * 4, grid * 2,grid,1))

}



//lane 4 
for(let i = 0 ; i < 2 ; i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height - grid * 5, grid * 2,grid,2))
}

//lane 5
for(let i = 0 ; i < 2 ; i++){
    let x = i * 350;
    carsArray.push(new Obstacle(x,canvas.height - grid * 6, grid * 2,grid,1))




    createObjects()

    function cycleObjects(){
        for(let i = 0 ; i < carsArray.length ; i++){ // created a for loop to loop through the carArray 
            carsArray[i].update(); // i is the standard variable looping through the array and drawing on the update function as normal (its 5:30 am help me )
            carsArray[i].draw(); // i is the standard variable and we are lopping through the array for the draw function 
        }
    }
        
}
