import {ColorValue} from 'react-native';
import {SvgXml} from 'react-native-svg';

interface IIconProps {
  icon: string;
  stroke: ColorValue;
  width?: number;
  height?: number;
  opacity?: number;
}

const Icon = ({
  icon,
  stroke,
  width = 32,
  height = 32,
  opacity = 1,
}: IIconProps) => {
  return (
    <SvgXml
      xml={icon}
      stroke={stroke}
      width={width}
      height={height}
      opacity={opacity}
    />
  );
};

export default Icon;
