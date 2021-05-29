import Link       from 'next/link'
import styled     from 'styled-components'

const Header = styled.header`
  position: fixed;
  z-index: 8000;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid #393939;
  background-color: #161616;
`

const StyledA = styled.a`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375;
  letter-spacing: 0;
  transition: opacity .11s cubic-bezier(.2,0,.38,.9);
  color: #fff;
  text-decoration: none;
  left: 3rem;
  white-space: nowrap;
  padding: 0 1rem;
  border-top: 1px solid transparent;
  display: flex;
  align-items: center;
  z-index: 3;
`

const StyledSpan = styled.span`
  font-weight: 600;
`

const SiteHeader = () =>
  <Header aria-label='Digital Divide'>
    <Link href='/' passHref>
      <StyledA>
        <StyledSpan>Equitable Software</StyledSpan>
      </StyledA>
    </Link>
    {/*<HeaderGlobal />*/}
  </Header>

export default SiteHeader
