/* ============================================================
   TIA BETE BOLOS — Página de Detalhe do Produto (Refatorado para JSON)
   ============================================================ */

/* RÓTULOS DE CATEGORIA para o breadcrumb */
const CAT_LABELS = {
  bolos:    { label: 'Bolos',    href: 'bolos.html' },
  doces:    { label: 'Doces',    href: 'doces.html' },
  salgados: { label: 'Salgados', href: 'salgados.html' },
};

/* RECOMENDADOS por categoria */
const RECOMMENDED = {
  bolos:    ['bolo-brigadeiro', 'bolo-ninho-morango', 'bolo-floresta-negra', 'bolo-mousse-maracuja'],
  doces:    ['brigadeiro', 'torta-holandesa', 'mousse-maracuja', 'maca-amor'],
  salgados: ['coxinha-grande', 'empada', 'esfiha-fechada', 'pao-frios'],
};

/* INICIALIZAÇÃO ASSÍNCRONA */
document.addEventListener('DOMContentLoaded', async () => {
  const params  = new URLSearchParams(location.search);
  const id      = params.get('id');
  const catKey  = params.get('cat');

  try {
    // 1. Busca os dados do arquivo estático JSON
    const response = await fetch('../data/cardapio.json');
    if (!response.ok) throw new Error('Falha ao carregar o cardápio');
    
    const CATALOG = await response.json();
    const produto = CATALOG[id];

    // 2. Se o produto não existir no JSON
    if (!produto) {
      document.getElementById('product-title').textContent = 'Produto não encontrado';
      document.getElementById('product-desc').textContent  = 'Volte para a listagem e escolha um produto.';
      return;
    }

    const phone = '5511972710172';

    // 3. Preenche a página com os dados
    document.title = `${produto.name} | Tia Bete Bolos`;
    document.querySelector('meta[name="description"]').content = `${produto.name} — ${produto.desc.slice(0, 120)}...`;
    
    document.getElementById('product-emoji').textContent = produto.emoji;
    document.getElementById('product-category').textContent = produto.catLabel;
    document.getElementById('product-title').textContent = produto.name;
    document.getElementById('product-desc').textContent  = produto.desc;

    // 4. Configura Links do WhatsApp
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(produto.waMsg)}`;
    document.getElementById('product-wa-btn').href = waUrl;
    
    const floatBtn = document.getElementById('wa-float');
    if(floatBtn) floatBtn.href = waUrl;

    // 5. Configura Breadcrumb
    const cat = CAT_LABELS[catKey] || CAT_LABELS[produto.cat] || { label: 'Produtos', href: '#' };
    document.getElementById('breadcrumb').innerHTML = `
      <a href="../index.html">Início</a>
      <span class="product-detail__breadcrumb-sep" aria-hidden="true">›</span>
      <a href="${cat.href}">${cat.label}</a>
      <span class="product-detail__breadcrumb-sep" aria-hidden="true">›</span>
      <span aria-current="page">${produto.name}</span>
    `;

    // 6. Monta Grid de Recomendados
    const recIds  = (RECOMMENDED[produto.cat] || []).filter(rid => rid !== id).slice(0, 4);
    const grid    = document.getElementById('recommended-grid');
    const recLabel = document.getElementById('recommended-label');
    recLabel.textContent = `Outros ${cat.label}`;

    if (recIds.length === 0) {
      document.getElementById('recommended-section').style.display = 'none';
    } else {
      grid.innerHTML = recIds.map(rid => {
        const p = CATALOG[rid];
        if (!p) return '';
        const rWaUrl = `https://wa.me/${phone}?text=${encodeURIComponent(p.waMsg)}`;
        
        return `
          <article class="pcard">
            <a href="produto.html?id=${rid}&cat=${p.cat}" class="pcard__img-link" aria-label="Ver ${p.name}">
              <div class="pcard__placeholder">
                <span class="pcard__placeholder-icon">${p.emoji}</span>
                <span class="pcard__placeholder-text">foto em breve</span>
              </div>
              <span class="pcard__badge">${p.catLabel}</span>
            </a>
            <div class="pcard__body">
              <h3 class="pcard__name">${p.name}</h3>
              <a href="${rWaUrl}" class="pcard__btn" target="_blank" rel="noopener noreferrer">Eu quero</a>
            </div>
          </article>`;
      }).join('');
    }

  } catch (error) {
    console.error("Erro na aplicação:", error);
    document.getElementById('product-title').textContent = 'Erro ao carregar o cardápio';
    document.getElementById('product-desc').textContent  = 'Por favor, recarregue a página ou tente novamente mais tarde.';
  }
});