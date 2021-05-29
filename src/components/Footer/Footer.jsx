import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from 'rebass/styled-components'

import GithubIcon from '@components/icons/Github'

const StyledFlex = styled(Flex)`
  padding: 3rem 4rem;

  ${(props) => props.theme.mediaQueries.mobile} {
    text-align: center;

    & .icon-nav {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  ${(props) => props.theme.mediaQueries.tablet} {
    text-align: left;
    & .icon-nav {
      justify-content: flex-end;
    }
  }
`

const StyledLink = styled.a`
  border-bottom: 0;
  margin-right: 1em;
  opacity: 0.5;
  transition: opacity ${(props) => props.theme.animation.default};

  &:hover {
    opacity: 1;
  }

  & svg {
    max-width: 30px;
    max-height: 30px;
  }
`

export const Footer = () => {
  const currentDate = new Date()
  return (
    <Box as="footer" bg="white">
      <StyledFlex justifyContent="space-between" flexWrap="wrap">
        <Box width={[1, 1, 1, 1/3]} mb={3}>
          <Text variant="label" color="black">
            Copyright &copy; 2021-{currentDate.getFullYear()}, Connor Wilding
          </Text>
        </Box>
        <Flex className='icon-nav' width={[1, 1, 1, 2/3]}>
          <StyledLink href="https://github.com/Cnnrw"
                      title="See my open source code contributions on Github">
            <GithubIcon alt="Github logo" />

          </StyledLink>
        </Flex>
      </StyledFlex>
    </Box>
  )
}

export default Footer
