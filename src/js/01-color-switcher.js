function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setRandomBC() {
  const bodyRef = document.querySelector('body');
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', 'true');
  bodyRef.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopSetRandomBC() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
  clearInterval(timerId);
}

const startBtn = document.querySelector('button[data-start]');
// console.log('startBtn', startBtn);

const stopBtn = document.querySelector('button[data-stop]');
stopBtn.setAttribute('disabled', 'true');
// console.log('stopBtn', stopBtn);

let timerId = null;

startBtn.addEventListener('click', setRandomBC);
stopBtn.addEventListener('click', stopSetRandomBC);
