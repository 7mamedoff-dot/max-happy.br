const audio = document.getElementById('bgm');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(e => console.log(e));
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});
