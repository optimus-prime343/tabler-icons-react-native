import Svg, { Path } from 'react-native-svg';
                    
function IconBinaryTree({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-binary-tree" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M5.058 18.306l2.88 -4.606" /><Path d="M10.061 10.303l2.877 -4.604" /><Path d="M10.065 13.705l2.876 4.6" /><Path d="M15.063 5.7l2.881 4.61" /></Svg>;

}
export default IconBinaryTree;
                    