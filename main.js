const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
var button = document.querySelectorAll("[data-key]");

for (var i = 0; i < button.length; i++) {
    buttonTarget = button[i];
    buttonTarget.addEventListener('click', function (e) {
        playSoundMouse(e.target.id);
    });
  };


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function playSoundMouse(elem) {
    const audio = document.querySelector(`audio[data-key="${elem}"]`);
    const key = document.querySelector(`div[data-key="${elem}"]`);
    if (!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}