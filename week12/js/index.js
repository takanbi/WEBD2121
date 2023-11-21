import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
  pause: "hover"
})