// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... other config (content, etc.)
  theme: {
    extend: {
      colors: {
        'nb-black':  '#0D0D0D',   
        'nb-cream':  '#F5F0EB',   
        'nb-gold':   '#C9A84C',   
        'nb-white':  '#FFFFFF',
        'nb-muted':  '#9A9A9A',   
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      }
    },
  },
  plugins: [],
};
export default config;