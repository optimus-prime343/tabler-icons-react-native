import Svg, { Path } from 'react-native-svg';
                    
function IconSquareToggleHorizontal({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-toggle-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-20" /><Path d="M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" /><Path d="M18 20a2 2 0 0 0 2 -2" /><Path d="M4 18a2 2 0 0 0 2 2" /><Path d="M14 20l-4 0" /></Svg>;

}
export default IconSquareToggleHorizontal;
                    