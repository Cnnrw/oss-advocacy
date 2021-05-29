import Footer     from '@components/Footer/Footer'
import SiteHeader from '@components/SiteHeader'
import styled     from 'styled-components'

const MainContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`

const Container = styled.main`
  background: #161616;
  color: #f4f4f4;
  width: 100%;
  margin-left: 0;
  transition: .11s ease;
  position: relative;
  min-height: calc(100vh - 48px);
  margin-top: 3rem;
`

const DefaultLayout = ({ children }) =>
  <MainContent>
    <SiteHeader />
    <Container>
      {children}
    </Container>
    {/*<Footer />*/}
  </MainContent>

export default DefaultLayout
