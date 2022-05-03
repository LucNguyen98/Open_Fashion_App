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
      <Path stroke="#14142B" d="M4.50024 4.5H10.50024V10.5H4.50024z" />
      <Path stroke="#14142B" d="M4.50024 13.5H10.50024V19.5H4.50024z" />
      <Path stroke="#14142B" d="M13.5002 4.5H19.5002V10.5H13.5002z" />
      <Path stroke="#14142B" d="M13.5002 13.5H19.5002V19.5H13.5002z" />
    </Svg>
  );
}

export default SvgComponent;
