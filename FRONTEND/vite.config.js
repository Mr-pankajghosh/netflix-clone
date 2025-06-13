import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // ✅ Ensure your backend is running here
        changeOrigin: true,              // ✅ Recommended for cross-origin handling
        secure: false                    // ✅ Useful when backend doesn't use HTTPS (localhost)
      }
    }
  }
});

