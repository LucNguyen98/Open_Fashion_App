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
      <Path d="M17 6l-5.5-5L6 6" stroke="#14142B" />
      <Path
        transform="matrix(0 1 1 0 12 1)"
        stroke="#14142B"
        d="M0 -0.5L13 -0.5"
      />
      <Path d="M3 12v10h17V12" stroke="#14142B" />
    </Svg>
  )
}

export default SvgComponent

