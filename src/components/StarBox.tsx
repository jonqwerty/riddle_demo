import {StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Colors, FontFamily} from '../common/style';
import Icon from './Icon';
import {starIcon} from '../common/icons';

const StarBox: FC = () => {
  return (
    <LinearGradient
      colors={[Colors.orange_200, Colors.orange_100]}
      style={styles.starContainer}
      useAngle={true}
      angle={145}
      angleCenter={{x: 0.3, y: 0.5}}>
      <Icon icon={starIcon} stroke={Colors.white} width={18} height={18} />
      <Text style={styles.text}>954</Text>
    </LinearGradient>
  );
};

export default StarBox;

const styles = StyleSheet.create({
  starContainer: {
    height: 40,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 14,
  },

  text: {
    marginTop: 3,
    fontFamily: FontFamily.poppins_semibold,
    color: Colors.white,
    lineHeight: 13,
    fontSize: 11,
    marginLeft: 8,
  },
});
