import GlobeTmpl from 'react-globe.gl'

const GlobeWrapper = ({ forwardRef, height, width, ...otherProps }) => (
  <GlobeTmpl
    height={height}
    width={width}
    {...otherProps}
    ref={forwardRef} />
);

export default GlobeWrapper;
