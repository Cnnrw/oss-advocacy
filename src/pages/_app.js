// import '@/styles/globals.css'
import { GlobalStyle } from '@styles/GlobalStyles'

import { useDarkMode } from '@hooks/useDarkMode'
import DefaultLayout   from '@layouts/DefaultLayout'
import Head        from 'next/head'

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
      <DefaultLayout>
        <Head>
          <title>oss-advocacy</title>
        </Head>
        <Component {... pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  )
}

export default MyApp
