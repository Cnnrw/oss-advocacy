import { ThemeProvider } from 'theme-ui'
import Theme             from '@styles/theme'
import ReactGA           from 'react-ga'

const Wrapper = ({ children }) => {

  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(process.env.PUBLIC_GA_ID)
    ReactGA.set({ anonymizeIp: true })

    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>
  )
}
