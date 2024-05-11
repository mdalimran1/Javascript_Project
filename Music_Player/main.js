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

playPauseBtn.addEventListener("click", () => {
  playPauseBtn.classList.toggle("pause");
  musicBackground.classList.toggle("play");
});

const setMusic = (i) => {
  range.value = 0;
  let song = songs[i];
  currentMusic = i;

  music.src = song.path;
  music_name.innerHTML = song.name;
  artist_name.innerHTML = song.artist;
  musicBackground.style.backgroundImage = `url('${song.cover}')`;

  current_time.innerHTML = "00:00";
  setTimeout(() => {
    range.max = music.duration;
    song_duration.innerHTML = getTime(music.duration);
  }, 500);
};
setMusic(0);

const getTime = (data) => {
  let mins = Math.floor(data / 60);
  if (mins < 10) {
    mins = "0" + mins;
  }

  let secs = Math.floor(data % 60);
  if (secs < 10) {
    secs = "0" + secs;
  }
  return `${mins}:${secs}`;
};


setInterval(()=>{
  range.value = music.currentTime;
  current_time
},500)