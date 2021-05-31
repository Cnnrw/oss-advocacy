import dynamic                                     from 'next/dynamic'
import Link                                        from 'next/link'
import React                                       from 'react'
import { Box, Flex, Heading, Text, ThemeProvider } from 'theme-ui'
import theme                                       from '@styles/default'

import List     from '@components/List/List'
import ListItem from '@components/List/ListItem'

export const UIComponents = {
  h1: (props) => <Heading variant='header' {...props} />,
  h2: (props) => <Heading variant='subheader' {...props} />,
  h3: (props) => <Heading variant='h3' {... props} />,
  h4: (props) => <Heading variant='h4' {... props} />,
  p: (props) => <Text as='p' variant='paragraph' {... props} />,
  hr: (props) => <Box as='hr' variant='hr' {... props} />,
  ul: List,
  li: ListItem,
  pre: (props) => <div {... props} />,
  flex: Flex,
  box: Box,
  a: Link,
  heading: Heading,

  Globe: dynamic(() => import('@components/Globe/Globe')),
}

export const Theme = ({ children }) =>
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
