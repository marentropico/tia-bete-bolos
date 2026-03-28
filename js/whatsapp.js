/* ============================================================
   TIA BETE BOLOS — WhatsApp Float
   Mensagens contextuais por página
   ============================================================ */

(function () {
  const phone = '5511972710172';

  // Mensagens pré-definidas por página
  const messages = {
    'index.html':          'Olá! Vim pelo site e gostaria de fazer um pedido.',
    'chocolateria.html':   'Olá! Vim pelo site e gostaria de encomendar produtos de Páscoa!',
    'bolos.html':          'Olá! Gostaria de encomendar um bolo. Pode me dar mais informações?',
    'doces.html':          'Olá! Tenho interesse nos doces. Pode me contar mais?',
    'sobre.html':          'Olá! Vim pelo site e gostaria de fazer um pedido.',
    'contato.html':        'Olá! Vim pelo site e gostaria de falar com vocês.',
  };

  const page = window.location.pathname.split('/').pop() || 'index.html';
  const msg  = messages[page] || messages['index.html'];
  const url  = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  const btn = document.querySelector('.whatsapp-float');
  if (btn) btn.href = url;
})();
