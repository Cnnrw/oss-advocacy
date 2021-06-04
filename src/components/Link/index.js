import { Link as A } from 'theme-ui'
import Link          from 'next/link'

const CustomLink = ({ as, href, ...otherProps }) =>
  <Link as={as}
        href={href}
        passHref>
    <A {...otherProps} />
  </Link>

export default CustomLink
