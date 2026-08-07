import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'oklch(15% .014 265)',
        bg2: 'oklch(12% .016 265)',
        fg: 'oklch(96% .004 260)',
        'fg-muted': 'oklch(74% .014 260)',
        'fg-soft': 'oklch(56% .016 260)',
        border: 'oklch(32% .018 265)',
        'border-soft': 'oklch(26% .016 265)',
        surface: 'oklch(19% .017 265)',
        surface2: 'oklch(23% .019 265)',
        accent: 'oklch(60% .18 292)',
        'accent-dark': 'oklch(70% .16 292)',
        'accent-soft': 'oklch(27% .07 292)',
        accent2: 'oklch(54% .2 350)',
        'accent2-soft': 'oklch(28% .08 350)',
        green: 'oklch(68% .16 150)',
        'green-soft': 'oklch(28% .07 150)'
      },
      borderRadius: { lg: '28px', md: '18px', sm: '12px' },
      boxShadow: {
        sm: '0 2px 14px -6px rgba(0,0,0,.5)',
        md: '0 24px 60px -20px rgba(0,0,0,.6)',
        lg: '0 40px 100px -24px rgba(0,0,0,.7)',
        glow: '0 0 60px -12px oklch(60% .18 292 / .45)'
      },
      maxWidth: { wrap: '1240px' },
      fontFamily: { sans: ['var(--font-inter)', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
};
export default config;
