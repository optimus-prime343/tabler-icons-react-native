import Svg, { Path } from 'react-native-svg';
                    
function IconCraneOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-crane-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 21h6" /><Path d="M9 21v-12" /><Path d="M9 5v-2l-1 1" /><Path d="M6 6l-3 3h6" /><Path d="M13 9h8" /><Path d="M9 3l10 6" /><Path d="M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconCraneOff;
                    