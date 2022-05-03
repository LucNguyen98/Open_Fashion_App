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
      <Path
        d="M3.045 18.026h17.91M20.802 17.533v3.86M3.305 17.533v3.86"
        stroke="#14142B"
      />
      <Path stroke="#14142A" d="M3.25 3.45508H20.75V14.20088H3.25z" />
    </Svg>
  )
}

export default SvgComponent

