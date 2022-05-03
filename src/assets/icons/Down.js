import * as React from "react"
import Svg, { Path } from "react-native-svg"

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
      <Path d="M19.445 8.481l-6.963 6.964L5.518 8.48" stroke="#14142B" />
    </Svg>
  )
}

export default SvgComponent
