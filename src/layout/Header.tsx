import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Colors} from '../common/style';
import StarBox from '../components/StarBox';
import NotificationItem from '../components/NotificationItem';
import {MAIN_HORIZONTAL_PADDING, SCREEN_WIDTH} from '../common/constants';
import Icon from '../components/Icon';
import {bellIcon, lampIcon} from '../common/icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <StarBox />
      <View style={styles.notifications}>
        <NotificationItem
          icon={
            <Icon
              icon={bellIcon}
              stroke={Colors.grey_200}
              width={16}
              height={18}
            />
          }
          text={'2'}
          color_100={Colors.pink_100}
          color_200={Colors.pink_200}
        />
        <NotificationItem
          icon={
            <Icon
              icon={lampIcon}
              stroke={Colors.grey_200}
              width={18}
              height={20}
            />
          }
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
