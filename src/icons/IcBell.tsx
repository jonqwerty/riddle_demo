import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IIcBellProps {
  fill: string;
}

const IcBell: FC<IIcBellProps> = ({fill, ...props}) => {
  return (
    <Svg width={16} height={18} fill="none" {...props}>
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1 7.588 8 1l7 6.588V17H1V7.588Z"
      />
    </Svg>
  );
};

export default IcBell;
