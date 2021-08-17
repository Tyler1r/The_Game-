// using 5 Id's to organize the game 
// 


const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;


const canvas = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;



const canvas = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;  


const canvas = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;



const canvas = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

// global variables 
const grid = 80;
let keys =[];
let score = 0 ;
let collisionsCount = 0;
let fraome = 0;
let gameSpeed = 1;

const particlesArray = [];
const maxParticles = 300;
const carsArray = [];
//will contain tye fighters etc!
const logsArray = [];
// will contain things for M.Falcon to jump on 
//