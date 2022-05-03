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
      <Path d="M12 3v18M3 12h18" stroke={strokeColor} />
    </Svg>
  );
}

export default SvgComponent;
