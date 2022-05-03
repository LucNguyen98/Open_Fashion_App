import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.496 23.28l.816-16.56h16.347l.816 16.56H3.495z"
        stroke="#14142B"
      />
      <Path
        d="M8.16 10.15V5.55a4.325 4.325 0 018.65 0v4.598"
        stroke="#14142B"
      />
    </Svg>
  );
}

export default SvgComponent;
