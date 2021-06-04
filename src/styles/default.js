const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: '1.25',
  fontWeight: 'heading',
}

const base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Roboto, Helvetica Neue, Helvetica, Aria, sans-serif',
    heading: 'Archivo, Helvetica Neue, Helvetica, Aria, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.75,
    display: 1.5,
    heading: 1.25,
  },
  colors: {
    text: '',
    background: '',
    primary: '',
    secondary: '',
    muted: '',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  }
}

export const animation = {
  default: '400ms ease-in',
  fast: '300ms ease-in'
}

export const breakpoints = [
  // mobile
  '320px',
  // tablet
  '768px',
  // computer
  '992px',
  // desktop
  '1200px',
  // widescreen
  '1920px'
]

const size = {
  // mobile
  mobile: '320px',
  // tablet
  tablet: '768px',
  // computer
  computer: '992px',
  // desktop
  desktop: '1200px',
  // widescreen
  widescreen: '1920px'
}

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  computer: `screen and (min-width: ${size.computer})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  widescreen: `screen and (min-width: ${size.widescreen})`
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
  breakpoints: [320, 480, 769, 1025, 1201].map(w => `${w}px`),
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
    body: 400,
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
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
      fontSize: [5, 5, 6, 6],
      marginBottom: 3
    },
    subheading: {
      fontFamily: 'heading',
      lineHeight: '1.25',
      fontSize: [3, 3, 4, 4],
      marginBottom: 3
    },
    paragraph: {
      fontFamily: 'body',
      lineHeight: '1.75',
      fontSize: [1, 2],
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
      fontSize: [1, 2],
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
      lineHeight: '1.25',
      fontSize: ['10px'],
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
    h2: {
      variant: 'text.heading',
      fontSize: [2, 3, 4, 5],
    },
    h3: {
      variant: 'text.heading',
      fontSize: [2, 2, 3, 3]
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
      color: theme => `${theme.colors.black}`,
      borderBottom: theme => `${theme.colors.black}`,

      ':hover': {
        color: theme => `${theme.colors.primary}`,
        borderBottomColor: theme => `${theme.colors.primary}`
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
      my: 4
    },
  },
}

export default theme
