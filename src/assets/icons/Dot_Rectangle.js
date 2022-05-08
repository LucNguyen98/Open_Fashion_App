import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {color = '#DD8560'} = props;
  return (
    <Svg
      width={6}
      height={7}
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        transform="rotate(45 3.04 .478)"
        fill={color}
        d="M3.03918 0.477722H7.03918V4.477722H3.03918z"
      />
    </Svg>
  );
}

export default SvgComponent;
