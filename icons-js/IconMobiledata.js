import Svg, { Path } from 'react-native-svg';
                    
function IconMobiledata({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mobiledata" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 12v-8" /><Path d="M8 20v-8" /><Path d="M13 7l3 -3l3 3" /><Path d="M5 17l3 3l3 -3" /></Svg>;

}
export default IconMobiledata;
                    