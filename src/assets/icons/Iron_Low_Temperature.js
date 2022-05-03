import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.665 6.059h7.29c1.49 0 4.642.882 5.328 4.41m0 0c.686 3.528.694 6.574.613 7.656H3.01c.122-2.511 1.678-7.534 6.921-7.534 5.244 0 9.086-.081 10.352-.122z"
        stroke="#000"
      />
      <Circle cx={12.7491} cy={14.2663} r={0.735026} fill="#000" />
    </Svg>
  )
}

export default SvgComponent

