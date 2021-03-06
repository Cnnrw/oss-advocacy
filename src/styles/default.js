export const animation = {
  default: '400ms ease-in',
  fast: '300ms ease-in'
}

export const fonts = {
  body: 'Roboto, Helvetica Neue, Helvetica, Aria, sans-serif',
  heading: 'Archivo, Helvetica Neue, Helvetica, Aria, sans-serif',
  monospace: 'Menlo, monospace'
}

export const colors = {
  text: '#111212',
  background: '#fff',
  primary: '#005CDD',
  secondary: '#6D59F0',
  muted: '#f6f6f9',
  gray: '#D3D7DA',
  highlight: 'hsla(205, 100%, 40%, 0.125)',
  white: '#FFF',
  black: '#111212',
  modes: {
    dark: {
      text: '#FFF',
      background: '#000',
      primary: '#005CDD',
      secondary: '#6D59F0',
      muted: '#060609',
      gray: '#D3D7DA',
      highlight: 'hsla(205, 100%, 40%, 0.125)',
      white: '#000',
      black: '#EEE'
    }
  }
}

export const gradients = {
  subtle: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  purple: `linear-gradient(180deg, ${colors.primary} 0%, #A000C4 100%)`,
  blue: `linear-gradient(180deg, #00D2FF 0%, ${colors.secondary} 100%)`
}

export const theme = {
  animation,
  breakpoints: [320, 480, 769, 1023, 1201, 1920].map(w => `${w}px`),
  mediaQueries: {
    mobile: `@media screen and (min-width: 320px)`,
    tablet: `@media screen and (min-width: 768px)`,
    computer: `@media screen and (min-width: 992px)`,
    desktop: `@media screen and (min-width: 1200px)`,
    widescreen: `@media screen and (min-width: 1920px)`
  },
  colors,
  gradients,
  fonts,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 100,
    body: 400,
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  /*      0  1  2   3   4   5    6    7    8  */
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    mobile: '320px',
    // tablet
    tablet: '768px',
    // computer
    computer: '992px',
    // desktop
    desktop: '1200px',
    // widescreen
    widescreen: '1920px',
  },
  radii: {
    default: 0,
    circle: 99999
  },
  shadows: {
    card: {
      light: '15px 15px 35px rgba(0, 127, 255, 0.5)',
      dark: `7px 7px 15px ${colors.primary}`
    }
  },

  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      fontSize: [6, null, 7, null, null, 8],
      marginBottom: 2
    },
    subheading: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      //fontSize: [2, 3, 4, 5],
      fontSize: [3, null, 4, 6, null, null, 7],
      marginBottom: 2
    },
    paragraph: {
      fontFamily: 'body',
      lineHeight: '1.75',
      fontSize: [1, null, 2, null, 3, null, 5],
      marginBottom: 4,
      '& code': {
        py: 1,
        px: 2,
        mx: 1,
        border: '1px solid',
        borderColor: 'black',
        backgroundColor: 'muted',
        color: 'primary'
      }
    },
    list: {
      fontFamily: fonts.body,
      lineHeight: '1.75',
      fontSize: [1, null, null, 3, null, null, 5],
      marginBottom: 3
    },
    display: {
      fontFamily: 'body',
      lineHeight: '1.5',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    figureLabel: {
      fontFamily: 'monospace',
      fontSize: ['9px', null, '10px', '11px', null, null, 2],
      fontWeight: 'light',
      color: 'black',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginTop: 1,
      marginBottom: 3,
      display: 'inline-block'
    },
  },

  links: {
    headerLink: {
      variant: 'text.heading',
      fontSize: [0],
      letterSpacing: '0.1em',
      textDecoration: 'none',
      textTransform: 'uppercase',
      margin: 'auto',

      ':focus': {
        outline: 'none'
      },

      ':hover, .active': {
        color: 'primary',
      },
    },
    nav: {
      fontSize: [1],
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-block',
      p: [2],

      ':hover, :focus, .active': {
        color: 'primary'
      }
    },
    footerLink: {
      borderBottom: 0,
      opacity: 0.5,
      transition: 'opacity ' + animation.default,

      '&:hover': {
        opacity: 1
      },

      '& svg': {
        maxWidth: '30px',
        maxHeight: '30px'
      }
    }
  },

  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      padding: '1em 4em'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'black',
      bg: 'transparent',
      border: '1px solid #000',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 1
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary'
    }
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'normal',
    },
    h1: {
      variant: 'text.heading'
    },
    h2: {
      variant: 'text.subheading',
    },
    h3: {
      variant: 'text.heading',
      fontSize: [1, 2, 3, 4],
      marginBottom: 1
    },
    h4: {
      variant: 'text.heading',
      fontSize: [1]
    },
    label: {
      variant: 'text.heading',
      fontSize: [0],
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    },
    p: {
      variant: 'text.paragraph'
    },
    break: {
      width: '100%',
      borderTop: 0,
      borderBottom: '1px solid',
      borderBottomColor: 'black',
      my: 4
    },
    a: {
      color: 'black',
      borderBottom: 'black',

      ':hover': {
        color: 'primary',
        borderBottomColor: 'primary'
      }
    },
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
      avatar: {
        width: 'avatar',
        height: 'avatar',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '3rem'
      }
    },
    hr: {
      width: '100%',
      borderTop: 0,
      borderBottom: `1px solid`,
      borderBottomColor: 'black',
      mb: [1, 2, null, 3]
    },
    spinner: {
      color: 'primary'
    }
  },
}

export default theme
