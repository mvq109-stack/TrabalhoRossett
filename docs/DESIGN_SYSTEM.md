# Sistema de Design Koisei (Design System)

> *"Where the river keeps the blossom's memory"*  
> **Estética:** Minimalismo Editorial Japonês, Filosofia Wabi-Sabi, Tinta e Água (水墨画 - Suibokuga).

---

## 1. Visão Geral & Filosofia Visual

O **Design System Koisei** foi extraído da experiência visual e interativa do ateliê de tinta e água Koisei. Ele combina a elegância da tipografia serifada editorial clássica ocidental com a tradição artística milenar japonesa:

- **Wabi-Sabi (侘寂):** Celebração da simplicidade, dos espaços vazios (espaço em branco intencional / *Ma* - 間) e da beleza efêmera.
- **Tinta & Água (Sumi & Mizu):** Contrastes orgânicos entre o preto profundo do carvão vegetal (*Sumi*) e a fluidez do papel artesanal claro (*Washi*).
- **Selo Hanko (判子 / 印鑑):** O carimbo vermelho laca (*Akane*) funciona como âncora de autenticidade, assinatura e foco visual.
- **Dualidade Claro / Escuro Adaptativa:** Transição fluida de 700ms entre o ateliê diurno de papel claro e a tranquilidade noturna do rio banhado por lanternas.

---

## 2. Paleta de Cores & Tokens Cromáticos

### Cores Principais

| Nome do Token | Cor Hex | RGB | Função Semântica |
| :--- | :--- | :--- | :--- |
| `--koisei-color-akane` | `#9C2D24` | `156, 45, 36` | **Vermelho Laca Japonês (Akane):** Cor de destaque primária, selos Hanko, linha de progresso e sublinhados ativos. |
| `--koisei-color-sakura` | `#C78389` | `199, 131, 137` | **Rosa Pétala de Cerejeira:** Acento secundário suave, sobretítulos (*eyebrows*) em fundos escuros e partículas. |
| `--koisei-surface-base` | `#EFEADE` | `239, 234, 222` | **Papel Washi Natural:** Fundo principal da página no modo claro. |
| `--koisei-surface-card` | `#F4EEE3` | `244, 238, 227` | **Pergaminho Alabastro:** Superfície de destaque claro, cor do kanji nos selos e texto principal no modo escuro. |
| `--koisei-surface-dark` | `#211B15` | `33, 27, 21` | **Noite Sumi:** Fundo de seções noturnas e rodapé. |
| `--koisei-text-primary` | `#201D17` | `32, 29, 23` | **Tinta Sumi Profunda:** Cor primária de títulos e textos no modo claro. |
| `--koisei-text-secondary` | `#3D382F` | `61, 56, 47` | **Carvão Terroso:** Subtítulos e parágrafos de introdução. |
| `--koisei-text-muted` | `#5D574B` | `93, 87, 75` | **Cinza Rocha Quente:** Links de navegação e notas de apoio. |

### Transparências e Linhas de Apoio

- **Borda Modo Claro:** `rgba(32, 29, 23, 0.35)`
- **Divisor Vertical:** `rgba(93, 87, 75, 0.40)`
- **Trilho do Indicador de Progresso:** `rgba(93, 87, 75, 0.25)`
- **Borda Modo Escuro (Sutil):** `rgba(244, 238, 227, 0.12)`
- **Borda Modo Escuro (Botão):** `rgba(244, 238, 227, 0.40)`
- **Texto Secundário no Escuro:** `rgba(244, 238, 227, 0.85)`

---

## 3. Tipografia

O sistema tipográfico utiliza uma trindade de famílias complementares:

```css
/* Títulos e Identidade Editorial */
font-family: 'Playfair Display', Georgia, serif;

/* Corpo de Texto e Prosa Humanista */
font-family: 'Cormorant Garamond', Garamond, Georgia, serif;

/* Ideogramas Kanji e Caligrafia Japonesa */
font-family: 'Shippori Mincho', 'Hiragino Mincho ProN', 'Yu Mincho', serif;
```

### Escala de Espaçamento Entre Letras (Letter-Spacing / Tracking)

O espaçamento aberto em caixa alta é uma das características marcantes da identidade visual:

- **Display Títulos:** `-0.025em` ou `-0.015em` (`tracking-tight`)
- **Logotipo Koisei:** `0.22em` (`tracking-[0.22em] uppercase`)
- **Botões Pílula:** `0.24em` a `0.30em`
- **Links de Navegação:** `0.28em`
- **Sobretítulos (*Eyebrows*):** `0.40em` (`tracking-[0.4em] uppercase`)
- **Caligrafia Vertical:** `0.50em` (`letter-spacing: 0.5em`)

