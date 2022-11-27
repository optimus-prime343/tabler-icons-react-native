import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowRotaryLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" /><Path d="M16 10v10" /><Path d="M13 7h-10" /><Path d="M7 11l-4 -4l4 -4" /></Svg>;
}
export default IconArrowRotaryLeft;