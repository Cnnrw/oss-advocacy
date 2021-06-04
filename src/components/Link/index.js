import { Link as A } from 'theme-ui'
import Link          from 'next/link'

const CustomLink = ({ as, href, ...otherProps }) =>
  <Link as={as}
        href={href}
        passRef>
    <A href={href} {...otherProps} />
  </Link>

export default CustomLink
