import { MDXProvider }                             from '@mdx-js/react'
import dynamic                                     from 'next/dynamic'
import Head                                        from 'next/head'
import React                                       from 'react'
import { Box, Flex, Heading, Text, ThemeProvider } from 'theme-ui'

import Theme                                       from '@styles/default'
import List                                        from '@components/List/List'
import ListItem from '@components/List/ListItem'

const UIComponents = {
  h1: (props) => <Heading variant='header' {...props} />,
  h2: (props) => <Heading variant='subheader' {...props} />,
  h3: (props) => <Heading variant='h3' {... props} />,
  h4: (props) => <Heading variant='h4' {... props} />,
  p: (props) => <Text as='p' variant='paragraph' {... props} />,
  hr: (props) => <Box as='hr' variant='hr' {... props} />,
  ul: List,
  li: ListItem,
  pre: (props) => <div {... props} />,
  Flex: Flex,
  Box: Box,
  Heading: Heading,
  Label: (props) => <Text variant='figureLabel' {...props} />,

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
