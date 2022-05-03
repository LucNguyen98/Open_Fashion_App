import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.756 9.381a9.5 9.5 0 0118.06-.63M21.64 15.693a9.5 9.5 0 01-17.362.322"
        stroke="#14142B"
        strokeLinejoin="round"
      />
      <Path
        d="M8.601 15.024l-4.454.292-1.654 4.237M17.075 9.36L21.7 9.35l1.58-4.211"
        stroke="#14142B"
      />
    </Svg>
  );
}

export default SvgComponent;
