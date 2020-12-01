const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.volume-slider');
const speed = player.querySelectorAll('.speed-slider');
const speedBtn = document.getElementById('speed');
const volumeBtn = document.getElementById('volume');
const fullscreen = player.querySelector('.fullscreen');
const time = document.getElementById('time');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  if (video.currentTime === video.duration) {
    var stat = document.getElementById ('play');
    stat.src = './icons/loop.svg';
  } else {
    var stat = document.getElementById ('play');
    const icon = this.paused ? './icons/play.svg' : './icons/pause.svg';
    stat.src = icon;
  }
}

function speedReset() {
  video.playbackRate = 1;
  let reset = document.getElementById('reset').value = 1;
}

function volumeReset() {
  let control = video.volume > 0 ? '0' : '1';
  video.volume = control;
  let mute = document.getElementById('mute').value = control;
  var stat = document.getElementById ('volume-image');
  const icon = control > 0 ? './icons/volume-up.svg' : './icons/volume-off.svg';
  stat.src = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  var stat = document.getElementById ('volume-image');
  video[this.name] = this.value;
  if( this.value === '1'){
    stat.src = './icons/volume-up.svg';
  } else if ( this.value >= '0.5' && this.value < '1' ) {
    stat.src = './icons/volume-down.svg';
  } else if ( this.value > '0' && this.value < '0.5' ) {
    stat.src = './icons/volume-mute.svg';
  } else if ( this.value === '0' ) {
    stat.src = './icons/volume-off.svg';
  }
}

function toggleFullscreen() {
  var stat = document.getElementById ('fullscreen-image');
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    stat.src = './icons/fullscreen-down.svg';
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.msRequestFullscreen) {
      player.msRequestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    stat.src = './icons/fullscreen-up.svg';
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  time.innerHTML = `${Math.floor(video.currentTime / 60)}:${Math.floor(video.currentTime % 60)} / ${Math.floor(video.duration / 60)}:${Math.floor(video.duration % 60)}`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
speedBtn.addEventListener('click', speedReset);
volumeBtn.addEventListener('click', volumeReset);
fullscreen.addEventListener('click', toggleFullscreen);



skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
speed.forEach(range => range.addEventListener('change', handleRangeUpdate));
speed.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);