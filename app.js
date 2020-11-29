var menu = document.getElementById('time-all');
var app = document.getElementById('time-apps');
var container = document.getElementById('container');
var fullscreen = document.getElementById('btnFullscreen')
var targetMenu = document.getElementById('menu-list');
var targetApp = document.getElementById('time-select');
var bg = document.querySelectorAll("[data-sound]");
var pl = document.querySelectorAll("[data-play]");
var volumeSliderOne = document.getElementById("volumeSliderOne");
var volumeSliderTwo = document.getElementById("volumeSliderTwo");
var volumeSliderThree = document.getElementById("volumeSliderThree");
const songOne = document.querySelector(".song-one");
const songTwo = document.querySelector(".song-two");
const songThree = document.querySelector(".song-three");
const pOne = document.querySelector(".p-one");
const pTwo = document.querySelector(".p-two");
const timeSelect = document.querySelectorAll(".time-buttons button");
const timeDisplay = document.querySelector(".time-display");
let fakeDuration = 600;
let activeTimer = false;
var timer;


document.querySelector('video').playbackRate = 0.8;


timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    if (activeTimer === false) {
      fakeDuration = this.getAttribute("data-time");
      activeTimer = true;
      timeupdate();
    } else {
      fakeDuration = 0;
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
      timeupdate();
    }
  });
});

function timeupdate() {
  if (fakeDuration <= 0){
    clearTimeout(timer);
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songOne.classList.remove('active');
    songTwo.classList.remove('active');
    songThree.classList.remove('active');
    for (var i = 0; i < pl.length; i++) {
      playTarget = pl[i];
      pl[i].src = './svg/play.svg';
    };
    activeTimer = false;
	}
	else {
    fakeDuration--
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
		timer = setTimeout(timeupdate, 1000);
	}
};

volumeSliderOne.addEventListener("mousemove", () => {
  songOne.volume = volumeSliderOne.value / 100;
});
volumeSliderTwo.addEventListener("mousemove", () => {
  songTwo.volume = volumeSliderTwo.value / 100;
});
volumeSliderThree.addEventListener("mousemove", () => {
  songThree.volume = volumeSliderThree.value / 100;
});

menu.addEventListener("click", () => {
  targetApp.classList.add("hidden");
  targetMenu.classList.remove("hidden");
  app.classList.add("bgOpas");
  menu.classList.remove("bgOpas");
});

app.addEventListener("click", () => {
  targetApp.classList.remove("hidden");
  targetMenu.classList.add("hidden");
  menu.classList.add("bgOpas");
  app.classList.remove("bgOpas");
});

for (var i = 0; i < bg.length; i++) {
  number = bg[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.id);
  });
};
for (var i = 0; i < pl.length; i++) {
  playTarget = pl[i];
  playTarget.addEventListener('click', function (e) {
    playPress(e.target.id);
  });
};

function resetPlay() {
  for (var i = 0; i < pl.length; i++) {
    playTarget = pl[i];
    pl[i].src = './svg/play.svg';
  };
  songOne.pause();
  songTwo.pause();
  songThree.pause();
  songOne.classList.remove('active');
  songTwo.classList.remove('active');
  songThree.classList.remove('active');
}

function playPress(number) {
  switch(number) {
    case '0':
      if(songOne.classList.contains('active')){
        songOne.pause();
        pl[number].src = './svg/play.svg';
        songOne.classList.remove('active');
      } else {
        songOne.play();
        pl[number].src = './svg/pause.svg';
        songOne.classList.add('active');
      }
      break;
    case '1':
      if(songTwo.classList.contains('active')){
        songTwo.pause();
        pl[number].src = './svg/play.svg';
        songTwo.classList.remove('active');
      } else {
        songTwo.play();
        pl[number].src = './svg/pause.svg';
        songTwo.classList.add('active');
      }
      break;
    case '2':
      if(songThree.classList.contains('active')){
        songThree.pause();
        pl[number].src = './svg/play.svg';
        songThree.classList.remove('active');
      } else {
        songThree.play();
        pl[number].src = './svg/pause.svg';
        songThree.classList.add('active');
      }
      break;
    default: 
    console.log('def');
  }
};

