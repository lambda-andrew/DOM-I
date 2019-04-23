let digits = document.querySelectorAll('.digit');
let digitContainer = document.querySelector('.digits')
let tens = document.getElementById('secondTens');
let littleTens = document.getElementById('secondOnes');
let bigSeconds = document.getElementById('msHundreds');
let littleSeconds = document.getElementById('msTens');
let button = document.createElement('button');
button.textContent = "start"
button.style.margin = "100px"
digitContainer.appendChild(button)
let buttonTwo = document.createElement('button');
buttonTwo.textContent = "stop"
buttonTwo.style.margin = "100px"
digitContainer.appendChild(buttonTwo)

button.addEventListener('click', () => timer())


function timer(){

button.disabled = true;
  tens.textContent = 0;
  littleTens.textContent = 0;
  bigSeconds.textContent = 0;
  littleSeconds.textContent = 0;

let firstHand = setInterval(function(){tens.textContent = (tens.textContent * 1) + 1}, 10000);
setInterval(function(){if((tens.textContent * 1) === 10){tens.textContent = 0}})


let secondHand = setInterval(function(){littleTens.textContent = (littleTens.textContent * 1) + 1}, 1000);
setInterval(function(){if((littleTens.textContent * 1) === 10){color()}})
setInterval(function(){if((littleTens.textContent * 1) === 10){endTime()}})


let thirdHand = setInterval(function(){bigSeconds.textContent = (bigSeconds.textContent * 1) + 1}, 100);
setInterval(function(){if((bigSeconds.textContent * 1) === 10){bigSeconds.textContent = 0}})



let fourthHand = setInterval(function(){littleSeconds.textContent = (littleSeconds.textContent * 1) + 1}, 50);
setInterval(function(){if((littleSeconds.textContent * 1) === 10){littleSeconds.textContent = 0}})

function color(){
    digits.forEach(item => item.style.color = "red")
}

buttonTwo.addEventListener('click', () => stopClock())
function endTime(){
  clearInterval(firstHand);

  clearInterval(secondHand);

  clearInterval(thirdHand);

  clearInterval(fourthHand);
  littleTens.textContent = 0;
  bigSeconds.textContent = 0;
  littleSeconds.textContent = 0;

}
function stopClock(){
  clearInterval(firstHand);
  tens.textContent = 0;
  clearInterval(secondHand);
  littleTens.textContent = 0;
  clearInterval(thirdHand);
  bigSeconds.textContent = 0;
  clearInterval(fourthHand);
  littleSeconds.textContent = 0;
  digits.forEach(item => item.style.color = "black")
    button.disabled = false;
}
}
