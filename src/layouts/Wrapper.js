import { MDXProvider }                             from '@mdx-js/react'
import dynamic                                     from 'next/dynamic'
import Head                                        from 'next/head'
import React                                       from 'react'
import { Box, Flex, Heading, Text, ThemeProvider } from 'theme-ui'

import CustomLink from '@components/Link'
import Theme      from '@styles/default'
import List       from '@components/List/List'
import ListItem   from '@components/List/ListItem'

const UIComponents = {
  h1: props => <Heading as='h1' variant='heading' {...props} />,
  h2: props => <Heading as='h2' variant='subheading' {...props} />,
  h3: props => <Heading as='h3' variant='h3' {... props} />,
  h4: props => <Heading as='h4' variant='h4' {... props} />,
  p: props => <Text as='p' variant='paragraph' {... props} />,
  hr: props => <Box as='hr' variant='hr' {... props} />,
  ul: props => <List {...props} />,
  li: props => <ListItem {...props} />,
  pre: props => <div {... props} />,
  Flex: Flex,
  Box: Box,
  Title: props => <Heading as='h1' variant='heading'
                           mt={6} mb={3}{...props} />,
  Link: props => <CustomLink {...props} />,
  Label: props => <Text variant='figureLabel' {...props} />,

  Globe: dynamic(() => import('@components/Globe/Globe')),
  Head
}

const Wrapper = ({ children }) =>
  <MDXProvider components={UIComponents}>
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>
  </MDXProvider>

export default Wrapper
