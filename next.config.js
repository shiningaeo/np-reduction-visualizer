/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',  // Set output to export for static site generation
  
  // Base path configuration for GitHub Pages
  basePath: isProd ? '/np-reduction-visualizer' : '', // Replace with your repo name
  assetPrefix: isProd ? '/np-reduction-visualizer/' : '', // Also replace with your repo nam

  images: {
    unoptimized: true, // Disable image optimization as it may not work with static export
  },

  // Optional: Uncomment the following lines if needed
  // trailingSlash: true,  // Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // skipTrailingSlashRedirect: true, // Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // distDir: 'dist', // Change the output directory `out` -> `dist`
};

module.exports = nextConfig;
