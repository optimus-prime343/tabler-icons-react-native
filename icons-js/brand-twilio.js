import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandTwilio({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twilio" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" /><Circle cx={9} cy={9} r={1} /><Circle cx={15} cy={9} r={1} /><Circle cx={15} cy={15} r={1} /><Circle cx={9} cy={15} r={1} /></Svg>;
}
export default IconBrandTwilio;