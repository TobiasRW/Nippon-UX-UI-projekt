const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress-filled");
const toggle = player.querySelector(".toggle");
const fastF = player.querySelector(".fastF");
const backF = player.querySelector(".back");
const ranges = player.querySelectorAll(".player-slider");
const fullScreen = player.querySelector(".fullscreen");


function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

function updatePlayButton() {
    if(video.paused) {
        toggle.innerHTML = '<i class="ph-play"></i>'
    } else {
        toggle.innerHTML = '<i class="ph-pause"></i>'
    }
};

video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

fastF.addEventListener("click", () => {
    video.currentTime += 5;
    // console.log(video.currentTime)
})

backF.addEventListener("click", () => {
    video.currentTime -= 5;
    // console.log(video.currentTime)
})

function handleRangeUpdate() {
console.log(this.value);
video[this.name] = this.value;
}

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

video.addEventListener('timeupdate', handleProgress);

function durationClick(e) {
    const duraTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = duraTime;
}

progress.addEventListener('click', durationClick);

fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
})
