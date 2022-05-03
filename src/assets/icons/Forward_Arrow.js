import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {strokeColor = '#FCFCFC'} = props;
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M14.283 5L21 12l-6.717 7" stroke={strokeColor} />
      <Path stroke={strokeColor} d="M20.6279 12.1089L2.89487 12.1089" />
    </Svg>
  );
}

export default SvgComponent;
