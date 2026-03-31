/* ============================================================
   TIA BETE BOLOS — Sistema de Catálogo Dinâmico
   Renderiza produtos via JSON, trata imagens e aplica filtros
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  // --------------------------------------------------------
  // 1. SISTEMA DE FILTROS (Mantido e aprimorado)
  // --------------------------------------------------------
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  const sections   = document.querySelectorAll('.catalog-section');

  function activateFilter(category) {
    filterBtns.forEach(btn => btn.classList.toggle('is-active', btn.dataset.filter === category));
    sections.forEach(section => {
      const show = category === 'todos' || section.dataset.category === category;
      section.setAttribute('data-hidden', show ? 'false' : 'true');
    });
    history.replaceState(null, '', category === 'todos' ? location.pathname : `#${category}`);
  }

  filterBtns.forEach(btn => btn.addEventListener('click', () => activateFilter(btn.dataset.filter)));
  const hash = location.hash.replace('#', '');
  if (hash) activateFilter(hash);

  // --------------------------------------------------------
  // 2. RENDERIZAÇÃO DINÂMICA (A Mágica das Imagens)
  // --------------------------------------------------------
  try {
    const res = await fetch('../data/cardapio.json');
    if (!res.ok) throw new Error('Erro ao carregar cardápio');
    const catalog = await res.json();

    // Mapeamento: Liga o "catLabel" do JSON com o "data-category" do HTML
    const MAPA_SECOES = {
      'Bolos Simples': 'simples', 'Bolos Recheados': 'recheados', 'Bolos de Festa': 'festa',
      'Tradicionais de Festa': 'tradicionais', 'Tortas & Mousses': 'tortas',
      'Caramelizados': 'caramelizados', 'Assados Recheados': 'assados',
      'Mini Salgados': 'mini', 'Salgados Especiais': 'especiais',
      'Salgados Assados': 'assados', 'Pães Caseiros': 'paes'
    };

    // Descobre em qual página estamos (bolos, doces ou salgados)
    const paginaAtual = window.location.pathname.split('/').pop().replace('.html', '');

    // Limpa as vitrines (grids) antes de injetar
    const grids = {};
    sections.forEach(sec => {
      const cat = sec.dataset.category;
      grids[cat] = sec.querySelector('.catalog-grid');
      if (grids[cat]) grids[cat].innerHTML = ''; // Esvazia o HTML estático
    });

    // Percorre todos os produtos do JSON
    Object.entries(catalog).forEach(([id, p]) => {
      // Se o produto não for da página atual, pula ele
      if (p.cat !== paginaAtual) return;

      const secaoId = MAPA_SECOES[p.catLabel];
      if (!secaoId || !grids[secaoId]) return;

      // Monta o Link do WhatsApp
      const waUrl = `https://wa.me/5511972710172?text=${encodeURIComponent(p.waMsg)}`;

      // A MÁGICA DA IMAGEM: Tenta carregar a imagem .webp. 
      // Se falhar (onerror), troca a tag <img> pela div do Emoji instantaneamente!
      const imgCaminho = `../assets/images/${p.cat}/${id}.webp`;
      const fallbackHTML = `<div class='pcard__placeholder'><span class='pcard__placeholder-icon'>${p.emoji}</span></div>`;
      const imgHTML = `<img src="${imgCaminho}" alt="${p.name}" class="pcard__img" loading="lazy" onerror="this.outerHTML=\`${fallbackHTML}\`" />`;

      // Monta o Card
      const cardHTML = `
        <article class="pcard">
          <a href="produto.html?id=${id}&cat=${p.cat}" class="pcard__img-link" aria-label="Ver ${p.name}">
            ${imgHTML}
            <span class="pcard__badge">${p.catLabel.split(' ')[0]}</span>
          </a>
          <div class="pcard__body">
            <h3 class="pcard__name">${p.name}</h3>
            <a href="${waUrl}" class="pcard__btn" target="_blank" rel="noopener noreferrer">Eu quero</a>
          </div>
        </article>
      `;

      // Injeta no Grid correspondente
      grids[secaoId].insertAdjacentHTML('beforeend', cardHTML);
    });

  } catch (erro) {
    console.error("Erro ao renderizar catálogo:", erro);
  }
});