document.addEventListener('DOMContentLoaded', function() {
  const heartsContainer = document.querySelector('.hearts-container');
  const totalHearts = 1000; // adjust number of hearts

  for (let i = 0; i < totalHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heartsContainer.appendChild(heart);
  }

  const audioPlayer = document.querySelector('audio');
  const playPauseButton = document.getElementById('play-pause-button');
  const volumeSlider = document.getElementById('volume-slider');

  // update play button icon when audio starts playing
  audioPlayer.addEventListener('play', function() {
      playPauseButton.innerHTML = '&#10074;&#10074;'; // pause icon
  });

  // update play button icon when audio is paused
  audioPlayer.addEventListener('pause', function() {
      playPauseButton.innerHTML = '&#9658;'; // play icon
  });

  // play/pause button function
  playPauseButton.addEventListener('click', function() {
      if (audioPlayer.paused) {
          audioPlayer.play();
      } else {
          audioPlayer.pause();
      }
  });

  // volume slider function
  // volumeSlider.addEventListener('input', function() {
  //     audioPlayer.volume = volumeSlider.value / 100;
  // });
});