### Escala de Tamanhos

- **Hero Display:** `clamp(4.5rem, 16vw, 13rem)` com sombra suave `text-shadow: 0 1px 40px rgba(244, 238, 227, 0.6)`
- **Heading 1:** `clamp(3rem, 8vw, 6rem)`
- **Heading 2:** `clamp(2.25rem, 5vw, 4.5rem)`
- **Heading 3:** `clamp(1.75rem, 3.5vw, 3rem)`
- **Lead / Prosa:** `1.25rem` a `1.5rem` em *italic* font-weight 300
- **Corpo:** `1rem` a `1.125rem`
- **Micro Rótulos:** `0.75rem` (`text-xs`)

---

## 4. Componentes Chave

### 4.1. Hanko Seal (印鑑 - Carimbo Vermelho)
- **Estrutura:** Caixa quadrada com cantos sutilmente arredondados (`rounded-[3px]`).
- **Fundo:** Vermelho laca `#9C2D24`.
- **Conteúdo:** Kanji centralizado em fonte *Shippori Mincho* na cor `#F4EEE3`.
- **Tamanhos:**
  - `sm`: 32x32px (Header / Marca - 鯉)
  - `md`: 40x40px (Poema - 流)
  - `lg`: 44x44px (Hero - 水)
  - `xl`: 56x56px (Night River - 夜)
- **Animação:** Efeito de batida de carimbo: inicia em `scale(0.6) rotate(-8deg)` com opacidade 0 e finaliza em `scale(1) rotate(0deg)` através da curva `cubic-bezier(0.34, 1.56, 0.64, 1)`.

### 4.2. Pill Buttons (Botões Pílula)
- **Forma:** Totalmente oval (`rounded-full`).
- **Variações:**
  - **Outline Claro:** Borda `rgba(32, 29, 23, 0.35)`, texto `#201D17`. Ao hover, translada `-2px` para cima.
  - **Outline Escuro:** Borda `rgba(244, 238, 227, 0.4)`, texto `#F4EEE3`. Ao hover, fundo com 8% de brilho e elevação `-3px`.
  - **Filled Akane:** Fundo preenchido `#9C2D24` com texto alabastro e sombra sutil.

### 4.3. Link com Tinta Expansível (Ink Underline)
- Ao passar o mouse, uma linha de 1px em `#9C2D24` expande suavemente da esquerda para a direita (`width: 0%` para `100%`) em 500ms.

### 4.4. Scroll Flow Indicator (Indicador de Fluxo Vertical)
- Fixo no centro inferior (`left: 50%`, `bottom: 1.5rem`).
- Trilho vertical ultrafino de 1px por 56px de altura.
- Barra interna preenchida com `#9C2D24` proporcional à rolagem da página.

### 4.5. Caligrafia Japonesa Vertical (Tategaki - 縦書き)
- `writing-mode: vertical-rl` com `letter-spacing: 0.5em`.
- Posicionada como âncora poética lateral flutuante.

### 4.6. Textura de Papel Washi (Paper Grain)
- Camada fixa com ruído procedural fractal em SVG (`feTurbulence` baseFrequency 0.9).
- `mix-blend-mode: multiply` com opacidade de 50% e `pointer-events: none`.

---

## 5. Movimento & Física

O sistema de animações segue a física de desaceleração suave:

- **Reveal Curva:** `cubic-bezier(0.22, 1, 0.36, 1)` (duração: 900ms).
- **Hanko Bounce Curva:** `cubic-bezier(0.34, 1.56, 0.64, 1)` (duração: 600ms).
- **Stagger:** Atraso em cascata de 90ms entre filhos de uma seção.
- **Transição de Tema:** 700ms para adaptação de cores de cabeçalho.
- **Partículas Sakura (Three.js):** Ponto de nuvem 3D com aceleração acoplada à velocidade da rolagem do mouse e oscilação senoidal suave.
- **Acessibilidade:** Suporte completo à diretiva `@media (prefers-reduced-motion: reduce)`.

---

## 6. Como Utilizar no seu Projeto

### Opção 1: Arquivo CSS Completo
Basta importar o arquivo mestre no cabeçalho da sua página:
```html
<link rel="stylesheet" href="./css/koisei-ds.css">
<script src="./js/koisei-motion.js" defer></script>
```

### Opção 2: Integração com Tailwind CSS
No seu arquivo `tailwind.config.js`:
```javascript
const koiseiPreset = require('./tokens/tailwind.config.js');

module.exports = {
  presets: [koiseiPreset],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
};
```

### Opção 3: Importação de Tokens em TypeScript / JavaScript
```typescript
import { colors, typography, motion } from './tokens/tokens';

const primaryColor = colors.brand.akane; // #9C2D24
```
