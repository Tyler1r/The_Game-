// using 5 Id's to organize the game 
// // this will contain global variables and information for the sprites being used.Everything needed around the ap


const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;


const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;



const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;  


const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;



const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

// global variables 
const grid = 80;
let keys =[]; // array to push keys into to allow object to move 
let score = 0 ; // start score off at 0 
let gameSpeed = 1; // game speed should start at 1 and gradually increase (havent got it to work jesus christ)



const carsArray = [];
//will contain tye fighters etc!
const logsArray = [];
// will contain things for M.Falcon to jump on 
//