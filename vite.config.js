import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  dotenv.config({path: '.okta.env'})

  const env = loadEnv(mode, process.cwd(), '')

  if (!env.ISSUER || !env.CLIENT_ID) {
    throw new Error(`Set ISSUER and CLIENT_ID in .okta.env`)
  }

  return { 
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      'ISSUER': JSON.stringify(env.ISSUER),
      'CLIENT_ID': JSON.stringify(env.CLIENT_ID)
    }
  }
})
