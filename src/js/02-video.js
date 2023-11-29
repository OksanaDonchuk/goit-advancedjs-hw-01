import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const getCurrentTime = function (eve) {
  localStorage.setItem(VIDEO_CURRENT_TIME_KEY, JSON.stringify(eve.seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem(VIDEO_CURRENT_TIME_KEY)) || 0
);
