/* ============================================================
   TIA BETE BOLOS — Home Dinâmica
   Gerencia imagens dos cards de categoria da home page.

   Pool de imagens: cada item é { src, name } para que a tag
   de nome do produto possa ser exibida junto com a imagem.
   ============================================================ */

// ----------------------------------------------------------
// POOLS DE IMAGEM — cada item: { src, name }
// ----------------------------------------------------------
const IMG_POOLS = {
  'bolos': [
    { src: './assets/images/bolos/bolo-brigadeiro.webp',       name: 'Bolo de Brigadeiro' },
    { src: './assets/images/bolos/bolo-cenoura-chocolate.webp',name: 'Cenoura c/ Chocolate' },
    { src: './assets/images/bolos/bolo-cenoura.webp',          name: 'Bolo de Cenoura' },
    { src: './assets/images/bolos/bolo-chocolate-simples.webp',name: 'Bolo de Chocolate' },
    { src: './assets/images/bolos/bolo-debutante.webp',        name: 'Bolo de Debutante' },
    { src: './assets/images/bolos/bolo-doce-leite.webp',       name: 'Doce de Leite' },
    { src: './assets/images/bolos/bolo-festa-1andar.webp',     name: 'Bolo de Festa' },
    { src: './assets/images/bolos/bolo-floresta-negra.webp',   name: 'Floresta Negra' },
    { src: './assets/images/bolos/bolo-fuba.webp',             name: 'Bolo de Fubá' },
    { src: './assets/images/bolos/bolo-laranja.webp',          name: 'Bolo de Laranja' },
    { src: './assets/images/bolos/bolo-milho.webp',            name: 'Bolo de Milho' },
    { src: './assets/images/bolos/bolo-ninho-morango.webp',    name: 'Ninho com Morango' },
  ],
  'doces': [
    { src: './assets/images/doces/brigadeiro.webp',      name: 'Brigadeiro Gourmet' },
    { src: './assets/images/doces/quindim.webp',         name: 'Quindim' },
    { src: './assets/images/doces/beijinho.webp',        name: 'Beijinho' },
    { src: './assets/images/doces/mousse-chocolate.webp',name: 'Mousse de Chocolate' },
    { src: './assets/images/doces/mousse-maracuja.webp', name: 'Mousse de Maracujá' },
    { src: './assets/images/doces/torta-morango.webp',   name: 'Torta de Morango' },
    { src: './assets/images/doces/torta-frutas.webp',    name: 'Torta de Frutas' },
    { src: './assets/images/doces/maca-amor.webp',       name: 'Maçã do Amor' },
    { src: './assets/images/doces/carolina.webp',        name: 'Carolina' },
    { src: './assets/images/doces/bolinho.webp',         name: 'Cupcake Decorado' },
  ],
  'salgados': [
    { src: './assets/images/salgados/coxinha-mini.webp',   name: 'Coxinha Mini' },
    { src: './assets/images/salgados/coxinha-grande.webp', name: 'Coxinha Grande' },
    { src: './assets/images/salgados/quibe-mini.webp',     name: 'Quibe Mini' },
    { src: './assets/images/salgados/risole-mini.webp',    name: 'Risole Mini' },
    { src: './assets/images/salgados/pastel.webp',         name: 'Pastel' },
    { src: './assets/images/salgados/empada.webp',         name: 'Empada' },
    { src: './assets/images/salgados/mini-pizza.webp',     name: 'Mini Pizza' },
    { src: './assets/images/salgados/esfiha-aberta.webp',  name: 'Esfiha Aberta' },
    { src: './assets/images/salgados/fogaca.webp',         name: 'Fogaça' },
    { src: './assets/images/salgados/pao-frios.webp',      name: 'Pão de Frios' },
  ],
  'chocolataria': [
    { src: './assets/images/chocolataria/alfajor.webp',               name: 'Alfajor Artesanal' },
    { src: './assets/images/chocolataria/barra-chocolate.webp',       name: 'Barra Recheada' },
    { src: './assets/images/chocolataria/bombons.webp',               name: 'Bombons' },
    { src: './assets/images/chocolataria/bombons2.webp',              name: 'Bombons' },
    { src: './assets/images/chocolataria/caixa-bombons.webp',         name: 'Caixa de Bombons' },
    { src: './assets/images/chocolataria/ovo-chocolate-branco.webp',  name: 'Ovo Branco' },
    { src: './assets/images/chocolataria/ovo-chocolate-trufado.webp', name: 'Ovo Trufado' },
    { src: './assets/images/chocolataria/ovo-colher.webp',            name: 'Ovo de Colher' },
    { src: './assets/images/chocolataria/pao-mel.webp',               name: 'Pão de Mel' },
  ],
  'ovos-tradicionais': [
    { src: './assets/images/chocolataria/ovo-chocolate/ovo-chocolate1.webp', name: 'Ovo ao Leite' },
    { src: './assets/images/chocolataria/ovo-chocolate/ovo-chocolate2.webp', name: 'Ovo Crocante' },
    { src: './assets/images/chocolataria/ovo-chocolate/ovo-chocolate3.webp', name: 'Ovo Branco' },
  ],
  'ovos-recheados': [
    { src: './assets/images/chocolataria/ovo-colher.webp',             name: 'Ovo de Colher' },
    { src: './assets/images/chocolataria/ovo-colher-maracuja.webp',    name: 'Recheado de Maracujá' },
    { src: './assets/images/chocolataria/ovo-colher-prestigio.webp',   name: 'Recheado Prestígio' },
    { src: './assets/images/chocolataria/ovo-colher-tradicional.webp', name: 'Trufa Tradicional' },
  ],
  'outros-chocolataria': [
    { src: './assets/images/chocolataria/pao-mel.webp',         name: 'Pão de Mel' },
    { src: './assets/images/chocolataria/bombons.webp',         name: 'Trufas e Bombons' },
    { src: './assets/images/chocolataria/bombons2.webp',        name: 'Trufas e Bombons' },
    { src: './assets/images/chocolataria/bombons3.webp',        name: 'Trufas e Bombons' },
    { src: './assets/images/chocolataria/caixa-bombons.webp',   name: 'Caixa de Bombons' },
    { src: './assets/images/chocolataria/alfajor.webp',         name: 'Alfajor Artesanal' },
    { src: './assets/images/chocolataria/barra-chocolate.webp', name: 'Barra Recheada' },
  ],
  // Pool exclusivo para o banner da Páscoa (mistura ovos tradicionais + recheados)
  'pascoa-banner': [
    { src: './assets/images/chocolataria/ovo-chocolate/ovo-chocolate1.webp', name: 'Ovo ao Leite' },
    { src: './assets/images/chocolataria/ovo-chocolate/ovo-chocolate2.webp', name: 'Ovo Crocante' },
    { src: './assets/images/chocolataria/ovo-chocolate/ovo-chocolate3.webp', name: 'Ovo Branco' },
    { src: './assets/images/chocolataria/ovo-colher.webp',             name: 'Ovo de Colher' },
    { src: './assets/images/chocolataria/ovo-colher-maracuja.webp',    name: 'Recheado Maracujá' },
    { src: './assets/images/chocolataria/ovo-colher-prestigio.webp',   name: 'Recheado Prestígio' },
    { src: './assets/images/chocolataria/ovo-colher-tradicional.webp', name: 'Trufa Tradicional' },
  ],
};

