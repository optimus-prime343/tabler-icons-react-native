import Svg, { Path } from 'react-native-svg';
                    
function IconMenorah({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menorah" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 4v16" /><Path d="M8 4v2a4 4 0 1 0 8 0v-2" /><Path d="M4 4v2a8 8 0 1 0 16 0v-2" /><Path d="M10 20h4" /></Svg>;

}
export default IconMenorah;
                    