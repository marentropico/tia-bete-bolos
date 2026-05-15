/* ============================================================
   TIA BETE BOLOS — Main JS
   Inicialização geral e utilitários
   ============================================================ */

// Marca o link ativo da navegação com base na URL atual
(function () {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// Scroll reveal simples para elementos com data-reveal
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

// ============================================================
// SISTEMA GLOBAL DE CROSSFADE PARA MÚLTIPLAS IMAGENS
// Inicializa o carrossel em elementos .img-cycle-container
// ============================================================
window.initImageCrossfades = function () {
  const containers = document.querySelectorAll('.img-cycle-container');
  
  containers.forEach(container => {
    // Evita inicializar o mesmo container duas vezes
    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    const back = container.querySelector('.img-cycle-layer--back');
    const front = container.querySelector('.img-cycle-layer--front');
    if (!back || !front) return;

    const count = parseInt(container.dataset.count);
    const folder = container.dataset.folder;
    const intervalTime = parseInt(container.dataset.interval) || 4500;
    
    // Se só tiver uma imagem declarada, não precisa do ciclo
    if (count <= 1) return;

    const intervalId = setInterval(() => {
      const current = parseInt(container.dataset.current);
      let next;
      do {
        next = Math.floor(Math.random() * count) + 1;
      } while (next === current);

      front.src = `${folder}${container.dataset.id}${next}.webp`;
      
      front.onload = () => {
        front.style.opacity = 1;
        
        setTimeout(() => {
          back.src = front.src;
          front.style.transition = 'none';
          front.style.opacity = 0;
          container.dataset.current = next;
          setTimeout(() => { front.style.transition = ''; }, 50);
        }, 850); // Tempo do fade
      };
    }, intervalTime);

    // Opcional: Limpeza de memória ao destruir o componente
    container.dataset.intervalId = intervalId;
  });
};
