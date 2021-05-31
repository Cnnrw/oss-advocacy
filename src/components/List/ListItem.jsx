import React    from 'react'
import styled   from '@emotion/styled'
import { Text } from 'theme-ui'

const ListItem = ({ children, className }) => (
  <li className={className}>
    <Text variant='list'>{children}</Text>
  </li>
)

const StyledListItem = styled(ListItem)`
  list-style: square;
  margin-bottom: ${(props) => props.theme.space[4]}px;

  & ul {
    margin-top: ${(props) => props.theme.space[4]}px;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  & p:last-child {
    margin-bottom: 0;
  }
`

export default StyledListItem
