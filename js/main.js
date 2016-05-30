'use strict';

// ANIMATION SETTINGS
var timelineProgress = function timelineProgress(position) {
  console.log('[custom] animation ' + position);
};
var slideIn = new TimelineMax({
  paused: true
});

var sliderPop = new TimelineMax({ paused: false });
var phoneTwist = new TimelineMax({ paused: false });
// ANIMATION CODE
sliderPop.to('.swipe_toggle', 0.5, { x: -10, yoyo: true, repeat: -1 });
slideIn.to('.content, footer', 0.5, { opacity: 0 }, '-=0.5');
slideIn.to('.mobile--slide', 0.5, { left: 10 }), '-=0.5';
slideIn.to('.swipe_toggle', 0.5, { rotation: '0deg' }, '-=0.5');

phoneTwist.to('.phone', 0.5, { rotation: '0deg', yoyo: true, repeat: -1, repeatDelay: 2 });

var toggleSlide = function toggleSlide() {
  sliderPop.pause();
  slideIn.reversed() ? slideIn.play() : slideIn.reverse();
  sliderPop.resume();
};

var swipeToggle = document.querySelector('button.swipe_toggle');

swipeToggle.onclick = toggleSlide;

// VIDEO PLAYERS

$(".video").click(function (e) {
  e.preventDefault();
  var videoID = $(this).attr("videoID");
  $(this).html('<iframe src="//player.vimeo.com/video/' + videoID + '" width="100%" height="100%" title="0" frameborder="0" autoplay="1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  $(this).css('width: 100vw; height:100vh');
  console.log(this);
});
"use strict";
//# sourceMappingURL=main.js.map
