import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer - current - time';

player.on('timeupdate', throttle(onTimeGo, 1000));
currentTimeVideo();
function onTimeGo({ seconds }) {
  //   console.log(seconds);
  localStorage.setItem(TIME_KEY, seconds);
}
function currentTimeVideo() {
  const setTime = localStorage.getItem(TIME_KEY);
  if (setTime) {
    player.setCurrentTime(setTime);
    // console.log(setTime);
  }
}
