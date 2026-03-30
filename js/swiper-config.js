/* ============================================================
   TIA BETE BOLOS — Swiper Configuration
   Carousel infinito, responsivo, com navegação por botões e dots
   ============================================================ */

const swiper = new Swiper('#categoriesSwiper', {
  
  /* Modo infinito */
  loop: true,
  
  /* Números de slides visíveis (responsivo) */
  slidesPerView: 1,
  spaceBetween: 20,
  
  /* Breakpoints responsivos */
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 14,
      centeredSlides: true,
      loopedSlides: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },

  /* Navegação com botões */
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /* Paginação (dots) – visível só em modo responsivo */
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  /* Animação suave */
  speed: 420,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',

  /* Drag/swipe nativo */
  grabCursor: true,
  touchRatio: 1,
  touchAngle: 45,

  /* Acessibilidade */
  a11y: {
    enabled: true,
    notificationClass: 'swiper-notification',
    prevSlideMessage: 'Slide anterior',
    nextSlideMessage: 'Próximo slide',
    firstSlideMessage: 'Este é o primeiro slide',
    lastSlideMessage: 'Este é o último slide',
  },

});
