module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors:{
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'vary-dark-desaturated': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
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
      spacing:{
      },
      backgroundImage: theme => ({
        'bottom-pattern': "url('/images/bg-pattern-bottom.svg')",
        'card-pattern': "url('/images/bg-pattern-card.svg')",
        'top-pattern': "url('/images/bg-pattern-top.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
