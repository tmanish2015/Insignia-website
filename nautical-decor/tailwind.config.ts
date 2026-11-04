import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#101b22', deep: '#15252d', brass: '#b88b4a', sand: '#e8dfcf', muted: '#aeb9b8' }, fontFamily: { sans: ['Arial', 'sans-serif'] } } }, plugins: [] };
export default config;
