function animate(){
    ctx3.clearRect(0,0, canvas.width, canvas.height );
    falcon.draw();
    falcon.update();
    requestAnimationFrame(animate);
}

animate();

// to make object move you will need event listeners
window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if(keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump();// need to take notes and write down logic for everthing 
    }
});