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
    { href: `${base}pages/contato.html`,      label: 'Contato',        file: 'contato.html' },
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
})();
