import Svg, { Path } from 'react-native-svg';
                    
function IconBrandMedium({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-medium" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><Path d="M8 9h1l3 3l3 -3h1" /><Path d="M8 15l2 0" /><Path d="M14 15l2 0" /><Path d="M9 9l0 6" /><Path d="M15 9l0 6" /></Svg>;

}
export default IconBrandMedium;
                    