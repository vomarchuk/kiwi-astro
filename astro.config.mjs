import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { defineConfig as defineViteConfig } from 'vite'

export default defineConfig({
  integrations: [react()],
  output: 'static',
  vite: defineViteConfig({
    resolve: {
      alias: {
        '@mui/utils/resolveProps': '@mui/utils/resolveProps/index.js',
        '@mui/utils/composeClasses': '@mui/utils/composeClasses/index.js',
      },
    },
  }),
})
