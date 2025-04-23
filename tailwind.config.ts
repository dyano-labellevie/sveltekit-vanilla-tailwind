import { color } from './src/styles/vanilla-extract.config.ts';

module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ...color,
      },
    },
  },
  plugins: [],
};
