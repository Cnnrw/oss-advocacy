// import '@/styles/globals.css'
import { GlobalStyle } from '@styles/GlobalStyles'

import { useDarkMode } from '@hooks/useDarkMode'
import Layout          from '@components/Layout'
import themes          from '@styles/theme'

import { ThemeProvider } from 'styled-components'

const Noop = ({ children }) => children

const MyApp = ({ Component, pageProps }) =>
{
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? themes.light : themes.dark

  if (!componentMounted) return <div />

  const Layout = Component.Layout || Noop

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Layout>
        <Component {... pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
