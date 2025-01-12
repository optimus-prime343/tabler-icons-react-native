import Svg, { Path } from 'react-native-svg';
                    
function IconChessQueen({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chess-queen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 16l2 -11l-4 4l-2 -5l-2 5l-4 -4l2 11" /><Path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" /><Path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M18 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></Svg>;

}
export default IconChessQueen;
                    