import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            include: path.resolve(__dirname, './src/locales/**'),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: ['quill'],
    },

    server: {
    //      proxy: {
    //   '/api/v1': {
    //     target: 'http://31.97.53.56:8050',
    //     changeOrigin: true,
    //     secure: false
    //   }
    // },
    host: '0.0.0.0',
    port: 5173
  },
});
