import { useRouter }  from 'next/router'
import { DefaultSeo } from 'next-seo'
import { useEffect }  from 'react'

import SEO        from '@config/next-seo.config'
import Wrapper    from '@layouts/Wrapper'
import * as gtag  from '@utils/ga'
import PageLayout from '@layouts/BaseLayout'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.logPageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const Layout = Component.Layout || PageLayout

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
