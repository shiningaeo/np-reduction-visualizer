// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/np-reduction-visualizer' : '', // GitHub Pages requires base path
  assetPrefix: isProd ? '/np-reduction-visualizer/' : '',
  images: {
    unoptimized: true, // Disable image optimization as it may not work with static export
  },
};