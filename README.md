# tia-bete-bolos
Portfólio de Confeitaria Artesanal

# 🎂 Tia Bete Bolos – Site Portfólio

Site institucional e portfólio de produtos da confeitaria e chocolataria **Tia Bete Bolos**,
com mais de 20 anos de tradição. Desenvolvido com HTML, CSS e JavaScript puro (vanilla),
estrutura multipágina, pronto para ser servido via VS Code Live Server.

## 📁 Estrutura do Projeto

```
tia-bete-bolos/
│
├── index.html                    ← Home (página principal)
│
├── pages/
│   ├── chocolataria.html         ← Chocolataria & Páscoa (foco inicial)
│   ├── bolos.html                ← Portfólio de bolos
│   ├── doces.html                ← Doces finos e brigadeiros
│   ├── sobre.html                ← Nossa história (20+ anos)
│   └── contato.html              ← Encomendas & contato
│
├── css/
│   ├── reset.css                 ← Reset CSS base
│   ├── variables.css             ← Tokens: cores, fontes, espaçamento
│   ├── global.css                ← Estilos globais e componentes
│   ├── home.css                  ← Estilos específicos da Home
│   ├── chocolataria.css          ← Estilos da página Chocolataria
│   ├── bolos.css                 ← Estilos da página Bolos
│   ├── doces.css                 ← Estilos da página Doces
│   ├── sobre.css                 ← Estilos da página Sobre
│   └── contato.css               ← Estilos da página Contato
│
├── js/
│   ├── nav.js                    ← Header/nav injetado em todas as páginas
│   ├── main.js                   ← Inicialização global (WhatsApp FAB, footer, etc.)
│   ├── produtos.js               ← Dados e renderização dos produtos
│   └── contato.js                ← Formulário de encomenda → WhatsApp
│
└── assets/
    ├── images/
    │   ├── logo/                 ← Logo oficial e favicon
    │   ├── hero/                 ← Imagens de banner/hero
    │   ├── chocolataria/         ← Fotos dos produtos de chocolate
    │   ├── bolos/                ← Fotos dos bolos
    │   └── doces/                ← Fotos dos doces
    ├── icons/                    ← Ícones SVG (WhatsApp, Instagram, etc.)
    └── fonts/                    ← Fontes locais (se necessário)
```

## 🎨 Paleta de Cores

| Token                  | Valor     | Uso                            |
|------------------------|-----------|--------------------------------|
| `--color-rosa-claro`   | `#F9D0DA` | Fundos suaves, cards           |
| `--color-rosa-medio`   | `#F4A7B9` | Detalhes, bordas               |
| `--color-bordô`        | `#8B1A2A` | Botões primários, footer       |
| `--color-chocolate`    | `#5C3317` | Textos, títulos                |
| `--color-caramelo`     | `#C8834A` | Destaques, hover               |
| `--color-azul-candy`   | `#4AABDB` | Accent especial (cupcake)      |

## 🔤 Tipografia

- **Display:** Playfair Display – títulos elegantes
- **Script:** Dancing Script – estilo da identidade visual
- **Body:** Lato – leitura confortável

## 🗺️ Ordem de Desenvolvimento

1. `css/variables.css` + `css/reset.css` + `css/global.css` ✅
2. `js/nav.js` → header/menu em todas as páginas
3. `js/main.js` → footer + WhatsApp FAB + animações
4. **`pages/chocolataria.html`** → foco Páscoa (prioridade!)
5. `index.html` → Home completa
6. `pages/bolos.html` + `pages/doces.html`
7. `pages/sobre.html` + `pages/contato.html`
8. `js/produtos.js` → dados e grid de produtos
9. `js/contato.js` → formulário → WhatsApp

## 📱 Contato da Loja

- **WhatsApp:** (11) 97271-0172
- **Foco atual:** Chocolataria de Páscoa 🐣🍫
