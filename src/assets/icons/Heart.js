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
      <Path
        d="M2.772 3.772a6.05 6.05 0 000 8.557l9.165 9.165.063-.063.063.063 9.165-9.165a6.05 6.05 0 10-8.557-8.557l-.317.318a.5.5 0 01-.707 0l-.318-.318a6.05 6.05 0 00-8.557 0z"
        stroke={strokeColor}
      />
    </Svg>
  );
}

export default SvgComponent;
