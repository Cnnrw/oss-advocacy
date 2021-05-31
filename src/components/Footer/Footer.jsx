import React                                from 'react'
import { Box, Container, Flex, Link, Text } from 'theme-ui'

import GithubIcon from '@components/icons/Github'

export const Footer = () => {
  const currentDate = new Date()
  return (
    <Container as='footer' bg='white'>
      <Flex sx={{
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '3rem 4rem 3rem 4rem',

        '@media screen and (min-width: 320px)': {
          textAlign: 'center',
        },
        '@media screen and (min-width: 768px)': {
          textAlign: 'left',
        }
      }}>

        <Box sx={{
          width: ['100%', '100%', '100%', '33%'],
          mb: 3
        }}>

          <Text variant="styles.label" sx={{
            color: 'black',
            display: 'inline-block'
          }}>
            Copyright &copy; {currentDate.getFullYear()}, <span>Connor Wilding</span>
          </Text>

        </Box>

        <Flex sx={{
          width: ['100%', '100%', '100%', '66%'],

          '@media screen and (min-width: 320px)': {
            flexWrap: 'wrap',
            justifyContent: 'center'
          },
          '@media screen and (min-width: 768px)': {
            justifyContent: 'flex-end'
          },
        }}>
          <Link variant='footerLink'
                href="https://github.com/Cnnrw"
                title="See my open source code contributions on Github">
            <GithubIcon alt="Github logo" />
          </Link>

        </Flex>
      </Flex>
    </Container>
  )
}

export default Footer
