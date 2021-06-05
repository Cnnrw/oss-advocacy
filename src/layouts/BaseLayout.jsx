import React        from 'react'
import SEO          from '@components/SEO'
import { Box }      from 'theme-ui'
import MobileHeader from '@components/Header/MobileHeader'
import Footer       from '@components/Footer/Footer'

const BaseLayout = ({ title, description, twitter, openGraph, children }) => (
  <>
     <SEO title={title}
          description={description}
          twitter={twitter}
          openGraph={openGraph} />

    <MobileHeader />

    <Box bg='white'
         as='main'
         px={[3, null, 4, 5, 6, 7]}
         pt='4.8rem'
         maxWidth='1920px'
         margin='auto'
         className='App'>
      {children}
    </Box>

    <Footer />
  </>
)

export default BaseLayout
