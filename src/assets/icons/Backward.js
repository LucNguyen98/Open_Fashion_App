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
      <Path d="M9.612 19l-6.717-7 6.717-7" stroke={strokeColor} />
      <Path stroke={strokeColor} d="M3.2666 11.8911L20.9997 11.8911" />
    </Svg>
  );
}

export default SvgComponent;
