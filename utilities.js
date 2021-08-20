// this will handle all the loops & event listeners 

function animate(){
    ctx3.clearRect(0,0, canvas.width, canvas.height );// this clears the canvas across the board 
    falcon.draw();
    falcon.update();
    cycleObjects();
    createScore();
    requestAnimationFrame(animate);
}

animate(); // using recursion to call all the functions on themselves over and over again (my eyes feel like raisins )

// to make object move you will need event listeners
window.addEventListener('keydown', function(e){ // (e) can be anything because the event listener always defers back to the object 
    keys = []; // this is the key array that was created on line 38 in setup.js , where the key value will be pushed 
    keys[e.keyCode] = true; // another way to add element into array/ similar to .push 
    // console.log(keys); / is another way to do this and will show the key being added and deleted in the terminal  
    if(keys[37] || keys[38] || keys[39] || keys[40]) { // these are all the key id's for the arrows on the keyboard 
        frogger.jump();// 
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode]; // when pushing button you add the key value into the array , and when you let go of the button you are deleting it from the keys array, if you dont do it this way youll have to hold down the other arrow before you move 
    falcon.moving = false;
})

function scored(){
    score++; // increase the score by 1 everytime object crosees canvas border 
    gameSpeed += 0.05; // game speed to increase by .05 everytime object corsses canvas border 
    falcon.x = canvas.width/2 - falcon.width/2;
    falcon.y = canvas.height - falcon.height - 40;
}


function createScore(){
    ctx4.fillStyle = 'white'; // color of the object 
    ctx4.strokeStyle = 'white'; // color of the object 0-0;
    ctx4.fillText(score, 270, 56);// where the object appears 
    ctx4.font = '45px Monaco'; // font of the object 
}