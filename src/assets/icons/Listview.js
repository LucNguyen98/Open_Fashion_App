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
      <Path d="M12.205 17h7.772M12.228 7H20" stroke="#14142B" />
      <Path stroke="#14142A" d="M2.51318 3.45508H9.51318V10.45508H2.51318z" />
      <Path
        stroke="#14142A"
        d="M2.51318 13.5142H9.51318V20.514200000000002H2.51318z"
      />
    </Svg>
  )
}

export default SvgComponent
