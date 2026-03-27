/* ============================================================
   TIA BETE BOLOS — Sistema de Catálogo
   Filtro visual por categoria (sem recarregar a página)
   ============================================================ */

(function () {
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  const sections   = document.querySelectorAll('.catalog-section');

  if (!filterBtns.length || !sections.length) return;

  function activateFilter(category) {
    // Atualiza botões
    filterBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.filter === category);
    });

    // Mostra/oculta seções
    sections.forEach(section => {
      const show = category === 'todos' || section.dataset.category === category;
      section.setAttribute('data-hidden', show ? 'false' : 'true');
    });

    // Scroll suave até o conteúdo (abaixo da barra de filtros)
    const filtersBar = document.querySelector('.catalog-filters');
    if (filtersBar && category !== 'todos') {
      const target = document.querySelector(`.catalog-section[data-category="${category}"]`);
      if (target) {
        const offset = filtersBar.offsetHeight + document.querySelector('.nav').offsetHeight + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }

    // Salva no histórico (acessibilidade: botão voltar)
    history.replaceState(null, '', category === 'todos' ? location.pathname : `#${category}`);
  }

  // Bind nos botões
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => activateFilter(btn.dataset.filter));
  });

  // Lê hash da URL ao carregar (permite link direto para categoria)
  const hash = location.hash.replace('#', '');
  if (hash) {
    activateFilter(hash);
  }
})();
