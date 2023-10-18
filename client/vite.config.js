import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // If you need to proxy API requests to a different server
    proxy: {
      '/api': {
        target: 'https://localhost:5000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    // Output directory for the production build
    outDir: 'dist',
    // Specify the public base path if your app is not hosted at the root of the server
    base: '/',
  },
  resolve: {
    // You can configure module resolution here if needed
    alias: {
      // Example alias
      '@myAlias': '/src/my-alias',
    },
  },
});
