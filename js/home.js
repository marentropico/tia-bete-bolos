/* ============================================================
   TIA BETE BOLOS — Home Dinâmica
   Gerencia imagens dos cards de categoria da home page.
   Utiliza o sistema global em gallery-pools.js.
   ============================================================ */

// ----------------------------------------------------------
// CARDS ESTÁTICOS com data-img-pool no elemento <a>
// ----------------------------------------------------------
function initStaticPoolCards() {
  document.querySelectorAll('[data-img-pool]').forEach(card => {
    // Ignora o banner da Páscoa (tratado separadamente)
    if (card.classList.contains('pascoa-banner__decoration')) return;

    const poolKey = card.getAttribute('data-img-pool');
    const pool = IMG_POOLS[poolKey];
    if (!pool) return;

    const imgWrap = card.querySelector('.ccard__img-wrap');
    if (!imgWrap) return;

    // Preserva o badge se existir
    const badge = imgWrap.querySelector('.ccard__badge');
    const badgeHTML = badge ? badge.outerHTML : '';
    imgWrap.innerHTML = buildCycleContainer(pool, card.getAttribute('aria-label') || '') + badgeHTML;
  });
}

// ----------------------------------------------------------
// BANNER DA PÁSCOA com data-img-pool (elemento decorativo)
// ----------------------------------------------------------
function initBannerPool() {
  const decoration = document.querySelector('.pascoa-banner__decoration[data-img-pool]');
  if (!decoration) return;
  const pool = IMG_POOLS[decoration.getAttribute('data-img-pool')];
  if (!pool) return;
  decoration.style.animation = 'none'; // Remove o float do emoji, mantém o container
  decoration.innerHTML = buildCycleContainer(pool, 'Páscoa 2026');
}

// ----------------------------------------------------------
// CONFIG DOS SLIDES DINÂMICOS (subcategorias do cardapio.json)
// ----------------------------------------------------------
const CONFIG_SUBCATEGORIAS = {
  'Bolos Simples':        { link: 'bolos.html#simples',       desc: 'Fubá, milho, chocolate, cenoura' },
  'Bolos Recheados':      { link: 'bolos.html#recheados',     desc: 'Brigadeiro, Ninho, Floresta Negra' },
  'Bolos de Festa':       { link: 'bolos.html#festa',         desc: 'Personalizados e temáticos' },
  'Tradicionais de Festa':{ link: 'doces.html#tradicionais',  desc: 'Brigadeiro, quindim, beijinho' },
  'Tortas & Mousses':     { link: 'doces.html#tortas',        desc: 'Holandesa, maracujá, limão' },
  'Caramelizados':        { link: 'doces.html#caramelizados', desc: 'Maçã e morango do amor' },
  'Assados Recheados':    { link: 'doces.html#assados',       desc: 'Carolinas e bombas de chocolate' },
  'Mini Salgados':        { link: 'salgados.html#mini',       desc: 'Coxinha, bolinha, quibe, risole' },
  'Salgados Especiais':   { link: 'salgados.html#especiais',  desc: 'Pastel, empada, mini pizza' },
  'Salgados Assados':     { link: 'salgados.html#assados',    desc: 'Fogaça e esfihas' },
  'Pães Caseiros':        { link: 'salgados.html#paes',       desc: 'Artesanais, de forma e panetones' },
};

// ----------------------------------------------------------
// INICIALIZAÇÃO PRINCIPAL
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {

  // 1. Cards estáticos com pool de imagens
  initStaticPoolCards();

  // 2. Banner da Páscoa
  initBannerPool();

  // 3. Inicia os ciclos de todos os containers pool já presentes
  if (typeof initPoolCrossfades === 'function') {
    initPoolCrossfades();
  }

  // 4. Slides dinâmicos do cardapio.json (subcategorias)
  const slidesDinamicos = document.querySelectorAll('[data-dynamic-cat]');
  if (slidesDinamicos.length === 0) return;

  try {
    const res = await fetch('./data/cardapio.json');
    if (!res.ok) throw new Error('Erro ao carregar cardápio');
    const catalog = await res.json();

    const listaProdutos = Object.entries(catalog).map(([id, p]) => ({ id, ...p }));

    slidesDinamicos.forEach(slide => {
      const catLabel = slide.getAttribute('data-dynamic-cat');
      const config   = CONFIG_SUBCATEGORIAS[catLabel];
      if (!config) return;

      const produtos = listaProdutos.filter(p => p.catLabel === catLabel);
      if (produtos.length === 0) return;

      // Constrói o pool com TODOS os produtos da categoria
      const pool = produtos.map(p => {
        const src = (p.imageCount && p.imageCount > 1)
          ? `./assets/images/${p.cat}/${p.id}/${p.id}1.webp`
          : `./assets/images/${p.cat}/${p.id}.webp`;
        return { src, name: p.name };
      });

      slide.innerHTML = `
        <a href="pages/${config.link}" class="ccard" aria-label="Ver opções de ${catLabel}">
          <div class="ccard__img-wrap" style="position: relative; height: 100%;">
            ${buildCycleContainer(pool, catLabel)}
          </div>
          <div class="ccard__body">
            <h3 class="ccard__title">${catLabel}</h3>
            <span class="ccard__sub">${config.desc}</span>
          </div>
        </a>
      `;
    });

    // Inicia ciclos dos containers dinâmicos recém-criados
    if (typeof initPoolCrossfades === 'function') {
      initPoolCrossfades();
    }

  } catch (erro) {
    console.error('Erro ao gerar carrossel inteligente:', erro);
  }
});