import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42050,
    proxy: {
      '/api': {
        target: 'http://localhost:42051',
        changeOrigin: true,
      },
    },
  },
});
