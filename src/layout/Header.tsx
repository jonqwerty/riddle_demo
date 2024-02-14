import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Colors} from '../common/style';
import StarBox from '../components/StarBox';
import NotificationItem from '../components/NotificationItem';
import IcBell from '../icons/IcBell';
import IcLamp from '../icons/IcLamp';
import {MAIN_HORIZONTAL_PADDING, SCREEN_WIDTH} from '../common/constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <StarBox />
      <View style={styles.notifications}>
        <NotificationItem
          icon={<IcBell fill={Colors.grey_200} />}
          text={'2'}
          color_100={Colors.pink_100}
          color_200={Colors.pink_200}
        />
        <NotificationItem
          icon={<IcLamp fill={Colors.grey_200} />}
          text={'5'}
          color_100={Colors.green_100}
          color_200={Colors.green_200}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH - 2 * MAIN_HORIZONTAL_PADDING,
    alignSelf: 'center',
  },
  notifications: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
});
