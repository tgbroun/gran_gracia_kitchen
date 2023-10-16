
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: '1000',

  autoplay: {
    delay: 2000,
  },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // when window width is >= 640px
    770: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});
