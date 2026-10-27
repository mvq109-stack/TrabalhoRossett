/**
 * Koisei Design System - TypeScript Tokens Definition
 */

export const colors = {
  brand: {
    akane: '#9C2D24', // Vermillion / Lacquer Red
    sakura: '#C78389', // Blossom Rose
  },
  surface: {
    washi: '#EFEADE', // Base Light Washi Cream
    alabaster: '#F4EEE3', // Card Surface / Light Highlight
    sumiNight: '#211B15', // Dark Section Background
    sumiInk: '#201D17', // Text Primary Light / Ink
  },
  text: {
    primaryLight: '#201D17',
    primaryDark: '#F4EEE3',
    secondaryLight: '#3D382F',
    secondaryDark: 'rgba(244, 238, 227, 0.85)',
    mutedLight: '#5D574B',
    mutedDark: 'rgba(244, 238, 227, 0.60)',
    faintLight: 'rgba(93, 87, 75, 0.70)',
    faintDark: 'rgba(244, 238, 227, 0.50)',
  },
  border: {
    lightSubtle: 'rgba(93, 87, 75, 0.25)',
    lightMedium: 'rgba(32, 29, 23, 0.35)',
    darkSubtle: 'rgba(244, 238, 227, 0.12)',
    darkMedium: 'rgba(244, 238, 227, 0.40)',
    accent: '#9C2D24',
  },
  particles: {
    sakuraCore: 'rgba(230, 170, 178, 0.95)',
    sakuraBody: 'rgba(199, 131, 137, 0.55)',
    sakuraEdge: 'rgba(199, 131, 137, 0.00)',
  }
} as const;

export const typography = {
  fontFamily: {
    display: "'Playfair Display', Georgia, serif",
    body: "'Cormorant Garamond', Garamond, Georgia, serif",
    kanji: "'Shippori Mincho', 'Hiragino Mincho ProN', 'Yu Mincho', serif",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  letterSpacing: {
    tighter: '-0.025em',
    tight: '-0.015em',
    normal: '0em',
    brand: '0.22em',
    pill: '0.24em',
    nav: '0.28em',
    wide: '0.30em',
    eyebrow: '0.40em',
    calligraphy: '0.50em',
  },
} as const;

export const motion = {
  easing: {
    smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
    bounceSeal: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  duration: {
    fast: 300,
    medium: 500,
    seal: 600,
    theme: 700,
    reveal: 900,
  },
} as const;

export const shadows = {
  sealSm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sealMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  sealLg: '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)',
  glow: '0 1px 40px rgba(244, 238, 227, 0.60)',
} as const;

export const radii = {
  seal: '3px',
  full: '9999px',
} as const;

export default {
  colors,
  typography,
  motion,
  shadows,
  radii,
};
