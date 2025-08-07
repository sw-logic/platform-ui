import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ['legacy-js-api', 'color-functions', 'global-builtin', 'import'],
				quietDeps: true
			}
		}
	}
}));