function numberPress(number) {
  switch(number) {
    case '0':
      targetApp.style.background = '#b4b4b4';
      targetMenu.style.background = '#b4b4b4';
      menu.style.background = '#b4b4b4';
      app.style.background = '#b4b4b4';
      targetMenu.style.color = '#000000';
      targetApp.style.color = '#000000';
      targetApp.classList.remove("hidden");
      targetMenu.classList.add("hidden");
      menu.classList.add("bgOpas");
      app.classList.remove("bgOpas");
      video.src = './video/Rain.mp4';
      songOne.src = './sounds/rain.mp3'; // Дождь
      songTwo.src = './sounds/thunder.mp3'; // Гром
      songThree.src = './sounds/rainChill.mp3'; // Музыка
      pOne.textContent = 'Шум дождя - 3D'
      pTwo.textContent = 'Раскаты грома - 3D'
      resetPlay()
      console.log('0');
      break;
    case '1':
      targetApp.style.background = '#ff8d3f';
      targetMenu.style.background = '#ff8d3f';
      menu.style.background = '#ff8d3f';
      app.style.background = '#ff8d3f';
      targetMenu.style.color = '#000000';
      targetApp.style.color = '#000000';
      targetApp.classList.remove("hidden");
      targetMenu.classList.add("hidden");
      menu.classList.add("bgOpas");
      app.classList.remove("bgOpas");
      video.src = './video/Fireplace.mp4';
      songOne.src = './sounds/fireplace.mp3'; // камин
      songTwo.src = './sounds/fireplaceWater.mp3'; // подлить воды
      songThree.src = './sounds/MerryChristmasChill.mp3'; // Рождество
      pOne.textContent = 'Камин - 3D'
      pTwo.textContent = 'Подлить воды - 3D'
      resetPlay()
      console.log('1');
      break;
    case '2':
      targetApp.style.background = '#b34929';
      targetMenu.style.background = '#b34929';
      menu.style.background = '#b34929';
      app.style.background = '#b34929';
      targetMenu.style.color = '#000000';
      targetApp.style.color = '#000000';
      targetApp.classList.remove("hidden");
      targetMenu.classList.add("hidden");
      menu.classList.add("bgOpas");
      app.classList.remove("bgOpas");
      video.src = 'video/Nature.mp4';
      songOne.src = './sounds/nature.mp3'; // 
      songTwo.src = './sounds/Birds.mp3'; // 
      songThree.src = './sounds/natureChill.mp3'; //
      pOne.textContent = 'Природа - 3D'
      pTwo.textContent = 'Птицы - 3D'
      resetPlay()
      console.log('2');
      break;
    case '3':
      targetApp.style.background = '#488a99';
      targetMenu.style.background = '#488a99';
      menu.style.background = '#488a99';
      app.style.background = '#488a99';
      targetMenu.style.color = '#000000';
      targetApp.style.color = '#000000';
      targetApp.classList.remove("hidden");
      targetMenu.classList.add("hidden");
      menu.classList.add("bgOpas");
      app.classList.remove("bgOpas");
      video.src = 'video/Sea.mp4';
      songOne.src = './sounds/beach.mp3'; // 
      songTwo.src = './sounds/gull.mp3'; // 
      songThree.src = './sounds/seaChill.mp3'; //
      pOne.textContent = 'Море - 3D'
      pTwo.textContent = 'Чайки - 3D' 
      resetPlay()
      console.log('3');
      break;
    case '4':
      targetApp.style.background = '#312347';
      targetMenu.style.background = '#312347';
      menu.style.background = '#312347';
      app.style.background = '#312347';
      targetMenu.style.color = '#ffffff';
      targetApp.style.color = '#ffffff';
      targetApp.classList.remove("hidden");
      targetMenu.classList.add("hidden");
      menu.classList.add("bgOpas");
      app.classList.remove("bgOpas");
      video.src = 'video/Wind.mp4';
      songOne.src = './sounds/wind.mp3'; // 
      songTwo.src = './sounds/storm.mp3'; // 
      songThree.src = './sounds/windChill.mp3'; // 
      pOne.textContent = 'Ветер - 3D'
      pTwo.textContent = 'Шторм - 3D' 
      resetPlay()
      console.log('4');
      break;
    case '5':
      targetApp.style.background = '#353c3f';
      targetMenu.style.background = '#353c3f';
      menu.style.background = '#353c3f';
      app.style.background = '#353c3f';
      targetMenu.style.color = '#ffffff';
      targetApp.style.color = '#ffffff';
      targetApp.classList.remove("hidden");
      targetMenu.classList.add("hidden");
      menu.classList.add("bgOpas");
      app.classList.remove("bgOpas");
      video.src = 'video/City.mp4';
      songOne.src = './sounds/city.mp3'; // 
      songTwo.src = './sounds/cars.mp3'; // 
      songThree.src = './sounds/cityChill.mp3'; //
      pOne.textContent = 'Город - 3D'
      pTwo.textContent = 'Дорога - 3D'  
      resetPlay()
      console.log('5');
      break;
    case '6':
      targetApp.style.background = '#208444';
      targetMenu.style.background = '#208444';
      menu.style.background = '#208444';
      app.style.background = '#208444';
      targetMenu.style.color = '#000000';
      targetApp.style.color = '#000000';
      targetApp.classList.remove("hidden");
      targetMenu.classList.add("hidden");
      menu.classList.add("bgOpas");
      app.classList.remove("bgOpas");
      video.src = 'video/Forest.mp4';
      songOne.src = './sounds/forest.mp3'; // 
      songTwo.src = './sounds/forestWater.mp3'; // 
      songThree.src = './sounds/forestChill.mp3'; // 
      pOne.textContent = 'Лес - 3D'
      pTwo.textContent = 'Ручей - 3D' 
      resetPlay()
      console.log('6');
      break;
    default: 
    console.log('def');
  }
};

function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    container.style.visibility = 'hidden';
    fullscreen.style.visibility = 'visible';
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    container.style.visibility = 'visible';
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

fullscreen.addEventListener('click', function() {
  toggleFullscreen();
});

