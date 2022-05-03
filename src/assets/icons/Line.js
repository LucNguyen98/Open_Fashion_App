import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={125}
      height={10}
      viewBox="0 0 125 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M62.578 9.784l4.55-4.55h57.851v-.207H67.127L62.577.53 58.08 5.027H.02v.207h58.06l4.498 4.55zm0-8.945l4.342 4.292-4.342 4.342-4.343-4.342L62.578.839z"
        fill="#555"
      />
    </Svg>
  );
}

export default SvgComponent;
