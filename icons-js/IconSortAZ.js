import Svg, { Path } from 'react-native-svg';
                    
function IconSortAZ({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sort-a-z" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 8h4l-4 8h4" /><Path d="M4 16v-6a2 2 0 1 1 4 0v6" /><Path d="M4 13h4" /><Path d="M11 12h2" /></Svg>;

}
export default IconSortAZ;
                    