/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        koisei: {
          akane: '#9c2d24',
          sakura: '#c78389',
          washi: '#efeade',
          alabaster: '#f4eee3',
          sumi: '#211b15',
          ink: '#201d17',
          charcoal: '#3d382f',
          ash: '#5d574b',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
        kanji: ['"Shippori Mincho"', '"Hiragino Mincho ProN"', '"Yu Mincho"', 'serif'],
      },
      letterSpacing: {
        'brand': '0.22em',
        'pill': '0.24em',
        'nav': '0.28em',
        'wide-eyebrow': '0.30em',
        'eyebrow': '0.40em',
        'calligraphy': '0.50em',
      },
      borderRadius: {
        'seal': '3px',
      },
      boxShadow: {
        'seal-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'seal-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'seal-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)',
        'hero-glow': '0 1px 40px rgba(244, 238, 227, 0.60)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce-seal': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '700': '700ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
};
