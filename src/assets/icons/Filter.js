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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7.5v1h18v-1H3zm7 9h4v-1h-4v1zm8-4H6v-1h12v1z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
