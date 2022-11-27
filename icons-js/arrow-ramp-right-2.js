import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowRampRight2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-ramp-right-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 3v8.707" /><Path d="M16 14l4 -4l-4 -4" /><Path d="M6 21c0 -6.075 4.925 -11 11 -11h3" /></Svg>;
}
export default IconArrowRampRight2;