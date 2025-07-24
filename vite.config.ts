import react from '@vitejs/plugin-react'
import path from 'path';
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT) || 5173,
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ["import", "global-builtin"],
        },
      },
    },
    resolve: {
      alias: {
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@router": path.resolve(__dirname, "src/router"),
        "@styles": path.resolve(__dirname, "src/styles")
      }
    }
  };
});
