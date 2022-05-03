import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.5 3.984c-3.349 0-7.695.839-7.695.839l-.011.012A3.192 3.192 0 002.1 7.984V17.586a3.2 3.2 0 002.702 3.154l.003.005s4.346.84 7.695.84 7.695-.84 7.695-.84l.002-.002a3.2 3.2 0 002.703-3.157V7.983a3.2 3.2 0 00-2.702-3.156l-.003-.005s-4.346-.84-7.695-.84zm-2.4 5.119l6.4 3.68-6.4 3.682V9.103z"
        fill="#333"
      />
    </Svg>
  );
}

export default SvgComponent;
