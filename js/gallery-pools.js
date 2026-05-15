/* ============================================================
   TIA BETE BOLOS — Sistema Global de Galeria por Pools
   Gerencia imagens dinâmicas e background galleries em todo o site.
   ============================================================ */

const pathPrefix = window.location.pathname.includes('/pages/') ? '../' : './';

const IMG_POOLS = {
  'bolos': [
    { src: `${pathPrefix}assets/images/bolos/bolo-brigadeiro.webp`,       name: 'Bolo de Brigadeiro' },
    { src: `${pathPrefix}assets/images/bolos/bolo-cenoura-chocolate.webp`,name: 'Cenoura c/ Chocolate' },
    { src: `${pathPrefix}assets/images/bolos/bolo-cenoura.webp`,          name: 'Bolo de Cenoura' },
    { src: `${pathPrefix}assets/images/bolos/bolo-chocolate-simples.webp`,name: 'Bolo de Chocolate' },
    { src: `${pathPrefix}assets/images/bolos/bolo-debutante.webp`,        name: 'Bolo de Debutante' },
    { src: `${pathPrefix}assets/images/bolos/bolo-doce-leite.webp`,       name: 'Doce de Leite' },
    { src: `${pathPrefix}assets/images/bolos/bolo-festa-1andar.webp`,     name: 'Bolo de Festa' },
    { src: `${pathPrefix}assets/images/bolos/bolo-floresta-negra.webp`,   name: 'Floresta Negra' },
    { src: `${pathPrefix}assets/images/bolos/bolo-fuba.webp`,             name: 'Bolo de Fubá' },
    { src: `${pathPrefix}assets/images/bolos/bolo-laranja.webp`,          name: 'Bolo de Laranja' },
    { src: `${pathPrefix}assets/images/bolos/bolo-milho.webp`,            name: 'Bolo de Milho' },
    { src: `${pathPrefix}assets/images/bolos/bolo-ninho-morango.webp`,    name: 'Ninho com Morango' },
  ],
  'doces': [
    { src: `${pathPrefix}assets/images/doces/brigadeiro.webp`,      name: 'Brigadeiro Gourmet' },
    { src: `${pathPrefix}assets/images/doces/quindim.webp`,         name: 'Quindim' },
    { src: `${pathPrefix}assets/images/doces/beijinho.webp`,        name: 'Beijinho' },
    { src: `${pathPrefix}assets/images/doces/mousse-chocolate.webp`,name: 'Mousse de Chocolate' },
    { src: `${pathPrefix}assets/images/doces/mousse-maracuja.webp`, name: 'Mousse de Maracujá' },
    { src: `${pathPrefix}assets/images/doces/torta-morango.webp`,   name: 'Torta de Morango' },
    { src: `${pathPrefix}assets/images/doces/torta-frutas.webp`,    name: 'Torta de Frutas' },
    { src: `${pathPrefix}assets/images/doces/maca-amor.webp`,       name: 'Maçã do Amor' },
    { src: `${pathPrefix}assets/images/doces/carolina.webp`,        name: 'Carolina' },
    { src: `${pathPrefix}assets/images/doces/bolinho.webp`,         name: 'Cupcake Decorado' },
  ],
  'salgados': [
    { src: `${pathPrefix}assets/images/salgados/coxinha-mini.webp`,   name: 'Coxinha Mini' },
    { src: `${pathPrefix}assets/images/salgados/coxinha-grande.webp`, name: 'Coxinha Grande' },
    { src: `${pathPrefix}assets/images/salgados/quibe-mini.webp`,     name: 'Quibe Mini' },
    { src: `${pathPrefix}assets/images/salgados/risole-mini.webp`,    name: 'Risole Mini' },
    { src: `${pathPrefix}assets/images/salgados/pastel.webp`,         name: 'Pastel' },
    { src: `${pathPrefix}assets/images/salgados/empada.webp`,         name: 'Empada' },
    { src: `${pathPrefix}assets/images/salgados/mini-pizza.webp`,     name: 'Mini Pizza' },
    { src: `${pathPrefix}assets/images/salgados/esfiha-aberta.webp`,  name: 'Esfiha Aberta' },
    { src: `${pathPrefix}assets/images/salgados/fogaca.webp`,         name: 'Fogaça' },
    { src: `${pathPrefix}assets/images/salgados/pao-frios.webp`,      name: 'Pão de Frios' },
  ],
  'chocolataria': [
    { src: `${pathPrefix}assets/images/chocolataria/alfajor.webp`,               name: 'Alfajor Artesanal' },
    { src: `${pathPrefix}assets/images/chocolataria/barra-chocolate.webp`,       name: 'Barra Recheada' },
    { src: `${pathPrefix}assets/images/chocolataria/bombons.webp`,               name: 'Bombons' },
    { src: `${pathPrefix}assets/images/chocolataria/bombons2.webp`,              name: 'Bombons' },
    { src: `${pathPrefix}assets/images/chocolataria/caixa-bombons.webp`,         name: 'Caixa de Bombons' },
    { src: `${pathPrefix}assets/images/chocolataria/ovo-chocolate-branco.webp`,  name: 'Ovo Branco' },
    { src: `${pathPrefix}assets/images/chocolataria/ovo-chocolate-trufado.webp`, name: 'Ovo Trufado' },
    { src: `${pathPrefix}assets/images/chocolataria/ovo-colher.webp`,            name: 'Ovo de Colher' },
    { src: `${pathPrefix}assets/images/chocolataria/pao-mel.webp`,               name: 'Pão de Mel' },
  ],
  'encomende': [
    // Uma mistura de tudo para o banner de encomenda
    { src: `${pathPrefix}assets/images/bolos/bolo-chocolate-simples.webp`, name: 'Bolos Artesanais' },
    { src: `${pathPrefix}assets/images/doces/brigadeiro.webp`,            name: 'Doces Gourmet' },
    { src: `${pathPrefix}assets/images/salgados/coxinha-grande.webp`,      name: 'Salgados Quentinhos' },
    { src: `${pathPrefix}assets/images/chocolataria/caixa-bombons.webp`,   name: 'Chocolataria Especial' },
    { src: `${pathPrefix}assets/images/doces/torta-morango.webp`,          name: 'Tortas e Doces' },
  ]
};

