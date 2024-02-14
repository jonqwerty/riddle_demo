import {StyleSheet, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {Shadow} from 'react-native-shadow-2';
import LinearGradient from 'react-native-linear-gradient';

import {Colors, FontFamily} from '../common/style';
import {MAIN_HORIZONTAL_PADDING, SCREEN_WIDTH} from '../common/constants';

const Input: FC = () => {
  return (
    <Shadow
      distance={25}
      startColor={Colors.shadow_100}
      offset={[38, 3]}
      style={styles.inputWrapper}>
      <LinearGradient
        colors={[Colors.card_bg_100, Colors.card_bg_200]}
        style={styles.container}
        useAngle={true}
        angle={90}
        angleCenter={{x: 0.6, y: 0.5}}>
        <TextInput placeholder="Your answer" style={styles.input} />
      </LinearGradient>
    </Shadow>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    height: 72,
    width: SCREEN_WIDTH - 2 * MAIN_HORIZONTAL_PADDING,
    borderRadius: 26,
    backgroundColor: Colors.white,
    marginHorizontal: MAIN_HORIZONTAL_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    height: 68,
    width: SCREEN_WIDTH - 2 * MAIN_HORIZONTAL_PADDING - 2 - 2,
    borderRadius: 26,
  },

  input: {
    marginTop: 10,
    paddingLeft: 26,
    fontFamily: FontFamily.poppins_regular,
    color: Colors.font_100,
    fontSize: 14,
  },
});
