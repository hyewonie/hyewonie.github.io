// @ts-check
import { defineConfig } from 'astro/config';

// For a <username>.github.io repo, base stays '/'. For a project repo, set BASE_PATH=/repo-name.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
