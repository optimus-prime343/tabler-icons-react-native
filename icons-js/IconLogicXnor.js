import Svg, { Path } from 'react-native-svg';
                    
function IconLogicXnor({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logic-xnor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-2" /><Path d="M2 9h4" /><Path d="M2 15h4" /><Path d="M5 19c1.778 -4.667 1.778 -9.333 0 -14" /><Path d="M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" /><Path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></Svg>;

}
export default IconLogicXnor;
                    