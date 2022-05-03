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
      <Path stroke="#000" d="M4.38629 4.48975H19.38629V19.48975H4.38629z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.355 16.397L2.248 7.38l.445-.895L20.801 15.5l-.446.896z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.845 14.751a3.997 3.997 0 01-6.807-3.39l-.932-.463a4.997 4.997 0 008.67 4.317l-.931-.464zm-6.53-4.369a3.998 3.998 0 117.145 3.558l.897.447a4.997 4.997 0 10-8.938-4.451l.896.446z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent

