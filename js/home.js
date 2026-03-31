/* ============================================================
   TIA BETE BOLOS — Home Dinâmica (Carrossel Inteligente)
   Sorteia um produto aleatório de cada categoria para a vitrine
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  const slidesDinamicos = document.querySelectorAll('[data-dynamic-cat]');
  if (slidesDinamicos.length === 0) return;

  try {
    const res = await fetch('./data/cardapio.json');
    if (!res.ok) throw new Error('Erro ao carregar cardápio');
    const catalog = await res.json();

    // Transforma o objeto JSON em uma lista (Array) para facilitar a busca
    const listaProdutos = Object.entries(catalog).map(([id, p]) => ({ id, ...p }));

    // Para cada slide do carrossel que pede uma categoria específica
    slidesDinamicos.forEach(slide => {
      const catLabelDesejada = slide.getAttribute('data-dynamic-cat');
      
      // Filtra todos os produtos que pertencem a essa subcategoria
      const produtosDestaCat = listaProdutos.filter(p => p.catLabel === catLabelDesejada);
      
      if (produtosDestaCat.length > 0) {
        // Sorteia UM produto aleatório dessa lista
        const sorteado = produtosDestaCat[Math.floor(Math.random() * produtosDestaCat.length)];
        
        // A Mágica da Imagem (Fallback com Emoji)
        // Atenção: O caminho aqui começa com './' porque estamos no index.html
        const imgCaminho = `./assets/images/${sorteado.cat}/${sorteado.id}.webp`;
        const fallbackHTML = `<div class='ccard__placeholder'>${sorteado.emoji}</div>`;
        const imgHTML = `<img src="${imgCaminho}" alt="${sorteado.name}" class="ccard__img" loading="lazy" onerror="this.outerHTML=\`${fallbackHTML}\`" />`;

        // Injeta o card preenchido dentro do <li> vazio
        slide.innerHTML = `
          <a href="pages/produto.html?id=${sorteado.id}&cat=${sorteado.cat}" class="ccard" aria-label="${sorteado.name}">
            <div class="ccard__img-wrap">
              ${imgHTML}
            </div>
            <div class="ccard__body">
              <h3 class="ccard__title">${sorteado.catLabel}</h3>
              <span class="ccard__sub">Ex: ${sorteado.name}</span>
            </div>
          </a>
        `;
      }
    });

  } catch (erro) {
    console.error("Erro ao gerar carrossel inteligente:", erro);
  }
});