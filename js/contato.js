/* ============================================================
   TIA BETE BOLOS — Simulador de Encomenda (contato.js)
   ============================================================ */

(function () {

  /* ----------------------------------------------------------
     TABELAS DE CÁLCULO
     Baseadas em dados reais de Catering + 20 anos de experiência
     ---------------------------------------------------------- */
  const CALC = {
    bolos: {
      label: 'Peso', unit: 'kg',
      emoji: '🎂', unitLong: 'quilograma(s)',
      // 100g por pessoa, mínimo 1kg
      calc: (pessoas, _evento) => Math.max(1, Math.ceil(pessoas * 0.1 * 10) / 10),
      hint: (pessoas, _evento) =>
        `Calculado em 100g por pessoa para ${pessoas} convidado(s). Pedido mínimo: 1 kg.`,
    },
    doces: {
      label: 'Quantidade', unit: 'dúzias',
      emoji: '🍬', unitLong: 'dúzia(s)',
      // 5~7 por pessoa; casamento usa o mínimo
      calc: (pessoas, evento) => {
        const porPessoa = evento === 'casamento' ? 5 : 6;
        return Math.ceil((pessoas * porPessoa) / 12);
      },
      hint: (pessoas, evento) => {
        const pp = evento === 'casamento' ? 5 : 6;
        return `Média de ${pp} doces por pessoa (${pessoas} convidados) = ${pessoas * pp} unidades ≈ ${Math.ceil((pessoas * pp) / 12)} dúzia(s).`;
      },
    },
    salgados: {
      label: 'Quantidade', unit: 'cento(s)',
      emoji: '🍗', unitLong: 'cento(s)',
      // 12~15/pessoa casual ou aniversário; 6~8/pessoa casamento
      calc: (pessoas, evento) => {
        const porPessoa = evento === 'casamento' ? 7 : 13;
        return Math.ceil((pessoas * porPessoa) / 100);
      },
      hint: (pessoas, evento) => {
        const pp = evento === 'casamento' ? '6~8' : '12~15';
        const usado = evento === 'casamento' ? 7 : 13;
        return `Média de ${pp} salgados por pessoa. Usando ${usado}/pessoa para ${pessoas} convidados = ${pessoas * usado} unidades ≈ ${Math.ceil((pessoas * usado) / 100)} cento(s).`;
      },
    },
    paes: {
      label: 'Quantidade', unit: 'unidade(s)',
      emoji: '🍞', unitLong: 'unidade(s) de pão (≈1kg cada)',
      // 100~200g/pessoa; cada unidade = 1kg
      calc: (pessoas, _evento) => Math.max(1, Math.ceil(pessoas * 0.15)),
      hint: (pessoas, _evento) =>
        `Média de 100~200g por pessoa. Calculado em 150g/pessoa para ${pessoas} convidados. Cada pão rende ≈ 1kg em fatias.`,
    },
  };

  const FESTA_ITENS = ['bolos', 'salgados', 'doces', 'paes'];

  const EVENTO_LABELS = {
    casual: 'Reunião Casual',
    aniversario: 'Festa de Aniversário',
    casamento: 'Casamento',
  };

  const TIPO_LABELS = {
    bolos: 'Bolos',
    doces: 'Doces',
    salgados: 'Salgados',
    paes: 'Pães Caseiros',
    festa: 'Festa Completa',
  };

  /* ----------------------------------------------------------
     ESTADO
     ---------------------------------------------------------- */
  const state = { tipo: null, evento: null, convidados: null, qty: null };

  /* ----------------------------------------------------------
     REFERÊNCIAS DO DOM
     ---------------------------------------------------------- */
  const qtyWrap    = document.getElementById('campo-qty-wrap');
  const qtyLabel   = document.getElementById('qty-label');
  const qtyInput   = document.getElementById('campo-qty');
  const qtyUnit    = document.getElementById('qty-unit');
  const qtyHint    = document.getElementById('qty-hint');
  const btnCalc    = document.getElementById('btn-calcular');
  const resultEl   = document.getElementById('enc-result');
  const resultIcon = document.getElementById('result-icon');
  const resultName = document.getElementById('result-name');
  const resultItems= document.getElementById('result-items');
  const btnWa      = document.getElementById('btn-whatsapp');

  /* ----------------------------------------------------------
     CHIPS — seleção única por grupo
     ---------------------------------------------------------- */
  document.querySelectorAll('.enc-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const group = chip.dataset.group;
      // Desativa outros do mesmo grupo
      document.querySelectorAll(`.enc-chip[data-group="${group}"]`)
        .forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      state[group] = chip.dataset.value;

      if (group === 'tipo' || group === 'evento' || group === 'convidados') {
        atualizarCampoQty();
      }
      atualizarBotao();
    });
  });

  /* ----------------------------------------------------------
     CAMPO DE QUANTIDADE — atualiza label, unit e sugestão
     ---------------------------------------------------------- */
  function atualizarCampoQty() {
    const { tipo, evento, convidados } = state;
    if (!tipo) return;

    const isFesta = tipo === 'festa';
    const cfg = isFesta ? null : CALC[tipo];

    // Label e unidade
    if (isFesta) {
      qtyLabel.textContent = 'Quantidade de convidados confirmada';
      qtyUnit.textContent = 'convidados';
      qtyHint.textContent = 'Para festa completa calculamos todos os itens automaticamente.';
    } else {
      qtyLabel.textContent = cfg.label;
      qtyUnit.textContent = cfg.unit;
    }

    // Sugestão automática se tiver convidados e evento
    if (convidados && evento) {
      const pessoas = parseInt(convidados);
      if (isFesta) {
        qtyInput.value = pessoas;
        qtyHint.textContent = `Estimativa calculada para ${pessoas} convidados em ${EVENTO_LABELS[evento]}.`;
      } else {
        const sugerido = cfg.calc(pessoas, evento);
        qtyInput.value = sugerido;
        qtyHint.textContent = cfg.hint(pessoas, evento);
      }
      state.qty = qtyInput.value;
    }

    qtyWrap.style.display = 'block';
  }

  qtyInput.addEventListener('input', () => {
    state.qty = qtyInput.value;
    atualizarBotao();
  });

  /* ----------------------------------------------------------
     HABILITA O BOTÃO CALCULAR
     ---------------------------------------------------------- */
  function atualizarBotao() {
    const { tipo, evento, convidados } = state;
    const qty = qtyInput.value;
    btnCalc.disabled = !(tipo && evento && convidados && qty && qty > 0);
  }

  /* ----------------------------------------------------------
     CALCULAR — monta o resultado
     ---------------------------------------------------------- */
  btnCalc.addEventListener('click', () => {
    const { tipo, evento, convidados } = state;
    const pessoas = parseInt(convidados);
    const isFesta = tipo === 'festa';

    // Ícone e título do resultado
    resultIcon.textContent = isFesta ? '🎉' : CALC[tipo].emoji;
    resultName.textContent = isFesta
      ? `Festa Completa · ${EVENTO_LABELS[evento]}`
      : `${TIPO_LABELS[tipo]} para ${EVENTO_LABELS[evento]}`;

    // Monta itens
    const itens = isFesta ? FESTA_ITENS : [tipo];
    resultItems.innerHTML = itens.map(item => {
      const cfg = CALC[item];
      const qty = cfg.calc(pessoas, evento);
      return `
        <div class="enc-result-item">
          <div class="enc-result-item__left">
            <span class="enc-result-item__emoji">${cfg.emoji}</span>
            <div>
              <div class="enc-result-item__name">${TIPO_LABELS[item]}</div>
              <div class="enc-result-item__sub">${cfg.hint(pessoas, evento)}</div>
            </div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div class="enc-result-item__qty">${qty}</div>
            <div class="enc-result-item__unit">${cfg.unit}</div>
          </div>
        </div>`;
    }).join('');

    // Mostra resultado
    resultEl.hidden = false;
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Monta mensagem do WhatsApp
    montarMensagemWA(tipo, evento, pessoas, itens, isFesta);
  });

  /* ----------------------------------------------------------
     MONTAR MENSAGEM WHATSAPP
     ---------------------------------------------------------- */
  function montarMensagemWA(tipo, evento, pessoas, itens, isFesta) {
    const nome = document.getElementById('campo-nome').value.trim() || 'Cliente';

    const linhasItens = itens.map(item => {
      const cfg = CALC[item];
      const qty = cfg.calc(pessoas, evento);
      return `• ${TIPO_LABELS[item]}: ${qty} ${cfg.unit}`;
    }).join('\n');

    const msg = [
      `Olá, Tia Bete! Meu nome é *${nome}*.`,
      ``,
      `Gostaria de solicitar um orçamento para minha encomenda:`,
      ``,
      ` *Detalhes do evento:*`,
      `• Tipo: ${isFesta ? 'Festa Completa' : TIPO_LABELS[tipo]}`,
      `• Evento: ${EVENTO_LABELS[evento]}`,
      `• Convidados: ${pessoas} pessoas`,
      ``,
      ` *Estimativa de itens:*`,
      linhasItens,
      ``,
      `(Quantidades sugeridas pelo simulador do site. Posso ajustar conforme necessário.)`,
      ``,
      `Aguardo o orçamento. Obrigado(a)!`,
    ].join('\n');

    btnWa.onclick = () => {
      window.open(
        `https://wa.me/5511972710172?text=${encodeURIComponent(msg)}`,
        '_blank',
        'noopener,noreferrer'
      );
    };
  }

})();