import Wrapper                 from '@layouts/Wrapper'
import { initGA, logPageView } from '@utils/ga'
import { DefaultSeo }          from 'next-seo'
import SEO             from '@config/next-seo.config'
import { useRouter }   from 'next/router'
import { useEffect }   from 'react'

const handleRouteChange = () => {
  logPageView();
}

const Noop = ({ children }) => children

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    initGA()
    if (!router.asPath.includes('?')) {
      logPageView()
    }
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
