import { resolve } from 'path'
import { defineConfig } from 'vite'

// multi-page setup for vite:

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                works: resolve(__dirname, 'works/works.html'),
                404: resolve(__dirname, '404/404.html')
            },
        },
    },
    // base: ''
})