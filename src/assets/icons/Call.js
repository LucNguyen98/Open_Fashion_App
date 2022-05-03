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
        d="M15.972 1.828l6.364.707s.707 6.364-6.364 13.435C8.9 23.043 2.536 22.337 2.536 22.337l-.708-6.364 4.952-2.829 2.474 2.475s1.768-.354 3.889-2.475c2.121-2.122 2.475-3.89 2.475-3.89L13.143 6.78l2.829-4.95z"
        stroke="#14142B"
      />
    </Svg>
  )
}

export default SvgComponent

