import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noche: '#0B0C10',
        marina: '#0A1128',
        pizarra: '#1C2541',
        acero: '#3A506B',
        electrico: '#4C8DFF',
        plata: '#C9D6E3'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      maxWidth: { contenido: '68ch' },
      keyframes: {
        deriva: { '0%,100%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(0,-14px,0)' } }
      },
      animation: { deriva: 'deriva 9s ease-in-out infinite' }
    }
  },
  plugins: []
};
export default config;
