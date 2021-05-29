import { GlobalStyle } from '@styles/GlobalStyles'
import themes          from '@styles/theme'

import { useDarkMode } from '@hooks/useDarkMode'
import Layout          from '@layouts/DefaultLayout'
import Head            from 'next/head'

import { ThemeProvider } from 'styled-components'

const Noop = ({ children }) => children

const MyApp = ({ Component, pageProps }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? themes.light : themes.dark

  if (!componentMounted) return <div />

  const Layout = Component.Layout || Noop

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>oss-advocacy</title>
        </Head>
        <Component {... pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
