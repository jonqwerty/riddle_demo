import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IIcLeaderboardProps {
  fill: string;
  opacity: number;
}

const IcLeaderboard: FC<IIcLeaderboardProps> = ({fill, opacity, ...props}) => {
  return (
    <Svg width={20} height={16} fill="none" {...props}>
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.286 4.429 4 14.714h12L17.714 4.43m-15.428 0L7 8.286l3-4.715m-7.714.858a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572Zm15.428 0L13 8.286 10 3.57m7.714.858a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572ZM10 3.57A1.286 1.286 0 1 0 10 1a1.286 1.286 0 0 0 0 2.571Z"
        opacity={opacity}
      />
    </Svg>
  );
};

export default IcLeaderboard;
