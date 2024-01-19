import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@view': path.resolve(__dirname, 'src', 'view'),
      '@components': path.resolve(__dirname, 'src', 'view', 'components'),
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@pages': path.resolve(__dirname, 'src', 'view', 'pages'),
    },
  },
});
