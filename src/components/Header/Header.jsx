import ThemeToggle                  from '@components/ThemeToggle'
import React                        from 'react'
import styled                       from '@emotion/styled'
import { Box, Flex, NavLink} from 'theme-ui'
import Link                         from 'next/link'

const HeaderNav = styled.nav`
  display: inline-block;
  margin-right: 1em;
  align-items: center;

  & ul {
    margin-top: 1rem;
  }

  & li {
    list-style-type: none;
    display: inline-block;
    margin-right: 2em;
    cursor: pointer;

    & a {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      border: 0;
      position: relative;
      display: block;

      & span {
        display: none;
      }

      &:after {
        content: '';
        width: 100%;
        padding: 1.25em;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background: ${props => props.theme.colors.muted};
        border: 1px solid ${props => props.theme.colors.black};
        transform-origin: 0 50%;
        transform: translate(-1.25em, -0.75em) scaleX(0);
        z-index: -1;
        transition: transform 300ms ease-out;
      }

      &:hover:after {
        transform: translate(-1.25em, -0.75em) scaleX(1);
      }
    }
  }

  ${(props) =>
    props.mobile &&
    `
    transform: translateX(${props.visible ? '0' : '-120%'});
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 3rem;
    border-top: 1px solid ${props.theme.colors.black};
    left: 0;
    z-index: 420;
    background: ${props.theme.colors.white};

    transition: transform 300ms ease-in;

    & ul {
      width: 100%;
      margin: 0;
      padding: .5rem;
    }

    & li {
      width: 100%;
      display: block;
      padding: .5rem;
      border-bottom: 1px solid ${props.theme.colors.black};

      &.toggle {
        display: flex;
        justify-content: flex-end;

        & span {
          padding: 4em 1em;
          text-align: right;
        }
      }

      & a {
        padding: 4em 1em;
        transition:color 300ms ease-out;

        & span {
          margin-left: 1em;
          display: inline-block;
        }

        &:hover, &:focus {
          color: ${props.theme.colors.white};
        }

        &:after {
          content: '';
          width: 100%;
          padding: 4.5em 1em;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          background: ${props.theme.colors.primary};
          border: 0;
          transform-origin: 0 50%;
          transform: translate(-1.25em, 0) scaleX(0);
          z-index: -1;
          transition: transform 300ms ease-out;
        }

        &:hover:after, &:focus:after  {
          transform: translate(-1.25em, 0) scaleX(1);
        }
      }
    }
  `}
`

const HeaderContainer = ({ children }) =>
  <Flex
    as='header'
    sx={{
      width: '100%',
      backgroundColor: 'white',
      textAlign: 'right',
      borderBottom: (theme) => `1px solid ${theme.colors.black}`,
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 710,

      justifyContent: 'flex-end',
    }}>
    {children}
  </Flex>

const MobileButton = ({ toggleVisibility, visible, children }) =>
  <Box
    id="MobileButtonToggle"
    type='button'
    onClick={toggleVisibility}
    aria-expanded={visible}
    aria-pressed={visible}
    aria-label='Navigation Button'
    sx={{
      marginRight: 'auto',

    '& svg': {
        cursor: 'pointer',
        webkitTapHighlightColor: 'transparent',
        transition: theme => `transform ${theme.animation.default}`,
        mozUserSelect: 'none',
        webkitUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      },

      '& .line': {
        fill: 'none',
        transition: `stroke-dasharray ${theme => theme.animation.default},
                       strokeDashoffset ${theme => theme.animation.default}`,

        stroke: `black`,
        strokeWidth: `5.5`,
        strokeLinecap: `round`
      },

      '& svg .top': {
        strokeDasharray: '40 130'
      },
      '& svg .middle': {
        strokeDasharray: '40 140'
      },
      '& svg .bottom': {
        strokeDasharray: '40 205'
      },
      '& svg.active .top': {
        strokeDasharray: '75 130',
        strokeDashoffset: '-63px'
      },
      '& svg.active .middle': {
        strokeDashoffset: '-102px'
      },
      '& svg.active .bottom': {
        strokeDasharray: '110 205',
        strokeDashoffset: '-86px'
      }

    }}>
    {children}
  </Box>

