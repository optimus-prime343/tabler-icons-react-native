import Svg, { Path } from 'react-native-svg';
                    
function IconHomeShield({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-shield" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h1.341" /><Path d="M19.682 10.682l-7.682 -7.682l-9 9h2v7a2 2 0 0 0 2 2h5" /><Path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" /></Svg>;

}
export default IconHomeShield;
                    