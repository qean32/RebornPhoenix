import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    define: {
      'process.env.SERVER_HOST': JSON.stringify(env.SERVER_HOST),
      'process.env.CLIENT_HOST': JSON.stringify(env.CLIENT_HOST),
      'process.env.DISCORD': JSON.stringify(env.DISCORD),
      'process.env.SERVER_HOST_STORAGE': JSON.stringify(env.SERVER_HOST_STORAGE),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@component': path.resolve(__dirname, 'src/component'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@service': path.resolve(__dirname, 'src/service'),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  }
})