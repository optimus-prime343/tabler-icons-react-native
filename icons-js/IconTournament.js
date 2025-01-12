import Svg, { Path } from 'react-native-svg';
                    
function IconTournament({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tournament" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M4 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M4 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-3" /><Path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2" /><Path d="M14 10h4" /></Svg>;

}
export default IconTournament;
                    