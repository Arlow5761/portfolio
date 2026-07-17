import tailwindcss from '@tailwindcss/vite';
import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import vercelAdapter from '@sveltejs/adapter-vercel';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import cloudflareAdapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const adapter = () => {
  switch (process.env.BUILD_TARGET) {
    case 'static':
      return staticAdapter({
        fallback: '404.html',
      });
    case 'vercel':
      return vercelAdapter();
    case 'netlify':
      return netlifyAdapter();
    case 'cloudflare':
      return cloudflareAdapter();
    default:
      return autoAdapter();
  }
};

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter()
		})
	]
});
