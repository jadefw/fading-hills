// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import tunnel from 'astro-tunnel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), tailwind(), icon(), tunnel(), react()],
    redirects: {
        '/pdf': 'https://www.papermark.com/view/cmfwrh68c0003ld04v5g2p54k'
    }
});