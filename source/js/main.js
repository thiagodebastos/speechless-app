// ANIMATION SETTINGS
const timelineProgress = (position) => {
  console.log(`[custom] animation ${position}`);
}
const slideIn = new TimelineMax({
  paused: true,
  repeatDelay: 1.5,
});

const sliderPop = new TimelineMax({paused:false})
// ANIMATION CODE
sliderPop.to('.swipe_toggle', 0.5, {x:-10, yoyo: true, repeat:-1});
slideIn.to('.content, footer', 0.5, {opacity:0}, '-=0.5');
slideIn.to('.mobile--slide', 0.5, {left:10}), '-=0.5';
slideIn.to('.swipe_toggle', 0.5, {rotation:'0deg'}, '-=0.5');

const toggleSlide = () => {
  sliderPop.pause();
  slideIn.reversed() ? slideIn.play() : slideIn.reverse();
  sliderPop.resume();
}

const swipeToggle = document.querySelector('button.swipe_toggle')

swipeToggle.onclick = toggleSlide;
