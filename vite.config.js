const { resolve } = require('path');

module.exports = {
   base: '/zero-web/',
   root: 'src',
   build: {
      outDir: '../dist',
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            faqAccordionCard: resolve(__dirname, 'src/faq-accordion-card/index.html'),
            socialProofSection: resolve(__dirname, 'src/social-proof-section/index.html'),
            articlePreviewComponent: resolve(__dirname, 'src/article-preview-component/index.html'),
            baseApparelComingSoon: resolve(__dirname, 'src/base-apparel-coming-soon/index.html'),
         }
      }
   },
  
}