// ----------------------------------------------------------
// Monta um img-cycle-container a partir de um pool { src, name }[]
// Inclui a .img-cycle-label com o nome do produto inicial
// ----------------------------------------------------------
function buildCycleContainer(pool, altText) {
  const initial = Math.floor(Math.random() * pool.length);
  const item = pool[initial];
  const uid = `pool-${Math.random().toString(36).slice(2, 7)}`;
  const encodedPool = encodeURIComponent(JSON.stringify(pool));

  return `
    <div class="img-cycle-container"
         data-pool="${encodedPool}"
         data-pool-current="${initial}"
         id="${uid}">
      <img src="${item.src}" class="img-cycle-layer img-cycle-layer--back" alt="${altText}" loading="lazy" />
      <img src="${item.src}" class="img-cycle-layer img-cycle-layer--front" alt="${altText}" loading="lazy" />
      <span class="img-cycle-label">${item.name}</span>
    </div>`;
}

// ----------------------------------------------------------
// Inicia o ciclo aleatório — atualiza imagem + tag de nome
// Pode ser chamada múltiplas vezes: o flag data-initialized
// garante que cada container seja inicializado apenas uma vez
// ----------------------------------------------------------
function initPoolCrossfades() {
  document.querySelectorAll('.img-cycle-container[data-pool]').forEach(container => {
    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    const pool = JSON.parse(decodeURIComponent(container.dataset.pool));
    if (pool.length <= 1) return;

    const back  = container.querySelector('.img-cycle-layer--back');
    const front = container.querySelector('.img-cycle-layer--front');
    const label = container.querySelector('.img-cycle-label');
    if (!back || !front) return;

    let currentIdx = parseInt(container.dataset.poolCurrent) || 0;

    setInterval(() => {
      // Sorteia o próximo diferente do atual
      let nextIdx;
      do { nextIdx = Math.floor(Math.random() * pool.length); }
      while (nextIdx === currentIdx);
      currentIdx = nextIdx;

      const nextItem = pool[currentIdx];

      // Fade out da label enquanto a imagem troca
      if (label) label.classList.add('img-cycle-label--hidden');

      front.src = nextItem.src;
      front.onload = () => {
        front.style.opacity = 1;
        setTimeout(() => {
          back.src = nextItem.src;
          front.style.transition = 'none';
          front.style.opacity = 0;
          setTimeout(() => {
            front.style.transition = '';
            // Fade in da label com o novo nome
            if (label) {
              label.textContent = nextItem.name;
              label.classList.remove('img-cycle-label--hidden');
            }
          }, 50);
        }, 850);
      };
    }, 4500);
  });
}

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

  // 1. Cards estáticos com pool de imagens (Bolos, Doces, Salgados,
  //    Chocolataria, Ovos Tradicionais, Ovos Recheados, Outros)
  initStaticPoolCards();

  // 2. Banner da Páscoa
  initBannerPool();

  // 3. Inicia os ciclos de todos os containers pool já presentes
  initPoolCrossfades();

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
    initPoolCrossfades();

  } catch (erro) {
    console.error('Erro ao gerar carrossel inteligente:', erro);
  }
});