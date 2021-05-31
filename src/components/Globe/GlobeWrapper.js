import GlobeTmpl from 'react-globe.gl'

const GlobeWrapper = ({ forwardRef, ...otherProps }) => (
  <GlobeTmpl
    {...otherProps}
    ref={forwardRef} />
);

export default GlobeWrapper;
