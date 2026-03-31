/* ============================================================
   TIA BETE BOLOS — Home Dinâmica (Carrossel Inteligente)
   Sorteia a imagem aleatória, mas mantém o link e a descrição da categoria
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  const slidesDinamicos = document.querySelectorAll('[data-dynamic-cat]');
  if (slidesDinamicos.length === 0) return;

  // Dicionário com os links (hash) e as descrições fixas que você já tinha planejado
  const CONFIG_SUBCATEGORIAS = {
    'Bolos Simples': { link: 'bolos.html#simples', desc: 'Fubá, milho, chocolate, cenoura' },
    'Bolos Recheados': { link: 'bolos.html#recheados', desc: 'Brigadeiro, Ninho, Floresta Negra' },
    'Bolos de Festa': { link: 'bolos.html#festa', desc: 'Personalizados e temáticos' },
    
    'Tradicionais de Festa': { link: 'doces.html#tradicionais', desc: 'Brigadeiro, quindim, beijinho' },
    'Tortas & Mousses': { link: 'doces.html#tortas', desc: 'Holandesa, maracujá, limão' },
    'Caramelizados': { link: 'doces.html#caramelizados', desc: 'Maçã e morango do amor' },
    'Assados Recheados': { link: 'doces.html#assados', desc: 'Carolinas e bombas de chocolate' },
    
    'Mini Salgados': { link: 'salgados.html#mini', desc: 'Coxinha, bolinha, quibe, risole' },
    'Salgados Especiais': { link: 'salgados.html#especiais', desc: 'Pastel, empada, mini pizza' },
    'Salgados Assados': { link: 'salgados.html#assados', desc: 'Fogaça e esfihas' },
    'Pães Caseiros': { link: 'salgados.html#paes', desc: 'Artesanais, de forma e panetones' }
  };

  try {
    const res = await fetch('./data/cardapio.json');
    if (!res.ok) throw new Error('Erro ao carregar cardápio');
    const catalog = await res.json();

    const listaProdutos = Object.entries(catalog).map(([id, p]) => ({ id, ...p }));

    slidesDinamicos.forEach(slide => {
      const catLabelDesejada = slide.getAttribute('data-dynamic-cat');
      const configCat = CONFIG_SUBCATEGORIAS[catLabelDesejada];
      
      // Se a categoria não estiver no dicionário acima, pula o slide
      if (!configCat) return;

      const produtosDestaCat = listaProdutos.filter(p => p.catLabel === catLabelDesejada);
      
      if (produtosDestaCat.length > 0) {
        // Sorteia UM produto apenas para roubar a IMAGEM dele
        const sorteado = produtosDestaCat[Math.floor(Math.random() * produtosDestaCat.length)];
        
        // Caminho da imagem (Fallback com Emoji)
        const imgCaminho = `./assets/images/${sorteado.cat}/${sorteado.id}.webp`;
        const fallbackHTML = `<div class='ccard__placeholder'>${sorteado.emoji}</div>`;
        const imgHTML = `<img src="${imgCaminho}" alt="Exemplo de ${catLabelDesejada}" class="ccard__img" loading="lazy" onerror="this.outerHTML=\`${fallbackHTML}\`" />`;

        // Monta o Card usando a imagem sorteada, mas o LINK e DESCRIÇÃO fixos!
        slide.innerHTML = `
          <a href="pages/${configCat.link}" class="ccard" aria-label="Ver opções de ${catLabelDesejada}">
            <div class="ccard__img-wrap">
              ${imgHTML}
            </div>
            <div class="ccard__body">
              <h3 class="ccard__title">${catLabelDesejada}</h3>
              <span class="ccard__sub">${configCat.desc}</span>
            </div>
          </a>
        `;
      }
    });

  } catch (erro) {
    console.error("Erro ao gerar carrossel inteligente:", erro);
  }
});