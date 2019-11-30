import { Volum } from "./Domein/Volum";
import { Quick } from "./Domein/Quick";


const volum = new Volum();
const quick = new Quick();


// dom
let volumUp = document.getElementById('volum-up');
let volumDown = document.getElementById('volum-down');
let volumMute = document.getElementById('volum-mute');
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');


// イベント群
if(!!volumUp) {
  volumUp.addEventListener('click', () => {
    volum.up();
  });
}

if(!!volumDown) {
  volumDown.addEventListener('click',() => {
    volum.down();
  });
}

if(!!volumMute) {
  volumMute.addEventListener('click', () => {
    volum.mute();
  });
}

if(!!q1) {
  q1.addEventListener('click', () => {
    quick.select(1);
  });
}

if(!!q2) {
  q2.addEventListener('click', () => {
    quick.select(2);
  });
}

if(!!q3) {
  q3.addEventListener('click', () => {
    quick.select(3);
  });
}

if(!!q4) {
  q4.addEventListener('click', () => {
    quick.select(4);
  });
}