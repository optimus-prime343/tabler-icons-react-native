import Svg, { Path } from 'react-native-svg';
                    
function IconTableOptions({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table-options" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><Path d="M4 10h16" /><Path d="M10 4v9" /><Path d="M5.281 18.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5.281 15v1.5" /><Path d="M5.281 20.5v1.5" /><Path d="M8.312 16.75l-1.299 .75" /><Path d="M3.55 19.5l-1.3 .75" /><Path d="M2.25 16.75l1.3 .75" /><Path d="M7.013 19.5l1.3 .75" /></Svg>;

}
export default IconTableOptions;
                    