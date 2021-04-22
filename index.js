import {randomPosition} from './src/utils.js';

function runAway(runner, height, width){
  runner.style.top = randomPosition(height);
  runner.style.left = randomPosition(width);
}

function initialise(){
  const runner = document.getElementById("runner");
  const runnerLength = parseInt(runner.style.width);
  const width = document.body.clientWidth - runnerLength;
  const height = document.body.clientHeight - runnerLength;

  runner.addEventListener('mouseover', () => runAway(runner, height, width));
}

window.onload = initialise();