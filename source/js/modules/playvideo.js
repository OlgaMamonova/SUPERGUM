const playVideo = () => {
  const buttonPlay = document.querySelector('.about__video-button');
  const videoFraim = document.querySelector('.about__video-frame');

  const onButtonPlayClick = () => {
    const src = videoFraim.dataset.src;
    videoFraim.setAttribute('src', src);
    buttonPlay.style.display = 'none';
    buttonPlay.removeEventListener('click', onButtonPlayClick);
  };

  buttonPlay.addEventListener('click', onButtonPlayClick);
};

export {playVideo};
