# Koisei Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-9C2D24.svg)](https://opensource.org/licenses/MIT)
[![Style: Wabi-Sabi](https://img.shields.io/badge/Style-Wabi--Sabi-201D17.svg)](#)
[![Typography: Playfair_+_Garamond_+_Mincho](https://img.shields.io/badge/Typography-Playfair%20%7C%20Garamond%20%7C%20Mincho-EFEADE.svg)](#)

> *"Where the river keeps the blossom's memory"*  
> Design System completo extraído do site **Koisei Minimalist**, combinando minimalismo editorial ocidental com tradições estéticas japonesas de tinta Sumi, papel artesanal Washi e selos Hanko (印鑑).

---

## 🌸 Estrutura do Repositório

```
TrabalhoRossett/
├── index.html                   # Living Styleguide interativo e vitrine de componentes
├── package.json                 # Manifesto do pacote npm
├── README.md                    # Documentação principal
├── tokens/
│   ├── tokens.json              # Tokens no formato padrão W3C (Cores, Tipografia, Sombras, Movimento)
│   ├── colors.json              # Dicionário de cores detalhado com HEX, RGB, HSL e WCAG
│   ├── tokens.css               # Propriedades customizadas CSS (:root e [data-theme="dark"])
│   ├── tokens.ts                # Definições tipadas em TypeScript para React/Vue/Next.js
│   └── tailwind.config.js       # Preset e extensão oficial para Tailwind CSS
├── css/
│   ├── koisei-ds.css            # Folha de estilos mestre (Reset + Tokens + Componentes + Animações)
│   ├── components.css           # Estilos modulares dos componentes
│   └── animations.css           # Efeitos de revelação (reveal), batida de selo e curvas de Bezier
├── js/
│   ├── koisei-motion.js         # Motor de animação, revelação, scroll parallax e tema dinâmico
│   └── koisei-petals.js         # Efeito procedural 3D de pétalas de cerejeira (Three.js)
├── components/
│   ├── hanko-seal.html          # Especificação e markup dos selos Hanko (sm, md, lg, xl)
│   ├── buttons.html             # Botões em formato pílula e links com linha de tinta
│   ├── header.html              # Cabeçalho adaptativo claro/escuro
│   ├── scroll-progress.html     # Indicador de fluxo vertical (Flow)
│   └── paper-grain.html         # Camada SVG de textura de papel washi com ruído fractal
└── docs/
    └── DESIGN_SYSTEM.md         # Manual aprofundado de design, semântica e acessibilidade
```

---

## 🎨 Cores Fundamentais

| Cor | Nome | Valor Hex | Papel Semântico |
| :--- | :--- | :--- | :--- |
| ![#9C2D24](https://via.placeholder.com/15/9C2D24/000000?text=+) | **Akane Lacquer** | `#9C2D24` | Vermelho laca japonês: Selos Hanko, barra de progresso e destaque |
| ![#C78389](https://via.placeholder.com/15/C78389/000000?text=+) | **Sakura Rose** | `#C78389` | Rosa flor de cerejeira: Sobretítulos (*eyebrows*) e partículas |
| ![#EFEADE](https://via.placeholder.com/15/EFEADE/000000?text=+) | **Washi Cream** | `#EFEADE` | Papel artesanal: Superfície e plano de fundo padrão |
| ![#F4EEE3](https://via.placeholder.com/15/F4EEE3/000000?text=+) | **Alabaster** | `#F4EEE3` | Pergaminho alabastro: Cartões, texto sobre fundos escuros e glifos |
| ![#211B15](https://via.placeholder.com/15/211B15/000000?text=+) | **Sumi Night** | `#211B15` | Noite de carvão Sumi: Fundo do modo escuro e rodapé |
| ![#201D17](https://via.placeholder.com/15/201D17/000000?text=+) | **Sumi Ink** | `#201D17` | Tinta preta pura: Tipografia primária do modo claro |
| ![#3D382F](https://via.placeholder.com/15/3D382F/000000?text=+) | **Earthen Charcoal** | `#3D382F` | Subtítulos em destaque e frases de impacto em itálico |
| ![#5D574B](https://via.placeholder.com/15/5D574B/000000?text=+) | **Warm Ash** | `#5D574B` | Links do menu, divisores verticais e legendas de apoio |

---

## 🖋️ Tipografia

- **Títulos & Marca:** `Playfair Display` (Pesos 400, 500, 600; Itálico 400, 500)
- **Corpo & Poética:** `Cormorant Garamond` (Pesos 300, 400, 500)
- **Ideogramas Kanji & Selos:** `Shippori Mincho` (Pesos 400, 500, 600)

---

## 🚀 Como Executar o Styleguide Localmente

Para visualizar a vitrine interativa dos componentes com o efeito de pétalas WebGL:

1. Abra o arquivo `index.html` em qualquer navegador moderno, ou:
2. Inicie um servidor local simples via terminal:
   ```bash
   npx serve .
   ```
   ou com Python:
   ```bash
   python -m http.server 8000
   ```
3. Acesse `http://localhost:8000` ou abra diretamente [index.html](index.html).

---

## 📦 Como Usar em Outros Projetos

### 1. Via CSS Direto
```html
<link rel="stylesheet" href="path/to/css/koisei-ds.css">
<script src="path/to/js/koisei-motion.js" defer></script>
```

### 2. Com Tailwind CSS
Importe o preset no seu `tailwind.config.js`:
```javascript
module.exports = {
  presets: [require('./tokens/tailwind.config.js')],
  // ...
};
```

### 3. Com TypeScript / React
```typescript
import { colors, typography, motion } from './tokens/tokens';

export const Header = () => (
  <h1 style={{ color: colors.brand.akane, fontFamily: typography.fontFamily.display }}>
    Koisei
  </h1>
);
```

---

## 📄 Licença
Distribuído sob a licença MIT. Criado a partir do estudo e extração da experiência visual do Koisei.