// Adiciona os pools específicos de páscoa
IMG_POOLS['ovos-tradicionais'] = [
  { src: `${pathPrefix}assets/images/chocolataria/ovo-chocolate/ovo-chocolate1.webp`, name: 'Ovo ao Leite' },
  { src: `${pathPrefix}assets/images/chocolataria/ovo-chocolate/ovo-chocolate2.webp`, name: 'Ovo Crocante' },
  { src: `${pathPrefix}assets/images/chocolataria/ovo-chocolate/ovo-chocolate3.webp`, name: 'Ovo Branco' },
];
IMG_POOLS['ovos-recheados'] = [
  { src: `${pathPrefix}assets/images/chocolataria/ovo-colher.webp`,             name: 'Ovo de Colher' },
  { src: `${pathPrefix}assets/images/chocolataria/ovo-colher-maracuja.webp`,    name: 'Recheado Maracujá' },
  { src: `${pathPrefix}assets/images/chocolataria/ovo-colher-prestigio.webp`,   name: 'Recheado Prestígio' },
  { src: `${pathPrefix}assets/images/chocolataria/ovo-colher-tradicional.webp`, name: 'Trufa Tradicional' },
];
IMG_POOLS['outros-chocolataria'] = [
  { src: `${pathPrefix}assets/images/chocolataria/pao-mel.webp`,         name: 'Pão de Mel' },
  { src: `${pathPrefix}assets/images/chocolataria/bombons.webp`,         name: 'Trufas e Bombons' },
  { src: `${pathPrefix}assets/images/chocolataria/caixa-bombons.webp`,   name: 'Caixa de Bombons' },
];
IMG_POOLS['pascoa-banner'] = [
  ...IMG_POOLS['ovos-tradicionais'],
  ...IMG_POOLS['ovos-recheados']
];

/**
 * Monta um container de ciclo de imagem
 */
function buildCycleContainer(pool, altText, isBackground = false) {
  const initial = Math.floor(Math.random() * pool.length);
  const item = pool[initial];
  const uid = `pool-${Math.random().toString(36).slice(2, 7)}`;
  const encodedPool = encodeURIComponent(JSON.stringify(pool));

  const containerClass = isBackground ? 'bg-cycle-container' : 'img-cycle-container';
  const layerClass = isBackground ? 'bg-cycle-layer' : 'img-cycle-layer';

  return `
    <div class="${containerClass}"
         data-pool="${encodedPool}"
         data-pool-current="${initial}"
         id="${uid}">
      <img src="${item.src}" class="${layerClass} ${layerClass}--back" alt="${altText}" loading="lazy" />
      <img src="${item.src}" class="${layerClass} ${layerClass}--front" alt="${altText}" loading="lazy" />
      ${!isBackground ? `<span class="img-cycle-label">${item.name}</span>` : ''}
    </div>`;
}

/**
 * Inicializa os crossfades de todos os containers de pool
 */
function initPoolCrossfades() {
  const containers = document.querySelectorAll('.img-cycle-container[data-pool], .bg-cycle-container[data-pool]');
  
  containers.forEach(container => {
    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    const pool = JSON.parse(decodeURIComponent(container.dataset.pool));
    if (pool.length <= 1) return;

    const isBg = container.classList.contains('bg-cycle-container');
    const layerSuffix = isBg ? 'bg-cycle-layer' : 'img-cycle-layer';
    
    const back  = container.querySelector(`.${layerSuffix}--back`);
    const front = container.querySelector(`.${layerSuffix}--front`);
    const label = container.querySelector('.img-cycle-label');
    if (!back || !front) return;

    let currentIdx = parseInt(container.dataset.poolCurrent) || 0;

    setInterval(() => {
      let nextIdx;
      do { nextIdx = Math.floor(Math.random() * pool.length); }
      while (nextIdx === currentIdx);
      currentIdx = nextIdx;

      const nextItem = pool[currentIdx];

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
            if (label) {
              label.textContent = nextItem.name;
              label.classList.remove('img-cycle-label--hidden');
            }
          }, 50);
        }, isBg ? 1200 : 850);
      };
    }, isBg ? 6000 : 4500);
  });
}

/**
 * Inicializa galerias de fundo em seções com [data-bg-pool]
 */
function initSectionBackgroundPools() {
  document.querySelectorAll('[data-bg-pool]').forEach(section => {
    const poolKey = section.getAttribute('data-bg-pool');
    const pool = IMG_POOLS[poolKey];
    if (!pool) return;

    // Garante que a seção tenha a classe necessária
    section.classList.add('section-gallery-bg');

    // Cria o container da galeria
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'section-gallery-bg__container';
    galleryContainer.innerHTML = buildCycleContainer(pool, 'Galeria de fundo', true);

    // Cria o overlay
    const overlay = document.createElement('div');
    overlay.className = 'section-gallery-bg__overlay';

    // Insere no início da seção (atrás do conteúdo)
    section.prepend(overlay);
    section.prepend(galleryContainer);
  });
}

// Inicialização automática ao carregar o script
document.addEventListener('DOMContentLoaded', () => {
  initSectionBackgroundPools();
  initPoolCrossfades();
});
