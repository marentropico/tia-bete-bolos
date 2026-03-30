/* ============================================================
   TIA BETE BOLOS — Swiper Configuration
   Carousel infinito, responsivo, com navegação por botões e dots
   ============================================================ */

const totalSlides = document.querySelectorAll('#categoriesSwiper .swiper-slide:not(.swiper-slide-duplicate)').length;

const swiper = new Swiper('#categoriesSwiper', {
  
  /* Modo infinito */
  loop: true,
  loopFillGroupWithBlank: false,

  /* Números de slides visíveis (responsivo) */
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  
  /* Breakpoints responsivos */
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 14,
      centeredSlides: true,
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
    dynamicBullets: false,
    renderBullet: function(index, className) {
      // Garante bullets correspondentes ao total real de cards
      if (index >= totalSlides) return '';
      return '<span class="' + className + '" aria-label="Categoria ' + (index + 1) + ' de ' + totalSlides + '"></span>';
    },
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

const paginationElement = document.querySelector('.swiper-pagination');

function adjustSwiperPagination() {
  if (!paginationElement) return;

  const bullets = paginationElement.querySelectorAll('.swiper-pagination-bullet');
  const total = bullets.length;
  if (!total) return;

  // Largura máxima fixa de 709px (6cm) para todos os dots
  const maxPaginationWidth = 709;
  const availableWidth = maxPaginationWidth;
  const minGap = 0.5;
  const maxGap = 4;
  const minSize = 2;
  const maxSize = 6;

  // Calcula tamanho ideal dos bullets
  let size = Math.floor((availableWidth - (total - 1) * minGap) / total);
  size = Math.max(minSize, Math.min(maxSize, size));

  // Calcula gap ideal
  let gap = Math.floor((availableWidth - total * size) / Math.max(1, total - 1));
  gap = Math.max(minGap, Math.min(maxGap, gap));

  // Ajusta se necessário para caber exatamente
  while ((total * size + (total - 1) * gap) > availableWidth && size > minSize) {
    size -= 1;
    gap = Math.max(minGap, Math.min(maxGap, Math.floor((availableWidth - total * size) / Math.max(1, total - 1))));
  }

  paginationElement.style.setProperty('--swiper-bullet-size', `${size}px`);
  paginationElement.style.setProperty('--swiper-bullet-gap', `${gap}px`);
  paginationElement.style.setProperty('--swiper-max-width', `${maxPaginationWidth}px`);
  paginationElement.style.gap = `${gap}px`;
}

swiper.on('slideChange', adjustSwiperPagination);
window.addEventListener('resize', adjustSwiperPagination);
adjustSwiperPagination();
