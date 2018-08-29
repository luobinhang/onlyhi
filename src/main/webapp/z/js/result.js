
var swiper1 = new Swiper('.swiper-container1', {
  prevButton:'.swiper-button-prev',
  nextButton:'.swiper-button-next',
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay : 3000,
  loop:true,
  coverflow: {
    rotate: 0,
    stretch: 300,
    depth:300,
    modifier: 1,
    slideShadows : true,

  }
});

var galleryTop = new Swiper('.gallery-top', {
  effect : 'fade',
  pagination : '.swiper-pagination',
  paginationClickable :true,
  autoplay : 3000,
});