const HeaderTitle = ({ href, ariaLabel, visible, toggle, children }) =>
  <Link href={href}
        aria-labelledby='Navigation Bar'
        passHref>
    <NavLink
      onClick={visible && toggle}
      aria-labelledby={ariaLabel}
      sx={{
        fontSize: [2, 3, 5],
        border: 0,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        position: 'relative',

        '&:hover': {
          transition: theme => `fill ${theme.animation.default}`
        },

        '&:hover path, &:focus path': {
          fill: theme => `fill ${theme.colors.primary}`
        },

        '&:after': {
          content: '""',
          width: '100%',
          height: '100%',
          p: '.5em',
          position: 'absolute',
          top: 0,
          left: '1em',
          background: theme => `${theme.colors.muted}`,
          border: theme => `1px solid ${theme.colors.black}`,
          transformOrigin: '0 50%',
          transform: 'translate(-1.25em, -1.05em) scaleX(0)',
          zIndex: '-1',
          transition: 'transform 300ms ease-out'
        },

        '&:hover:after': {
          transform: 'translate(-1.25em, -1.05em) scaleX(1)'
        },
      }}>
      {children}
    </NavLink>
  </Link>

const HeaderNavLink = ({ as, href, tabIndex, onClick, children }) =>
  <li role='menuitem'
      tabIndex={tabIndex}
      onClick={onClick}
      style={{
        outline: 'none'
      }}>
  <Link as={as}
        href={href}
        passHref>
    <NavLink variant='headerLink'
      sx={{
        textDecoration: 'none',
        border: '0',
        position: 'relative',
        display: 'block',
        outline: 'none',

       '& span': {
          display: 'none'
        },

        '&:hover': {
          transition: theme => `fill ${theme.animation.default}`
        },

        '&:hover path, &:focus path': {
          fill: theme => `fill ${theme.colors.primary}`
        },

        '&:after': {
          content: '""',
          outline: 'none',
          width: '100%',
          padding: '1.25em',
          display: 'block',
          position: 'absolute',
          top: '0',
          left: '0',
          background: theme => `${theme.colors.muted}`,
          border: theme => `1px solid ${theme.colors.black}`,
          transformOrigin: '0 50%',
          transform: 'translate(-1.25em, -0.75em) scaleX(0)',
          zIndex: '-1',
          transition: 'transform 300ms ease-out'
        },

        '&:hover:after': {
          transform: 'translate(-1.25em, -0.75em) scaleX(1)'
        }
      }}
    >
      {children}
    </NavLink>
  </Link>
</li>

const Header = React.memo(
  ({ mobile, visible, toggleVisibility }) => {

    return (
      <HeaderContainer justifyContent='flex-end'>
        <HeaderNav mobile={mobile}
                   visible={visible}
                   role='navigation'
                   aria-labelledby='MobileButtonToggle'>
          <ul role='menubar'
              aria-orientation={mobile ? 'vertical' : 'horizontal'}
              aria-hidden={mobile && visible}>

            {mobile &&
              <HeaderNavLink href='/'
                             tabIndex={(mobile && !visible) ? 1 : -1}
                             onClick={toggleVisibility}>
                Home
              </HeaderNavLink>
            }

            <HeaderNavLink href='/advocacy'
                           tabIndex={(mobile && !visible) ? 1 : -1}
                           onClick={toggleVisibility}>
              Advocacy
            </HeaderNavLink>

            <HeaderNavLink href='/audience'
                           tabIndex={(mobile && !visible) ? 2 : -1}
                           onClick={toggleVisibility}>
              Audience
            </HeaderNavLink>

            <HeaderNavLink href='/sources'
                           tabIndex={(mobile && !visible) ? 3 : -1}
                           onClick={toggleVisibility}>
              Sources
            </HeaderNavLink>
          </ul>
        </HeaderNav>

        {mobile && (
          <MobileButton
            toggleVisibility={toggleVisibility}
            visible={visible}>

            <svg className={visible ? 'active' : ''}
                 viewBox='0 0 100 100'
                 width='50'>
              <path className='line top'
                    d='m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568' />
              <path className='line middle'
                    d='m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7' />
              <path className='line bottom'
                    d='m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0' />
            </svg>

          </MobileButton>
        )}

        <Flex justifyContent="center"
              alignContent="center"
              flexDirection="column"
              className="toggle"
              sx={{
                mr: [0, 4]
              }}>
          <ThemeToggle />
        </Flex>

        <HeaderTitle href='/'
                     ariaLabel='OSS Advocacy'
                     visible={visible}
                     toggle={toggleVisibility}>
          OSS ADVOCACY
        </HeaderTitle>

      </HeaderContainer>
    )
  }
)

export default Header
