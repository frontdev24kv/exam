const toggleBtn = document.querySelector('.theme-btn');
let theme = 'light';
let bodyBackground = theme === 'light' ? '#fff' : '#000';

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('dark');

  toggleBtn.classList.contains('dark') ? (theme = 'dark') : (theme = 'light');

  if (toggleBtn.classList.contains('dark')) {
    toggleBtn.innerHTML =
      '<div class="circle"><i class="wi wi-lunar-eclipse"></i></div>';
  } else {
    toggleBtn.innerHTML =
      '<div class="circle"><i class="wi wi-day-sunny"></i></i></div>';
  }
  console.log(theme);

  console.log(bodyBackground);
  document.body.style.backgroundColor = bodyBackground;
});

// play video

const video = document.querySelector('.video');
const playBtn = document.querySelector('.play-btn');

playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
