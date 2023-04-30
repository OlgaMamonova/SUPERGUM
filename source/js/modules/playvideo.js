// import {once} from 'gulp';

const playVideo = () => {

  const buttonPlay = document.querySelector('.about__video-button');
  const videoFraim = document.querySelector('.about__video-frame');

  const onVideoButtonClick = () => {
    videoFraim.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    buttonPlay.style.display = 'none';
  };

  buttonPlay.addEventListener('click', onVideoButtonClick);
};

export {playVideo};
