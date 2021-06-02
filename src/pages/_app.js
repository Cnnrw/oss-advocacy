import Wrapper        from '@layouts/Wrapper'
import { DefaultSeo } from 'next-seo'
import SEO            from '@config/next-seo.config'

const Noop = ({ children }) => children

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout || Noop

  return (
    <Wrapper>
      <Layout>
        <DefaultSeo {... SEO} />
        <Component {... pageProps} />
      </Layout>
    </Wrapper>
  )
}

export default App
