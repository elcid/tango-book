// @ts-check
// Telekom hosting config — overrides site/base for https://jorge-rodrigo.de/tangobuch
// Usage: pnpm astro build --config astro.config.telekom.mjs

import baseConfig from './astro.config.mjs';

export default {
  ...baseConfig,
  site: 'https://jorge-rodrigo.de',
  base: '/tangobuch',
};
