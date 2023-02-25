let btnToggleAudio;
let btnInitAudio
let videos;

btnInitAudio = document.querySelectorAll("button")[1];

window.onload = () => {
  videos = document.querySelectorAll("video");
  document.addEventListener("scroll", () => {
    for (let video of videos) {
      if (isInViewport(video)) {
        video.volume = 1;
        video.play();
      } else {
        video.volume = 0;
        video.pause();
      }
    }
  });
};

function init(el) {
  el.remove();
  for (let video of videos) {
    video.muted = !video.muted;
  }
}

function toggleAudio(el) {
  for (let video of videos) {
    video.muted = !video.muted;
  }
  if (el.innerHTML === "AUDIO: OFF") {
    el.innerHTML = "AUDIO: ON";
  } else {
    el.innerHTML = "AUDIO: OFF";
  }
}

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
};// JavaScript Document