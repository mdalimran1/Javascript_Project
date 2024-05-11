//audio
const music = document.querySelector("#audio");

const musicBackground = document.querySelector(".musicbg");
const music_name = document.querySelector("#music-name");
const artist_name = document.querySelector("#artist-name");
const range = document.querySelector("#range");

const current_time = document.querySelector("#current_time");
const song_duration = document.querySelector("#song_duration");

//play,pause,left & right button
const playPauseBtn = document.querySelector(".play-btn");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

//music start
let currentMusic = 0;

//play and pause button
playPauseBtn.addEventListener("click", () => {
  if (playPauseBtn.className.includes("pause")) {
    music.play();
  } else {
    music.pause();
  }

  playPauseBtn.classList.toggle("pause");
  musicBackground.classList.toggle("play");
});

//setup music
const setMusic = (i) => {
  range.value = 0;
  let song = songs[i];
  currentMusic = i;

  music.src = song.path;
  music_name.innerHTML = song.name;
  artist_name.innerHTML = `Artist : ${song.artist}`;
  musicBackground.style.backgroundImage = `url('${song.cover}')`;

  current_time.innerHTML = "00:00";
  setTimeout(() => {
    range.max = music.duration;
    song_duration.innerHTML = formatTime(music.duration);
  }, 500);
};

setMusic(0);

//formatTime function for time display
const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
};

//seekbar ranning
setInterval(() => {
  range.value = music.currentTime;
  current_time.innerHTML = formatTime(music.currentTime);
  if(Math.floor(music.currentTime) == Math.floor(range.max)){
    rightBtn.click();
  }
}, 500);

//for seakbar move with song duration
range.addEventListener("change", () => {
  music.currentTime = range.value;
});


const  playSong = () => {
  music.play();
  playPauseBtn.classList.remove("pause");
  musicBackground.classList.add("play");
}

//right button
rightBtn.addEventListener("click", () => {
  if (currentMusic >= songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  playSong();
});

//left button
leftBtn.addEventListener("click", () => {
  if (currentMusic <= 0) {
    currentMusic = music.length - 1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  playSong();
});
