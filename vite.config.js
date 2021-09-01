import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import md from 'vite-plugin-md'

export default {
  base: '/ViteSSRRelativeLinks/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    md(),
    ssr()
  ]
}
