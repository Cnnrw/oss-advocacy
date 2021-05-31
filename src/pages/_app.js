import { DefaultSeo }    from 'next-seo'
import SEO               from '@config/next-seo.config'
import { ThemeProvider } from 'theme-ui'
import Theme             from '@styles/default'

const Noop = ({ children }) => children

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout || Noop

  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <DefaultSeo {... SEO} />
        <Component {... pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
