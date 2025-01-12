import Svg, { Path } from 'react-native-svg';
                    
function IconRecordMailOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-record-mail-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M18.569 14.557a3 3 0 1 0 -4.113 -4.149" /><Path d="M7 15h8" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconRecordMailOff;
                    