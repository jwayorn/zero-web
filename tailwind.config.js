module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      'spartan': ['Spartan', 'sans-serif'],
    },
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors:{
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)', //text color
        'soft-red': 'hsl(14, 88%, 65%)',                    // text color
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',     // text color
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',           // text color
        'soft-violet': 'hsl(273, 75%, 66%)',                // bg gradient
        'soft-blue': 'hsl(240, 73%, 65%)',                  // bg gradient
        'light-grayish-blue': 'hsl(240, 5%, 91%)',          // Dividers
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
      },
      fontSize: {
        '2tiny': '0.9375rem', // 15px
      },
      maxWidth:{
        'mobile': '23.4375rem',
        'desktop': '90rem',
      },
      minWidth:{
        'mobile': '23.4375rem',
        'desktop': '90rem',
      },
      margin: {
        '10%' : '10%',
      },
      spacing:{
      },
      inset: {
        '76': '19rem',
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
