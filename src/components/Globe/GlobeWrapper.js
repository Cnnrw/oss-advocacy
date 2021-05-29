import GlobeTmpl from 'react-globe.gl'

const GlobeWrapper = ({ forwardRef, ...otherProps }) => (
  <GlobeTmpl
    {...otherProps}
    height={500}
    ref={forwardRef} />
);

export default GlobeWrapper;