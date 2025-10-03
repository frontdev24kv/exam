// change theme

let darkmode = localStorage.getItem('darkmode');

const themeSwitchBtn = document.querySelector('.theme-switch-btn');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
};

if (darkmode === 'active') enableDarkmode();

themeSwitchBtn.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
  console.log(darkmode);
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

// adaptive menu
const main = document.querySelector('.main');
const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
burgerBtn.addEventListener('click', toggleClass);

function toggleClass() {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
  main.classList.toggle('active');
}
