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
        d="M8.498 3.184A5.607 5.607 0 002.9 8.785v8a5.607 5.607 0 005.602 5.599h8a5.607 5.607 0 005.598-5.602v-8a5.607 5.607 0 00-5.602-5.598h-8zm9.602 3.2a.8.8 0 110 1.6.8.8 0 010-1.6zm-5.6 1.6c2.647 0 4.8 2.152 4.8 4.8 0 2.647-2.153 4.8-4.8 4.8a4.805 4.805 0 01-4.8-4.8c0-2.648 2.153-4.8 4.8-4.8zm0 1.6a3.2 3.2 0 100 6.399 3.2 3.2 0 000-6.4z"
        fill="#333"
      />
    </Svg>
  );
}

export default SvgComponent;
