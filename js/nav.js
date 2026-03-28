/* ============================================================
   TIA BETE BOLOS — Nav Dinâmica
   Injeta a nav e o footer em todas as páginas de pages/
   ============================================================ */

(function () {
  const isSubpage = window.location.pathname.includes('/pages/');
  const base = isSubpage ? '../' : '';
  const current = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: `${base}index.html`,              label: 'Início',         file: 'index.html' },
    { href: `${base}pages/bolos.html`,        label: 'Bolos',          file: 'bolos.html' },
    { href: `${base}pages/doces.html`,        label: 'Doces',          file: 'doces.html' },
    { href: `${base}pages/salgados.html`,     label: 'Salgados',       file: 'salgados.html' },
    { href: `${base}pages/sobre.html`,        label: 'Nossa História', file: 'sobre.html' },
    { href: `${base}pages/contato.html`,      label: 'Encomende',        file: 'contato.html' },
  ];

  const navHTML = `
<nav class="nav" id="nav" role="navigation" aria-label="Menu principal">
  <div class="container nav__inner">
    <a href="${base}index.html" class="nav__logo" aria-label="Tia Bete Bolos — Início">
      <img src="${base}assets/images/logo/logo.png" alt="Logo Tia Bete Bolos" class="nav__logo-img" width="48" height="48"/>
      <div class="nav__logo-text">
        <span class="nav__logo-name">Tia Bete Bolos</span>
        <span class="nav__logo-subtitle">Confeitaria Artesanal</span>
      </div>
    </a>
    <button class="nav__toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Abrir menu">
      <span class="nav__toggle-bar"></span>
      <span class="nav__toggle-bar"></span>
      <span class="nav__toggle-bar"></span>
    </button>
    <ul class="nav__links" id="nav-links" role="list">
      ${links.map(l => `
      <li><a href="${l.href}" class="nav__link${current === l.file ? ' active' : ''}">${l.label}</a></li>`).join('')}
      <li>
        <a href="${base}pages/chocolateria.html" class="nav__link nav__link--highlight${current === 'chocolateria.html' ? ' active' : ''}">🍫 Páscoa 2026</a>
      </li>
    </ul>
  </div>
</nav>
<div class="nav-spacer"></div>`;

  // Injeta nav no topo do body se não existir
  if (!document.querySelector('.nav')) {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }
 
  // ── FOOTER ────────────────────────────────────────────────

  const ICONS = {
    facebook: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
    instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
    whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.215a.75.75 0 00.918.928l5.42-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.699-.504-5.252-1.385l-.372-.216-3.865 1.043 1.065-3.755-.236-.384A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>',
  };

  function icon(name, size = 20) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true">${ICONS[name]}</svg>`;
  }

  const footerEl = document.getElementById('main-footer');
  if (footerEl) {
    footerEl.className = 'footer';
    footerEl.setAttribute('role', 'contentinfo');
    footerEl.innerHTML = `
      <div class="container">
        <div class="footer__grid">
 
          <div class="footer__brand">
            <a href="${base}index.html" class="footer__logo">
              <img src="${base}assets/images/logo/logo.png" alt="Tia Bete Bolos" class="footer__logo-img" width="56" height="56"/>
              <span class="footer__logo-name">Tia Bete Bolos</span>
            </a>
            <p class="footer__tagline">Confeitaria artesanal com mais de 20 anos de história, feita com amor e ingredientes selecionados.</p>
            <div class="footer__social">
              <a href="https://www.instagram.com/tia.betebolos/" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">${icon('instagram', 18)}</span>
              </a>
              <a href="https://www.facebook.com/tiabetebolos/" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">${icon('facebook', 18)}</span>
              </a>
              <a href="https://wa.me/5511972710172?text=Olá%20Tia%20Bete,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20encomenda." class="footer__social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">${icon('whatsapp', 18)}</span>
              </a>
            </div>
          </div>
 
          <div>
            <h3 class="footer__col-title">Produtos</h3>
            <ul class="footer__links" role="list">
              <li><a href="${base}pages/chocolateria.html" class="footer__link">🍫 Páscoa 2026</a></li>
              <li><a href="${base}pages/bolos.html"        class="footer__link">Bolos Artesanais</a></li>
              <li><a href="${base}pages/salgados.html"     class="footer__link">Salgados</a></li>
              <li><a href="${base}pages/doces.html"        class="footer__link">Doces & Confeitaria</a></li>
            </ul>
          </div>
 
          <div>
            <h3 class="footer__col-title">A Loja</h3>
            <ul class="footer__links" role="list">
              <li><a href="${base}pages/sobre.html"   class="footer__link">Nossa História</a></li>
              <li><a href="${base}pages/contato.html" class="footer__link">Contato</a></li>
              <li><a href="${base}pages/contato.html" class="footer__link">Encomendas</a></li>
            </ul>
          </div>
 
          <div>
            <h3 class="footer__col-title">Contato</h3>
            <div class="footer__contact-item">
              <span class="footer__contact-icon" aria-hidden="true">📞</span>
              <span>(11) 97271-0172</span>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon" aria-hidden="true">📍</span>
              <span>São Paulo, SP</span>
            </div>
            <a href="https://wa.me/5511972710172?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!" class="footer__whatsapp-btn" target="_blank" rel="noopener noreferrer">
              ${icon('whatsapp', 20)} Pedir pelo WhatsApp
            </a>
          </div>
 
        </div>
        <div class="footer__bottom">
          <span>© 2026 Tia Bete Bolos. Todos os direitos reservados.</span>
          <span>Feito com <span class="footer__bottom-heart" aria-label="amor">♥</span> para adoçar sua vida</span>
        </div>
      </div>`;
  }
 
  // ── BOTÃO FLUTUANTE WHATSAPP ───────────────────────────────
  if (!document.querySelector('.whatsapp-float')) {
    document.body.insertAdjacentHTML('beforeend', `
      <a href="https://wa.me/5511972710172?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido!"
         class="whatsapp-float"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Fale conosco pelo WhatsApp"
         title="Fale conosco pelo WhatsApp">${icon('whatsapp', 28)}
      </a>`);
  }
})();