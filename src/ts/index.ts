import { Volum } from "./Volum";

const volum = new Volum();

let volumUp = document.getElementById('volum-up');
if(!!volumUp) {
  volumUp.addEventListener('click', () => {
    volum.up();
  });
}

let volumDown = document.getElementById('volum-down');
if(!!volumDown) {
  volumDown.addEventListener('click',() => {
    volum.down();
  });
}

let volumMute = document.getElementById('volum-mute');
if(!!volumMute) {
  volumMute.addEventListener('click', () => {
    volum.mute();
  });
}