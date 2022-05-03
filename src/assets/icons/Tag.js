import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

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
        d="M12.535 1.222L24.284 12.97 12.97 24.284 1.221 12.535l.436-10.878 10.878-.435z"
        stroke="#14142B"
      />
      <Circle cx={8.14062} cy={7.55664} r={1} stroke="#14142B" />
    </Svg>
  );
}

export default SvgComponent;
