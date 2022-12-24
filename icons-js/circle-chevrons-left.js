import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCircleChevronsLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-chevrons-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 15l-3 -3l3 -3" /><Path d="M11 15l-3 -3l3 -3" /><Path d="M21 12a9 9 0 1 0 -.004 .265l.004 -.265z" /></Svg>;
}
export default IconCircleChevronsLeft;