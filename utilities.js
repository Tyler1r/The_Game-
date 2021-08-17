function animate(){
    ctx3.clearRect(0,0, canvas.width, canvas.height );
    falcon.draw();
    falcon.update();
    requestAnimationFrame(animate);
}

animate();

// to make object move you will need event listeners
window.addEventListener('keydown', funtion(e){
    keys = [];
    keys.[e.keyCode = true;
});