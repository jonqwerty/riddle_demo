import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Shadow} from 'react-native-shadow-2';

import {Colors, FontFamily} from '../common/style';
import {MAIN_HORIZONTAL_PADDING, SCREEN_WIDTH} from '../common/constants';

interface IButtonProps {
  name: string;
}

const Button: FC<IButtonProps> = ({name}) => {
  return (
    <TouchableOpacity>
      <Shadow
        distance={25}
        startColor={Colors.shadow_100}
        offset={[38, 3]}
        style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </Shadow>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 72,
    borderRadius: 26,
    backgroundColor: Colors.green_200,
    marginHorizontal: MAIN_HORIZONTAL_PADDING,
    width: SCREEN_WIDTH - 2 * MAIN_HORIZONTAL_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: FontFamily.poppins_bold,
    color: Colors.white,
    fontSize: 16,
  },
});
