import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyYen({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-yen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 19v-7l-5 -7m10 0l-5 7" /><Path d="M8 17l8 0" /><Path d="M8 13l8 0" /></Svg>;

}
export default IconCurrencyYen;
                    