import GlobeImpl from 'react-globe.gl'

const GlobeWrapper = ({ forwardRef, ...otherProps }) => (
  <GlobeImpl
    {...otherProps}
    ref={forwardRef} />
);

export default GlobeWrapper;
