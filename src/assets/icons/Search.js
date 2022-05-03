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
        d="M11 20a9 9 0 100-18 9 9 0 000 18zM22 22l-3.218-3.218"
        stroke="#14142B"
      />
    </Svg>
  );
}

export default SvgComponent;
