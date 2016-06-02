"use strict";

// FULLSCREEN API
document.getElementById("button--fullscreen").addEventListener("click", function () {
  toggleFullScreen();
}, false);

// ANIMATION SETTINGS
var timelineProgress = function timelineProgress(position) {
  console.log("[custom] animation " + position);
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
  $(this).html("<iframe src=\"//player.vimeo.com/video/" + videoID + "\" width=\"100%\" height=\"100%\" title=\"0\" frameborder=\"0\" autoplay=\"1\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
  $(this).css('width: 100vw; height:100vh');
  console.log(this);
});
"use strict";

function toggleFullScreen() {
  if (!document.fullscreenElement && // alternative standard method
  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
//# sourceMappingURL=main.js.map
