/**
 * Vite configuration file for the React application.
 * Configures Tailwind CSS, React plugin, environment variables, path aliases, and development server settings.
 */
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

/**
 * Returns the Vite configuration object.
 *
 * @param {Object} context - The Vite context containing the mode.
 * @param {string} context.mode - The current build mode (e.g., 'development', 'production').
 * @returns {import('vite').UserConfig} The parsed Vite configuration object.
 */
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
