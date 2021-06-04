const { resolve } = require('path');

module.exports = {
   base: '/zero-web/',
   root: 'src',
   build: {
      outDir: '../dist',
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            faq: resolve(__dirname, 'src/faq-accordion-card/index.html'),
            socialFroofSection: resolve(__dirname, 'src/social-proof-section/index.html'),
         }
      }
   }
}