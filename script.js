const songData = [
  {
    name: "Birth",
    artist: "AI Track",
    mp3: "music/Birth.mp3",
  },
  {
    name: "Beeating",
    artist: "AI Track",
    mp3: "music/Beeating.mp3",
  },
  {
    name: "Brive Dy",
    artist: "AI Track",
    mp3: "./music/BriveDy.mp3",
  },
  {
    name: "Beeon",
    artist: "AI Track",
    mp3: "./music/Beeon.mp3",
  },
];

const container = document.querySelector(".container");
const songName = document.querySelector(".song-name");
const songArtist = document.querySelector(".song-artist");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector(".audio");

let songIndex = 0;

// 🔄 Load song
const loadSong = (index) => {
  songName.textContent = songData[index].name;
  songArtist.textContent = songData[index].artist;
  audio.src = songData[index].mp3;
};

// ▶️ Play
const playSong = () => {
  console.log(audio.src)
  container.classList.add("pause");
  playPauseBtn.firstElementChild.className = "fa-solid fa-pause";
  audio.play();
};

// ⏸ Pause
const pauseSong = () => {
  container.classList.remove("pause");
  playPauseBtn.firstElementChild.className = "fa-solid fa-play";
  audio.pause();
};

// 🔘 Play / Pause click
playPauseBtn.addEventListener("click", () => {
  if (container.classList.contains("pause")) {
    pauseSong();
  } else {
    playSong();
  }
});


// ⏮ Previous song
prevBtn.addEventListener("click", () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songData.length - 1;
  }
  loadSong(songIndex);
  playSong();
});

// ⏭ Next song
nextBtn.addEventListener("click", () => {
  songIndex++;
  if (songIndex > songData.length - 1) {
    songIndex = 0;
  }
  loadSong(songIndex);
  playSong();
});

// ⏱ Load first song on page load
window.addEventListener("load", () => {
  loadSong(songIndex);
});
