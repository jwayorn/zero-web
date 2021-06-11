const { resolve } = require('path');

module.exports = {
   base: '/zero-web/',
   root: 'src',
   build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            faqAccordionCard: resolve(__dirname, 'src/faq-accordion-card/index.html'),
            socialProofSection: resolve(__dirname, 'src/social-proof-section/index.html'),
            articlePreviewComponent: resolve(__dirname, 'src/article-preview-component/index.html'),
            baseApparelComingSoon: resolve(__dirname, 'src/base-apparel-coming-soon/index.html'),
            introComponentWithSignupForm: resolve(__dirname, 'src/intro-component-with-signup-form/index.html'),
            singlePriceGridComponent: resolve(__dirname, 'src/single-price-grid-component/index.html'),
            pingComingSoonPage: resolve(__dirname, 'src/ping-coming-soon-page/index.html'),
            huddleLandingPageWithSingleIntroductorySection: resolve(__dirname, 'src/huddle-landing-page-with-single-introductory-section/index.html'),
            
         }
      }
   },
  
}