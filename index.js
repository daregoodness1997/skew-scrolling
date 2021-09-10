// cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute(
    'style',
    `top: ${+e.pageY - 10}px; left: ${e.pageX - 10}px`
  );
});

document.addEventListener('click', () => {
  cursor.classList.add('expand');
  setTimeout(() => {
    cursor.classList.remove('expand');
  }, 500);
});

// Horizontal Scroll

const container = document.querySelector('.container');

window.onscroll = () => {
  container.style.left = `${-window.scrollY}px`;
};

let currentPos = container.getBoundingClientRect().left;

const callDistort = () => {
  let newPos = container.getBoundingClientRect().left;
  let diff = newPos - currentPos;
  let speed = diff * 0.35;
  container.style.transform = `skewX(${speed}deg)`;
  currentPos = newPos;

  requestAnimationFrame(callDistort);
};

callDistort();

// Auto scroll

// function scrollContainer() {
//   window.scrollBy(200, 600);
//   console.log(window.scrollY);
// }

// setInterval(() => {
//   scrollContainer();
// }, 4000);

// scroll to top

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };
