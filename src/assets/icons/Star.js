import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.757.243l1.759 4.335 4.666.334-3.579 3.013 1.125 4.541-3.971-2.473-3.972 2.473L3.91 7.925.33 4.912l4.667-.334L6.757.243z"
        fill="#DD8560"
      />
    </Svg>
  );
}

export default SvgComponent;
