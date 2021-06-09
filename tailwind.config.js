module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      'spartan': ['Spartan', 'sans-serif'],
      'manrope': ['Manrope', 'sans-serif'],
      'josefin-sans': ['Josefin Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'karla': ['Karla', 'sans-serif'],
    },
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors:{
        /* FAQ-accordion-card */
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)', //text color
        'soft-red': 'hsl(14, 88%, 65%)',                    // text color
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',     // text color
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',           // text color
        'soft-violet': 'hsl(273, 75%, 66%)',                // bg gradient
        'soft-blue': 'hsl(240, 73%, 65%)',                  // bg gradient
        'light-grayish-blue': 'hsl(240, 5%, 91%)',          // Dividers

        /* Social proof section */
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',

        /* article-preview-component */
        'very-dark-grayish-blue-2': 'hsl(217, 19%, 35%)',
        'disaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',

        /* base-apparel-coming-soon */
         // ### Primary
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
         // ### Neutral
         'dark-grayish-red': 'hsl(0, 6%, 24%)',

         /* Intro component with signup form */
         'dark-blue': 'hsl(249, 10%, 26%) ',
         'intro-blue': 'hsl(248, 32%, 49%)',
         'grayish-blue-2': 'hsl(246, 25%, 77%)',

        /** Singlle price grid component */
        'cyan': 'hsl(179, 62%, 43%)',
        'bright-yellow': 'hsl(71, 73%, 54%)',
        'light-gray': 'hsl(204, 43%, 93%)',
        'grayish-blue-3': 'hsl(218, 22%, 67%)',

      },
      fontSize: {
        'xxs': '0.8125rem', //13px
        '2tiny': '0.9375rem', // 15px
      },
      maxWidth:{
        'mobile': '23.4375rem',
        'desktop': '90rem',
        '156': '39rem',
        '183': '45.75rem',
      },
      minWidth:{
        'mobile': '23.4375rem',
        'desktop': '90rem',
      },
      width: {
        '63.2': '15.8rem',
        '81.75': '20.4375rem',
      },
      height: {
        '62': '15.5rem',
      },
      margin: {
        '10%' : '10%',
        'share-modal': '-5.3vw',  //Article preview card
      },
      spacing:{
        '183': '45.75rem'
      },
      inset: {
        '76': '19rem',
      },
      letterSpacing: {
        'very-wide': '0.3em',
        'very-wider': '1.3em'
      },
      backgroundPosition: {
        '-left-22vw': '-22vw',
        '-left-53vw': '-53vw',
        '-top-50vh': '-50vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
