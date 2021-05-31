import React  from 'react'
import { Box } from 'theme-ui'

import ListItem from '@components/List/ListItem'

export const List = ({ children, items }) =>
  <Box as="ul" px={3} pb={3}>
    {items && items.map(item => <ListItem>{item}</ListItem>)}
    {children}
  </Box>

export default List

