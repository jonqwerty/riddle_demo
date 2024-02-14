import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const MAIN_HORIZONTAL_PADDING = 40;

export const HALF_SCREEN_WIDTH =
  (SCREEN_WIDTH - MAIN_HORIZONTAL_PADDING - MAIN_HORIZONTAL_PADDING) / 2;
